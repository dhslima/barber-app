import { Input } from "@/components/ui/input";
import Header from "./_components/header";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();

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
      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
        Agendamentos
      </h2>
      <Card>
        <CardContent className="flex justify-between">
          {/* Esquerda */}
          <div className="flex flex-col gap-2">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>
            <div className="flex flex-row items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              </Avatar>
              <p className="text-sm">Barbearia</p>
            </div>
          </div>
          {/* Direita */}
          <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-solid pl-4">
            <p className="text-sm">Setembro</p>
            <p className="text-2xl">10</p>
            <p className="text-sm">14:00</p>
          </div>
        </CardContent>
      </Card>

      {/* Barbershops */}
      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
        Recomendados
      </h2>
      <div className="flex flex-row gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  );
}
