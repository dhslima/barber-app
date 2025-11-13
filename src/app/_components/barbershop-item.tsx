import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Barbershop } from "@/generated/prisma";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <div>
      <Card className="min-w-[167px] rounded-2xl">
        <CardContent className="p-0 px-1 pt-1">
          {/*Imagem*/}
          <div className="relative h-[159px] w-full">
            <Image
              fill
              className="rounded-2xl object-cover"
              src={barbershop.imageUrl}
              alt={barbershop.name}
            />
            <Badge
              className="absolute top-2 left-2 space-x-1"
              variant={"secondary"}
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <p className="text-xs font-semibold">5.0</p>
            </Badge>
          </div>
          {/*Nome e descrição*/}
          <div className="px-1 py-3">
            <h3 className="truncate font-semibold">{barbershop.name}</h3>
            <p className="truncate text-sm text-gray-400">
              {barbershop.address}
            </p>
            <Link href={`barbershops/${barbershop.id}`} className="w-full">
              <Button className="mt-3 w-full" variant={"secondary"}>
                Reservar
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarbershopItem;
