import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={120} height={18} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
