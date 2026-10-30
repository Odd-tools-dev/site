import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  vite: { resolve: { alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) } } },
  site: 'https://odd-tools-dev.github.io',
  base: '/site/docs',
  integrations: [
    starlight({
      title: { fr: 'Odd Tools — Docs', en: 'Odd Tools — Docs' },
      description: 'Documentation des outils Odd Tools pour Revit.',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Français', lang: 'fr' },
        en: { label: 'English', lang: 'en' },
      },
      customCss: ['./src/styles/odd.css'],
      components: { Footer: './src/components/Footer.astro' },
      sidebar: [
        { label: 'Démarrer', translations: { en: 'Getting started' }, items: [
          { slug: 'demarrer/installation' },
          { slug: 'demarrer/ruban' },
          { slug: 'demarrer/options' },
        ]},
        { label: 'Gestion des familles', translations: { en: 'Family management' }, items: [
          { slug: 'familles/export' },
          { slug: 'familles/import' },
          { slug: 'familles/renommer' },
        ]},
        { label: 'Plans de ventes', translations: { en: 'Sales plans' }, items: [
          { slug: 'plans/generer' },
        ]},
        { label: 'Toposolid', items: [
          { slug: 'topo/surface-projetee' },
        ]},
      ],
    }),
  ],
});
