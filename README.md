# E-KANJOLI Smart Office

Smart Office Bappeda & Litbang Kabupaten Banggai Kepulauan.

## Architecture

- Next.js + TypeScript + Tailwind + shadcn/ui
- vinext on Cloudflare Workers
- Hono API
- Google Sheets for metadata/data
- Google Drive for file storage
- Google OAuth / Workspace

Business logic belongs in the application backend. Google Sheets and Drive are data/storage services, not the application core.
