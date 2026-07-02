# Azure AI Foundry Labs

Hands-on notes from the Microsoft Learn course *"Develop generative AI solutions in Azure"*
(`mslearn-ai-studio`), documented one exercise per folder as I work through Azure AI Foundry
in preparation for the **AI-103: Azure AI Apps and Agents Developer Associate** certification.

Portal-driven exercises (project setup, model deployment, evaluation) live here. Exercises
that produce a real client application get their own standalone repo — linked below.

## Labs

| # | Lab | Status | Notes |
|---|-----|--------|-------|
| 01 | [Explore AI Foundry](./01-explore-foundry) | In progress | Create a Foundry project, deploy `gpt-4.1`, test in the playground, explore the VS Code Foundry Toolkit |
| 02 | [Model Catalog & Evaluation](./02-model-catalog-evaluation) | Planned | Compare models in the catalog, run a synthetic evaluation |

## Related standalone repos

- [`azure-ai-chat-app`](https://github.com/esjimenezp/azure-ai-chat-app) — async chat client built on a Foundry model deployment

## Pushing this repo

```bash
cd path/to/azure-ai-foundry-labs
git init
git add .
git commit -m "Add exercise 01: explore AI Foundry"
git branch -M main
git remote add origin https://github.com/esjimenezp/azure-ai-foundry-labs.git
git push -u origin main
```

## Reference

- [AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103)
- [mslearn-ai-studio exercises](https://microsoftlearning.github.io/mslearn-ai-studio/)
