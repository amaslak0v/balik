<script>
	// import HelloIconBalik from "$lib/assets/baliwatchi-hello.jpg"
	
	import { onMount } from 'svelte'
	// @ts-ignore
	import mapboxgl from "mapbox-gl";
	mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hc2xha292IiwiYSI6ImNsZjljdmd0MzBzcjMzcGw3dHYwcWttMHgifQ.DvvKXoalTewEq4BNB0t4NQ'
	
	onMount(() => {
		const map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/amaslakov/clhxcf2am007a01qshqt7bmpx",
		center: [115.1384, -8.6500],
		zoom: 12,
		});     
	})

</script>

<!-- <h2 class="h2">Welcome to Baliwatchi!</h2> -->
<div class="container h-full mx-auto flex justify-center items-center">
  <div class="map-container">
    <div id="map"></div>
  </div>
  <div class="space-y-10 text-center flex flex-col items-center">
    <!-- Add other content here if needed -->
  </div>
</div>

<style>
  .map-container {
    margin: 50px; /* Adjust the margin as needed */
    height: calc(100vh - 100px); /* Adjust the height with margins subtracted */
    width: calc(100% - 100px); /* Adjust the width with margins subtracted */
  }

  #map {
    height: 100%;
    width: 100%;
  }
</style>