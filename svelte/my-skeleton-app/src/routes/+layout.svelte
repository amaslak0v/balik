<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">BaliWatchi</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="logo-cloud [&>.logo-item]:bg-red-500"
					href="https://www.youtube.com/@Baliwatchi"
					target="_blank"
					rel="noreferrer"
				>
					YouTube	
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.instagram.com/baliwatchi"
					target="_blank"
					rel="noreferrer"
				>
					Instagram	
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- TAGS Sidebar -->
	<svelte:fragment slot="sidebarRight"> 
		<div class="sidebar-right">
			<button type="button" class="btn-icon variant-filled">
				<span>🍳 Breakfast</span>
			</button>
			<div class="tag">
			  🍔 Foodie
			</div>
			<div class="tag">
			  🌙 Nightly
			</div>
		  </div>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>

<style>
	.sidebar-right {
	  @apply h-screen p-4 shadow-md flex flex-col items-center;
	}
  
	.tag {
	  @apply bg-blue-500 text-white p-2 m-2 rounded cursor-pointer;
	}
  </style>
