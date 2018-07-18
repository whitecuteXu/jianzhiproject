<template>
    <div class="banner">
        <img v-for="(m,idx) in banner" :key="idx" :src="m.src" :alt="m.alt" v-if="m.show" @click="entrance(m.id)">
    </div>
</template>
<script>
    export default {
        props: ["banner"],
        methods: {
            entrance(id) {
                window.location.href = "#/signUp/entrance/" + id;
            }
        }
    };
</script>