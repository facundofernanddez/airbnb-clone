"use client";

import { categoryItems } from "@/lib/categoryItems";

export default function SelectCategory() {
  return (
    <div>
      {categoryItems.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer"
        ></div>
      ))}
    </div>
  );
}
