import { useState } from "react";

type Section = {
  title: string;
  must: string[];
  advanced?: string[];
};

const frontendData: Section[] = [
  {
    title: "🟢 React Core (Deep)",

    must: [
      "Virtual DOM Internals",
      "Reconciliation",
      "Hooks Internals",
      "Custom Hooks",
      "Context API",
      "Error Boundaries",
      "Error Handling Strategy",
      "Form Management (React Hook Form)",
      "Accessibility (a11y)",
      "SEO Optimization",
      "Hydration Issues",
    ],

    advanced: [
      "React Fiber Architecture",
      "Concurrent Rendering",
      "React Suspense",
      "Transitions",
    ],
  },

  {
    title: "🟡 Performance Optimization",

    must: [
      "useMemo",
      "useCallback",
      "Lazy Loading",
      "Code Splitting",
      "React.memo",
      "Debouncing",
      "Throttling",
      "Virtualization (react-window)",
      "Infinite Scrolling",
      "Image Optimization",
      "Preloading & Prefetching",
    ],

    advanced: [
      "Bundle Optimization",
      "Tree Shaking",
      "Performance Profiling",
      "Web Vitals Optimization",
    ],
  },

  {
    title: "🔵 State Management",

    must: ["Redux Toolkit", "Zustand", "React Query"],

    advanced: [
      "Redux Middleware",
      "Redux DevTools",
      "State Normalization",
      "Server State vs Client State",
    ],
  },

  {
    title: "🟣 Next.js (VERY IMPORTANT)",

    must: [
      "SSR (Server Side Rendering)",
      "SSG (Static Site Generation)",
      "ISR (Incremental Static Regeneration)",
      "Routing",
      "API Routes",
      "Middleware",
      "Server Actions",
    ],

    advanced: [
      "App Router Internals",
      "Edge Functions",
      "Streaming Rendering",
      "Partial Hydration",
    ],
  },

  {
    title: "🟠 UI Architecture",

    must: [
      "Component Design Patterns",
      "Folder Structure",
      "Reusable Components",
    ],

    advanced: [
      "Compound Components",
      "Render Props",
      "Higher Order Components",
      "Controlled vs Uncontrolled Components",
    ],
  },

  {
    title: "🔴 Frontend Testing",

    must: ["Jest", "React Testing Library"],

    advanced: [
      "Mocking APIs",
      "Component Snapshot Testing",
      "Integration Testing",
      "E2E Testing (Playwright / Cypress)",
    ],
  },

  // Added Missing Important Sections 👇

  {
    title: "🟡 Browser & Web Fundamentals",

    must: [
      "Event Loop (Browser)",
      "Call Stack",
      "Web APIs",
      "LocalStorage",
      "SessionStorage",
      "Cookies",
    ],

    advanced: [
      "Service Workers",
      "Web Workers",
      "IndexedDB",
      "Rendering Pipeline",
      "Reflow vs Repaint",
      "Critical Rendering Path",
      "CORS Deep Dive",
    ],
  },

  {
    title: "🔵 Networking & APIs",

    must: [
      "Fetch API",
      "Axios",
      "REST API Integration",
      "Error Handling",
      "Request Cancellation",
    ],

    advanced: ["GraphQL", "Apollo Client", "Caching Strategies"],
  },

  {
    title: "🟣 Styling & UI Systems",

    must: [
      "CSS Modules",
      "Tailwind CSS",
      "Responsive Design",
      "Flexbox",
      "Grid",
    ],

    advanced: [
      "CSS-in-JS",
      "Design Systems",
      "Theme Systems",
      "Animation Libraries",
    ],
  },
];

function Frontend() {
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

  const totalTopics = frontendData.reduce((acc, section) => {
    const mustCount = section.must.length;

    const advCount = section.advanced ? section.advanced.length : 0;

    return acc + mustCount + advCount;
  }, 0);

  const progressPercent = Math.round((completed.size / totalTopics) * 100);

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow-md max-h-[650px] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Frontend Learning Tracker
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
            className="bg-blue-500 h-3 rounded-full transition-all"
            style={{
              width: `${progressPercent}%`,
            }}
          />
        </div>
      </div>

      {frontendData.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="text-lg font-semibold text-blue-600 mb-3">
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

export default Frontend;
