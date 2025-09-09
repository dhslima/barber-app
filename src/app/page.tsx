import { Input } from "@/components/ui/input";
import Header from "./_components/header";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, David</h2>
        <p>Quarta-feira, 10 de setembro de 2025</p>
      </div>
      <div className="mt-4 flex flex-row items-center gap-2">
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>
      <div className="relative mt-6 h-[150px] w-full">
        <Image
          src="/banner-01.png"
          alt="Agende nos Melhores com FSW Barber"
          fill
          className="rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
