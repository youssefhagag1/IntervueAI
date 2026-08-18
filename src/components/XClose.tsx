"use client";
import React from "react";
import { X } from "lucide-react";

function XClose({ OnToggle }: { OnToggle: () => void }) {
  return (
    <div>
      <button onClick={OnToggle} className="cursor-pointer">
        <X size={24} />
      </button>
    </div>
  );
}

export default XClose;
