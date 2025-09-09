import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// TODO Receber agendamento via props
const BookingItem = () => {
  return (
    <div>
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
    </div>
  );
};

export default BookingItem;
