/* eslint-disable @next/next/no-img-element */
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { createAirbnbHome } from "@/app/actions";

export default async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const createHomeWithId = createAirbnbHome.bind(null, {
    userId: user?.id as string,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:h-5 lg:w-5" />

          <img
            src={
              user?.picture ??
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MaDrjtmPQGzKiLHrHEPfFAHaHa%26pid%3DApi&f=1&ipt=5d65ee4ded717e0a2944fededcbde6d93bfdd7ba7207a5d97e88413fb8e70095&ipo=images"
            }
            alt="user img"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px]"
      >
        {user ? (
          <>
            <DropdownMenuItem>
              <form
                action={createHomeWithId}
                className="w-full"
              >
                <button
                  type="submit"
                  className="w-full text-start"
                >
                  Airbnb your Home
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/my-homes"
                className="w-full"
              >
                My Listings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/favorites"
                className="w-full"
              >
                My Favorites
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/reservations"
                className="w-full"
              >
                My Reservations
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="w-full">Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
