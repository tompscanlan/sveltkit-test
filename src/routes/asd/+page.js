import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log(params);
	// params.
	// if (params.slug === 'hello-world') {
	//     return {
	//         title: 'Hello world!',
	//         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	//     };
	// }

	// throw error(404, 'Not found');
}
