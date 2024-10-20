/* eslint-disable @next/next/no-img-element */
import CategoryShowcase from "@/components/CategoryShowcase";
import HomeMap from "@/components/HomeMap";
import SelectCalender from "@/components/SelectCalender";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/db";
import { useCountries } from "@/lib/getCountries";
import Image from "next/image";

async function getData(homeId: string) {
  const data = await prisma.home.findUnique({
    where: {
      id: homeId,
    },
    select: {
      photo: true,
      description: true,
      price: true,
      guest: true,
      bedrooms: true,
      bathrooms: true,
      title: true,
      categoryName: true,
      country: true,
      User: {
        select: {
          profileImg: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}

export default async function HomeRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);

  return (
    <div className="w-[75%] mx-auto mt-10 mb-12">
      <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>

      <div className="relative h-[550px]">
        <Image
          alt="Image of Home"
          src={`https://wgqklerajuawttphkbqd.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          fill
          className="rounded-lg h-full object-cover w-full"
        />
      </div>

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="text-xl font-medium">
            {country?.flag} {country?.label} / {country?.region}
          </h3>

          <div className="flex gap-x-2 text-muted-foreground">
            <p>{data?.guest} Guest</p> * <p>{data?.bedrooms} Bedrooms</p> *
            <p>{data?.bathrooms} Bathrooms</p>
          </div>

          <div className="flex items-center mt-6">
            <img
              src={
                data?.User?.profileImg ??
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MaDrjtmPQGzKiLHrHEPfFAHaHa%26pid%3DApi&f=1&ipt=5d65ee4ded717e0a2944fededcbde6d93bfdd7ba7207a5d97e88413fb8e70095&ipo=images"
              }
              alt="user profile image"
              className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-medium">Hosted by {data?.User?.firstName}</h3>
              <p className="text-sm text-muted-foreground">Host since 2015</p>
            </div>
          </div>

          <Separator className="my-7" />

          <CategoryShowcase categoryName={data?.categoryName as string} />

          <Separator className="my-7" />

          <p className="text-muted-foreground">{data?.description}</p>

          <Separator className="my-7" />

          <HomeMap locationValue={country?.value as string} />
        </div>

        <SelectCalender />
      </div>
    </div>
  );
}
