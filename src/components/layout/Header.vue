<template>
    <nav class="navbar navbar-dark bg-primary navbar-expand-md">
        <div class="container-fluid">
        <router-link class="navbar-brand" to="/">TimeTable.</router-link>
        <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> <router-link  class="nav-link" to="/student">Student</router-link></li>
                </ul>
            </div>
        </div>    
    </nav>
</template>

<script>
export default {
    name:"Header"    
}
</script>

<style scoped>
nav{
    max-height:45px;
}
</style>