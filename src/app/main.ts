import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 5500;
const app = express();

app.use(morgan('dev'));
app.use(express.static('views'));

app.set('view engine', 'pug');

app.get('/', (_, res) => {
	res.render('index', { name: 'John' });
});


app.listen(port, () => console.log(`Server started at port ${port} 🤘`));