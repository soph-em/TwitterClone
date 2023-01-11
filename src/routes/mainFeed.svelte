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

<!-- div of entire compose tweet box -->
<div class="composeTweetBox">
	<h1>Home</h1>
	<!-- textarea div to compose tweet -->
	<div class="composeTweetText">
		<TextArea bind:value={val} minRows={4} maxRows={40} />
	</div>
	<div class="iconsAndButton">
		<!-- div for just icons in compose tweet box -->
		<div class="icons">
			<!-- photo icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z"
				/></svg
			>
			<!-- gif icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M8.5 14h1q.425 0 .713-.288q.287-.287.287-.712v-1h-1v1h-1v-2h2q0-.425-.287-.713Q9.925 10 9.5 10h-1q-.425 0-.712.287q-.288.288-.288.713v2q0 .425.288.712q.287.288.712.288Zm3 0h1v-4h-1Zm2 0h1v-1.5H16v-1h-1.5V11h2v-1h-3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"
				/></svg
			>
			<!-- list icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					><path d="M11 5h10M11 9h5" /><rect width="4" height="4" x="3" y="5" rx="1" /><path
						d="M11 15h10m-10 4h5"
					/><rect width="4" height="4" x="3" y="15" rx="1" /></g
				></svg
			>
			<!-- emoji icon -->
			<svg width="30px" height="30px" viewBox="0 0 16 16"
				><g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					><circle cx="8" cy="8" r="6.25" /><path
						d="M9.75 6.25v-.5m-3.5.5v-.5m-.5 4s.5 1.5 2.25 1.5s2.25-1.5 2.25-1.5"
					/></g
				></svg
			>
			<!-- calendar icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M6 1v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6.1c1.26 1.24 2.99 2 4.9 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.64-2-4.9V5a2 2 0 0 0-2-2h-1V1h-2v2H8V1M5 5h14v2H5m0 2h14v.67c-.91-.43-1.93-.67-3-.67c-3.87 0-7 3.13-7 7c0 1.07.24 2.09.67 3H5m11-7.85c2.68 0 4.85 2.17 4.85 4.85c0 2.68-2.17 4.85-4.85 4.85c-2.68 0-4.85-2.17-4.85-4.85c0-2.68 2.17-4.85 4.85-4.85M15 13v3.69l3.19 1.84l.75-1.3l-2.44-1.41V13Z"
				/></svg
			>
			<!-- location icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><path
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					d="M12 22s-8-6-8-12c0-5 4-8 8-8s8 3 8 8c0 6-8 12-8 12Zm0-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
				/></svg
			>
		</div>
		<button on:click={sendTweet} class="tweetButton">Tweet</button>
	</div>
</div>

{#if tweets}
	{#each tweets.reverse() as tweet}
		<div class="oneTweet">
			<div class="handleTime">
				<div>
					<!-- profile pic icon -->
					<svg width="60px" height="60px" viewBox="0 0 48 48"
						><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"
							><path
								d="M14.809 34.714c6.845-1 11.558-.914 18.412.035A2.077 2.077 0 0 1 35 36.818c0 .48-.165.946-.463 1.31A61.165 61.165 0 0 1 32.941 40h2.641c.166-.198.333-.4.502-.605A4.071 4.071 0 0 0 37 36.819c0-2.025-1.478-3.77-3.505-4.05c-7.016-.971-11.92-1.064-18.975-.033c-2.048.299-3.52 2.071-3.52 4.11c0 .905.295 1.8.854 2.525c.165.214.328.424.49.63h2.577a57.88 57.88 0 0 1-1.482-1.85A2.144 2.144 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131ZM24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
							/><path
								d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
							/></g
						></svg
					>
					<p class="userID">@twitteruser</p>
					<p>&nbsp;·&nbsp;</p>
					<p>{new Date(tweet.posted).toLocaleString()}</p>
				</div>
				<p class="tweet">{tweet.content}</p>
			</div>
		</div>
	{/each}
{/if}

<style>
	.composeTweetBox {
		border: 1px solid rgba(231, 231, 231);
		max-width: 90%;
		padding-top: 15px;
		padding-left: 10px;
		padding-bottom: 25px;
		padding-right: 10px;
	}
	.composeTweetText {
		max-width: 70;
	}
	.icons {
		display: flex;
		/* max-width: 30%; */
		align-items: space-between;
		padding: 10px;
		padding-left: 50px;
	}

	.iconsAndButton {
		display: flex;
		justify-content: space-between;
		/* flex-direction: column; */
	}

	h1 {
		font-size: 24px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	svg {
		padding: 8px;
	}
	button {
		background-color: #1da1f2;
		outline: #1da1f2;
		cursor: pointer;
		border: 2px solid transparent;
		border-radius: 40px;
		width: 15%;
		min-width: 15%;
		min-height: 3rem;
		color: white;
		font-size: large;
		/* margin-left: 20%; */
		margin-top: 10px;
		margin-right: 10px;
		margin-bottom: 20px;
		align-self: right;
		justify-self: right;
		justify-self: flex-end;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: bold;
	}
	.tweetButton {
		align-self: flex-end;
	}

	.tweet {
		font-size: large;
		padding-left: 10%;
	}

	.userID {
		color: grey;
	}

	.handleTime {
		display: flex;
		flex-direction: row;
	}
	p {
		font-size: larger;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	.oneTweet:hover {
		background-color: rgba(231, 231, 231, 0.338);
	}
	.oneTweet {
		padding-top: 15px;
		padding-left: 10px;
		padding-bottom: 25px;
		padding-right: 10px;
		border: 1px solid rgba(231, 231, 231);
		max-width: 90%;
	}
</style>
