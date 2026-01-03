"use client";

import { useSearchParams } from "next/navigation";
import { SearchPreview } from "./search-preview";

export function LayoutSearchPreview() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return <SearchPreview query={query} />;
}
