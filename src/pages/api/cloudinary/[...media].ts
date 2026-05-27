import { createMediaHandler } from "next-tinacms-cloudinary/dist/handlers";

const cloudName =
  process.env.CLOUDINARY_CLOUD_NAME ??
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey =
  process.env.CLOUDINARY_API_KEY ?? process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createMediaHandler({
  cloud_name: cloudName ?? "",
  api_key: apiKey ?? "",
  api_secret: apiSecret ?? "",
  authorized: async () => {
    if (process.env.TINA_PUBLIC_IS_LOCAL === "true") {
      return true;
    }
    if (process.env.NODE_ENV === "development") {
      return true;
    }
    return false;
  },
});
