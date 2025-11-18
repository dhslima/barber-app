"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";

import { QUICK_SEARCH_ITEMS } from "../_constants/search";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { authClient } from "@/lib/auth-client";

const SidebarSheet = () => {
  const handleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const { data } = authClient.useSession();

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div>
        {data?.user ? (
          <div className="flex flex-row items-center gap-3 border-b border-solid p-5">
            <Avatar>
              <AvatarImage
                src={data?.user.image as string}
                width={18}
                height={18}
              />
            </Avatar>
            <div>
              <p className="font-bold">{data?.user.name}</p>
              <p className="text-sm">{data?.user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-between gap-4 border-b border-solid p-5">
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"icon"}>
                  <LogInIcon size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta Google
                  </DialogDescription>
                </DialogHeader>
                <Button
                  className="gap-2 font-bold"
                  variant={"outline"}
                  onClick={handleLogin}
                >
                  <Image
                    src={"/google.svg"}
                    width={18}
                    height={18}
                    alt="Google"
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        )}
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
        <SheetClose asChild>
          <Button variant={"outline"} className="w-full" onClick={handleLogout}>
            <LogOutIcon size={18} />
            Sair da Conta
          </Button>
        </SheetClose>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
