<template>
    
    <h1>This is the about pro max page</h1>

    <!-- Changing name and age-->
    <p>This is my {{name}} and my age is {{age}}</p>
    <button @click = "changeName">Change name and age</button>
    <button @click = "reset">Reset</button>

    <!-- Searching -->
    <h3>Search for cars</h3>
    <input v-model = "input"> 
    <p>Search term is {{input}}</p>
    <p>Results are {{searchResults}}</p>


    <!--Posts-->
    <posts v-if = "showPosts" :myPosts="posts"></posts>
    <button @click = "showPosts = !showPosts">
        <span v-if = "showPosts">Hide Posts</span>
        <span v-if = "!showPosts">Show posts</span>
    </button>


</template>

<script>

import {ref, computed} from 'vue'
import posts from './posts.vue'
import getPosts from '../composables/getPosts'

export default {

    components:{
        posts
    },

    setup(){

        //Variables
        const name = ref("Ahmed");
        const age = ref("18");
        const input = ref("");
        let names =  ['Bmw', 'Elnasr', 'Jeep', 'Mercedes', 'Hundai', 'BYD']
        // const posts = ref([]);
        // const err = ref("");
        // const loadPosts;
        const showPosts = ref("true");

        


        //functions
        const changeName = () => {
            name.value = "changedName";
            age.value = "my age became 55 now ll asf"
        };

        const reset = () => {
            age.value = 18
            name.value = "Ahmed"
        }

    
        const searchResults = computed( () => {
            return names.filter (name => name.toLowerCase().includes(input.value.toLowerCase()));
        });



        
        //Fetch posts
        // const getPosts = () => {
            
        //     const load = async() => {
        //         try{
        //             fetch("http://localhost:3000/posts").
        //             then((res) => res.json()).
        //             then((data) => posts.value = data);
        //         }

        //         catch(error){
        //             err.value = error;
        //             console.log(err.value);
        //         }
        //     }
        //     load();
        // }

        const {err, posts, loadPosts} = getPosts();


        loadPosts();





        return {name,age,changeName, reset,input,searchResults,posts,err,showPosts}
    }
}
</script>

<style>

</style>