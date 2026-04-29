import { useState } from "react";

// ---------------- Types ----------------

type Section = {
  title: string;
  must: string[];
  advanced?: string[];
};

// ---------------- Data ----------------

const backendData: Section[] = [
  {
    title: "🟢 Node.js Core Internals",
    must: [
      "Event Loop (VERY IMPORTANT)",
      "Call Stack",
      "Microtasks vs Macrotasks",
      "Async I/O",
      "Thread Pool",
      "Worker Threads",
      "Streams",
      "Buffers",
      "Clustering",
      "Child Processes",
      "Memory Management",
      "Garbage Collection",
      "Node.js Memory Leaks",
      "Event Loop Phases Deep Dive",
      "Backpressure Handling",
      "Stream Piping",
      "Cluster Mode in Production",
      "Graceful Shutdown",
    ],
  },
  {
    title: "🟡 Express.js Advanced",
    must: [
      "Middleware Architecture",
      "Error Handling",
      "Request Lifecycle",
      "Validation Middleware",
      "Rate Limiting",
      "CORS",
      "Logging Middleware",
      "Security Middleware",
    ],
    advanced: ["Custom Middleware Framework", "Request Queuing"],
  },
  {
    title: "🔵 API Design (Critical)",
    must: [
      "REST Principles",
      "Idempotency",
      "Versioning APIs",
      "Pagination",
      "Filtering",
      "Sorting",
      "Rate Limiting",
      "Caching APIs",
      "Idempotency Keys",
      "API Rate Limiting Strategies",
      "Pagination Strategies (Cursor vs Offset)",
      "API Versioning Strategies",
      "OpenAPI / Swagger",
    ],
  },
  {
    title: "🔴 Authentication & Security",
    must: [
      "JWT",
      "OAuth2",
      "Session vs Token",
      "RBAC",
      "Password Hashing (bcrypt)",
      "Refresh Tokens",
      "CSRF",
      "XSS Protection",
      "SQL Injection Prevention",
      "Helmet.js",
      "Rate Limiting Attacks",
      "DDoS Protection Basics",
      "Secure Headers",
      "Secrets Management",
    ],
  },
  {
    title: "🟣 Databases — SQL",
    must: [
      "Indexing",
      "Query Optimization",
      "Joins (deep understanding)",
      "Transactions",
      "Isolation Levels",
      "Normalization",
      "Pagination",
      "Aggregation",
      "Database Index Types",
      "Composite Indexing",
      "Deadlocks",
      "Connection Pooling",
      "Read Replicas",
      "Write Scaling",
    ],
    advanced: [
      "Query Execution Plans",
      "Partitioning",
      "Sharding",
      "Replication",
    ],
  },
  {
    title: "🟠 MongoDB",
    must: ["Aggregation Pipeline", "Indexes", "Data Modeling", "Transactions"],
  },
  {
    title: "🟡 Caching",
    must: [
      "Redis Basics",
      "Cache Invalidation",
      "Write Through",
      "Write Back",
      "Cache Aside",
    ],
  },
  {
    title: "🔵 Message Queues",
    must: ["BullMQ", "Kafka (conceptual)", "RabbitMQ (conceptual)"],
  },
  {
    title: "🟢 File Handling",
    must: ["File Upload", "Streaming Files", "Chunk Upload", "S3 Upload"],
  },
  {
    title: "🟣 Logging",
    must: ["Winston", "Structured Logging", "Log Rotation"],
  },
  {
    title: "🔴 Testing",
    must: ["Unit Testing", "Integration Testing", "Mocking APIs", "Jest"],
  },
];

// ---------------- Component ----------------

function Backend() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(backendData.map((s) => s.title))
  );
  // 1. Load from localStorage on initial render
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("backend_topics_list");
      if (!saved) return new Set();
      const parsed = JSON.parse(saved);
      // Guard: must be an array, not a stale {} object
      if (!Array.isArray(parsed)) {
        localStorage.removeItem("backend_topics_list");
        return new Set();
      }
      return new Set(parsed);
    } catch {
      return new Set();
    }
  });

  // 2. Clean toggleTopic — just use current state, save after toggling
  const toggleTopic = (topic: string) => {
    setCompleted(prev => {
      const updated = new Set(prev);
      if (updated.has(topic)) updated.delete(topic);
      else updated.add(topic);
      localStorage.setItem("backend_topics_list", JSON.stringify([...updated]));
      return updated;
    });
  };

  const toggleSection = (title: string) => {
    const updated = new Set(openSections);

    if (updated.has(title)) updated.delete(title);
    else updated.add(title);

    setOpenSections(updated);
  };

  const totalTopics = backendData.reduce((acc, section) => {
    const mustCount = section.must.length;
    const advCount = section.advanced ? section.advanced.length : 0;

    return acc + mustCount + advCount;
  }, 0);

  const progressPercent = Math.round(
    (completed.size / totalTopics) * 100
  );

  // ---------------- UI ----------------

  return (
    <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm max-h-[700px] overflow-y-auto">
      {/* Header */}

      <div className="sticky top-0 bg-slate-50 border-b border-slate-200 p-6 z-10">
        <h2 className="text-2xl font-semibold text-slate-800">
          Backend Learning Tracker
        </h2>

        {/* Progress */}

        <div className="mt-4">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>
              {completed.size} / {totalTopics} topics completed
            </span>
            <span className="font-medium">
              {progressPercent}%
            </span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-slate-700 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}

      <div className="p-6 space-y-6">
        {backendData.map((section) => (
          <div
            key={section.title}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
          >
            {/* Section Header */}

            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-base font-semibold text-slate-800">
                {section.title}
              </h3>

              <span className="text-sm text-slate-500">
                {openSections.has(section.title) ? "−" : "+"}
              </span>
            </button>

            {/* Content */}

            {openSections.has(section.title) && (
              <div className="mt-4 space-y-4">
                {/* MUST */}

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
                    Must Know
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {section.must.map((topic) => (
                      <label
                        key={topic}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-sm transition
                        ${completed.has(topic)
                            ? "bg-slate-100 text-slate-400 border-slate-200 line-through"
                            : "hover:bg-slate-50 border-transparent"
                          }`}
                      >
                        <input
                          type="checkbox"
                          className="accent-slate-700"
                          checked={completed.has(topic)}
                          onChange={() => toggleTopic(topic)}
                        />

                        {topic}
                      </label>
                    ))}
                  </div>
                </div>

                {/* ADVANCED */}

                {section.advanced && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-indigo-500 mb-2">
                      Advanced
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {section.advanced.map((topic) => (
                        <label
                          key={topic}
                          className={`flex items-center gap-2 p-2 rounded-lg border text-sm transition
                          ${completed.has(topic)
                              ? "bg-indigo-50 text-slate-400 border-indigo-100 line-through"
                              : "hover:bg-slate-50 border-transparent"
                            }`}
                        >
                          <input
                            type="checkbox"
                            className="accent-indigo-600"
                            checked={completed.has(topic)}
                            onChange={() => toggleTopic(topic)}
                          />

                          {topic}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Backend;


