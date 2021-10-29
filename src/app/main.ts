import express from 'express';
import morgan from 'morgan';
import bp from 'body-parser';
import { PrismaClient } from '@prisma/client';

const port = process.env.PORT || 6500;
const app = express();
const prisma = new PrismaClient();

app.use(morgan('dev'));
app.use(express.static('views'));
app.use(bp.json());

app.set('view engine', 'pug');

app.get('/', async (_, res) => {
	const posts = await prisma.post.findMany({
		include: {
			user: {
				select: {
					username: true
				}
			}
		}
	});
	res.status(200).render('index', { posts });
});

app.get('/post/:id', async (req, res) => {
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
	});
	res.status(200).render('post', { post });
});


app.listen(port, () => console.log(`Server started at port ${port} 🤘`));