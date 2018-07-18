<template>
    <div class="banner">
        <img v-for="(m,idx) in banner" :key="idx" :src="m.src" :alt="m.alt">
    </div>
</template>
<script>
    export default {
        props: ["banner"]
    };
</script>