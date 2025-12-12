"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export function CatalogFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty") || "all";

  const handleDifficultyChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("difficulty");
    } else {
      params.set("difficulty", value);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-muted-foreground">Сложность:</span>
      <Select value={difficulty} onValueChange={handleDifficultyChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Все" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Все</SelectItem>
          <SelectItem value="easy">Легко</SelectItem>
          <SelectItem value="medium">Средне</SelectItem>
          <SelectItem value="hard">Сложно</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}