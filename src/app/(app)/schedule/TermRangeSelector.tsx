"use client";

import { type Season, Seasons } from "@/types/schedule";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const YEARS = Array.from(
  { length: 30 },
  (_, i) => new Date().getFullYear() - 15 + i,
);

type Props = {
  startTerm: { season: Season; year: number };
  endTerm: { season: Season; year: number };
  onStartTermChange: (term: { season: Season; year: number }) => void;
  onEndTermChange: (term: { season: Season; year: number }) => void;
};

export function TermRangeSelector({
  startTerm,
  endTerm,
  onStartTermChange,
  onEndTermChange,
}: Props) {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Desde:</span>
        <Select
          value={startTerm.season}
          onValueChange={(season: Season) =>
            onStartTermChange({ ...startTerm, season })
          }
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Seasons.map((season) => (
              <SelectItem key={season} value={season}>
                {season}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={startTerm.year.toString()}
          onValueChange={(year) =>
            onStartTermChange({ ...startTerm, year: parseInt(year) })
          }
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {YEARS.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Hasta:</span>
        <Select
          value={endTerm.season}
          onValueChange={(season: Season) =>
            onEndTermChange({ ...endTerm, season })
          }
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Seasons.map((season) => (
              <SelectItem key={season} value={season}>
                {season}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={endTerm.year.toString()}
          onValueChange={(year) =>
            onEndTermChange({ ...endTerm, year: parseInt(year) })
          }
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {YEARS.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
