import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="flex flex-col flex-1 basis-80 h-95 max-w-125 bg-white/3 rounded-xl overflow-hidden relative">
      <Image
        src={event.imageUrl}
        alt={event.name}
        height={280}
        width={500}
        className="h-[60%] object-fit"
      />
      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>
      <section className="absolute flex flex-col justify-center items-center left-3 top-3 h-11.25 w-11.25 bg-black/30 rounded-md">
        <p className="text-xl font-bold -mb-1.25">29</p>
        <p className="text-xs uppercase text-accent">Nov</p>
      </section>
    </section>
  );
}
