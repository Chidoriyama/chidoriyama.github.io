<script>
    const urls = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
    ]
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-primary">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="flex-1 px-2 mx-2"><a href="/" class="font-semibold text-lg">Chidoriyama</a></div>
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
                    {#each urls as nav}
					    <li><a href={nav.href}>{nav.text}</a></li>
                    {/each}
				</ul>
			</div>
		</div>
		<!-- Page content here -->
		<div id="main-content" class="h-full">
            <slot/>
        </div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100">
			<!-- Sidebar content here -->
			{#each urls as nav}
				<li><a href={nav.href}>{nav.text}</a></li>
            {/each}
		</ul>
	</div>
</div>
