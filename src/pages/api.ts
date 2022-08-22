import type { APIRoute } from "astro";

export const get: APIRoute = async function get() {
  const secret = import.meta.env.SECRET;
  const text = secret ? secret.length.toString(10) : "-1"; 
  return new Response(text, {
    status: 200,
  });
};
