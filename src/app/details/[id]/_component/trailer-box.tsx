"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Button } from "@/components/ui/button";
import { IconPlay } from "@/app/_components/assets/icon-play";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export interface TrailerProps {
  trailer?: {
    key: string;
    name: string;
  };
}

export const TrailerBox = ({ trailer }: TrailerProps) => {
  return (
    <div className="flex gap-2 absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-white items-center sm:gap-3 bg-black/40 px-3 py-2 rounded-xl backdrop-blur-sm">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="rounded-full hover:scale-105 transition"
            size="icon"
            variant="outline"
          >
            <IconPlay />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[95vw] flex flex-col justify-center max-w-[1000px] h-[60vh] sm:h-[70vh] text-white bg-black p-3 sm:p-4 border-none">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-base">
              {trailer?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center h-full">
            {trailer?.key && (
              <div className="w-full aspect-video max-w-[960px]">
                <LiteYouTubeEmbed id={trailer.key} title={trailer.name} />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <p className="hidden sm:block text-sm font-semibold">Play trailer </p>
    </div>
  );
};
