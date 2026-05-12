# Portfolio

Personal portfolio site built with [Astro](https://astro.build). Bilingual content (Portuguese and English), project pages in Markdown, and deployment on GitHub Pages.

**Live site:** [https://felipecampelo.github.io/portfolio/](https://felipecampelo.github.io/portfolio/)

## Requirements

- [Node.js](https://nodejs.org/) **22.12** or later

## Local development

```sh
npm install
npm run dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321) (including the configured `base` prefix so it matches GitHub Pages).

### Environment variables (optional)

For Google Analytics, copy the example file and set your measurement ID:

```sh
cp .env.example .env
```

Edit `.env` and set `PUBLIC_GA_MEASUREMENT_ID` to your property value (format `G-XXXXXXXXXX`).

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the static site to `dist/`     |
| `npm run preview` | Preview the production build locally |

## Content structure

- **Projects:** Markdown in `src/content/work/pt/` and `src/content/work/en/`, with matching filenames per locale (for example `projeto-analytics-dbt.md`).
- **Schema:** Fields such as `title`, `description`, `publishDate`, `tags`, `img`, `featured`, and others are defined in `src/content.config.ts`.

The site root `/` redirects to the default locale in `src/i18n/config.ts` (currently English).

## Deploy (GitHub Pages)

`astro.config.mjs` sets `site` and `base` for the `felipecampelo.github.io/portfolio/` repository. If you rename the repository or change the domain, update those values before publishing.

## License

Personal use of this repository; no license file is included.
