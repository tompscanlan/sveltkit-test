<script>
	let count = 0;

	function incrementCount() {
		count += 1;
	}

	import Inner from "./Inner.svelte";
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<Inner/>