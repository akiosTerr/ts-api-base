import express from 'express';

const createServer = (port: number, root: string) => {
	const app = express();
	app.use(express.json());
	app.get('/', (req, res) => {
		res.json({
			main: root,
		});
	});
	app.listen(port, () => {
		console.log(`listening on ${port}`);
	});
	return app;
};

export default createServer;
