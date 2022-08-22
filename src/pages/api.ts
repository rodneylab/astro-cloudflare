import type { APIRoute } from "astro";

export const get: APIRoute = async function get() {
  const secret = import.meta.env.SECRET;
  const { length } = secret;
  return new Response(length.toString(10), {
    status: 200,
  });
};
