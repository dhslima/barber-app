import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={120} height={18} />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
