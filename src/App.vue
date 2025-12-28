<template>

  <!-- <button @click = "print" ref = "anaref">Print</button> -->
  <router-link to="/">Home</router-link><br>
  <router-link to ="/about">About</router-link><br>
  <router-link to = "/aboutProMax">AboutProMax </router-link>
 <router-view/>
</template>


// <script>

//   export default{

//     data(){
//       return{
//       name: "myButton",
//       }
//     },

//     methods:{
//       print(){
//         console.log(this.$refs.anaref)
//       }
//     }

//   }


// </script>






<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
