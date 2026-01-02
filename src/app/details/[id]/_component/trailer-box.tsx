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
interface TrailerProps {
  trailer?: {
    key: string;
    name: string;
  };
}

export const TrailerBox = ({ trailer }: TrailerProps) => {
  return (
    <div className="flex gap-3 absolute mb-[24px] ml-[24px] text-white items-center bg-black/40 p-2 rounded-xl backdrop-blur-sm">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="rounded-full cursor-pointer"
            size="icon"
            variant="outline"
          >
            <IconPlay />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[80%] h-[60%] text-white bg-black p-0 overflow-hidden border-none">
          {/* <DialogHeader>
         <DialogTitle>{trailer?.name}</DialogTitle>
          </DialogHeader> */}
          <div className="flex items-center justify-center h-full">
            {trailer?.key && (
              <div className="w-full max-w-[900px] aspect-video">
                <LiteYouTubeEmbed id={trailer.key} title={trailer.name} />
              </div>
            )}
          </div>
          {/* {trailer?.key && (
            <LiteYouTubeEmbed id={trailer?.key} title={trailer?.name} />
          )} */}
        </DialogContent>
      </Dialog>
      <p className="font-semibold">Play trailer </p>
    </div>
  );
};
