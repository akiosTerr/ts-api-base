import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 4444;

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
	res.json({
		main: 'hello world',
	});
});

app.listen(port, () => {
	console.log(`listening on ${port}`);
});
