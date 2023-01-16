<script lang="ts">
	import TextInput from './textAreaPre.svelte';
	let val = '';
	export let value = '';
	export let minRows = 1;
	export let maxRows;
	// $: minHeight = `${1 + minRows * 1.2}em`;
	// $: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;
	let tweet = '';
</script>

<div class="container">
	<div class="pfp">
		<svg width="60px" height="60px" viewBox="0 0 48 48"
			><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"
				><path
					d="M14.809 34.714c6.845-1 11.558-.914 18.412.035A2.077 2.077 0 0 1 35 36.818c0 .48-.165.946-.463 1.31A61.165 61.165 0 0 1 32.941 40h2.641c.166-.198.333-.4.502-.605A4.071 4.071 0 0 0 37 36.819c0-2.025-1.478-3.77-3.505-4.05c-7.016-.971-11.92-1.064-18.975-.033c-2.048.299-3.52 2.071-3.52 4.11c0 .905.295 1.8.854 2.525c.165.214.328.424.49.63h2.577a57.88 57.88 0 0 1-1.482-1.85A2.144 2.144 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131ZM24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
				/><path
					d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
				/></g
			></svg
		>
	</div>
	<div class="text">
		<div class="textcontainer ">
			<div
				bind:innerHTML={tweet}
				class="textarea editable"
				contenteditable="true"
				data-placeholder="What's Happening?"
			/>
		</div>
	</div>
</div>

<style>
	.pfp {
		margin-left: 15px;
	}
	.editable:empty:before {
		content: attr(data-placeholder);
		font-weight: lighter;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: gray;
		font-size: 20px;
	}
	.textarea {
		width: 40rem;
		min-height: 5rem;
		height: auto;
		align-items: flex-start;

		background: white;
		font-size: 30px;
	}
	.container {
		position: relative;
		display: flex;
	}

	.text {
		display: flex;
	}
	svg {
		align-self: flex-start;
		align-self: left;
	}

	.textcontainer {
		max-width: 80%;
		margin-top: 10px;
	}
</style>
