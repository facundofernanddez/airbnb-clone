import { categoryItems } from "@/lib/categoryItems.ts";
import Image from "next/image";
import Link from "next/link";

export default function MapFilterItems() {
  return (
    <div>
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
        </Link>
      ))}
    </div>
  );
}
