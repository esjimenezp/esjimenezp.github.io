# Eduardo Padilla — Portfolio Site 🌐

[#eduardo-padilla--portfolio-site](#eduardo-padilla--portfolio-site)

Source for [esjimenezp.github.io](https://esjimenezp.github.io) — a "deployment log" styled portfolio tracking generative AI work on Azure: Foundry projects, RAG pipelines, and agent orchestration, documented like production work.

---

## 📋 Overview

[#-overview](#-overview)

Static, no-build-step site built with plain HTML/CSS/JS and deployed via GitHub Pages. The homepage presents projects as "deployments" — status badges, a build log feel, and links out to the repos where the actual work lives.

---

## 🧱 Structure

[#-structure](#-structure)

```
esjimenezp.github.io/
├── index.html       # Page structure: hero, deployment log, stack, cert rollout
├── styles.css        # Blueprint / deployment-log visual theme
├── script.js          # Injects project cards, skills, and cert progress into the page
└── README.md
```

## 🖥️ Sections

[#️-sections](#️-sections)

- **Hero** — intro + animated SVG request/response pipeline diagram
- **Deployment Log** — project cards (rendered by `script.js`), each linking out to the repo where that work actually lives
- **Provisioned Resources** — tech stack and tools in active use
- **Background Process** — progress tracker across Azure AI systems knowledge areas

---

## 🔗 Related repos

[#-related-repos](#-related-repos)

The portfolio links out to where the real work lives — this repo only hosts the site itself:

- [`azure-ai-foundry-labs`](https://github.com/esjimenezp/azure-ai-foundry-labs/tree/main/01-explore-foundry) — portal-driven Azure AI Foundry exercises, one folder per exercise
- [`azure-ai-chat-app`](https://github.com/esjimenezp/azure-ai-chat-app) — generative AI chat client built on a Foundry model deployment

---

## 🛠️ Local development

[#️-local-development](#️-local-development)

No build step required:

```bash
git clone https://github.com/esjimenezp/esjimenezp.github.io.git
cd esjimenezp.github.io
open index.html   # or serve with any static file server
```

---

## 🚀 Deployment

[#-deployment](#-deployment)

Pushes to `main` deploy automatically via GitHub Pages — no CI/CD pipeline needed for a static site.

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Live within ~1 minute at [esjimenezp.github.io](https://esjimenezp.github.io).
