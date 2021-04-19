<template>
    <div class="post">
        <div class="post__body">
            <h1>This user post</h1>
            <div>
                <h2>{{allPosts[postId].title}}</h2>
                <p>{{allPosts[postId].body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
    name: 'post',
    computed: {
        ...mapGetters(["allPosts", "allUsers", "allUserPost"]),
        postId() {
            return parseInt(this.$route.params.postId)
        },   
    },
    async mounted() {
        this.$store.dispatch("fetchPost");
        this.$store.dispatch("fetchUser");
    },
}
</script>

<style scoped>
.post {
    width: 100%;
    height: 100vh;
}
.post__body {
    color: #fff;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    display: flex;
    height: auto;
    margin-top: 80px;
    transition-duration: 100ms;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    max-width: 700px;
}
</style>