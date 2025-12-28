<template>
  <div class="home">

    <h1 ref = "c">Home page</h1>
    <p ref = "p"> This is {{fName}} {{sName}} and my age is {{age}}</p><br>
    <button @click = "handleClick">Click me</button>
    <button @click = "age++">Increment age</button>

    
    <input v-model = "input"/>
    <p>{{input}}</p>

    <br>
    <h2>Search in names</h2>
    <input v-model = "search">
    <p>Seach term is {{search}}</p>
    
    <p>search result is {{result}}</p>
    
  </div>
</template>

<script>

import {ref, computed} from 'vue'

export default {
  name: 'HomeView',

  setup(){
    const p = ref(null);
    const c = ref(null);
    
    let fName = "Ahmed";
    let sName = "Khaled";
    const input = ref("ana el input w not reactive")
    let names = ref(["ahmed","mohamed","mahmoud","Taha","Pskwet","psposa"])
    let search = ref("")


    const age = ref(1);

    const handleClick = () => {
      console.log(p.value);
      console.log(c.value);
      p.value.classList.add("createdClass")
      p.value.textContent = "MotherFucker"
      input.value = "Motherfucker"
    }

    const result = computed( () => {
      return names.value.filter(name => 
        name.toLowerCase().includes(search.value.toLowerCase())
    ).join(", "); // Join filtered names for display
    })
    

    return {fName, sName, p, c, handleClick,input, age, search,result}
  },



}
</script>
