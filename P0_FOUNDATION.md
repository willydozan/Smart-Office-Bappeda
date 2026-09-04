# P0 Foundation

## Stack
- Next.js App Router compatible frontend
- vinext + Vite for Cloudflare Workers
- Hono API on Cloudflare Workers
- pnpm workspace
- TypeScript

## Boundaries
- Web: presentation and frontend behavior
- API: business logic and authorization boundary
- Google Sheets: metadata/data
- Google Drive: file storage
- Secrets: Cloudflare Worker environment

## Validation
- TypeScript strict mode
- CI workflow for web and API type checks
- Health endpoint: `/api/v1/health`
