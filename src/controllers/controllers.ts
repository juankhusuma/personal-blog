import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
config();

const prisma = new PrismaClient();
/**
 * Handler for the / route
 * @param {Request} _ 
 * @param {Response} res 
 */
export async function home(_: Request, res: Response): Promise<void> {
	const posts = await prisma.post.findMany({
		include: {
			user: {
				select: {
					username: true
				}
			}
		}
	}).catch(() => res.status(500));
	res.status(200).render('index', { posts });
}

/**
 * Handler for the /post/:id route
 * @param {Request} req
 * @param {Response} res 
 */
export async function postDetails(req: Request, res: Response): Promise<void> {
	const post = await prisma.post.findUnique({
		where: {
			id: parseInt(req.params.id) 
		},
		include: {
			user: {
				select: {
					username: true 
				} 
			} 
		} 
	}).catch(() => res.status(500));
	res.status(200).render('post', { post });
}