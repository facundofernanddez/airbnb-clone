"use client";

import { categoryItems } from "@/lib/categoryItems.ts";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function MapFilterItems() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  const createQueryString = useCallback((name: string, value: string) => {});

  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
      {categoryItems.map((item, idx) => (
        <Link
          key={item.id}
          href=""
        >
          <div className="relative w-6 h-6">
            <Image
              src={item.imageUrl}
              alt="Category image"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs font-medium">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}
