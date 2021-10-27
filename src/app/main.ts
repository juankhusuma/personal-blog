import express from 'express';
import morgan from 'morgan';
import UserRouter from '../routes/user';
import bp from 'body-parser';

const port = process.env.PORT || 6500;
const app = express();

app.use(morgan('dev'));
app.use(express.static('views'));

app.use(bp.json());

/** Router Registrations */
app.use('/', UserRouter);

app.set('view engine', 'pug');

app.get('/', (_, res) => {
	res.render('index');
});


app.listen(port, () => console.log(`Server started at port ${port} 🤘`));