
import {ref} from 'vue'

const getPost = (id) => {
    const error = ref("");
    const post = ref(null);

     const loadPost = async () =>{
            try{
                await fetch(`http://localhost:3000/posts/${id}`).then((res) => res.json()).then((data) => post.value = data)
                console.log("shghaall")
            }
            catch(err){
                console.log(err);
                error.value = err;
            }
        }

        return {error, post, loadPost}
} 


export default getPost;