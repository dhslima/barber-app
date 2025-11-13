import ServiceItem from "@/app/_components/service-item";
import SidebarSheet from "@/app/_components/sidebar-sheet";
import { db } from "@/app/_lib/prisma";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface BarbershopPageProps {
  params: {
    id: string;
  };
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    redirect("/");
  }

  return (
    <div>
      {/*Banner*/}
      <div className="relative h-[180px] w-full">
        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          className="object-cover"
        />
        <div className="flex flex-row justify-between">
          <Link href="/">
            <Button variant={"secondary"} className="absolute top-2 left-2 m-4">
              <ChevronLeft />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 right-2 m-4"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>
      </div>
      <div className="mt-4 gap-2 space-y-2 p-5">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex flex-row gap-2">
          <MapPin className="text-primary" />
          <p>{barbershop.address}</p>
        </div>
        <div className="flex flex-row gap-2">
          <StarIcon className="text-primary" />
          <p>5.0</p>
        </div>
      </div>

      <div className="border-2 border-solid p-5">
        <h3 className="text-sm font-semibold text-gray-400 uppercase">
          Sobre nós
        </h3>
        <p className="text-sm">{barbershop.description}</p>
      </div>
      <div className="p-5">
        <h3 className="mt-4 mb-4 text-sm font-semibold text-gray-400 uppercase">
          Serviços
        </h3>
        <div className="space-y-4">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarbershopPage;
