import { PrismaClient, Prisma } from '@prisma/client';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


const prisma = new PrismaClient()

export const POST = (async ({ url, request }) => {
    let { content, userId } = await request.json();
    const tweet = await prisma.tweet.create({
        data: {
            content,
            likes: 0,
            userId,
            url: '',
            posted: new Date('01/01/2023'),

        }
    })

    return json(tweet);

}) satisfies RequestHandler;

export const GET = (async ({ url }) => {
    const tweets = await prisma.tweet.findMany()


    return json(tweets);
}) satisfies RequestHandler;