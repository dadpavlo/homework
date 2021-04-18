<template>
    <div class="posts">
        <side-bar/>
        <h2>ALL POSTS</h2>
        <div class="post" v-for="post in allPosts" :key="post.id">
            <div class="post__user" @click="$router.push({name: 'user', params: {id: post.userId}})">
                <div class="post__user__photo"> <img src="./free-icon-teenager-4472521.svg"></div>
                <div class="post__user__name"><p>{{allUsers[post.userId].name}}</p></div>
            </div>
            <hr>
            <h2>{{post.title}}</h2>
            <p class="post__body">{{post.body}}</p>
        </div>
        </div>

</template>

<script>
import SideBar from './SideBar'
import { mapGetters } from "vuex";

export default {
    name: 'AllPosts',
    components: {
        SideBar,
    },
    computed: mapGetters(["allPosts", "allUsers"]),
    async mounted() {
        this.$store.dispatch("fetchPost");
        this.$store.dispatch("fetchUser")
    }
}
</script>

<style scoped>
.posts {
    padding: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: rgb(255, 255, 255);
    margin-top: 50px;
}

.post {
    transition-duration: 100ms;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    max-width: 700px;
}

.post__body{
    padding: 10px;
}

.post:hover {
    background-color: rgb(47, 47, 47);
}

h2 {
    padding: 10px;
    margin: 0;
}

.post__user {
    cursor: pointer;
    padding-left: 10px;
    height: auto;
    width: 40%;
    display: flex;
    justify-content: flex-start;

    align-items: center;

}
.post__user__photo img {
    margin: 5px;
    width: 30px;
    height: 30px;
    /* background: linear-gradient(269.96deg, #FFD232 -29.09%, rgba(255, 255, 255, 0) 91.46%), linear-gradient(270deg, #E90000 33.79%, rgba(255, 255, 255, 0) 105.41%), #37279A; */

    border-radius: 50px;
}

hr {
    margin: 0px 10px 0px 10px;
    
    
}
.post__user:hover {
    color: lightcoral;
}

</style>