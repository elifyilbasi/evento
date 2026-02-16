import Link from "next/link";
import Image from "next/image";
import { EventoEvent } from "@/lib/types";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      className="flex-1 basis-80 h-95 max-w-125"
      href={`/event/${event.slug}`}
    >
      <section className="flex flex-col w-full h-full bg-white/3 rounded-xl overflow-hidden relative state-effects">
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
          <p className="text-xl font-bold -mb-1.25">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
