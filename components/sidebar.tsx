"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div className="flex flex-col p-4 w-60 bg-gray-500">
        <div className="flex">
          <button className="flex-1">Home</button>
          <button className="flex-1">Code</button>
        </div>

        <div className="flex flex-col gap-4">
          <p>New</p>
          <p>New</p>
          <p>New</p>
          <p>New</p>
          <p>New</p>
          <p>New</p>
        </div>

        <div>
          <p>Pinned^</p>
        </div>

        <div>
          <p>Chat history^</p>
        </div>

        <div className="flex flex-1 items-end">
          <p>Sophia</p>
        </div>
      </div>

      <button className="" onClick={()=> setOpen(!isOpen)}>

      </button>
  </>
    )
 }
