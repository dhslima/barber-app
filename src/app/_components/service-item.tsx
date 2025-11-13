import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/generated/prisma";
import Image from "next/image";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card className="rounded">
      <CardContent className="flex flex-row items-center gap-4">
        <div className="relative h-[120px] w-[120px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-bold">{service.name}</p>
          <p className="text-gray-400">{service.description}</p>
          <div className="flex flex-row items-center justify-between">
            <span className="text-primary text-sm font-semibold">
              {Number(service.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <Button variant={"outline"}>Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
