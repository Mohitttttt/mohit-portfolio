import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Document Ingestion",
    description:
      "Upload PDF, DOCX and TXT documents. Extract their contents, process the text into chunks and prepare the resulting data for retrieval.",
  },
  {
    number: "02",
    title: "Semantic Retrieval",
    description:
      "Generate sentence-transformer embeddings and use ChromaDB to retrieve document chunks based on semantic similarity.",
  },
  {
    number: "03",
    title: "Keyword Search",
    description:
      "Use BM25 retrieval to identify relevant document passages through keyword-based matching.",
  },
  {
    number: "04",
    title: "Hybrid Search",
    description:
      "Combine semantic and keyword retrieval using Reciprocal Rank Fusion (RRF) to improve the relevance of retrieved information.",
  },
  {
    number: "05",
    title: "Conversational RAG",
    description:
      "Use retrieved document context with Ollama-powered language models to answer natural-language questions while maintaining conversation history.",
  },
  {
    number: "06",
    title: "Answer Validation",
    description:
      "Apply lexical grounding checks and prompt-leakage heuristics, with an extractive fallback when generated answers do not pass validation.",
  },
  {
    number: "07",
    title: "Conversation Management",
    description:
      "Persist conversations and messages in SQLite and support conversation-aware question answering.",
  },
  {
    number: "08",
    title: "Evaluation & Testing",
    description:
      "Evaluate retrieval quality using Precision@K, Recall@K, Mean Reciprocal Rank and Normalized Discounted Cumulative Gain.",
  },
];

const techStack = [
  {
    category: "Programming Language",
    technologies: ["Python"],
  },
  {
    category: "Backend & API",
    technologies: ["FastAPI", "REST APIs"],
  },
  {
    category: "Document Processing",
    technologies: ["PDF", "DOCX", "TXT"],
  },
  {
    category: "AI & Retrieval",
    technologies: [
      "Sentence Transformers",
      "ChromaDB",
      "BM25",
      "Hybrid Search",
      "Reciprocal Rank Fusion",
      "RAG",
    ],
  },
  {
    category: "Language Models",
    technologies: ["Ollama", "LLMs"],
  },
  {
    category: "Data Persistence",
    technologies: ["SQLite"],
  },
  {
    category: "Testing & Quality",
    technologies: ["Pytest", "Retrieval Evaluation"],
  },
  {
    category: "Infrastructure & CI",
    technologies: ["Docker", "GitHub Actions"],
  },
];

const architectureSteps = [
  {
    number: "01",
    title: "Document Upload",
    description:
      "Users upload PDF, DOCX or TXT files through the FastAPI backend.",
  },
  {
    number: "02",
    title: "Text Extraction & Chunking",
    description:
      "The document processing pipeline extracts text, divides it into manageable chunks and retains relevant metadata.",
  },
  {
    number: "03",
    title: "Embedding & Indexing",
    description:
      "Sentence Transformers generate embeddings, which are stored in ChromaDB for semantic retrieval.",
  },
  {
    number: "04",
    title: "Hybrid Retrieval",
    description:
      "Semantic retrieval and BM25 keyword search identify relevant chunks. Reciprocal Rank Fusion combines their rankings.",
  },
  {
    number: "05",
    title: "Context Construction",
    description:
      "Retrieved passages are filtered and assembled into context for the language model.",
  },
  {
    number: "06",
    title: "Answer Generation",
    description:
      "Ollama generates a response using the retrieved context and conversation history.",
  },
  {
    number: "07",
    title: "Validation & Response",
    description:
      "The response passes through validation heuristics, with an extractive fallback available when necessary.",
  },
];

const evaluationMetrics = [
  {
    name: "Precision@K",
    value: "0.2760",
    description: "Proportion of retrieved results that are relevant.",
  },
  {
    name: "Recall@K",
    value: "0.9667",
    description: "Proportion of relevant results successfully retrieved.",
  },
  {
    name: "MRR",
    value: "0.8773",
    description: "Mean Reciprocal Rank of the first relevant result.",
  },
  {
    name: "NDCG",
    value: "0.8828",
    description: "Ranking quality with relevance-based discounting.",
  },
  {
    name: "Duplicate Rate",
    value: "0.0000",
    description: "No duplicate results in the evaluated retrieval output.",
  },
  {
    name: "Mean Latency",
    value: "~42.2 ms",
    description:
      "Mean measured retrieval query latency. Initial model loading is excluded.",
  },
];

