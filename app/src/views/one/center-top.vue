<template>
  <div class="container">
    <ul class="list">
      <li class="item">
        <span class="label">收录城市</span><br>
        <span class="num">5</span>
      </li>
      <li class="item">
        <span class="label">统计天数</span><br>
        <span class="num">7</span>
      </li>
      <li class="item" style="width: 180px;">
        <span class="label">最近一次更新</span><br>
        <span class="num">2023-10-06</span>
      </li>
    </ul>
    <h3>收录城市</h3>
    <el-table
      :data="tableData"
      highlight-current-row>
      <el-table-column
        prop="id"
        label="编号"></el-table-column>
      <el-table-column
        prop="city"
        label="城市"></el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template #default="scope">
          <el-button type="text" @click="linkTo(scope.row.id)" size="mini">查询</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ElTable, ElTableColumn, ElButton } from 'element-plus';

export default {
  components: {
    ElTable,
    ElTableColumn,
    ElButton
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          city: '北京'
        },
        {
          id: 2,
          city: '上海'
        },
        {
          id: 3,
          city: '广东'
        },
        {
          id: 4,
          city: '广西'
        },
        {
          id: 5,
          city: '深圳'
        }
      ]
    };
  },
  methods: {
    linkTo(id) {
      this.$router.push(`/one/about?city=${id}`);
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
.list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  position: absolute;
  top: 80px;
  width: 80%;
  left: 10%;
}
.list .item {
  width: 100px;
}
.list .item .label {
}
.list .item .num {
  color: rgb(83, 215, 22);
  font-size: 32px;
}
h3 {
  position: absolute;
  top: 160px;
  left: 10%;
  color: #e3e3e3;
  border-left: 5px solid rgb(199, 212, 14);
  padding-left: 6px;
}
.el-table {
  position: absolute;
  top: 180px;
  width: 80%;
  left: 10%;
}
.el-table {
  --el-table-border-color: transparent;
  --el-table-border: none;
  --el-table-text-color: #bdbdbe;
  --el-table-header-text-color: #bdbdbe;
  --el-table-row-hover-bg-color: transparent;
  --el-table-current-row-bg-color: transparent;
  --el-table-header-bg-color: transparent;
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  --el-table-expanded-cell-bg-color: transparent;
}
</style>