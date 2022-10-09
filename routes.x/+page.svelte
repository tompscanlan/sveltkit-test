<script>
	import Counter from './Counter.svelte';
	import welcome_fallback from '$lib/images/svelte-welcome.webp';
	import welcome from '$lib/images/joanna-kosinska-1_CMoFsPfso-unsplash.jpg';

	import { talks, ticketsPrices } from '$lib/data/test-data.json';

	let count = 0;

	$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

<svelte:head>
	<title>Home!</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<button on:click={handleClick}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>

	<h1>
		<span class="welcome">
			<picture>
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<img src={welcome} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
		<br />
		{@debug talks, ticketsPrices, count}
		<!-- {@debug} -->
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 75% 0;
		/* padding: 0 100 500 33; */
		/* padding: 0 0 calc(100% * 495 / 2048) 0; */
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
		clip-path: inset(100px 0px);
	}
</style>
