import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { publicProcedure } from "../trpc";

const createProductSchema = z.object({
  // Describe your fields here
});

export const productRouter = {
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return [];
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));
      // return ctx.db.query.Post.findFirst({
      //   where: eq(Post.id, input.id),
      // });
    }),

  create: publicProcedure
    .input(createProductSchema)
    .mutation(({ ctx, input }) => {
      // return ctx.db.insert(Post).values(input);
    }),

  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    // return ctx.db.delete(Post).where(eq(Post.id, input));
  }),
} satisfies TRPCRouterRecord;
