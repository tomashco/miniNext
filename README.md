## MiniNext: Fastify + Vite (React) + whatever you want

Starting from [**@fastify-vite react-kitchensink**](https://github.com/fastify/fastify-vite/tree/dev/starters/react-kitchensink) starter template I'm exploring how to include all the features I would generally use in a React App, such as:
- typescript support (both server and client side, using [tsx](https://www.npmjs.com/package/tsx) and [esbuild](https://esbuild.github.io/));
- [tRPC](https://trpc.io/) support with [react query](https://tanstack.com/query/v3/);
- [Prisma](https://www.prisma.io/);
- [shadcn/ui](https://ui.shadcn.com/) components;

Apart from that, I went through testing all the features inside the react-kitchensink starter, the most interesting one being **React Server Components**, you can find the example under /actions/data;

For releasing the app, I used [Docker](https://docs.docker.com/get-started/02_our_app/), deployed over [https://fly.io/](https://fly.io/) using github actions, i.e. every time I push on main.

Many thanks to [@galvez](https://github.com/galvez) for the awesome project [**fastify-vite**](https://fastify-vite.dev/)!