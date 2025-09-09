// lib/db.ts
import { PrismaClient } from "@/generated/prisma";

declare global {
  // Em arquivos TypeScript precisamos declarar essa var para o TS não reclamar.
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db =
  globalThis.prisma ??
  new PrismaClient({
    log: ["query"], // descomente se quiser ver as queries no console
  });

// Em desenvolvimento (com hot reload), reaproveitamos a instância.
// Em produção, cria-se apenas uma vez por processo.
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
