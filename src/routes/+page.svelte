<script lang="ts">
	import OptionsBar from './optionsBar.svelte';
	import Feed from './mainFeed.svelte';
	import SearchTrendsBar from './searchTrendsBar.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	// console.log(data);
</script>

<section>
	<div class="options">
		<OptionsBar />
	</div>
	<div class="feed">
		<Feed tweets={data.tweets} />
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
		padding-left: 10vh;
	}

	.feed {
		min-width: 45%;
		display: flex;
		flex-direction: column;
	}
	.search {
		margin-left: auto;
		padding-right: 5%;
		padding-top: 50px;
	}
</style>
