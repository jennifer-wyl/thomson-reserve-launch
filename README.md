# Thomson Reserve — Launch Site

Vite + React + TypeScript lead-capture site, built the same way as the Lucerne
Grand site.

## Editing content

Everything you'd normally need to change lives in **`src/content.ts`** (copy)
and **`src/config.ts`** (the Google Form URL and the contact link). You
shouldn't need to touch any component files for routine updates like pricing
release, TOP date, or new FAQ items.

## Local dev

```
npm install
npm run dev
```

## Production build

```
npm run build
```

Outputs to `dist/`.

## Deploy (per the standard playbook)

1. Copy this whole folder into `G:\My Drive\Property AI System\thomson-reserve\`
   — and keep it in sync with every future update, not just the first one.
2. In that folder: `git init`, `git add .`, `git commit -m "Initial commit"`.
3. Create the GitHub repo manually at github.com/new (name:
   `thomson-reserve-launch`, account `jennifer-wyl` — no `gh` CLI needed), then:
   `git remote add origin <url>`, `git branch -M main`, `git push -u origin main`.
4. Vercel → Add New → Project → import the GitHub repo. Auto-detects Vite, no
   config needed. Every future `git push` auto-redeploys.
5. After deploying, open the live URL yourself and check it — don't assume the
   push worked cleanly. If Vercel serves stale content after a build, redeploy
   with `vercel deploy --prod --force`.

See `docs/thomson-reserve-research.md` for sourcing notes and open flags
(CEA number typo in one of your own docs, image rights on the ebook renderings,
which Google Form/WhatsApp number to use).
