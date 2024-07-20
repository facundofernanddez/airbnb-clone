import Image from "next/image";

interface iAppProps {
  imagePath: string;
  descriptcion: string;
  location: string;
  price: number;
}

export default function ListingCard({
  descriptcion,
  imagePath,
  location,
  price,
}: iAppProps) {
  return (
    <div className="flex flex-col">
      <div className="relative h-72 ">
        <Image
          src={}
          alt="Image of House"
          fill
          className="rounded-lg h-full object-cover mb-3"
        />
      </div>
    </div>
  );
}
