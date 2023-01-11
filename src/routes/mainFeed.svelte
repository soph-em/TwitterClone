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
					fill="#1da1f2"
					d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z"
				/></svg
			>
			<!-- gif icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><path
					fill="#1da1f2"
					d="M8.5 14h1q.425 0 .713-.288q.287-.287.287-.712v-1h-1v1h-1v-2h2q0-.425-.287-.713Q9.925 10 9.5 10h-1q-.425 0-.712.287q-.288.288-.288.713v2q0 .425.288.712q.287.288.712.288Zm3 0h1v-4h-1Zm2 0h1v-1.5H16v-1h-1.5V11h2v-1h-3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"
				/></svg
			>
			<!-- list icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><g
					fill="none"
					stroke="#1da1f2"
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
					stroke="#1da1f2"
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
					fill="#1da1f2"
					d="M6 1v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6.1c1.26 1.24 2.99 2 4.9 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.64-2-4.9V5a2 2 0 0 0-2-2h-1V1h-2v2H8V1M5 5h14v2H5m0 2h14v.67c-.91-.43-1.93-.67-3-.67c-3.87 0-7 3.13-7 7c0 1.07.24 2.09.67 3H5m11-7.85c2.68 0 4.85 2.17 4.85 4.85c0 2.68-2.17 4.85-4.85 4.85c-2.68 0-4.85-2.17-4.85-4.85c0-2.68 2.17-4.85 4.85-4.85M15 13v3.69l3.19 1.84l.75-1.3l-2.44-1.41V13Z"
				/></svg
			>
			<!-- location icon -->
			<svg width="30px" height="30px" viewBox="0 0 24 24"
				><path
					fill="#1da1f2"
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
		<!-- puts each tweet into div -->
		<div class="oneTweet">
			<div class="handleTime">
				<div class="tweetBoxNoContent">
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
				<br />
			</div>
			<div class="tweetContent">
				<p class="tweet">{tweet.content}</p>
			</div>
			<!-- Like/Share/Etc -->
			<div class="tweetButtons">
				<!-- reply -->
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
					><g
						><path
							d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
						/></g
					></svg
				>
				<!-- retweet -->
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
					><g
						><path
							d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
						/></g
					></svg
				>
				<!-- like -->
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
					><g
						><path
							d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
						/></g
					></svg
				>
				<!-- share -->
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
					><g
						><path
							d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
						/></g
					></svg
				>
			</div>
		</div>
	{/each}
{/if}

<style>
	.tweetButtons {
		padding: 8px;
		display: flex;

		justify-content: space-around;
		padding: 25px 10px 0;
	}
	.tweetBoxNoContent {
		display: flex;
	}
	.tweetContent {
		display: block;
		margin: 0;
	}
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
		margin: 0;
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
