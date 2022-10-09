<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
	import { page } from '$app/stores';
</script>

<p>Current URL: {$page.url.pathname}</p>

{@debug $page}

<p>{string}</p>
<p>{@html string}</p>
