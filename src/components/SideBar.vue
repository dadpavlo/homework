<template>
    <div class="side__bar"> 
        <!-- <h2>Привет, Ника!</h2> -->
        <div class="side__bar__content">
            <div class="logo"><p>allposts.com</p></div>
            <div class="side__bar__content__item" @click="$router.push('/user')"><p>All users</p></div>
            <div class="side__bar__content__item"><p>All posts</p></div>
            <div class="side__bar__content__item"><p>Search</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style scoped>
.side__bar {

    position: fixed;
    font-size: 20px;
    color: rgb(246, 245, 255);
    background-color: rgb(37, 37, 37);
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    top: 0;
    width: 100%;
    height: auto;
    /* border-radius: 0px 0px 15px 15px; */
    /* background: linear-gradient(269.96deg, #FFD232 -29.09%, rgba(255, 255, 255, 0) 91.46%), linear-gradient(270deg, #E90000 33.79%, rgba(255, 255, 255, 0) 105.41%), #37279A; */
}

.side__bar__content{
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    justify-content: space-around;
    /* background: linear-gradient(181.89deg, rgba(255, 199, 56, 0.73) -14.53%, rgba(255, 255, 255, 0) 85.47%), linear-gradient(179.99deg, rgba(255, 0, 0, 0.64) 25.65%, rgba(255, 255, 255, 0) 99.99%), #5D52A5; */

}

.side__bar__content__item {
    min-width: 150px;
    flex-grow: 1;
    font-size: 30px;
    transition-duration: 200ms;


}
/* .side__bar:hover {
    width: 300px;
} */
.side__bar__content__item:hover {
    cursor: pointer;
    background: linear-gradient(269.96deg, #FFD232 -29.09%, rgba(255, 255, 255, 0) 91.46%), linear-gradient(270deg, #E90000 33.79%, rgba(255, 255, 255, 0) 105.41%), #37279A;
    color: rgb(255, 255, 255);
}

.logo {
    
    font-size: 30px;
    width: 60%;
    text-align: start;
    padding-left: 5%;
}

p {
    padding: 5px;
    margin-bottom: 0px;
    margin-top: 0px;
}

</style>