<template>
  <el-table
      :data="tableData"
      style="width: 100%" lazy>
    <el-table-column prop="feed_thumbnail_image" label="Gambar" width="120">
      <template #default="scope">
        <el-image style="width: 100px; height: 100px" :src="scope.row.feed_thumbnail_image" :fit="cover"/>
      </template>
    </el-table-column>
    <el-table-column prop="feed_body" label="Caption" width="300">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.user.name }}</div>
            <div>feed title: {{ scope.row.feed_title }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.user.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="user.name" label="Nama Lengkap" width="auto"/>
    <el-table-column prop="feed_title" label="Profesi" width="140">
      <template #default="scope">
        <el-tag effect="dark" v-for="item of scope.row.user.role" :key="item" class="mx-1" size="small">
          {{ item.name }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="created_at_label" label="Tgl Posting" width="100"/>
    <el-table-column prop="published" label="Status" width="100">
      <template #default="scope">
      <span class="small-10 d-block col-blc">TAYANG</span>
        <el-switch
            :model="scope.row.published"
            class="mb-2"
            style="--el-switch-on-color: #13ce66;"
            :before-change="beforeChange"
        />
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Aksi" width="100">
      <template #default="scope">
        <el-button link type="primary" size="medium" @click="handleInfo(scope.$index, scope.row)">
          <i class="fa fa-info-circle"></i></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {ApiServer} from '../services/ApiServer'
import {ElMessage, ElMessageBox} from 'element-plus'

export default {
  name: "DataPostingan", mounted() {
    this.feedPosts()
  }, methods: {
    beforeChange: function () {
      ElMessageBox.confirm('Postingan skins akan diaktifkan kembali', 'Konfirmasi Aktifiasi Postingan', {
        confirmButtonText: 'Aktifkan', cancelButtonText: 'Batal', type: 'warning',
      })
          .then(() => {
            ElMessage({
              type: 'success', message: 'Delete completed',
            })
            return true
          })
          .catch(() => {
            return false
          })
    }, handleInfo: function (index, row) {
      console.log(index)
      console.log(row)
    }, feedPosts: async function () {
      let response = await ApiServer.getAllFeedPosts()
      this.tableData = response.data.data
    }, beforActive: function (result=true) {
      console.log(result)
      return result
    }
  }, data() {
    return {
      tableData: [], getPublished: true
    }
  }
}
</script>

<style scoped>
.small-10{
  font-size: .625rem;
  font-weight: 500;
}
</style>
