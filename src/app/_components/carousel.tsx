"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
const datas = [{ color: "green" }, { color: "red" }, { color: "blue" }];
export const CarouselMovie = () => {
  return (
    <div className="flex justify-center">
      <Carousel className="w-[200px] h-60px">
        <CarouselContent>
          <div className="bg-green-300 w-10 h-10 "></div>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
