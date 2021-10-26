import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const UserRouter = express.Router({
	caseSensitive: true,
});

/** Get all users */
UserRouter.get('/user', async (_, res, next) => {
	try {
		const users = await prisma.user.findMany(); 
		return res.json(users);
	} catch (error) {
		return next(error);
	}
});
/** Get user by id */
UserRouter.get('/user/:id', async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const user = await prisma.user.findUnique({ where: { id } });
		return res.json(user);
	} catch (error) {
		return next(error);
	}
});
/** Creates new user */
UserRouter.post('/user', async (req, res, next) => {
	try {
		const userInput = req.body as Prisma.UserCreateInput;
		const user = await prisma.user.create({ data: {...userInput} });
		return res.json(user);
	} catch (error) {
		return next(error);
	}
});
/** Update an user */
UserRouter.put('/user/:id', async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const userUpdateInput = req.body as Prisma.UserUpdateInput; 
		const user = await prisma.user.update({ where: { id }, data: {...userUpdateInput} });
		return res.json(user);
	} catch (error) {
		return next(error);
	}
});
/** Delete an user */
UserRouter.delete('/user/:id', async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const user = await prisma.user.delete({ where: { id } });
		return res.json(user);
	} catch (error) {
		return next(error);
	}
});

export default UserRouter;