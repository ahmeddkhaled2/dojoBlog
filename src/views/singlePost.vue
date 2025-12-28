<template>
    
    <router-link :to ="`details/${post.id}`">{{post.title}}</router-link> <br> {{title}} <br>
    <span v-for = "tag in post.tags" :key = "tag">#{{tag}}</span>
    <br><br><br>

</template>

<script>
import { computed } from 'vue'
import details from '../views/details.vue'
export default {

    components: {details},

    props: ['post'],

    setup(props){
        const title = computed( () => {
            return props.post.body.substring(0,50);
        })

        return {title}
    }
}
</script>

<style>

</style>