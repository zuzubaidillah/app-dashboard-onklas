<template>
  <NavsLink/>
  <router-view />
</template>

<script>
import NavsLink from "@/components/NavsLink";

export default {
  name: `ContactManager`, components: {NavsLink},
  beforeMount() {
  },
  //Dipanggil setelah komponen dipasang.
  mounted() {
  },
  data: function(){
    return {
      loading: false,
      getContacs: [],
      contacs: [],
      errorMessage: null,
      searchKeys: ''
    }
  },
  created: function() {
  },
  methods: {
  }
}
</script>
<style scoped>
.contact-img {
  width: 150px;
  border-radius: 50%;
}

@media (max-width: 600px) {
  .contact-img {
    width: 100px;
  }
}
</style>
