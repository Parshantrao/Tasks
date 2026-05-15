import { useState } from "react";

type Section = {
  title: string;
  must: string[];
  advanced?: string[];
};

const systemDesignData: Section[] = [

  // ==============================
  // FUNDAMENTALS
  // ==============================

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
      "CQRS Pattern",
      "Event Sourcing",
      "Scalability",
      "Availability",
      "Reliability",
      "Latency vs Throughput",
      "SLA / SLO / SLI",
      "High Availability",
      "Fault Tolerance",
      "Backpressure",
      "Idempotency",
      "Stateless vs Stateful Services",
      "Data Partitioning",
      "Read Replicas",
      "Write Through Cache",
      "Write Back Cache",
      "Cache Invalidation",
      "Distributed Cache",
      "Reverse Proxy",
      "Forward Proxy",
      "Sticky Sessions",
      "Connection Pooling",
      "Long Polling",
      "WebSockets",
      "Server Sent Events",
      "Pagination",
      "Optimistic Locking",
      "Pessimistic Locking",
      "Deadlocks",
      "Database Indexing",
      "Normalization",
      "Denormalization",
      "ACID Properties",
      "BASE Properties"
    ],

    advanced: [
      "Consistent Hashing",
      "Sharding",
      "Replication",
      "Distributed Locking",
      "Message Brokers",
      "Service Discovery",
      "Distributed Consensus",
      "Paxos",
      "Raft",
      "Vector Clocks",
      "Gossip Protocol",
      "Quorum",
      "Distributed Scheduling",
      "Distributed Cron Jobs",
      "Lease Mechanism",
      "Split Brain Problem",
      "Bloom Filters",
      "Merkle Trees",
      "Token Bucket Algorithm",
      "Leaky Bucket Algorithm",
      "Sliding Window Algorithm"
    ]
  },

  // ==============================
  // DATABASES
  // ==============================

  {
    title: "🟢 Databases & Storage",

    must: [
      "SQL Databases",
      "NoSQL Databases",
      "Key Value Stores",
      "Columnar Databases",
      "Document Databases",
      "Graph Databases",
      "Time Series Databases",
      "Database Replication",
      "Master Slave Architecture",
      "Multi Master Replication",
      "Database Failover",
      "Indexing",
      "Composite Index",
      "Query Optimization",
      "Connection Pooling",
      "Transactions",
      "Stored Procedures",
      "Partitioning",
      "Hot Partitions",
      "Cold Storage",
      "Blob Storage",
      "Object Storage"
    ],

    advanced: [
      "LSM Trees",
      "B+ Trees",
      "Write Ahead Logging",
      "MVCC",
      "Distributed SQL",
      "Data Lakes",
      "Data Warehouses",
      "OLTP vs OLAP",
      "Compaction",
      "Secondary Indexes",
      "Read Repair",
      "Hinted Handoff"
    ]
  },

  // ==============================
  // NETWORKING
  // ==============================

  {
    title: "🔵 Networking",

    must: [
      "HTTP/HTTPS",
      "TCP/IP",
      "UDP",
      "DNS",
      "TLS/SSL",
      "REST APIs",
      "gRPC",
      "GraphQL",
      "HTTP Status Codes",
      "Authentication",
      "Authorization",
      "OAuth",
      "JWT",
      "Cookies vs Sessions",
      "Webhooks",
      "Proxy Servers",
      "NAT",
      "Firewalls"
    ],

    advanced: [
      "HTTP/2",
      "HTTP/3",
      "QUIC",
      "Anycast",
      "Service Mesh",
      "mTLS",
      "Zero Trust Architecture",
      "API Rate Limiting",
      "Network Partitioning"
    ]
  },

  // ==============================
  // MESSAGE QUEUES
  // ==============================

  {
    title: "🟡 Messaging & Event Driven Systems",

    must: [
      "Kafka Basics",
      "RabbitMQ",
      "Pub/Sub",
      "Message Queues",
      "Event Driven Architecture",
      "Dead Letter Queues",
      "Async Communication",
      "Producer Consumer Pattern",
      "Fan Out Pattern",
      "At Least Once Delivery",
      "At Most Once Delivery",
      "Exactly Once Semantics"
    ],

    advanced: [
      "Kafka Partitions",
      "Kafka Consumer Groups",
      "Stream Processing",
      "Event Replay",
      "Event Streaming",
      "Schema Registry",
      "Distributed Logs",
      "Outbox Pattern",
      "Saga Pattern"
    ]
  },

  // ==============================
  // CLOUD & DEVOPS
  // ==============================

  {
    title: "☁️ Cloud & DevOps",

    must: [
      "Docker",
      "Kubernetes",
      "Containerization",
      "CI/CD",
      "Infrastructure as Code",
      "Terraform Basics",
      "AWS Basics",
      "EC2",
      "S3",
      "RDS",
      "Lambda",
      "CloudFront",
      "Auto Scaling",
      "Blue Green Deployment",
      "Canary Deployment",
      "Rolling Deployment"
    ],

    advanced: [
      "Kubernetes Networking",
      "Ingress Controllers",
      "Helm",
      "Service Mesh",
      "Istio",
      "Multi Region Deployment",
      "Disaster Recovery",
      "Chaos Engineering",
      "Autoscaling Policies",
      "Spot Instances"
    ]
  },

  // ==============================
  // SECURITY
  // ==============================

  {
    title: "🔐 Security",

    must: [
      "Authentication",
      "Authorization",
      "RBAC",
      "OAuth2",
      "JWT",
      "Encryption at Rest",
      "Encryption in Transit",
      "Hashing",
      "Salting",
      "Secrets Management",
      "Rate Limiting",
      "DDoS Protection",
      "CSRF",
      "XSS",
      "SQL Injection"
    ],

    advanced: [
      "mTLS",
      "Zero Trust",
      "WAF",
      "Key Rotation",
      "HSM",
      "IAM Policies",
      "Security Auditing"
    ]
  },

  // ==============================
  // MONITORING
  // ==============================

  {
    title: "🟣 Monitoring & Observability",

    must: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Health Checks",
      "Metrics Collection",
      "Alerting Systems",
      "Distributed Tracing",
      "Centralized Logging",
      "Log Aggregation",
      "SLO Monitoring",
      "APM",
      "Error Tracking"
    ],

    advanced: [
      "Jaeger",
      "ELK Stack",
      "Datadog",
      "New Relic",
      "Correlation IDs",
      "Trace Sampling",
      "Custom Metrics"
    ]
  },

  // ==============================
  // SYSTEM DESIGN PROBLEMS
  // ==============================

  {
    title: "🔴 System Design Problems",

    must: [
      "URL Shortener",
      "Chat System",
      "Notification System",
      "File Upload System",
      "Job Queue System",
      "Rate Limiter",
      "News Feed System",
      "Search Autocomplete",
      "Video Streaming System",
      "Distributed Cache",
      "Distributed File Storage",
      "Realtime Collaboration Tool",
      "Payment System",
      "Leaderboard System",
      "Parking Lot System",
      "Ride Sharing System",
      "Food Delivery System",
      "API Rate Limiter",
      "Logging System",
      "Web Crawler"
    ],

    advanced: [
      "Design Instagram",
      "Design WhatsApp",
      "Design YouTube",
      "Design Uber",
      "Design Twitter/X",
      "Design Netflix",
      "Design Google Docs",
      "Design Dropbox",
      "Design Spotify",
      "Design Amazon",
      "Design Facebook Messenger",
      "Design Zoom",
      "Design TikTok",
      "Design Reddit",
      "Design Airbnb",
      "Design LinkedIn",
      "Design Gmail",
      "Design Kafka",
      "Design Kubernetes",
      "Design Distributed Search Engine"
    ]
  }

];

