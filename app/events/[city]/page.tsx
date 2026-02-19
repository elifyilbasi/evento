import { Suspense } from "react";
import { Metadata } from "next";
import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: EventsPageProps): Promise<Metadata> {
  const { city } = await params;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = await params;
  const resolvedSearchParams = await searchParams;

  const rawPage = Array.isArray(resolvedSearchParams?.page)
    ? resolvedSearchParams.page[0]
    : resolvedSearchParams?.page;
  const page = Math.max(1, Number(rawPage ?? 1) || 1);

  return (
    <main className="flex flex-col items-center py-24 px-[20x] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events In ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
