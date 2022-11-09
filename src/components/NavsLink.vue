<script>
export default {
  name: "NavsLink", data() {
    return {
      items: [{
        namaa: "Postingan", path: "postingan"
      }, {
        namaa: "Postingan E-Book", path: "postingan-ebook"
      }, {
        namaa: "Hastag", path: "hastag"
      }, {
        namaa: "Peringkat Post", path: "peringkat-post"
      }, {
        namaa: "Laporan", path: "laporan"
      },]
    }
  }
}
</script>

<template>
  <ul class="nav nav-pills bg-white p-2 rounded-2 mb-3" v-if="items.length>0">
    <li class="nav-item submenu_list" v-for="item in items" v-bind:key="item.namaa">
      <router-link class="menu_internal nav-link text-black" :to="item.path">{{ item.namaa }}</router-link>
    </li>
  </ul>
</template>
<style scoped lang="scss">
.submenu_list:after{
  content: "";
  width: 0;
  height: 2px;
  background-color: #fff;
  position: relative;
  bottom: 0;
  transition: width .3s;
}
.menu_internal {
  &.router-link-exact-active {
    border-bottom: 5px solid #0d6efd;
    color: #0d6efd;
  }
}

.topbar {
  margin-left: 13.75rem;
  padding: 1rem;
  @media (max-width: 678px){
    margin-left: auto;
  }
}

nav button {
  background: transparent;
  outline: none;
  border: none;
}
</style>
