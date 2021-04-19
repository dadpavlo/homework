<template>
    <div class="user">
        <!-- <side-bar/> -->
        <div class="body">
            
            <div class="user__body__back" @click="$router.push({name: 'allPosts'})">
                <img src="./fi-rr-angle-left.svg" >
            </div>
            <div class="user__body">
                <!-- <div class="footer">
                    <div class="user__body__back">
                        <img src="./fi-rr-angle-left.svg" >
                    </div> -->
                    <div class="user__body__name">
                        <h1>{{allUsers[userId].username}}</h1>
                    </div>
                <!-- </div> -->
                <div class="user__body__date">
                    <div class="user__body__date__photo"><img src="./free-icon-teenager-4472521.svg"></div>
                    <div class="user__body__date__about">
                        <p>Name: {{allUsers[userId].name}}</p>
                        <p>User email: {{allUsers[userId].email}}</p>
                        <p>City: {{allUsers[userId].address.city}}</p>
                    </div>
                </div>
                <h2>User post</h2>
                <div class="user__body__posts" v-for="post in userPost" :key="post.id">
                    <h3>{{post.title}}</h3>
                    <p>{{post.body}}</p>
                    <p></p>
                    <router-link :to="{ name: 'post', params: { id: userId,  postId: post.id} }">Read more...</router-link>
                    <div class="user__post"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions} from "vuex";

export default {
    name: 'PageOfUser',
    props: {
        user: Object   
    },
    components: {
    }, 
    data() {
        return{
            userPost: Object
        }
    },
    computed: {
        ...mapGetters(["allPosts", "allUsers", "allUserPost"]),
        userId() {
            return parseInt(this.$route.params.id)
        },
        getUserPosts () {

            return this.$store.getters.allUserPost()
        },
        
    },
    async mounted() {
        this.$store.dispatch("fetchPost");
        this.$store.dispatch("fetchUser");
        this.$store.dispatch("createallUserPost", this.userId);
        this.locUserPost();
    },
    methods: {
        ...mapActions(["createallUserPost"]),
        ...mapMutations(["updateUserPost"]),
        mutat() {
            this.updateUserPost(parseInt(this.$route.params.id))
            
        },
        locUserPost() {
            this.userPost = JSON.parse(sessionStorage.getItem(this.userId)) 
            console.log('userPost = ', this.userPost);
        }
    }
}

</script>

<style scoped>
.user {
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
}


.user__body {
    align-items: center;
    color: #fff;
    border-radius: 15px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 1200px;
    background-color: rgb(37, 37, 37);
}

.user__body__posts {
    margin: 10px;
    transition-duration: 100ms;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    max-width: 800px;
}
.user__body__date {
    align-items: center;
    display: flex;
    width: 100%;
}
.user__body__date__about {
    flex-grow: 1;
    text-align: center;
    padding: 20px;
    font-size: 19px;
}
.footer {
    display: flex;
    width: 100%;

}
.user__body__back {
    cursor: pointer;
    left: 0;
    width: 70px;
    height: 70px;
    color: #fff;
    margin-top: 110px;
    margin-right: 30px;
}
.body {
    display: flex;
}
a {
    text-decoration: none;
    margin: 5px;
    padding: 10px;
    color: rgb(241, 104, 104);   
}
</style>