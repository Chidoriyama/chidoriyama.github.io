<script>
	import Mikey from '$lib/assets/avatars/mikey.png';

	//lineup
	import Ant from '$lib/assets/avatars/ant.png';
	import Bacon from '$lib/assets/avatars/bacon.png';
	import Dethrin from '$lib/assets/avatars/dethrin.png';
	import Rod from '$lib/assets/avatars/rod.png';
	import Silvershi from '$lib/assets/avatars/silvershi.png';
	import Yes from '$lib/assets/avatars/yes.png';
	import Icon from '$lib/assets/icon.png';

	//backups
	import Mai from "$lib/assets/avatars/mai.png"
	import Ji from "$lib/assets/avatars/ji.png"
	import Lamborghini from "$lib/assets/avatars/lamborghini.png"
	import Washedup from "$lib/assets/avatars/washedup.png"
	import Kyo from "$lib/assets/avatars/kyo.png"
	import Akuma from "$lib/assets/avatars/akuma.png"

	// https://tr.rbxcdn.com/35f388aad2041cd3c7782b90c7dc7a33/128/128/Image/Jpeg

	const lineup = [
		{ name: 'Dethrin', position: 'Setter', avatar: Dethrin },
		{ name: 'Yes', position: 'Left spiker', avatar: Yes },
		{ name: 'silvershi123', position: 'Right spiker', avatar: Silvershi },
		{ name: 'ItsMeRod', position: 'Libero', avatar: Rod },
		{ name: 'bacon hair', position: 'Right backrow', avatar: Bacon },
		{ name: 'ColdHeartedAnt', position: 'Left backrow', avatar: Ant }
	];

	const backupLineup = [
		{ name: "mai", position: "Setter", avatar: Mai },
		{ name: "Ji", position: "Left spiker", avatar: Ji },
		{ name: "LAMBORGHINI", position: "Right spiker", avatar: Lamborghini },
		{ name: "washedup", position: "Libero", avatar: Washedup },
		{ name: "kyo", position: "Right backrow", avatar: Kyo },
		{ name: "AkumaReleoZ", position: "Left backrow", avatar: Akuma },
	]
</script>

<div>
	<div class="hero bg-base-100 flex justify-center lg:justify-start">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src={Icon}
				height="128"
				width="128"
				class="max-w-sm rounded-full"
				alt="volleybal 4.2 icon"
			/>
			<div>
				<h5 class="text-2xl font-bold">Chidoriyama Academy</h5>
				<p class="my-2">
					We are a Volleyball Team on <a
						href="https://www.roblox.com/games/3840352284/Volleyball-4-2"
						class="link-hover link-secondary">Volleybal 4.2</a
					>, we are a fairly new team and we have a vision to be one of the best team out there
				</p>
				<a class="link-hover link-secondary" href="/about">More</a>
			</div>
		</div>
	</div>

	<div class="flex justify-center">
		<div class="stats bg-base-200 shadow text-black">
			<div class="stat">
				<div class="stat-figure text-secondary" />
				<div class="stat-title">Total Members</div>
				<div class="stat-value text-secondary">35</div>
				<div class="stat-desc">And still growing!</div>
			</div>
			<div class="stat">
				<div class="stat-figure text-secondary" />
				<div class="stat-title">Scrims Won</div>
				<div class="stat-value text-secondary">4</div>
				<!-- <div class="stat-desc"></div> -->
			</div>
		</div>
	</div>

	<div class="flex flex-col justify-center items-center p-10">

		<span class="text-secondary text-xs">(hover to see position)</span>
		<div id="special-people" class="grid md:grid-cols-2 grid-flow-col gap-4 lg:gap-20">
			<div class="flex flex-col items-center">
				<h2 class="text-2xl font-semibold mb-10">Our captain</h2>
				<div class="card w-max bg-base-100 shadow-xl image-full mb-10">
					<figure>
						<img src={Mikey} height="128" width="128" alt="player avatar" class="m-0" />
					</figure>
					<div
						class="card-body p-1 w-full h-full flex items-center justify-center tooltip"
						data-tip="Middle Blocker"
					>
						<div>
							<h2 class="card-title text-sm">Mikey</h2>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col items-center">
				<h2 class="text-2xl font-semibold mb-10">Our coach</h2>
				<div class="card w-max bg-base-100 shadow-xl image-full mb-10">
					<figure>
						<img src={Kyo} height="128" width="128" alt="player avatar" class="m-0" />
					</figure>
					<div
						class="card-body p-1 w-full h-full flex items-center justify-center tooltip"
						data-tip="Right backrow"
					>
						<div>
							<h2 class="card-title text-sm">kyo</h2>
						</div>
					</div>
				</div>
			</div>
		</div>

		<h2 class="text-2xl font-semibold mb-10">Our core member</h2>
		<div id="main-players" class="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 mb-10">
			{#each lineup as player}
				<div class="card w-max bg-base-100 shadow-xl image-full">
					<figure>
						<img src={player.avatar} height="128" width="128" alt="player avatar" class="m-0" />
					</figure>
					<div
						class="card-body p-1 w-full h-full flex items-center justify-center tooltip"
						data-tip={player.position}
					>
						<div>
							<h2 class="card-title text-sm">{player.name}</h2>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<h2 class="text-2xl font-semibold mb-10">Backup lineup</h2>
		<div id="main-players" class="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 mb-10">
			{#each backupLineup as player}
				<div class="card w-max bg-base-100 shadow-xl image-full">
					<figure>
						<img src={player.avatar} height="128" width="128" alt="player avatar" class="m-0" />
					</figure>
					<div
						class="card-body p-1 w-full h-full flex items-center justify-center tooltip"
						data-tip={player.position}
					>
						<div>
							<h2 class="card-title text-sm">{player.name}</h2>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
