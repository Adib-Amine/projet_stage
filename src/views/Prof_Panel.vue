<template>
    <div class="container">
        <Sidebar />
        <div class="mt-5"></div>
        <br>
          <router-view/>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
    components: {
        // Navbar,
        Sidebar
    },
}
</script>

<style>

</style>