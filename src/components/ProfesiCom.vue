<template>
  <el-autocomplete class="w-100"
      v-model="state" clearable
      :fetch-suggestions="querySearch"
      placeholder="Please input"
      size="large"
      @select="handleSelect"
  />
</template>

<script>
import {ApiServer} from "@/services/ApiServer";

export default {
  name: "ProfesiCom", data() {
    return {
      filterData: [], state: '',profesis:[]
    }
  },
mounted() {
  this.querySearchAsync()
}, methods: {
    querySearchAsync: async function () {
      let response = ApiServer.getAllProfesi();
      this.filterData = (await response).data
    }, querySearch: function (queryString, cb) {
      const dtArray = [];
      for (const profesi of this.filterData) {
        if (profesi.value.toLowerCase().includes(queryString.toLowerCase())) {
          dtArray.push(profesi)
        }
      }
      cb(dtArray)
    }, handleSelect: function (item) {
      console.log(item)

    }, createFilter: function (queryString) {
      return this.filterData.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }
}
</script>

<style scoped>

</style>
