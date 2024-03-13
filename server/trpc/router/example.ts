import { z } from "zod";
import { router, publicProcedure } from "../trpc";

const ExampleRouter = router({
  exampleWithArgs: publicProcedure
    .input(
      z.object({
        message: z.string(),
        test: z.number(),
      })
    )
    .mutation((req) => {
      return { info: req.input.message + req.input.test };
    }),

  example: publicProcedure.query(async ({ ctx }) => {
    return { info: 42 };
  }),
});

export default ExampleRouter;
