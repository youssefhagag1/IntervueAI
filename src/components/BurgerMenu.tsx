"use client";
import React from "react";
import { Menu } from "lucide-react";


function BurgerMenu({ OnToggle }: { OnToggle: () => void }) {
  return (
    <div>
      <button onClick={OnToggle} className="cursor-pointer">
        <Menu size={24} />
      </button>
    </div>
  );
}

export default BurgerMenu;
