import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function getConnectionString() {
  const connectionString =
    process.env.DATABASE_URL ??
    process.env.POSTGRES_PRISMA_URL ??
    process.env.POSTGRES_URL;

  if (!connectionString) {
    throw new Error(
      "Missing database connection string. Set DATABASE_URL or POSTGRES_PRISMA_URL.",
    );
  }

  return connectionString;
}

const prismaClientSingleton = () => {
  const connectionString = getConnectionString();
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
