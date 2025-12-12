import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Sheet } from "@/types/sheet";
import Link from "next/link";

interface SheetCardProps {
  sheet: Sheet;
}

export function SheetCard({ sheet }: SheetCardProps) {
  return (
    <Link href={`/${sheet.id}`}>
      <Card className="w-full max-w-sm hover:shadow-lg transition-shadow cursor-pointer border-0 bg-card">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={sheet.image}
              alt={sheet.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-2">
          <CardTitle className="text-lg font-semibold line-clamp-1">{sheet.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {sheet.composer}
          </CardDescription>
          <div className="flex gap-2">
            <Badge variant="secondary">{sheet.difficulty.toUpperCase()}</Badge>
            <Badge>{sheet.instrument}</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}