function SystemDesign() {

  const [openSections, setOpenSections] =
    useState<Set<string>>(
      new Set(systemDesignData.map((s) => s.title))
    );

  // Load from localStorage

  const [completed, setCompleted] =
    useState<Set<string>>(() => {

      try {

        const saved =
          localStorage.getItem("system_design_topics");

        if (!saved) return new Set();

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {

          localStorage.removeItem(
            "system_design_topics"
          );

          return new Set();
        }

        return new Set(parsed);

      } catch {

        return new Set();

      }

    });

  // Toggle Topic

  const toggleTopic = (topic: string) => {

    setCompleted((prev) => {

      const updated = new Set(prev);

      if (updated.has(topic))
        updated.delete(topic);

      else
        updated.add(topic);

      localStorage.setItem(
        "system_design_topics",
        JSON.stringify([...updated])
      );

      return updated;

    });

  };

  // Toggle Section

  const toggleSection = (title: string) => {

    const updated = new Set(openSections);

    if (updated.has(title))
      updated.delete(title);

    else
      updated.add(title);

    setOpenSections(updated);

  };

  // Progress

  const totalTopics =
    systemDesignData.reduce((acc, section) => {

      const mustCount =
        section.must.length;

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

  // ---------------- UI ----------------

  return (

    <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm max-h-[700px] overflow-y-auto">

      {/* Header */}

      <div className="sticky top-0 bg-slate-50 border-b border-slate-200 p-6 z-10">

        <h2 className="text-2xl font-semibold text-slate-800">
          System Design Tracker
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
              style={{
                width: `${progressPercent}%`
              }}
            />

          </div>

        </div>

      </div>

      {/* Sections */}

      <div className="p-6 space-y-6">

        {systemDesignData.map((section) => (

          <div
            key={section.title}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
          >

            {/* Section Header */}

            <button
              onClick={() =>
                toggleSection(section.title)
              }
              className="w-full flex items-center justify-between text-left"
            >

              <h3 className="text-base font-semibold text-slate-800">
                {section.title}
              </h3>

              <span className="text-sm text-slate-500">
                {openSections.has(section.title)
                  ? "−"
                  : "+"}
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

            )}

          </div>

        ))}

      </div>

    </div>

  );

}


export default SystemDesign