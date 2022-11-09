<template>
  <div class="wrapper">
    <AsideNav/>
    <div id="content" :class="asidebar.isClass">
      <HeaderCom/>
      <div class="container-fluid ps-3 pe-3 container-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import {asidebar} from './services/asidebar.js'
</script>
<script>
import AsideNav from "@/components/AsideNav";
import HeaderCom from "@/components/HeaderCom";

export default {
  name: 'App', components: {HeaderCom, AsideNav}
}
</script>

<style lang="scss">
.container-content {
  margin-top: 80px;
  @media (max-width: 678px) {
    margin-top: 80px;
  }
}

#content {
  width: 100%;
  min-height: 100vh;
  transition: all .3s;
  margin-left: 13.75rem;
  max-width: -webkit-fill-available;
  .topbar.fixed-top{
    margin-left: 13.75rem;
    @media (max-width: 678px) {
      margin-left: unset;
    }
  }
  &.full_page, &.full_page .topbar.fixed-top, &.nosidebar, &.nosidebar .topbar.fixed-top {
    margin-left: unset;
  }
  @media (max-width: 678px) {
    margin-left: auto;
  }
  &.with_sidebar .topbar,fixed-top{
    @media (max-width: 678px) {
      margin-left: unset;
    }
  }
}

#app {
  font-family: Rubik;
  font-size: .875rem;
  line-height: 1.5rem;
  background-color: #f2f3f5;
}

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

</style>
