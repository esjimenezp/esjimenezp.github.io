/* ============================================================
   TO ADD A NEW PROJECT: add an object to the `projects` array
   below. Nothing else needs to change — the log renders itself.
   status: "live" | "progress" | "planned"
   ============================================================ */

const projects = [
  {
    id: "prod-001",
    status: "live",
    title: "azure-ai-chat-app",
    description:
      "An async Azure AI Foundry chat application built with the OpenAI SDK — covers model deployment, streaming responses, and environment-based configuration.",
    stack: ["Azure AI Foundry", "Python", "OpenAI SDK", "Async I/O"],
    links: [
      { label: "Repository →", href: "https://github.com/esjimenezp/azure-ai-chat-app" }
    ]
  },
  {
    id: "prod-002",
    status: "live",
    title: "Foundry Environment Exploration",
    description:
      "Provisioning a Microsoft Foundry resource and project from scratch, deploying gpt-4.1, testing it in the model playground, and exploring the Foundry Toolkit extension for VS Code.",
    stack: ["Microsoft Foundry", "gpt-4.1", "VS Code Foundry Toolkit"],
    links: [
      { label: "Repository →", href: "https://github.com/esjimenezp/azure-ai-foundry-labs/tree/main/01-explore-foundry" }
    ]
  },
  {
    id: "plan-002b",
    status: "planned",
    title: "Model Catalog & Evaluation",
    description:
      "Comparing gpt-4.1 and gpt-4.1-mini side-by-side and running a synthetic-data evaluation against a deployment.",
    stack: ["Foundry model catalog", "Evaluations", "Benchmarking"],
    links: [
      { label: "Not available yet →", href: "https://github.com/esjimenezp/azure-ai-foundry-labs/tree/main/02-model-catalog-evaluation" }
    ]
  },
  {
    id: "plan-003",
    status: "planned",
    title: "RAG-Grounded Agent with Foundry Agent Service",
    description:
      "Next up: a retrieval-augmented agent using Foundry's Agent Service and Azure AI Search, wired up with managed identity and keyless auth.",
    stack: ["Foundry Agent Service", "Azure AI Search", "RBAC"],
    links: []
  }
];

const stackGroups = [
  {
    label: "Foundry & Models",
    items: ["Azure AI Foundry", "Model deployment & scaling", "Model evaluation", "Prompt engineering"]
  },
  {
    label: "Agents & Retrieval",
    items: ["RAG pipelines", "Multi-agent orchestration", "Agent memory & tools", "Data ingestion & indexing"]
  },
  {
    label: "Security & Ops",
    items: ["Managed identity", "RBAC", "Private networking", "Audit tracing & governance"]
  },
  {
    label: "Platform",
    items: ["Python", "CI/CD", "Cost & quota management", "Observability"]
  }
];

const certDomains = [
  { label: "Azure infrastructure design & deployment", done: true },
  { label: "CI/CD with Foundry", done: true },
  { label: "Security, RBAC & keyless credentials", done: true },
  { label: "RAG implementation & retrieval methods", done: true },
  { label: "Multi-agent orchestration", done: true },
  { label: "Model evaluation & monitoring", done: true },
  { label: "Multimodal: image, video, speech, Content Understanding", done: false }
];

/* ---------- Render: deployment log ---------- */
const logList = document.getElementById("log-list");
projects.forEach((p) => {
  const entry = document.createElement("article");
  entry.className = "log-entry";

  const statusLabel = { live: "Live", progress: "In progress", planned: "Planned" }[p.status];

  entry.innerHTML = `
    <div class="log-entry__meta">
      <span class="status-badge status-badge--${p.status}">${statusLabel}</span>
      <span class="log-entry__id">${p.id}</span>
    </div>
    <div class="log-entry__body">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tag-row">${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
      <div class="log-entry__links">
        ${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
      </div>
    </div>
  `;
  logList.appendChild(entry);
});

/* ---------- Render: stack groups ---------- */
const stackContainer = document.getElementById("stack-groups");
stackGroups.forEach((g) => {
  const el = document.createElement("div");
  el.className = "stack-group";
  el.innerHTML = `
    <h4>${g.label}</h4>
    <div class="tag-row">${g.items.map((i) => `<span class="tag">${i}</span>`).join("")}</div>
  `;
  stackContainer.appendChild(el);
});

/* ---------- Render: certification rollout ---------- */
const certList = document.getElementById("cert-list");
const doneCount = certDomains.filter((d) => d.done).length;
const percent = Math.round((doneCount / certDomains.length) * 100);

document.getElementById("cert-fill").style.width = percent + "%";
document.getElementById("cert-percent").textContent = percent;

certDomains.forEach((d) => {
  const li = document.createElement("li");
  li.className = d.done ? "done" : "pending";
  li.innerHTML = `<span class="dot">${d.done ? "●" : "○"}</span><span>${d.label}</span>`;
  certList.appendChild(li);
});

/* ---------- Build date ---------- */
document.getElementById("build-date").textContent = new Date().toISOString().slice(0, 10);

/* ---------- Scroll reveal for log entries ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) {
  document.querySelectorAll(".log-entry").forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".log-entry").forEach((el) => io.observe(el));
}
