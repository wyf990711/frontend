<template>
  <div>
    <div
      v-for="item in lists"
      :key="item.id"
      :value="item.value"
      :label="item.label"
    >
      <span>{{ item.name }}:::---</span>
      <span
        v-for="arry in item.subtitle"
        :key="arry.id"
        :value="item.value"
        :label="item.label"
      >
        <InputNumber
          style="margin-left: 15px; width: 50px"
          :max="100"
          :min="0"
          v-model="arry.text"
          ><span slot="append">%</span></InputNumber
        >%
      </span>
    </div>
    <Button @click="clgdata">打印数据</Button>
    <Button @click="reset">重置数据</Button>
    <Button @click="add">合并数据</Button>
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
              text: 11,
            },
            {
              id: 5,
              text: 12,
            },
            {
              id: 6,
              text: 13,
            },
            {
              id: 7,
              text: 14,
            },
          ],
        },
        {
          id: 2,
          name: "项目2",
          subtitle: [
            {
              id: 6,
              text: 21,
            },
            {
              id: 7,
              text: 22,
            },
            {
              id: 8,
              text: 23,
            },
          ],
        },
        {
          id: 3,
          name: "项目3",
          subtitle: [
            {
              id: 8,
              text: 31,
            },
            {
              id: 9,
              text: 32,
            },
          ],
        },
        {
          id: 4,
          name: "项目4",
          subtitle: [
            {
              id: 8,
              text: 42,
            },
          ],
        },
      ],
    };
  },
  methods: {
    reset() {
      // console.log(this.lists);
      for (let i = 0; i < this.lists.length; i++) {
        for (let j = 0; j < this.lists[i].subtitle.length; j++) {
          this.lists[i].subtitle[j].text = "";
        }
      }
    },
    add() {},
    clgdata() {
      let alert1 = false;
      let array1 = [];
      for (let i = 0; i < this.lists.length; i++) {
        let arr = [];
        for (let j = 0; j < this.lists[i].subtitle.length; j++) {
          arr.push(this.lists[j].subtitle[i].text);
          if (this.lists[i].subtitle[j].text == "") {
            alert1 = true;
          }
        }
        array1.push(arr);
      }
      if (alert1 == true) {
        alert("不能有空");
      } else {
        let than1 = [];
        for (let i = 0; i < array1.length; i++) {
          let sum = 0;
          array1[i].forEach((ele) => {
            sum += ele;
          });
          if (sum != 100) {
            than1.push(i + 1);
          }
        }
        if (than1.length != 100) {
          alert("第" + than1 + "个时间段工作量不等于100%");
        }
      }
    },
  },
};
</script>

<style scoped lang="less"></style>
