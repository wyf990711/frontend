<template>
  <div>
    <el-table
      :data="modelDataList"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="key" label="一级指标" width="100px">
      </el-table-column>
      <el-table-column prop="val" label="一级指标权重" width="150px">
      </el-table-column>
      <el-table-column prop="remark" label="一级指标描述"> </el-table-column>
      <el-table-column prop="keySecond" label="二级指标（对应具体校验规则）">
      </el-table-column>
      <el-table-column prop="valSecond" label="二级指标权重"> </el-table-column>
      <el-table-column prop="remarkSecond" label="二级指标描述">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spanList: [],
      number: 0,
      modelDataList: [
        {
          key: "准确性",
          val: 15,
          remark: "准确性用于。。。",
          keySecond: "值域校验",
          valSecond: 6,
          remarkSecond: "用于校验数据是否符合值域要求",
        },
        {
          key: "准确性",
          val: 15,
          remark: "准确性用于。。。",
          keySecond: "数据范围校验",
          valSecond: 12,
          remarkSecond: "用于校验数据是否在合理范围内",
        },
        {
          key: "准确性",
          val: 15,
          remark: "准确性用于。。。",
          keySecond: "字段值对比",
          valSecond: 9,
          remarkSecond: "通常用于一个字段或其他字段",
        },
        {
          key: "一致性",
          val: 15,
          remark: "一致性用于。。。",
          keySecond: "主外键一致性校验",
          valSecond: 17,
          remarkSecond: "用于校验业务上",
        },
        {
          key: "完整性",
          val: 25,
          remark: "完整性用于。。。",
          keySecond: "空值校验",
          valSecond: 15,
          remarkSecond: "用于校验数据是否存在空值",
        },
        {
          key: "完整性",
          val: 25,
          remark: "完整性用于。。。",
          keySecond: "记录数缺失",
          valSecond: 16,
          remarkSecond: "用于校验数据是否存在关联记录丢失",
        },
        {
          key: "唯一性",
          val: 15,
          remark: "唯一性用于。。123。",
          keySecond: "唯一性校验",
          valSecond: 17,
          remarkSecond: "用于校验数据是否存在重复",
        },
        {
          key: "唯一性",
          val: 15,
          remark: "唯一性用",
          keySecond: "唯一性校验",
          valSecond: 17,
          remarkSecond: "用于校验数据是否存在重复",
        },
        {
          key: "唯一性",
          val: 15,
          remark: "唯一性用于。。。",
          keySecond: "唯一性校验",
          valSecond: 17,
          remarkSecond: "用于校验数据是否存在重复",
        },
      ],
    };
  },
  created() {
    let contactDot = this.modelDataList[0].key;
    let numberNow = this.number;
    let spanArr = [];
    let data = this.modelDataList;
    data.forEach((item, index) => {
      // 遍历数据记录需要合并的行数保存在spanArr中
      if (item.key === contactDot) {
        // 相同
        numberNow += 1;
      } else {
        spanArr.push(numberNow);
        contactDot = item.key; // 重新赋值标识
        while (numberNow > 1) {
          // 赋值0
          spanArr.push(0);
          numberNow -= 1;
        }
      }
      if (index === data.length - 1) {
        // 到最后一个了，把没有push的项处理完
        spanArr.push(numberNow);
        contactDot = item.key;
        while (numberNow > 1) {
          spanArr.push(0);
          numberNow -= 1;
        }
      }
    });
    this.spanList = spanArr;
    console.log(spanArr);
  },
  methods: {
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        // 第一列、第二列和第三列
        if (this.spanList[rowIndex] === 0) {
          return {
            rowspan: 0,
            colspan: 0,
          };
        } else {
          return {
            rowspan: this.spanList[rowIndex],
            colspan: 1,
          };
        }
      }
    },
  },
};
</script>
<style scoped></style>
