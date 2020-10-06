<template>
    <nav class="navbar navbar-dark bg-primary navbar-expand-md">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">TimeTable.</a>
        <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a  class="nav-link" href="#">LogOut</a></li>
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
    max-height:50px;
}
</style>