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
    <div>
      <h1>Hola</h1>
    </div>
  );
}
