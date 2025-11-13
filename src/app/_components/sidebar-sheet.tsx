import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";

import { QUICK_SEARCH_ITEMS } from "../_constants/search";
import Link from "next/link";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex flex-row items-center gap-4 border-b border-solid p-5">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            width={18}
            height={18}
          />
        </Avatar>
        <div>
          <p className="font-bold">David Lima</p>
          <p className="text-sm">dhs.lima@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant={"outline"} asChild>
            <Link href={"/"}>
              <HomeIcon size={18} />
              Página Inicial
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant={"outline"}>
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        {/*Mapeamento dos itens de busca rápida*/}
        {QUICK_SEARCH_ITEMS.map((item) => (
          <Button
            key={item.label}
            className="justify-start gap-2"
            variant={"outline"}
          >
            <Image src={item.icon} alt={item.label} width={16} height={16} />
            {item.label}
          </Button>
        ))}
      </div>
      <div className="px-5">
        <Button variant={"outline"} className="w-full">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
