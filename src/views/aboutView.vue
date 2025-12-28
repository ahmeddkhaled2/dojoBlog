<!-- <template>
    <h1>About page</h1>
    <p>This is {{name}} and my age is {{age}}</p>
  
    <button @click = "handleButton">Click me</button>
    <button @click = "resetButton">reset</button><br><br>
    
    <label>Seach in names</label>
    <input v-model = "input">
    <p>search term is {{input}}</p>
    <p>{{searchResult}}</p>


    <posts v-if = "showPost" :myPosts = "posts"/>

    <button @click = "showPost = !showPost">
        <span v-if = "showPost">Hide posts</span>
        <span v-if = "!showPost">Show posts </span>
    </button>

    <button @click = "posts.pop()">Remove Post</button>

</template>

<script>
import Posts from './posts.vue'
import {ref, computed, watch, watchEffect} from 'vue'
import getPosts from '../composables/getPosts'


export default {

    components: {
        Posts
    },

    setup(){

        // Attributes
        let name = ref("ahmed")
        let age = ref(18)
        let input = ref("Ana input")
        let names =  ['Bmw', 'Elnasr', 'Jeep', 'Mercedes', 'Hundai', 'BYD']
        let showPost = ref(true);


        // Functions
        const handleButton = () => {
            age.value++;
            name.value = "My name changed"
        }

        const resetButton = () => {
            age.value = 18
            name.value = "ahmed"
        }

        const searchResult = computed(() => {
            return names.filter( name => name.toLowerCase().includes(input.value.toLowerCase()))
            .join(",")
        });


        watchEffect( ()=> {
            console.log(names.filter( name => name.toLowerCase().includes(input.value.toLowerCase()))
            .join(","))
        } , input.value);

        const {error,posts, loadPosts} = getPosts(); 

        loadPosts();

        return{name , age, handleButton, resetButton, input, searchResult, posts ,showPost}
    }
}
</script>

<style>

</style> -->


<template>
     <h1>This is the about page</h1>
</template>