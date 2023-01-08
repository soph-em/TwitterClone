<script lang="ts">
	import type { PageData } from './$types';
	import TextArea from './TextAreaAutosize.svelte';
	let val = '';

	function sendTweet() {
		console.log('POST');
		fetch('/api/tweets', { method: 'POST', body: JSON.stringify({ userId: 1, content: val }) });
		val = '';
	}
	export let tweets;
</script>

<h1>Home</h1>
<div>
	<TextArea bind:value={val} minRows={4} maxRows={40} />
</div>

<button on:click={sendTweet} class="tweetButton">Tweet</button>

{#each tweets.reverse() as tweet}
	<div>
		<p>@twitteruser</p>
		<p>{tweet.content}</p>
	</div>
{/each}

<style>
	h1 {
		font-size: 24px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	button {
		background-color: #1da1f2;
		outline: #1da1f2;
		cursor: pointer;
		border: 2px solid transparent;
		border-radius: 40px;
		width: 25%;
		min-width: 25%;
		min-height: 3rem;
		color: white;
		font-size: large;
		margin-right: 20%;
	}
	.tweetButton {
		align-self: flex-end;
	}

	p {
		font-size: larger;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
