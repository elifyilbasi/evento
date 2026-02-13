import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";

type EventsPageProps = {
  params: Promise<{ city: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = await params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=austin`,
  );

  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20x] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events In ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <EventsList events={events} />
    </main>
  );
}
