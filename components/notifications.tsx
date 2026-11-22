
"use client";

import { useState } from "react";

export default function NotificationCenter() {
  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState("All");

  const notifications = [
    ["Dean Deming accepted your offer", "Hey where would be a good place to pick up?", "2m ago", "DD"],
    ["Dean Deming sent a message", "Is this still available?", "1h ago", "DD"],
    ["System Alert", "Please finish setting up your Account.", "Yesterday", ""],
  ];

  if (!open) return null;

  return (
    <div className="w-full max-w-5xl rounded-3xl bg-white p-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Notification Center</h1>
        <button onClick={() => setOpen(false)} className="cursor-pointer text-4xl">
          ×
        </button>
      </div>

      <div className="my-5 flex gap-3">
        <button
          onClick={() => setTab("All")}
          className="rounded-full bg-gray-200 px-5 py-1 cursor-pointer"
        >
          All
        </button>
        <button
          onClick={() => setTab("Mentions")}
          className="rounded-full bg-gray-200 px-5 py-1 cursor-pointer"
        >
          Mentions
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {tab === "All" ? (
          notifications.map((item, index) => (
            <div key={index} className="flex items-center gap-6 rounded-2xl border border-gray-200 p-6">
              <div className={`flex h-16 w-16 items-center justify-center rounded-full ${item[3] ? "bg-gray-100" : "bg-red-900"}`}>
                {item[3]}
              </div>

              <div>
                <h2 className="text-xl font-bold">{item[0]}</h2>
                <p className="text-lg text-gray-500">"{item[1]}"</p>
                <p className="text-gray-400">{item[2]}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No mentions yet.</p>
        )}
      </div>
    </div>
  );
}
