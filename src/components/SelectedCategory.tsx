"use client";

import { categoryItems } from "@/lib/categoryItems";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

export default function SelectCategory() {
  return (
    <div>
      {categoryItems.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer"
        >
          <Card>
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="h-8 w-8"
              />
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
