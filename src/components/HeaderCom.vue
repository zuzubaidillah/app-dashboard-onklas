<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light mb-3 topbar fixed-top bg-white">
      <div class="container-fluid p-0">
        <button class="navbar-brand" @click="asidebar.setIsOpened()">
          <img :src="imageOnKlas" alt="Logo">
        </button>
        <div class="ms-auto d-flex align-items-center user-info">
          <div class="mr-2 text-primary"><i class="fas fa-user-circle mr-1"></i> Ir. H. Totok Warsito
          </div>
          <ul class="nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Head Master</a>
              <ul class="dropdown-menu right-0">
                <li>
                  <router-link to="/" class="dropdown-item text-black body-12"><i class="fa fa-user"></i> Profil
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import {asidebar} from '../services/asidebar.js'
</script>
<script>

export default {
  name: "HeaderCom", data() {
    return {
      imageOnKlas: "data:image/png;base64,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"
    }
  }
}
</script>

<style scoped lang="scss">
.mr-2.text-primary:after {
  content: '|';
  position: relative;
  right: -5px;
  color: black;
}

//.topbar {
//  margin-left: 13.75rem;
//  padding: 1rem;
//  @media (max-width: 678px) {
//    margin-left: auto;
//  }
//}

nav button {
  background: transparent;
  outline: none;
  border: none;
}

.right-0 {
  right: 0 !important;
  left: auto !important;
}
</style>
