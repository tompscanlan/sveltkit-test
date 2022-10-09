<script>
	var N = 10;
	var a = Array(N),
		b = 0;
	while (b < N) {
		a[b] = b;
		b++;
	}

	let string = `this string contains some <strong>HTML!!!</strong>`;
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/asd">Asd</a>
	<h3>Tests</h3>
	<ul>
		{#each a as n}
			<li>
				<a href="/test{n}">Test-{n}</a>
			</li>
		{/each}
	</ul>
</nav>

<p>Current URL: {$page.url.pathname}</p>
{@debug $page}

<slot />
