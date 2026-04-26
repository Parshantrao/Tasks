import { useState } from "react";

type Section = {
  title: string;
  must: string[];
  advanced?: string[];
};

const devopsData: Section[] = [

  {
    title: "🟢 Docker Fundamentals",

    must: [
      "Docker Basics",
      "Dockerfile",
      "Docker Compose",
      "Container Networking",
      "Docker Volumes"
    ],

    advanced: [
      "Multi-stage Builds",
      "Docker Image Optimization",
      "Docker Networking Deep Dive"
    ]
  },

  {
    title: "🟡 Web Server & Reverse Proxy",

    must: [
      "Nginx Setup",
      "Reverse Proxy",
      "SSL Setup"
    ],

    advanced: [
      "Load Balancing with Nginx",
      "HTTP to HTTPS Redirect",
      "Security Headers"
    ]
  },

  {
    title: "🔵 CI/CD & Automation",

    must: [
      "CI/CD Pipelines",
      "GitHub Actions",
      "Environment Variables",
      "Build Optimization"
    ],

    advanced: [
      "Pipeline Caching",
      "Automated Testing in CI",
      "Secrets Management"
    ]
  },

  {
    title: "🟣 Deployment Strategies",

    must: [
      "Deployment Strategies",
      "Blue-Green Deployment",
      "Canary Deployment"
    ],

    advanced: [
      "Rolling Deployments",
      "Zero-Downtime Deployment",
      "Rollback Strategies"
    ]
  },

  {
    title: "🟠 Container Orchestration",

    must: [
      "Kubernetes Basics",
      "Pods",
      "Deployments",
      "Services"
    ],

    advanced: [
      "Helm",
      "Auto Scaling",
      "Ingress Controller"
    ]
  },

  {
    title: "🔴 Monitoring & Observability",

    must: [
      "Logging in Containers",
      "Health Checks",
      "Metrics Collection"
    ],

    advanced: [
      "Prometheus",
      "Grafana",
      "Distributed Tracing"
    ]
  }

];

function DevOps() {

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
    devopsData.reduce((acc, section) => {

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
        DevOps & Deployment Tracker
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
            className="bg-orange-500 h-3 rounded-full transition-all"
            style={{
              width: `${progressPercent}%`
            }}
          />

        </div>

      </div>

      {devopsData.map((section) => (

        <div
          key={section.title}
          className="mb-6"
        >

          <h3 className="text-lg font-semibold text-orange-600 mb-3">
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

export default DevOps;