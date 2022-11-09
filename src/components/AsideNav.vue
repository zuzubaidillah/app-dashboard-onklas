<template>
  <nav :class="asidebar.isOpened ? 'active' : ''" id="sidebar">
    <div class="sidebar-header">
      <div class="logo-sekolah">
        <img src="https://assets.onklas.id/sekolah/7O08Pij9UvKLhlBVu0zk9UMyLdIe4NrmIcGqlnUB.png" alt=""></div>
      <h3 class="subheading-14"> ONKLAS PRIMA INDONESIA </h3>
    </div>
    <ul class="nav flex-column nav_aside">
      <li class="nav-item">
        <router-link class="nav-link text-black body-12" to="/beranda">
          <i class="fa fa-home"></i> Beranda
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-black body-12" to="/sosial-media">
          <i class="fa fa-search-plus"></i> Onklas
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link nav-link-disable text-black body-12 d-flex justify-content-between disabled" to="/">
          <div><i class="fa fa-school"></i> Tata Usaha</div>
          <i class="fas fa-lock icon-lock"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {asidebar} from '../services/asidebar.js'
</script>

<script>
export default {
  name: "AsideNav"
}
</script>

<style scoped lang="scss">
.nav_aside{
  .router-link-active {
    background: #2c51b0;
    color: #ffff !important;
  }
}
a i {
  margin-right: 10px;
}

#sidebar {
  width: 13.75rem;
  background: #fff;
  color: #1f2933;
  transition: all .3s;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  &.active{
    margin-left: -13.75rem;
  }
}

#sidebar .sidebar-header {
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f3f5;
}

#sidebar .sidebar-header .logo-sekolah img {
  max-height: 100%;
}

.logo-sekolah {
  width: 30px;
  height: 30px;
  overflow: hidden;
}

#sidebar .sidebar-header h3 {
  margin: 0;
  margin-left: 8px;
}

.subheading-14 {
  line-height: 1rem;
  font-size: .875rem;
  letter-spacing: .02em;
  font-weight: 500;
}


ul li.active > a,
ul li:hover > a {
  color: #fff !important;
  background: #2c51b0;
}
</style>
