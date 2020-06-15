import axios from 'axios';

const apiurl = '---';

axios
	.get(apiurl)
	.then((res) => console.log(res))
	.catch((err) => {
		throw err;
	});

console.log('hello world!');
