<template>
    <div>
        <app-server-status v-for="server in 5" v-bind:key="server.id"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    export default {
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>