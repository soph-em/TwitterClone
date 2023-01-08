<script lang="ts">
	export let value = '';
	export let minRows = 1;
	export let maxRows;

	$: minHeight = `${1 + minRows * 1.2}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;
</script>

<div class="container">
	<pre aria-hidden="true" style="min-height: {minHeight}; max-height: {maxHeight}">{value +
			'\n'}</pre>

	<textarea placeholder="What's Happening?" bind:value />
</div>

<style>
	.container {
		position: relative;
	}

	pre,
	textarea {
		padding: 0.5em;
		box-sizing: border-box;
		/* border: 1px solid #eee; */
		line-height: 1.2;
		overflow: hidden;
		resize: none;
		outline: 0;
		border-width: 0 0 2px;
		border-color: lightgray;
		font-size: 24px;
	}

	textarea {
		position: absolute;
		width: 80%;
		height: 100%;
		top: 0;
		resize: none;
	}
</style>
