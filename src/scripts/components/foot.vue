<template>
    <footer class="foot">
        <div class="box">
            <div class="wrap" v-for="(item,idx) in footList" :key="idx" :class="item.active" v-if="item.show">
                <img :src="item.image">
                <p>{{item.text}}</p>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        props: ["footList"]
    }
</script>