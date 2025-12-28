<template>
    <div v-for ="post in myPosts" :key="post.id"> 
        <singlePost :post = "post"/>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import singlePost from './singlePost.vue'

export default {
    components: {
        singlePost
    },

    props: ['myPosts'],

    setup(){
        onMounted(() => console.log("mounted"));
        onUnmounted(()=>console.log("unMounted"));
        onUpdated(() => console.log("Updated"));
    }
}
</script>

<style>

</style>