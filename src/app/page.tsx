import { Input } from "@/components/ui/input";
import Header from "./_components/header";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { QUICK_SEARCH_ITEMS } from "./_constants/search";
import BookingItem from "./_components/booking-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <div className="p-4">
      <Header />
      {/* Texto */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, David</h2>
        <p>Quarta-feira, 10 de setembro de 2025</p>
      </div>

      {/* Barra de busca */}
      <div className="mt-4 flex flex-row items-center gap-2">
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>

      {/*Busca Rápida*/}
      <div className="mt-6 flex flex-row items-center gap-2">
        {/*Mapeamento dos itens de busca rápida*/}
        {QUICK_SEARCH_ITEMS.map((item) => (
          <Button key={item.label} className="gap-2" variant={"secondary"}>
            <Image src={item.icon} alt={item.label} width={16} height={16} />
            {item.label}
          </Button>
        ))}
      </div>

      {/* Banner */}
      <div className="relative mt-6 h-[150px] w-full">
        <Image
          src="/banner-01.png"
          alt="Agende nos Melhores com FSW Barber"
          fill
          className="rounded-xl object-contain"
        />
      </div>

      {/* Agendamento */}
      <BookingItem />

      {/* Barbershops */}
      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
        Recomendados
      </h2>
      <div className="flex flex-row gap-2 overflow-auto px-5 [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>

      {/* Barbershops */}
      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
        Populares
      </h2>

      <div className="flex flex-row gap-2 overflow-auto px-5 [&::-webkit-scrollbar]:hidden">
        {popularBarbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  );
}
