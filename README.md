# 321 DataPro Website

Next.js website for 321 DataPro.

## Stack

- Next.js 13
- React 18
- Bootstrap 5
- npm
- Node.js 22 for repository CI

## Local development

Use the Node version declared in `.nvmrc`.

```bash
npm ci
npm run dev
```

The development server is available at the URL reported by Next.js, normally `http://localhost:3000`.

## Validation

Before opening or approving a pull request:

```bash
npm ci
npm run build
```

GitHub Actions performs a clean install and production build for pull requests to `main`.

The repository currently does not enforce linting or automated tests. Those should be introduced as separate modernization work rather than mixed into routine website changes.

## Development workflow

1. Create an issue or record the approved request and acceptance criteria.
2. Create a branch from `main`.
3. Make only the approved change.
4. Open a pull request.
5. Confirm the GitHub CI build succeeds.
6. Review the Vercel preview.
7. Record the required approval.
8. Merge only after approval.
9. Verify the live production site.
10. Retain the previous production commit as the rollback point.

## Production

- Default branch: `main`
- Canonical Vercel project: `n321`
- Canonical release decisions should use the `n321` deployment.
- The repository may still report a second Vercel integration, `nu-321-4c9p`; it is non-canonical and should be removed or documented separately.

## Rollback

For a bad release:

1. identify the last known-good `main` commit;
2. revert the release commit or redeploy the previous known-good Vercel deployment;
3. verify production;
4. document the rollback in the related issue or pull request.

## Security

See [SECURITY.md](SECURITY.md).
