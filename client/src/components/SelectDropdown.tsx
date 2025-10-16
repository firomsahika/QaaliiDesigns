"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  const [selected, setSelected] = React.useState("all");

  return (
    <Select value={selected} onValueChange={setSelected} >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
