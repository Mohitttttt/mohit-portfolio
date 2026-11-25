import Link from "next/link";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  status: string;
  featured: boolean;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    category: "FLAGSHIP PROJECT · AI ENGINEERING",
    title: "Enterprise AI Knowledge Intelligence Platform",
    description:
      "An AI-powered document knowledge platform built with Python and FastAPI. It enables users to upload organisational documents, search their contents using hybrid retrieval, and ask natural-language questions through a conversation-aware Retrieval-Augmented Generation (RAG) pipeline.",
    technologies: [
      "Python",
      "FastAPI",
      "Sentence Transformers",
      "ChromaDB",
      "BM25",
      "Hybrid Search",
      "Reciprocal Rank Fusion",
      "RAG",
      "Ollama",
      "SQLite",
      "Docker",
      "Pytest",
      "GitHub Actions",
    ],
    highlights: [
      "PDF, DOCX and TXT document ingestion and processing",
      "Semantic search using sentence-transformer embeddings",
      "BM25 keyword retrieval and hybrid search with Reciprocal Rank Fusion",
      "Conversation-aware question answering using Ollama",
      "Retrieval evaluation using Precision@K, Recall@K, MRR and NDCG",
      "Docker-based deployment and automated CI with GitHub Actions",
    ],
    status: "Implemented",
    featured: true,
    githubUrl:
      "https://github.com/Mohitttttt/enterprise-ai-knowledge-platform",
  },
  {
    number: "02",
    category: "BACKEND ENGINEERING · DISTRIBUTED SYSTEMS",
    title: "Distributed E-Commerce Backend System",
    description:
      "A planned backend engineering project exploring how e-commerce applications manage customers, products, inventory and orders through reliable services and event-driven communication.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "JUnit",
    ],
    highlights: [
      "Authentication and order management",
      "Inventory and transaction handling",
      "Event-driven architecture",
      "Caching and integration testing",
    ],
    status: "Planned",
    featured: false,
  },
  {
    number: "03",
    category: "DATA ENGINEERING · ANALYTICS",
    title: "Real-Time Data Engineering Platform",
    description:
      "A planned end-to-end data engineering platform designed to ingest, process, validate and transform data from external sources into reliable analytical datasets.",
    technologies: [
      "Python",
      "Apache Kafka",
      "PostgreSQL",
      "Apache Airflow",
      "dbt",
      "Docker",
    ],
    highlights: [
      "Batch and streaming ingestion",
      "Data transformation pipelines",
      "Data quality validation",
      "Workflow orchestration",
    ],
    status: "Planned",
    featured: false,
  },
  {
    number: "04",
    category: "AI ENGINEERING · DEVELOPER TOOLS",
    title: "AI Developer Assistant",
    description:
      "A planned intelligent developer tool that analyses software repositories, understands code structure and helps developers explore, explain and review unfamiliar codebases.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tree-sitter",
      "LLMs",
    ],
    highlights: [
      "Repository indexing and analysis",
      "Semantic code search",
      "Context-aware code explanations",
      "AI-assisted code review",
    ],
    status: "Planned",
    featured: false,
  },
  {
    number: "05",
    category: "MACHINE LEARNING · MLOPS",
    title: "ML Prediction & Model Monitoring Platform",
    description:
      "A planned end-to-end machine learning application covering dataset preparation, model experimentation, prediction serving and monitoring. Customer churn prediction will serve as the initial use case.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "FastAPI",
      "MLflow",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Data preprocessing and feature engineering",
      "Model training and evaluation",
      "Prediction API",
      "Model and data drift monitoring",
    ],
    status: "Planned",
    featured: false,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isImplemented = project.status === "Implemented";

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.04] sm:p-8 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-widest text-blue-400">
          {project.number}
        </span>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            isImplemented
              ? "border-green-500/20 bg-green-500/10 text-green-400"
              : "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="mb-4 text-xs font-semibold tracking-widest text-blue-400">
        {project.category}
      </p>

      <h3
        className={`mb-4 font-bold leading-snug text-white transition group-hover:text-blue-400 ${
          project.featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>

      <p className="max-w-3xl leading-7 text-gray-400">
        {project.description}
      </p>

      <div
        className={`mt-7 grid gap-3 ${
          project.featured ? "sm:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {project.highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-start gap-3 text-sm text-gray-400"
          >
            <span className="mt-1 text-blue-400">↗</span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <div className="mb-4 h-px w-full bg-white/10" />

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Technology Stack
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300 transition hover:border-blue-500/40 hover:text-blue-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {project.featured && (
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <Link
              href="/projects/enterprise-ai-knowledge-platform"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:gap-3 hover:text-blue-300"
            >
              Explore Project <span>↗</span>
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-white"
              >
                View Source Code <span>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADER */}

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Engineering Portfolio
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Building systems.
            <span className="block text-blue-500">
              Solving real problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            A collection of engineering projects and planned initiatives
            focused on artificial intelligence, backend systems,
            distributed architectures, data engineering and machine learning.
          </p>
        </div>

        {/* PROJECT COLLECTION */}

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        {/* PORTFOLIO NOTE */}

        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center">
          <p className="text-sm leading-7 text-gray-500">
            Projects are presented according to their current development
            status. Source code and technical documentation are available
            for selected implementations.
          </p>
        </div>
      </div>
    </section>
  );
}