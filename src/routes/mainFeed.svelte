<script lang="ts">
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import TextArea from './TextAreaAutosize.svelte';
	let val = '';

	function sendTweet() {
		fetch('/api/tweets', { method: 'POST', body: JSON.stringify({ userId: 1, content: val }) });
		val = '';
	}

	function likeTweet(tweet: any) {
		fetch('/Like', { method: 'POST', body: JSON.stringify({ tweetId: tweet.id }) });
		tweet.likes += 1;
		tweet.liked = true;
		tweets = tweets;
	}
	export let tweets;
	tweets.reverse();

	// let active = { tweet.liked: false };
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
			<svg
				fill="#1da1f2"
				width="25px"
				height="25px"
				viewBox="0 0 24 24"
				aria-hidden="true"
				class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
				><g
					><path
						d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
					/></g
				></svg
			>
			<!-- gif icon -->
			<svg
				fill="#1da1f2"
				width="25px"
				height="25px"
				viewBox="0 0 24 24"
				aria-hidden="true"
				class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
				><g
					><path
						d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"
					/></g
				></svg
			>
			<!-- list icon -->
			<svg
				fill="#1da1f2"
				width="25px"
				height="25px"
				viewBox="0 0 24 24"
				aria-hidden="true"
				class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
				><g
					><path
						d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
					/></g
				></svg
			>
			<!-- emoji icon -->
			<svg
				fill="#1da1f2"
				width="25px"
				height="25px"
				viewBox="0 0 24 24"
				aria-hidden="true"
				class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
				><g
					><path
						d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"
					/></g
				></svg
			>
			<!-- calendar icon -->
			<svg
				fill="#1da1f2"
				width="25px"
				height="25px"
				viewBox="0 0 24 24"
				aria-hidden="true"
				class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
				><g
					><path
						d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
					/></g
				></svg
			>
			<!-- location icon -->
			<svg
				fill="#1da1f2"
				width="25px"
				height="25px"
				viewBox="0 0 24 24"
				aria-hidden="true"
				class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
				><g
					><path
						d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
					/></g
				></svg
			>
		</div>
		<button on:click={sendTweet} class="tweetButton">Tweet</button>
	</div>
</div>

{#if tweets}
	{#each tweets as tweet}
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
					fill="grey"
					width="25px"
					height="25px"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="tweetIcons r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
					><g
						><path
							d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
						/></g
					></svg
				>
				<!-- retweet -->
				<svg
					fill="grey"
					width="25px"
					height="25px"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="tweetIcons r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
					><g
						><path
							d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
						/></g
					></svg
				>
				<!-- like -->
				<div class="likeButtonandLikes">
					<button class="likes" on:click={() => likeTweet(tweet)}>
						<svg
							class:active={tweet.liked}
							fill="grey"
							width="25px"
							height="25px"
							viewBox="0 0 24 24"
							aria-hidden="true"
							class="tweetIcons r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
							><g
								><path
									d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
								/></g
							></svg
						>
					</button>
					<p class="tweetsLikes">{tweet.likes}</p>
				</div>
				<!-- share -->
				<svg
					fill="grey"
					width="25px"
					height="25px"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="tweetIcons r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
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
	.likeButtonandLikes {
		display: flex;
		flex-direction: row;
	}
	.tweetIcons {
		padding-top: 30px;
	}
	.active {
		fill: red;
	}
	.tweetsLikes {
		padding-top: 15px;
	}
	.likes {
		padding: 0;
		border: none;
		background: none;
	}

	svg:hover {
		fill: black;
	}

	.tweetButtons {
		display: flex;
		justify-content: space-around;
	}
	.tweetBoxNoContent {
		display: flex;
		font-size: 14px;
	}
	.tweetContent {
		display: block;
		margin: 0;
	}
	.composeTweetBox {
		border: 1px solid rgba(231, 231, 231);
		/* max-width: 90%; */
		padding-top: 15px;
		padding-left: 10px;
		padding-bottom: 10px;
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
	.tweetButton {
		background-color: #1da1f2;
		outline: #1da1f2;
		cursor: pointer;
		border: 2px solid transparent;
		border-radius: 40px;
		width: 15%;
		min-width: 15%;
		min-height: 3rem;
		color: white;
		font-size: medium;
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
		font-size: 16px;
		padding-left: 15%;
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
		font-size: medium;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		margin: 20px 0;
	}

	.oneTweet:hover {
		background-color: rgba(231, 231, 231, 0.338);
	}
	.oneTweet {
		padding-top: 15px;
		padding-left: 10px;
		padding-bottom: 10px;
		padding-right: 10px;
		border: 1px solid rgba(231, 231, 231);
		/* max-width: 90%; */
	}
</style>
