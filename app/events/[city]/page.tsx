import EventsList from "@/components/events-list";
import { Suspense } from "react";
import H1 from "@/components/h1";
import Loading from "./loading";

type EventsPageProps = {
  params: Promise<{ city: string }>;
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-24 px-[20x] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events In ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
