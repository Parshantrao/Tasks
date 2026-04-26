import { useState } from "react";

type Section = {
  title: string;
  must: string[];
  advanced?: string[];
};

const systemDesignData: Section[] = [

  {
    title: "🟠 System Design Fundamentals",

    must: [
      "Load Balancing",
      "Caching",
      "Database Scaling",
      "Horizontal vs Vertical Scaling",
      "CDN",
      "API Gateway",
      "Microservices",
      "Monolith vs Microservices",
      "CAP Theorem",
      "Consistency Models",
      "Leader Election",
      "Distributed Transactions",
      "Eventual Consistency",
      "Circuit Breaker Pattern",
      "Retry Pattern",
      "Bulkhead Pattern",
      "API Gateway Pattern",
      "CQRS Pattern",
      "Event Sourcing"
    ],

    advanced: [
      "Consistent Hashing",
      "Sharding",
      "Replication",
      "Distributed Locking",
      "Message Brokers",
      "Service Discovery"
    ]
  },

  {
    title: "🔴 System Design Problems",

    must: [
      "URL Shortener",
      "Chat System",
      "Notification System",
      "File Upload System",
      "Job Queue System",
      "Rate Limiter"
    ],

    advanced: [
      "Design Instagram",
      "Design WhatsApp",
      "Design YouTube",
      "Design Uber",
      "Design Twitter"
    ]
  },

  {
    title: "🟣 Monitoring & Observability",

    must: [
      "Monitoring (Prometheus basics)",
      "Tracing (OpenTelemetry)",
      "Health Checks",
      "Metrics Collection",
      "Alerting Systems"
    ]
  }

];

function SystemDesign() {

  const [completed, setCompleted] =
    useState<Set<string>>(new Set());

  const toggleTopic = (topic: string) => {

    const updated = new Set(completed);

    if (updated.has(topic)) {
      updated.delete(topic);
    } else {
      updated.add(topic);
    }

    setCompleted(updated);
  };

  const totalTopics =
    systemDesignData.reduce((acc, section) => {

      const mustCount = section.must.length;

      const advCount =
        section.advanced
          ? section.advanced.length
          : 0;

      return acc + mustCount + advCount;

    }, 0);

  const progressPercent =
    Math.round(
      (completed.size / totalTopics) * 100
    );

  return (

    <div className="mt-8 bg-white p-6 rounded-2xl shadow-md max-h-[650px] overflow-y-auto">

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        System Design Tracker
      </h2>

      {/* Progress Bar */}

      <div className="mb-6">

        <div className="flex justify-between text-sm font-medium mb-1">

          <span>
            Progress: {completed.size} / {totalTopics}
          </span>

          <span>
            {progressPercent}%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-red-500 h-3 rounded-full transition-all"
            style={{
              width: `${progressPercent}%`
            }}
          />

        </div>

      </div>

      {systemDesignData.map((section) => (

        <div
          key={section.title}
          className="mb-6"
        >

          <h3 className="text-lg font-semibold text-red-600 mb-3">
            {section.title}
          </h3>

          {/* MUST */}

          <div className="mb-3">

            <p className="text-sm font-semibold text-gray-700 mb-2">
              Must Know:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">

              {section.must.map((topic) => (

                <label
                  key={topic}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition
                  ${completed.has(topic)
                      ? "bg-green-100 line-through text-gray-500"
                      : "hover:bg-gray-100"
                    }`}
                >

                  <input
                    type="checkbox"
                    checked={completed.has(topic)}
                    onChange={() =>
                      toggleTopic(topic)
                    }
                  />

                  {topic}

                </label>

              ))}

            </div>

          </div>

          {/* ADVANCED */}

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
                    ${completed.has(topic)
                        ? "bg-purple-100 line-through text-gray-500"
                        : "hover:bg-gray-100"
                      }`}
                  >

                    <input
                      type="checkbox"
                      checked={completed.has(topic)}
                      onChange={() =>
                        toggleTopic(topic)
                      }
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

export default SystemDesign;