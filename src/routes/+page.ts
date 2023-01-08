import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params,fetch }) => {
    
    const tweets = await (await fetch('/api/tweets')).json();
    return {tweets};

  throw error(404, 'Not found');
}) satisfies PageLoad;