import { MenuIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:h-5 lg:w-5" />

          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MaDrjtmPQGzKiLHrHEPfFAHaHa%26pid%3DApi&f=1&ipt=5d65ee4ded717e0a2944fededcbde6d93bfdd7ba7207a5d97e88413fb8e70095&ipo=images"
            alt="user img"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
