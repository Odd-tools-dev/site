# Documentation Odd Tools (Astro Starlight)

Source de la documentation, publié sur `https://odd-tools-dev.github.io/site/docs/`.

## Ajouter ou modifier une page
- Français : `src/content/docs/<section>/<page>.mdx` ; anglais : `src/content/docs/en/<section>/<page>.mdx` (même chemin).
- En tête de page : `title`, `description`, `sidebar.order`.
- Nouvelle page : l'ajouter aussi dans `sidebar` de `astro.config.mjs` (`{ slug: 'section/page' }`).
- Composants : `<Icon name="export" />` (icônes de `public/icons`), `<Ribbon />` (image du ruban FR/EN selon la langue), `<Steps>` et `<Aside>` de Starlight.
- Images : les mettre dans `public/img/` (une version `-fr` et `-en` si la capture contient du texte) et les appeler avec `<img src="/site/docs/img/..." />`.

## Tester en local
```
cd docs
npm install
npm run dev      # http://localhost:4321/site/docs/
```

## Publication
Chaque `git push` sur `main` lance `.github/workflows/pages.yml` : il construit la documentation et publie le site complet.
Réglage à faire une seule fois : GitHub → dépôt `site` → Settings → Pages → Source : **GitHub Actions**.
