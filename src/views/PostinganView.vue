<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card border-0">
        <div class="card-body">
          <h5 class="card-title">Postingan</h5>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <el-input
                  v-model="input2"
                  class="m-2" size="large"
                  placeholder="Type something"
                  :suffix-icon="Search"
              />
            </div>
            <div class="col-lg-3 col-md-6 align-self-center">
              <ProfesiCom/>
            </div>
            <div class="col-lg-2 col-md-6 d-flex justify-content-between align-self-center">
              <div class="form-check after_tegak">
                <input class="form-check-input" type="radio" name="jenis" id="semuaTanggal">
                <label class="form-check-label" for="semuaTanggal">
                  All
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="jenis" id="tanggal" checked>
                <label class="form-check-label" for="tanggal">
                  Tanggal
                </label>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mw-100 align-self-center">
              <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="s/d"
                  start-placeholder="DMY"
                  end-placeholder="DMY"
                  :size="size"
              />
            </div>
          </div>

          <DataPostingan/>

        </div>
      </div>
    </div>
  </div>
  {{ value1 }}
</template>

<script setup>
import {Search} from '@element-plus/icons-vue'
import DataPostingan from '../components/DataPostingan'
import ProfesiCom from "@/components/ProfesiCom";
</script>
<script>
// import DataTable from 'datatables.net-vue3';
import {ref} from 'vue'

const size = ref < '' | 'large' | 'small' > ('')
const value1 = ref('')

export default {
  name: 'PostinganView', data() {
    return {
      size: size, value1: value1, state: '', input2: ''
    }
  }, methods: {
    handleClick: function () {
      console.log('click')
    }
  }
}
</script>

<style lang="scss">
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.block:last-child {
  border-right: none;
}

.demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.el-date-editor.el-date-editor--daterange.el-input__wrapper.el-range-editor.el-range-editor--1.el-tooltip__trigger.el-tooltip__trigger {
  width: auto;
}
</style>
