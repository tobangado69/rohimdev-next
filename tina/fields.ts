import { PasteImageField } from "./components/paste-image-field";

type PasteImageUiOptions = {
  description?: string;
};

/** Tina image field UI with clipboard paste → Cloudinary upload. */
export function pasteImageUi(options?: PasteImageUiOptions) {
  return {
    component: PasteImageField,
    ...(options?.description ? { description: options.description } : {}),
  };
}
