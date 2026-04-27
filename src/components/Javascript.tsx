import { useState } from "react";

type Section = {
  title: string;
  easy: string[];
  medium: string[];
  hard?: string[];
};

const javascriptData: Section[] = [

  {
    title: "🟢 JavaScript Fundamentals",

    easy: [
      "Data Types (Primitive vs Non-Primitive)",
      "typeof operator",
      "var vs let vs const",
      "Truthy vs Falsy Values",
      "NaN and isNaN()",
      "Strict Mode"
    ],

    medium: [
      "Hoisting",
      "Scope (Global, Function, Block)",
      "Execution Context",
      "Implicit Type Coercion",
      "Pass by Value vs Reference",
      "Equality (== vs ===)"
    ],

    hard: [
      "Temporal Dead Zone",
      "Dynamic Typing Edge Cases"
    ]
  },

  {
    title: "🟡 Functions & Closures",

    easy: [
      "Function Declarations vs Expressions",
      "Arrow Functions",
      "Callback Functions",
      "Self Invoking Functions (IIFE)"
    ],

    medium: [
      "Closures",
      "Higher Order Functions",
      "Call / Apply / Bind",
      "First Class Functions"
    ],

    hard: [
      "Closures in Loops",
      "Function Currying"
    ]
  },

  {
    title: "🔵 Objects & Memory Model",

    easy: [
      "Objects & Arrays",
      "Prototype Basics",
      "Object.assign()"
    ],

    medium: [
      "Prototype Chain",
      "Shallow Copy",
      "Deep Copy"
    ],

    hard: [
      "WeakMap",
      "WeakSet",
      "Memory Leaks"
    ]
  },

  {
    title: "🟣 Async JavaScript & Event Loop",

    easy: [
      "Callbacks",
      "Promises",
      "Async/Await"
    ],

    medium: [
      "Event Loop",
      "Microtasks vs Macrotasks",
      "setTimeout Behavior"
    ],

    hard: [
      "Web APIs Internals",
      "Promise Execution Order",
      "Concurrency Limiter Design"
    ]
  },

  {
    title: "🟠 Modern JavaScript (ES6+)",

    easy: [
      "Template Literals",
      "Destructuring",
      "Default Parameters",
      "Spread Operator",
      "Rest Parameters"
    ],

    medium: [
      "Modules (ESM)",
      "Named vs Default Exports",
      "Iterators"
    ],

    hard: [
      "Generators",
      "Symbol"
    ]
  },

  {
    title: "🔴 DOM & Browser Behavior",

    easy: [
      "DOM Manipulation Basics",
      "Event Bubbling",
      "Event Capturing"
    ],

    medium: [
      "Event Delegation",
      "Reflows vs Repaints"
    ],

    hard: [
      "Mutation Observer",
      "Intersection Observer"
    ]
  },

  {
    title: "🟡 Performance Utilities",

    easy: [
      "Debouncing Concept",
      "Throttling Concept"
    ],

    medium: [
      "Memoization",
      "Lazy Evaluation"
    ],

    hard: [
      "Debounce Implementation",
      "Throttle Implementation",
      "Batch DOM Updates"
    ]
  }

];

function JavaScriptCore() {

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

  // -------- Total Topics --------

  const totalTopics =
    javascriptData.reduce((acc, section) => {

      return (
        acc +
        section.easy.length +
        section.medium.length +
        (section.hard
          ? section.hard.length
          : 0)
      );

    }, 0);

  const progressPercent =
    Math.round(
      (completed.size / totalTopics) * 100
    );

  return (

    <div className="mt-8 bg-white p-6 rounded-2xl shadow-md max-h-[650px] overflow-y-auto">

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        JavaScript Core Tracker
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
            className="bg-yellow-500 h-3 rounded-full transition-all"
            style={{
              width: `${progressPercent}%`
            }}
          />

        </div>

      </div>

      {javascriptData.map((section) => (

        <div
          key={section.title}
          className="mb-6"
        >

          <h3 className="text-lg font-semibold text-yellow-600 mb-3">
            {section.title}
          </h3>

          {/* EASY */}

          <div className="mb-3">

            <p className="text-sm font-semibold text-green-700 mb-2">
              Easy:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">

              {section.easy.map((topic) => (

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
                    onChange={() =>
                      toggleTopic(topic)
                    }
                  />

                  {topic}

                </label>

              ))}

            </div>

          </div>

          {/* MEDIUM */}

          <div className="mb-3">

            <p className="text-sm font-semibold text-yellow-700 mb-2">
              Medium:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">

              {section.medium.map((topic) => (

                <label
                  key={topic}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition
                  ${
                    completed.has(topic)
                      ? "bg-yellow-100 line-through text-gray-500"
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

          {/* HARD */}

          {section.hard && (

            <div>

              <p className="text-sm font-semibold text-red-700 mb-2">
                Hard:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">

                {section.hard.map((topic) => (

                  <label
                    key={topic}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition
                    ${
                      completed.has(topic)
                        ? "bg-red-100 line-through text-gray-500"
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

export default JavaScriptCore;