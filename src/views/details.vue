<template>
    <h1>This is the details page</h1>
    <p>{{id}}</p>
    <p>Details is {{post}}</p>
</template>

 

<script>


import getPostw from '../composables/getPost'

export default {
    props: ['id'],

    setup(props){

        const {error,post,loadPost} = getPostw(props.id);

        loadPost();

        return {error,post,loadPost}
    }
}
</script>

<style>

</style>