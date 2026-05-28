import { PasteImageField } from "./components/paste-image-field";

type PasteImageUiOptions = {
  description?: string;
};

type PasteImageUiResult = {
  // Tina schema types disagree with wrapFieldsWithMeta props; runtime is correct.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  description?: string;
};

/** Tina image field UI with clipboard paste → Cloudinary upload. */
export function pasteImageUi(options?: PasteImageUiOptions): PasteImageUiResult {
  return {
    component: PasteImageField,
    ...(options?.description ? { description: options.description } : {}),
  };
}
