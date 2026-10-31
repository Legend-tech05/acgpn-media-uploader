# ACGPN Media Uploader
Next.js app to upload approved JPG, PNG and WebP campaign images to Vercel Blob and return a public direct image URL for testing with Metricool. It does not publish or schedule posts.

## Deploy
1. Upload these files to the GitHub repository, preserving folder structure.
2. Import the repository into Vercel.
3. In Vercel Storage, create a Blob store and connect it to this project. Vercel should configure the required Blob environment variable.
4. Deploy. Select an image under 10 MB and click Upload image and get link.
5. Copy the direct image URL and test it with Metricool. Do not schedule until the owner approves platform, date, time, caption and design.

Uploaded URLs are public. Only upload material approved for public release. Never commit API keys or tokens to GitHub.