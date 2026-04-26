import { useState } from "react";

type Section = {
  title: string;
  must: string[];
  advanced?: string[];
};

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

function Backend() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggleTopic = (topic: string) => {
    const updated = new Set(completed);

    if (updated.has(topic)) {
      updated.delete(topic);
    } else {
      updated.add(topic);
    }

    setCompleted(updated);
  };

  // total topics count

  const totalTopics = backendData.reduce((acc, section) => {
    const mustCount = section.must.length;

    const advCount = section.advanced ? section.advanced.length : 0;

    return acc + mustCount + advCount;
  }, 0);

  const progressPercent = Math.round((completed.size / totalTopics) * 100);

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow-md max-h-[650px] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Backend Learning Tracker
      </h2>

      {/* Progress Bar */}

      <div className="mb-6">
        <div className="flex justify-between text-sm font-medium mb-1">
          <span>
            Progress: {completed.size} / {totalTopics}
          </span>

          <span>{progressPercent}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all"
            style={{
              width: `${progressPercent}%`,
            }}
          />
        </div>
      </div>

      {backendData.map((section) => (
        <div key={section.title} className="mb-6">
          {/* Section Title */}

          <h3 className="text-lg font-semibold text-blue-600 mb-3">
            {section.title}
          </h3>

          {/* MUST Topics */}

          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Must Know:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {section.must.map((topic) => (
                <label
                  key={topic}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition
                  ${
                    completed.has(topic)
                      ? "bg-green-100 line-through text-gray-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={completed.has(topic)}
                    onChange={() => toggleTopic(topic)}
                  />

                  {topic}
                </label>
              ))}
            </div>
          </div>

          {/* ADVANCED Topics */}

          {section.advanced && (
            <div>
              <p className="text-sm font-semibold text-purple-700 mb-2">
                Advanced:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {section.advanced.map((topic) => (
                  <label
                    key={topic}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition
                    ${
                      completed.has(topic)
                        ? "bg-purple-100 line-through text-gray-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
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
      ))}
    </div>
  );
}

export default Backend;
