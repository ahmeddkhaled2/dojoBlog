
import {ref} from 'vue'

const getPosts = () => {
    const error = ref("");
    const posts = ref([]);

     const loadPosts = async () =>{
            try{
                await fetch("http://localhost:3000/posts").then((res) => res.json()).then((data) => posts.value = data)
                console.log(posts.value)
            }
            catch(err){
                console.log(err);
                error.value = err;
            }
        }

        return {error, posts, loadPosts}
} 


export default getPosts;