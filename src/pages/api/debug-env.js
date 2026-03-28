export default function handler(req, res) {
  // Remove this file after debugging
  res.status(200).json({
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID
      ? `set (starts with: ${process.env.OAUTH_CLIENT_ID.slice(0, 4)}...)`
      : 'NOT SET',
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET
      ? `set (length: ${process.env.OAUTH_CLIENT_SECRET.length})`
      : 'NOT SET',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
  });
}
