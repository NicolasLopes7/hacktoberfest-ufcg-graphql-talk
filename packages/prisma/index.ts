export * from '@prisma/client/index';

import { PrismaClient } from '@prisma/client';

//@ts-ignore
export const prisma: PrismaClient = global.prisma || new PrismaClient();
//@ts-ignore
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
