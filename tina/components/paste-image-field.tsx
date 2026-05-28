import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageField, wrapFieldsWithMeta } from "tinacms";

const MEDIA_UPLOAD_URL = "/api/cloudinary/media";

async function uploadImageFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("directory", "");
  formData.append("filename", file.name || `paste-${Date.now()}.png`);

  const response = await fetch(MEDIA_UPLOAD_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as { message?: string };
    throw new Error(body.message ?? `Upload failed (${response.status})`);
  }

  const result = (await response.json()) as { secure_url: string };
  return result.secure_url;
}

function fileFromClipboard(event: ClipboardEvent): File | null {
  const items = event.clipboardData?.items;
  if (!items) return null;

  for (const item of items) {
    if (item.type.startsWith("image/")) {
      return item.getAsFile();
    }
  }

  return null;
}

type PasteImageFieldProps = React.ComponentProps<typeof ImageField>;

function PasteImageFieldInner(props: PasteImageFieldProps) {
  const { field, input } = props;
  const isList = Boolean((field as { list?: boolean }).list);
  const zoneRef = useRef<HTMLDivElement>(null);
  const [uploading, setUploading] = useState(false);
  const [pasteError, setPasteError] = useState<string | null>(null);

  const applyImageUrl = useCallback(
    (url: string) => {
      if (isList) {
        const current = Array.isArray(input.value)
          ? input.value.filter((v): v is string => typeof v === "string" && v.length > 0)
          : input.value
            ? [String(input.value)]
            : [];
        input.onChange([...current, url]);
        return;
      }

      input.onChange(url);
    },
    [input, isList],
  );

  const handlePaste = useCallback(
    async (event: ClipboardEvent) => {
      const file = fileFromClipboard(event);
      if (!file) return;

      event.preventDefault();
      event.stopPropagation();

      setUploading(true);
      setPasteError(null);

      try {
        const url = await uploadImageFile(file);
        applyImageUrl(url);
      } catch (error) {
        setPasteError(error instanceof Error ? error.message : "Paste upload failed");
      } finally {
        setUploading(false);
      }
    },
    [applyImageUrl],
  );

  useEffect(() => {
    const node = zoneRef.current;
    if (!node) return;

    const onPaste = (event: Event) => {
      void handlePaste(event as ClipboardEvent);
    };

    node.addEventListener("paste", onPaste);
    return () => node.removeEventListener("paste", onPaste);
  }, [handlePaste]);

  return (
    <div className="space-y-3">
      <div
        ref={zoneRef}
        tabIndex={0}
        role="group"
        aria-label="Paste image from clipboard"
        className="rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        {uploading ? (
          <span>Uploading pasted image…</span>
        ) : (
          <span>
            Click here, then press <kbd className="rounded border px-1 text-xs">⌘V</kbd> or{" "}
            <kbd className="rounded border px-1 text-xs">Ctrl+V</kbd> to paste a screenshot or
            copied image.
            {isList ? " The image is appended to the list below." : ""}
          </span>
        )}
        {pasteError ? (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {pasteError}
          </p>
        ) : null}
      </div>
      <ImageField {...props} />
    </div>
  );
}

export const PasteImageField = wrapFieldsWithMeta(PasteImageFieldInner);
