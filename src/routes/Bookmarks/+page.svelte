<script>
	import OptionsBar from '.././optionsBar.svelte';

	import SearchTrendsBar from '.././searchTrendsBar.svelte';
</script>

<section>
	<div class="options">
		<OptionsBar />
	</div>
	<div class="feed">
		<h1>👷Under construction!👷</h1>
	</div>
	<div class="search">
		<SearchTrendsBar />
	</div>
</section>

<style>
	section {
		display: flex;
	}
	h1 {
		font-size: 36px;
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
