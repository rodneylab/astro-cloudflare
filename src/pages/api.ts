import type { APIRoute } from "astro";

export const get: APIRoute = async function get() {
  const secret = import.meta.env.SECRET;
  const text = secret ? secret.length.toString(10) : "-1";
  return new Response(text, {
    status: 200,
  });
};

export const post: APIRoute = async function post({ request }) {
  const { secret } = await request.json();
  const text = secret ? secret.length.toString(10) : "-1";
  return new Response(text, {
		headers: { 'content-type': 'application/json' },
    status: 200,
  });
};
