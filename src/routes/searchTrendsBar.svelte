<script lang="ts"></script>

<!-- part of the website on the right that has the search bar and trends bar -->
<section>
	<div class="search">
		<svg width="30px" height="30px" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"
			/></svg
		>
		<input placeholder="search" />
	</div>

	<div class="trending">
		<p>What's Happening</p>
	</div>
</section>

<style>
	.search {
		display: flex;
		flex-direction: row;
		background-color: #e9e9e9;
		border-radius: 40px;
		min-height: 5vh;
		max-height: 5vh;
		max-width: 300px;
	}

	.trending {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		background-color: #e9e9e9;
		border-radius: 30px;
		min-height: 50vh;
		max-height: 50vh;
		max-width: 300px;
	}
	p {
		font-size: 18px;
		font-style: bold;
		font-weight: bold;
		padding-left: 25px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	input {
		background-color: #e9e9e9;
		outline: 0;
		border: 0cm;
		border-radius: 40px;

		font-size: 20px;
	}
	svg {
		align-self: center;
		padding-left: 15px;
		padding-right: 10px;
	}
</style>
