import React, { useEffect, useState } from "react";

type Task = {
  title: string;
  link: string;
};

const lowPressureTasks: Task[] = [
  {
    title: "Watch System Design Videos",
    link: "https://www.youtube.com/@ByteByteGo"
  },
  {
    title: "Revise Notes",
    link: "https://github.com/donnemartin/system-design-primer"
  },
  {
    title: "Review Solved DSA Problems",
    link: "https://leetcode.com/problemset/"
  },
  {
    title: "Read Interview Questions",
    link: "https://leetcode.com/discuss/interview-question"
  },
  {
    title: "Read Production Code on GitHub",
    link: "https://github.com/trending/javascript"
  },
  {
    title: "Watch Architecture Breakdowns",
    link: "https://www.youtube.com/@TechDummiesNarendraL"
  }
];

const STORAGE_KEY = "lowPressureProgress";

export default function LowPressureTasks() {
  const [completed, setCompleted] = useState<Set<number>>(
    new Set()
  );

  // Load saved progress
  // useEffect(() => {
  //   const saved = localStorage.getItem(STORAGE_KEY);

  //   if (saved) {
  //     setCompleted(new Set(JSON.parse(saved)));
  //   }
  // }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...completed])
    );
  }, [completed]);

  const toggleTask = (index: number) => {
    const newSet = new Set(completed);

    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }

    setCompleted(newSet);
  };

  const progress =
    (completed.size / lowPressureTasks.length) * 100;

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        marginBottom: "20px"
      }}
    >
      <h2>🧘 Low Pressure Learning</h2>

      <p>
        Light daily learning tasks to reinforce knowledge.
      </p>

      <div style={{ marginBottom: "10px" }}>
        Progress: {Math.round(progress)}%
      </div>

      {lowPressureTasks.map((task, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <input
            type="checkbox"
            checked={completed.has(index)}
            onChange={() => toggleTask(index)}
          />

          <a
            href={task.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#2563eb",
              fontWeight: "500"
            }}
          >
            {task.title}
          </a>
        </div>
      ))}
    </div>
  );
}