"use client";

import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { TIME_LIST } from "../_constants/time_list";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns/format";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { createBooking } from "../_actions/create-booking";
import { authClient } from "@/lib/auth-client";
import { set } from "date-fns";
import { toast } from "sonner";

interface ReservationSheetProps {
  name: string;
  price: number;
  serviceId: string;
  barbershop: string;
}

const ReservationSheet = ({
  name,
  price,
  serviceId,
  barbershop,
}: ReservationSheetProps) => {
  const [selectedDate, setDate] = useState<Date | undefined>();

  const [selectedTime, setTime] = useState<string | undefined>();

  const handleSelectedDate = (date: Date | undefined) => {
    setDate(date);
  };

  const handleSelectedTime = (time: string) => {
    setTime(time);
  };

  const { data } = authClient.useSession();

  const handleCreateBooking = async () => {
    try {
      if (!selectedDate || !selectedTime) return;

      const hour = selectedTime?.split(":")[0];
      const minute = selectedTime?.split(":")[1];

      const newDate = set(selectedDate as Date, {
        hours: Number(hour),
        minutes: Number(minute),
        seconds: 0,
        milliseconds: 0,
      });

      await createBooking({
        serviceId,
        userId: data?.user.id as string,
        bookingTime: newDate,
      });

      toast.success("Reserva criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar reserva:", error);
      toast.error("Erro ao criar reserva");
    }
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Fazer Reserva</SheetTitle>
      </SheetHeader>
      <div className="py-5">
        <div>
          <Calendar
            mode="single"
            locale={ptBR}
            selected={selectedDate}
            onSelect={handleSelectedDate}
            disabled={{ before: new Date() }}
            className="w-full"
            classNames={{
              /* estrutura */
              month_grid: "w-full border-collapse",
              weekdays: "grid grid-cols-7",
              week: "grid grid-cols-7 w-full",

              /* cabeçalho (seg, ter, qua...) */
              weekday: "capitalize text-center text-xs w-full",

              /* célula */
              // cell: "w-full h-9 p-0 relative",
              day: "w-full h-9 p-0 relative",

              /* botão do dia */
              // day: "w-full h-9",
              day_button: "w-full h-9 p-0",

              /* navegação */
              button_previous: "left-1",
              button_next: "right-1",

              /* mês / ano */
              month_caption: "capitalize flex justify-center pt-1 items-center",
            }}
          />
          {/* Lista de horários */}
          {selectedDate && (
            <div className="flex gap-3 overflow-x-auto border border-solid p-5 [&::-webkit-scrollbar]:hidden">
              {TIME_LIST.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => handleSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          )}
          {selectedTime && selectedDate && (
            <div className="border-b border-solid p-5">
              <Card>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold">{name}</h2>
                    <p>
                      {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p>Data:</p>
                    <p>
                      {format(selectedDate, "d 'de' MMMM", { locale: ptBR })}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Horário:</p>
                    <p>{selectedTime}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p>Local:</p>
                    <p>{barbershop}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      <SheetFooter className="px-5">
        <SheetClose asChild>
          <Button type="submit" onClick={handleCreateBooking}>
            Confirmar Reserva
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default ReservationSheet;
