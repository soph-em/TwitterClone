import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const POST = (async ({ request }) => {
	const { tweetId } = await request.json();

	const updatedtweet = await prisma.tweet.update({
		where: { id: tweetId },
		data: { likes: { increment: 1 } }
	});

	return new Response();
}) satisfies RequestHandler;
