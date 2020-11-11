<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">Vue workshop</router-link>

    <div class="collapse navbar-collapse" id="navbarColor01">
			<ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="route in routes" :key="route.name">
            <router-link class="nav-link" :to="route.link">{{route.label}}</router-link>
        </li>
			</ul>
    </div>
	</nav>
</template>

<script>
export default {
	props: {
		routes: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style>

</style>
