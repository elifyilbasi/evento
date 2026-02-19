import { Suspense } from "react";
import { Metadata } from "next";
import { z } from "zod";
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

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = await params;
  const { page } = await searchParams;
  const parsedPage = pageNumberSchema.safeParse(page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events In ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
