/**
 * The entry point of the application
 * @author juan.d.khusuma
 */

import express from 'express';
import morgan from 'morgan';
import bp from 'body-parser';
import Routes from '../routes/routes';
import { config } from 'dotenv';
config();

const port = process.env.PORT || 6500;
const app = express();

app.use(morgan('dev'));
app.use(express.static('views'));
app.use(bp.json());
app.use(Routes);
app.set('view engine', 'pug'); // Set the view engine to pug

app.listen(port, () => console.log(`Server started at port ${port} 🤘`));