<template>
  <div>
    <div
      v-for="item in lists"
      :key="item.id"
      :value="item.value"
      :label="item.label"
    >
      <span>{{ item.name }}:::---</span>
      <span style="width: 60px" v-for="arry in item.subtitle" :key="arry.id">
        <span style="width: 70px; display: inline-block">
          <InputNumber
            style="margin-left: 5px; width: 50px"
            :max="100"
            :min="0"
            v-model="arry.text"
            v-show="arry.show == 1"
          >
          </InputNumber>
          <span v-show="arry.show == 1">%</span>
        </span>
      </span>
    </div>
    <Button @click="clgdata">打印数据</Button>
    <Button @click="reset">重置数据</Button>
    <Button @click="handel">处理数据</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "项目1",
          subtitle: [
            {
              id: 4,
              show: 1,
              time: "时间段1",
              text: 11,
            },
            {
              id: 5,
              show: 1,
              time: "时间段2",
              text: 2,
            },
            {
              id: 6,
              show: 1,
              time: "时间段3",
              text: 3,
            },
            {
              id: 7,
              show: 1,
              time: "时间段4",
              text: 4,
            },
          ],
        },
        {
          id: 2,
          name: "项目2",
          subtitle: [
            {
              id: 6,
              show: 0,
              time: "时间段1",
              text: 1,
            },
            {
              id: 7,
              show: 1,
              time: "时间段2",
              text: 2,
            },
            {
              id: 8,
              show: 1,
              time: "时间段3",
              text: 3,
            },
            {
              id: 9,
              show: 1,
              time: "时间段4",
              text: 3,
            },
          ],
        },
        {
          id: 3,
          name: "项目3",
          subtitle: [
            {
              id: 8,
              show: 0,
              time: "时间段1",
              text: 1,
            },
            {
              id: 9,
              show: 0,
              time: "时间段2",
              text: 2,
            },
            {
              id: 10,
              show: 1,
              time: "时间段3",
              text: 1,
            },
            {
              id: 11,
              show: 1,
              time: "时间段4",
              text: 2,
            },
          ],
        },
        {
          id: 4,
          name: "项目4",
          subtitle: [
            {
              id: 1,
              show: 0,
              time: "时间段1",
              text: 2,
            },
            {
              id: 2,
              show: 0,
              time: "时间段2",
              text: 2,
            },
            {
              id: 3,
              show: 0,
              time: "时间段3",
              text: 2,
            },
            {
              id: 9,
              show: 1,
              time: "时间段4",
              text: 2,
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 重置
    reset() {
      for (let i = 0; i < this.lists.length; i++) {
        for (let j = 0; j < this.lists[i].subtitle.length; j++) {
          this.lists[i].subtitle[j].text = "";
        }
      }
    },
    // 多个数组索引相同的合并
    arrayTrans(arr) {
      let result = [];
      arr.forEach((item) => {
        item.forEach((d, i) => {
          let a = (result[i] = result[i] || []);
          a.push(d);
        });
      });
      console.log(result);
      return result;
    },
    // 初始化数据处理
    handel() {
      let list = [
        {
          projectName: "项目1111",
          timeList: [
            {
              time: "时间段1",
              state: 1,
            },
            {
              time: "时间段2",
              state: 1,
            },
            {
              time: "时间段3",
              state: 1,
            },
            {
              time: "时间段4",
              state: 1,
            },
            {
              time: "时间段5",
              state: 1,
            },
          ],
        },
        {
          projectName: "项目2111",
          timeList: [
            {
              time: "时间段1",
              state: 0,
            },
            {
              time: "时间段2",
              state: 0,
            },
            {
              time: "时间段3",
              state: 1,
            },
            {
              time: "时间段4",
              state: 1,
            },
            {
              time: "时间段5",
              state: 1,
            },
          ],
        },
      ];
      let arr = [];
      for (let i = 0; i < list.length; i++) {
        arr.push({
          id: i,
          name: list[i].projectName,
          subtitle: [],
        });
        for (let j = 0; j < list[i].timeList.length; j++) {
          arr[i].subtitle.push({
            id: j,
            show: list[i].timeList[j].state,
            time: list[i].timeList[j].time,
            text: 0,
          });
        }
      }
      this.lists = arr;
    },
    //提交处理
    clgdata() {
      let alert1 = false;
      // 计算百分比是否超过100%
      let array1 = [];
      // 提交的数据
      let submitArray = [];
      for (let i = 0; i < this.lists.length; i++) {
        let subarr = [];
        let comArr = [];
        for (let j = 0; j < this.lists[i].subtitle.length; j++) {
          comArr.push(this.lists[i].subtitle[j].text);
          if (this.lists[i].subtitle[j].show == 1) {
            subarr.push({
              num: this.lists[i].subtitle[j].text,
              time: this.lists[i].subtitle[j].time,
              project: this.lists[i].name,
            });
          }
          if (this.lists[i].subtitle[j].text == "") {
            alert1 = true;
          }
        }
        submitArray.push(subarr);
        array1.push(comArr);
      }
      let array11 = this.arrayTrans(array1);
      if (alert1 == true) {
        alert("不能有空");
      } else {
        let than1 = [];
        for (let i = 0; i < array11.length; i++) {
          let sum = 0;
          array11[i].forEach((ele) => {
            sum += ele;
          });
          if (sum > 100) {
            than1.push(i + 1);
          }
        }
        if (than1.length != 0) {
          alert("第" + than1 + "个时间段工作量不等于100%");
        }
      }
      console.log(submitArray);
    },
  },
};
</script>
<style scoped lang="less"></style>
