import type { APIRoute } from 'astro';

export const get: APIRoute = async function get() {
const secret = import.meta.env.SECRET;
	return new Response(secret, {
		status: 200,
	});
}
