// Import server in Deno
import { serve } from 'https://deno.land/std/http/server.ts'

const handler = async (req: Request): Promise<Response> => {
	const res = await fetch('https://api.github.com/users/antronic', {
		headers: {
			accept: 'application/json',
		}
	})

	return new Response(res.body)
}

// Server listen on port 8000 (as default)
serve(handler)
