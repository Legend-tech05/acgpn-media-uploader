
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxSize = 10 * 1024 * 1024;

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No image file provided." }, { status: 400 });
    }

    if (!allowedTypes.has(file.type)) {
      return NextResponse.json({ error: "Only JPG, PNG and WebP images are supported." }, { status: 400 });
    }

    if (file.size > maxSize) {
      return NextResponse.json({ error: "The image must be 10 MB or smaller." }, { status: 400 });
    }

    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Image upload failed. Check that the Blob store is connected to this deployment." },
      { status: 500 }
    );
  }
}
