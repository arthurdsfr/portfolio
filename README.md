# Portfolio professionnel

Base technique d'un portfolio professionnel construit avec Next.js, TypeScript,
Tailwind CSS et pense pour un deploiement sur Vercel.

## Prerequis

- Node.js `20.19.0` ou plus recent.
- npm.
- Un compte GitHub.
- Un compte Vercel.

## Installation locale

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Qualite

```bash
npm run lint
npm run typecheck
npm run check
npm run build
```

## Configuration

Copier `.env.example` vers `.env.local`, puis ajuster l'URL lorsque le domaine
final sera connu :

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

Sur Vercel, ajouter la meme variable dans les variables d'environnement du
projet pour que les metadonnees, `robots.txt` et `sitemap.xml` utilisent le bon
domaine.

## Publication sur GitHub

```bash
git remote add origin https://github.com/<utilisateur>/<repo>.git
git branch -M main
git push -u origin main
```

## Deploiement Vercel

1. Importer le repo GitHub dans Vercel.
2. Framework preset : Next.js.
3. Build command : `npm run build`.
4. Install command : `npm ci`.
5. Ajouter `NEXT_PUBLIC_SITE_URL`.
6. Dans Vercel, ajouter le domaine achete dans `Project Settings > Domains`.
7. Configurer les DNS chez le registrar selon les valeurs donnees par Vercel.
