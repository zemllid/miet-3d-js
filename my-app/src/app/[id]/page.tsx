"use client";

import { useParams } from "next/navigation";
import { sheets } from "@/data/sheets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function SheetPage() {
  const params = useParams();
  const id = params.id as string;
  const sheet = sheets.find((s) => s.id === id);

  if (!sheet) {
    return <div>Ноты не найдены</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">{sheet.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{sheet.composer}</p>
        <div className="flex gap-2">
          <Badge variant="secondary">{sheet.difficulty.toUpperCase()}</Badge>
          <Badge>{sheet.instrument}</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="score">Ноты</TabsTrigger>
          <TabsTrigger value="description">Описание</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <div className="space-y-4">
            <p>{sheet.description}</p>
          </div>
        </TabsContent>
        <TabsContent value="score" className="mt-6">
          <div className="relative h-[800px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={sheet.image}
              alt={sheet.title}
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>
        <TabsContent value="description" className="mt-6">
          <p className="whitespace-pre-wrap">{sheet.description}</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}