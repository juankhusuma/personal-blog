/**
 * Routes definition and handling
 * @author juan.d.khusuma
 */

import { Router } from 'express';
import { home, postDetails } from '../controllers/controllers';
import { config } from 'dotenv';
import { createClient } from 'redis';
import Cache from 'express-redis-cache';
config();

/** Creating a cache client */
const cache = Cache({
	client: createClient({
		url: process.env.CACHE_URL
	}),
	expire: 300
});

const router = Router();
router.use(cache.route()); // Use a middleware to cache to a redis server

router.get('/', home);
router.get('/post/:id', postDetails);

export default router;