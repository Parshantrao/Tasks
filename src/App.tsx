import { useState } from "react";
import "./App.css";

import DSA from "./components/DSA";
import Backend from "./components/Backend";
import DevOps from "./components/DevOps";
import JavaScriptCore from "./components/Javascript";
import SystemDesign from "./components/SystemDesign";

import Frontend from "./components/Frontend";
import LowPressure from "./components/LowPressure";

type SubTab = {
  title: string;
  component: React.FC;
};

type Tab = {
  title: string;
  timing: string;
  hash: string;
  component?: React.FC;
  subTabs?: SubTab[];
};

const tabs: Tab[] = [
  {
    title: "DSA",
    timing: "8 - 10",
    hash: "dsa",
    component: DSA,
  },

  {
    title: "Core CS + Backend + System Design",
    timing: "10:15 - 12",
    hash: "core",

    subTabs: [
      { title: "Backend", component: Backend },
      { title: "DevOps", component: DevOps },
      { title: "JavaScript", component: JavaScriptCore },
    
    ],
  },

  {
    title: "System Design",
    timing: "3 - 4:30",
    hash: "system design",
    component: SystemDesign,
  },

  {
    title: "Frontend + React Advanced",
    timing: "5 - 6:30",
    hash: "frontend",
    component: Frontend,
  },

  {
    title: "Low Pressure",
    timing: "7:30 - 10",
    hash: "low",
    component: LowPressure,
  },
];

// const renderObj: Record<string, React.FC> = {
//   "123$%^#": DSA,
//   "123$%^#12": Backend,
//   "123$%^#23": Project,
//   "123$%^#342": Frontend,
//   "123$%^#4534": LowPressure,
// };

function App() {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  const [selectedSubTab, setSelectedSubTab] = useState<SubTab | null>(null);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Daily Study Schedule
        </h1>

        {/* MAIN CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tabs.map((item) => (
            <div
              key={item.hash}
              onClick={() => {
                setSelectedTab(item);
                setSelectedSubTab(null);
              }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-bold text-gray-800">{item.timing}</h2>

              <p className="text-gray-500 mt-2 font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* SUB TABS */}

        {selectedTab?.subTabs && (
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            {selectedTab.subTabs.map((sub) => (
              <button
                key={sub.title}
                onClick={() => setSelectedSubTab(sub)}
                className={`px-4 py-2 rounded-full font-medium transition

                ${
                  selectedSubTab?.title === sub.title
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {sub.title}
              </button>
            ))}
          </div>
        )}

        {/* RENDER COMPONENT */}

        <div className="mt-8">
          {/* If tab has direct component */}

          {selectedTab?.component && <selectedTab.component />}

          {/* If sub-tab selected */}

          {selectedSubTab && <selectedSubTab.component />}
        </div>
      </div>
    </main>
  );
}

export default App;

