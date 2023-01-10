<script lang="ts">
	import type { PageData } from './$types';
	import TextArea from './TextAreaAutosize.svelte';
	let val = '';

	function sendTweet() {
		fetch('/api/tweets', { method: 'POST', body: JSON.stringify({ userId: 1, content: val }) });
		// fetch('/api.tweets', {
		// 	method: 'POST',
		// 	body: JSON.stringify({ posted: new Date().toLocaleString() })
		// });
		val = '';
	}
	export let tweets;
	console.log('tweets:', tweets);
</script>

<h1>Home</h1>
<div>
	<TextArea bind:value={val} minRows={4} maxRows={40} />
</div>

<button on:click={sendTweet} class="tweetButton">Tweet</button>
{#if tweets}
	{#each tweets.reverse() as tweet}
		<div>
			<div class="handleTime">
				<p class="userID">@twitteruser</p>
				<p>&nbsp;·&nbsp;</p>
				<p>{new Date(tweet.posted).toLocaleString()}</p>
			</div>
			<p class="tweet">{tweet.content}</p>
		</div>
	{/each}
{/if}

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

	.tweet {
		font-size: large;
	}

	.userID {
		color: grey;
	}

	.handleTime {
		display: flex;
	}
	p {
		font-size: larger;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
