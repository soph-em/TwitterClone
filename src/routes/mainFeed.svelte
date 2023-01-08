<script lang="ts">
	import TextArea from './TextAreaAutosize.svelte';
	let val = '';
</script>

<h1>Home</h1>

<TextArea bind:value={val} minRows={4} maxRows={40} />

<style>
	h1 {
		font-size: 24px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	/* textarea {
		resize: none;
		outline: 0;
		border-width: 0 0 2px;
		border-color: lightgray;
		font-size: 24px;
	} */
</style>