export default function EnterpriseAIProject() {
  return (
    <main className="min-h-screen bg-[#0B0D12] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">

        {/* NAVIGATION */}

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
        >
          ← Back to Projects
        </Link>

        {/* HERO */}

        <section className="mt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Implemented · Engineering Project
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Featured Project · 01
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Enterprise AI
            <span className="block text-blue-400">
              Knowledge Intelligence Platform
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            An AI-powered document knowledge platform that transforms
            organisational documents into searchable information. Built with
            FastAPI, semantic embeddings, hybrid retrieval and large language
            models, the system enables users to upload documents and ask
            natural-language questions through a conversational RAG pipeline.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "AI Engineering",
              "Backend Development",
              "Information Retrieval",
              "RAG Systems",
              "System Evaluation",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="https://github.com/Mohitttttt/enterprise-ai-knowledge-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              View GitHub Repository ↗
            </a>

            <a
              href="https://github.com/Mohitttttt/enterprise-ai-knowledge-platform#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-400 hover:text-blue-400"
            >
              Technical Documentation ↗
            </a>
          </div>
        </section>

        {/* OVERVIEW */}

        <section className="mt-24 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400">
              01 / Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              The Problem
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-400">
              Organisations store valuable information across documents,
              reports and technical files. Finding relevant information
              through conventional keyword searches can be difficult when
              users do not know the exact terminology used in those documents.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              This project addresses that challenge by combining semantic
              retrieval, keyword search and language-model-based question
              answering into a unified backend application.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              The goal is to make document knowledge easier to discover
              while keeping generated responses connected to retrieved
              document context.
            </p>
          </div>
        </section>

        {/* FEATURES */}

        <section className="mt-20 border-t border-white/10 pt-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            02 / Implemented Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Core system capabilities.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            The platform is implemented as a modular backend system covering
            document ingestion, information retrieval, conversational
            question answering, persistence and evaluation.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}

        <section className="mt-20 border-t border-white/10 pt-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            03 / System Architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            From documents to intelligent answers.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            The application follows a document ingestion and retrieval
            pipeline. Documents are processed and indexed before user queries
            pass through hybrid retrieval and context-aware answer generation.
          </p>

          <div className="mt-10 space-y-4">
            {architectureSteps.map((step, index) => (
              <article
                key={step.number}
                className="relative rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-400/5 text-sm font-semibold text-blue-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index !== architectureSteps.length - 1 && (
                  <div className="ml-5 mt-4 h-5 w-px bg-blue-400/30" />
                )}
              </article>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY */}

        <section className="mt-20 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400">
              04 / Technology
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Technology Stack
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-400">
              The backend is built around Python and FastAPI, with specialised
              components for document processing, semantic and keyword
              retrieval, language-model integration, persistence and
              deployment.
            </p>

            <div className="mt-8 space-y-6">
              {techStack.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 text-sm font-semibold text-gray-300">
                    {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVALUATION */}

        <section className="mt-20 border-t border-white/10 pt-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            05 / Retrieval Evaluation
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Measuring retrieval quality.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            A retrieval evaluation framework was developed to measure
            search quality across a synthetic benchmark containing 50
            questions. The evaluation covers relevance, ranking quality,
            duplicate retrieval and query latency.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {evaluationMetrics.map((metric) => (
              <article
                key={metric.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm font-medium text-gray-400">
                  {metric.name}
                </p>

                <p className="mt-4 text-3xl font-bold tracking-tight text-blue-400">
                  {metric.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {metric.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.04] p-6">
            <h3 className="font-semibold text-yellow-300">
              Evaluation context
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              These figures represent retrieval evaluation results on a
              synthetic benchmark, not production enterprise traffic or
              independently verified real-world performance. The reported
              mean latency excludes the initial model-loading delay.
              Retrieval metrics measure search performance and should not
              be interpreted as proof of factual correctness of generated
              answers.
            </p>
          </div>
        </section>

        {/* ENGINEERING & DEPLOYMENT */}

        <section className="mt-20 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400">
              06 / Engineering Practices
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Beyond the AI pipeline.
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                API Design
              </h3>

              <p className="mt-2 leading-7 text-gray-400">
                Structured FastAPI endpoints support document management,
                search, question answering and conversation management.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Persistent Storage
              </h3>

              <p className="mt-2 leading-7 text-gray-400">
                ChromaDB stores vector representations for retrieval,
                while SQLite stores conversation data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Testing & Continuous Integration
              </h3>

              <p className="mt-2 leading-7 text-gray-400">
                Pytest supports automated testing, and GitHub Actions
                provides continuous integration for the repository.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Containerisation
              </h3>

              <p className="mt-2 leading-7 text-gray-400">
                Docker packages the application, with persistent data
                volumes used to retain application data.
              </p>
            </div>
          </div>
        </section>

        {/* SCOPE AND LIMITATIONS */}

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            07 / Current Scope
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Engineering honestly.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            The current implementation focuses on the core document
            intelligence and retrieval backend. Some enterprise deployment
            capabilities remain outside the current project scope.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-green-500/20 bg-green-500/[0.04] p-6">
              <h3 className="font-semibold text-green-400">
                Implemented
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-400">
                <li>• Document ingestion and processing</li>
                <li>• Semantic and keyword retrieval</li>
                <li>• Hybrid search and RAG</li>
                <li>• Conversation persistence</li>
                <li>• Retrieval evaluation</li>
                <li>• Docker and automated CI</li>
              </ul>
            </div>

            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/[0.04] p-6">
              <h3 className="font-semibold text-yellow-400">
                Outside Current Scope
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-400">
                <li>• User authentication and access control</li>
                <li>• Multi-tenant enterprise permissions</li>
                <li>• Public production deployment</li>
                <li>• Production observability infrastructure</li>
                <li>• Independent factual verification of generated answers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SOURCE CODE */}

        <section className="mt-20 rounded-3xl border border-blue-400/20 bg-blue-400/[0.05] p-8 md:p-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            08 / Explore the Implementation
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Interested in the engineering?
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Explore the source code, backend implementation, evaluation
            framework, automated tests and technical documentation in
            the GitHub repository.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Mohitttttt/enterprise-ai-knowledge-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Explore GitHub Repository ↗
            </a>

            <Link
              href="/#projects"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-400 hover:text-blue-400"
            >
              Back to Portfolio
            </Link>
          </div>
        </section>

        {/* FOOTER NAVIGATION */}

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="text-sm text-blue-400 transition hover:text-blue-300"
          >
            ← Explore more projects
          </Link>
        </div>

      </div>
    </main>
  );
}