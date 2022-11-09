<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold">Beranda
          <router-link to="/" class="btn btn-primary btn-sm"><i class="fa fa-plus-circle"></i> New
          </router-link>
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque cupiditate, est eum fugiat ipsa ipsam maiores, quaerat qui reiciendis, saepe sunt unde voluptatum. Eius maxime officiis praesentium quo
           repellat?</p>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: `ContactManager`,
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
