FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN npx --yes prisma generate
RUN pnpm run build

FROM base
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

EXPOSE 3000

RUN --mount=type=secret,id=DB_URL \
    DB_URL="$(cat /run/secrets/DB_URL)" 

CMD ["pnpm", "start"]