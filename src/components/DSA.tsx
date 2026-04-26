import { useState } from "react";

type Section = {
  title: string;
  topics: string[];
};

const dsaData: Section[] = [
  {
    title: "1️⃣ Array Algorithms",
    topics: [
      "Prefix Sum",
      "Suffix Sum",
      "Kadane’s Algorithm",
      "Sliding Window",
      "Two Pointer",
      "Dutch National Flag Algorithm",
      "Merge Intervals",
      "Rotate Array",
      "Next Permutation",
      "Majority Element (Moore Voting)",
      "Find Duplicate Number",
      "Missing Number",
      "Subarray Sum Equals K",
      "Maximum Product Subarray",
      "Maximum Subarray Sum",
      "Partitioning",
      "Binary Search on Answer",
      "Count Inversions (Merge Sort)",
      "Meet in the Middle",
      "Coordinate Compression",
      "Difference Array",
      "Longest Subarray with Given Sum",
      "Subarray XOR",
      "Merge Sorted Arrays In Place",
      "Rotate Matrix",
      "Spiral Matrix",
      "Set Matrix Zeroes",
    ],
  },

  {
    title: "2️⃣ String Algorithms",
    topics: [
      "Sliding Window on Strings",
      "Pattern Matching",
      "Anagram Matching",
      "Palindrome Problems",
      "Rabin–Karp Algorithm",
      "KMP Algorithm",
      "Z Algorithm",
      "Longest Prefix Suffix",
      "Minimum Window Substring",
      "Trie-Based Matching",
      "Suffix Array",
      "Suffix Tree",
      "Rolling Hash",
      "Longest Palindromic Substring",
      "Longest Palindromic Subsequence",
      "String Compression",
      "Group Shifted Strings",
      "Word Break Problem",
    ],
  },

  {
    title: "3️⃣ Linked List",
    topics: [
      "Reverse Linked List",
      "Detect Cycle (Floyd Cycle)",
      "Merge Two Lists",
      "Reverse in K Groups",
      "Remove Nth Node",
      "Find Middle Node",
      "Intersection of Lists",
      "Flatten Linked List",
      "Copy List with Random Pointer",
      "LRU Cache Implementation",
    ],
  },

  {
    title: "4️⃣ Stack",
    topics: [
      "Valid Parentheses",
      "Min Stack",
      "Next Greater Element",
      "Largest Rectangle in Histogram",
      "Monotonic Stack",
      "Stock Span Problem",
      "Trapping Rain Water",
      "Expression Evaluation",
      "Infix to Postfix",
    ],
  },

  {
    title: "5️⃣ Queue",
    topics: [
      "Circular Queue",
      "Deque",
      "Sliding Window Maximum",
      "Queue using Stack",
      "Stack using Queue",
    ],
  },

  {
    title: "6️⃣ Tree Algorithms",
    topics: [
      "DFS",
      "BFS",
      "Level Order Traversal",
      "Zigzag Traversal",
      "Height of Tree",
      "Diameter of Tree",
      "Maximum Path Sum",
      "Lowest Common Ancestor",
      "Balanced Binary Tree",
      "Symmetric Tree",
      "Insert/Delete BST",
      "Kth Smallest",
      "Validate BST",
      "BST Iterator",
      "Serialize / Deserialize Tree",
      "Boundary Traversal",
      "Morris Traversal",
      "Vertical Order Traversal",
      "Top View of Tree",
      "Bottom View of Tree",
      "Construct Tree from Traversals",
      "Recover BST",
      "Binary Tree to DLL",
    ],
  },

  {
    title: "7️⃣ Heap",
    topics: [
      "Heapify",
      "Kth Largest Element",
      "Top K Elements",
      "Merge K Sorted Lists",
      "Median in Stream",
      "Priority Queue Problems",
      "Heap Sort",
    ],
  },

  {
    title: "8️⃣ Hashing",
    topics: [
      "Frequency Counting",
      "Two Sum Variants",
      "Group Anagrams",
      "Longest Consecutive Sequence",
      "Subarray Sum",
    ],
  },

  {
    title: "9️⃣ Recursion",
    topics: [
      "Subsets",
      "Permutations",
      "Combination Sum",
      "Power Set",
      "Generate Parentheses",
    ],
  },

  {
    title: "🔟 Backtracking",
    topics: [
      "N Queens",
      "Sudoku Solver",
      "Word Search",
      "Palindrome Partitioning",
      "Rat in Maze",
    ],
  },

  {
    title: "1️⃣1️⃣ Binary Search",
    topics: [
      "Classic Binary Search",
      "Lower Bound / Upper Bound",
      "Search Rotated Array",
      "Binary Search on Answer",
      "Peak Element",
      "Median of Two Arrays",
    ],
  },

  {
    title: "1️⃣2️⃣ Greedy Algorithms",
    topics: [
      "Activity Selection",
      "Job Scheduling",
      "Minimum Coins",
      "Fractional Knapsack",
      "Gas Station",
      "Jump Game",
    ],
  },

  {
    title: "1️⃣3️⃣ Dynamic Programming",
    topics: [
      "Fibonacci",
      "Climbing Stairs",
      "House Robber",
      "Coin Change",
      "Knapsack (0/1)",
      "Longest Common Subsequence",
      "Longest Increasing Subsequence",
      "Edit Distance",
      "Minimum Path Sum",
      "Matrix Chain Multiplication",
      "DP on Trees",
      "DP on Strings",
      "Bitmask DP",
      "Partition DP",
      "Subset Sum",
      "Partition Equal Subset Sum",
      "Rod Cutting",
      "Longest Palindromic Subsequence",
      "Boolean Parenthesization",
      "Egg Dropping Problem",
    ],
  },

  {
    title: "1️⃣4️⃣ Graph Algorithms",
    topics: [
      "BFS",
      "DFS",
      "Cycle Detection",
      "Topological Sort",
      "Connected Components",
      "Bipartite Graph",
      "Dijkstra",
      "Bellman Ford",
      "Floyd Warshall",
      "Minimum Spanning Tree",
      "Kruskal",
      "Prim",
      "Union Find (DSU)",
      "Number of Islands",
      "Rotten Oranges",
      "Shortest Path in Grid",
      "Word Ladder",
      "Alien Dictionary",
      "Network Delay Time",
    ],
  },

  {
    title: "1️⃣5️⃣ Trie",
    topics: ["Insert", "Search", "Prefix Matching", "Word Dictionary"],
  },

  {
    title: "1️⃣6️⃣ Bit Manipulation",
    topics: [
      "XOR Tricks",
      "Subsets using Bitmask",
      "Count Set Bits",
      "Power of Two",
    ],
  },
];

function DSA() {
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

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow-md max-h-150 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        DSA Practice Tracker
      </h2>

      {dsaData.map((section) => (
        <div key={section.title} className="mb-6">
          {/* Section Title */}
          <h3 className="text-lg font-semibold text-blue-600 mb-3">
            {section.title}
          </h3>

          {/* Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {section.topics.map((topic) => (
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
      ))}

      {/* Progress Counter */}
      <div className="mt-6 text-right font-semibold text-gray-700">
        Completed: {completed.size}
      </div>
    </div>
  );
}

export default DSA;
