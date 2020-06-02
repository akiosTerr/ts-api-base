import express from 'express';

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		SYNC: 'life',
	});
});

app.listen(port, () => {
	console.log('====================================');
	console.log(`Server Running on port ${port}`);
	console.log('====================================');
});
