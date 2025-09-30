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
const datas = ["wicked.jpg", "gladiator2.jpg", "moana_2.jpg"];
export const CarouselMovie = () => {
  return (
    <Carousel>
      <CarouselContent>
        {datas.map((data, index) => {
          return (
            <CarouselItem key={index + 1}>
              <img className="w-full h-[600px]" src={data} />
            </CarouselItem>
          );
        })}
        <div className="absolute">bullet</div>
      </CarouselContent>

      <CarouselPrevious className="ml-20" />
      <CarouselNext className="mr-20" />
    </Carousel>
  );
};
