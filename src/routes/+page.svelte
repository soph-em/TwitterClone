<script lang="ts">
	import OptionsBar from './optionsBar.svelte';
	import Feed from './mainFeed.svelte';
	import SearchTrendsBar from './searchTrendsBar.svelte';
</script>

<!-- 
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<section>
	<div class="options">
		<OptionsBar />
	</div>
	<div class="feed">
		<Feed />
	</div>
	<div class="search">
		<SearchTrendsBar />
	</div>
</section>

<style>
	section {
		display: flex;
	}
	.options {
		min-width: 20%;
		padding-left: 10%;
	}

	.feed {
		min-width: 40%;
	}
	.search {
		margin-left: auto;
		padding-right: 15%;
		padding-top: 50px;
	}
</style>
