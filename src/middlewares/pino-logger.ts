import type { Context, MiddlewareHandler } from "hono";

import { type Env, pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

import type { AppBindings } from "@/types";

export function logger() {
  return ((c, next) => pinoLogger({
    pino: pino({ level: c.env.LOG_LEVEL || "info" }, c.env.NODE_ENV === "production"
      ? undefined
      : pretty({
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        })),
  })(c as unknown as Context<Env>, next)) satisfies MiddlewareHandler<AppBindings>;
}
