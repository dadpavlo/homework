<template>
  <div>
    <side-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from '../components/SideBar'

export default {
  components: { SideBar }
}
</script>
<style scoped>

</style>
