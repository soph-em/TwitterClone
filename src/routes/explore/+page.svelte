<script>
	import OptionsBar from '.././optionsBar.svelte';

	import SearchTrendsBar from '.././searchTrendsBar.svelte';
</script>

<section>
	<div class="options">
		<OptionsBar />
	</div>
	<div class="feed">
		<h1>Under construction!</h1>
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
		min-width: 30%;
	}

	.feed {
		min-width: 30%;
	}
	.search {
		align-self: right;
	}
</style>
