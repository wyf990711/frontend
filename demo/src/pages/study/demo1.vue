<template>
  <div>
    <Button type="parmary" @click="clgdata"> 打印数据</Button>
    <Table :columns="columns1" border :data="data1"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            if (params.row.$isEdit) {
              return h("Input", {
                props: {
                  type: "text",
                  value: params.row.name,
                },

                on: {
                  "on-blur": (event) => {
                    params.row.name = event.target.value;
                    this.data1[params.index].name = event.target.value;
                    this.$set(params.row, "$isEdit", false);
                  },
                },
              });
            } else {
              return h(
                "div",
                {
                  on: {
                    click: () => {
                      this.$set(params.row, "$isEdit", true);
                    },
                  },
                },
                params.row.name
              );
            }
          },
        },
        {
          title: "年龄",
          key: "age",
          align: "center",
          render: (h, params) => {
            if (params.row.$isEdit) {
              return h("Input", {
                props: {
                  type: "number",
                  value: params.row.age,
                },

                on: {
                  "on-blur": (event) => {
                    params.row.name = event.target.value;
                    this.data1[params.index].age = Number(event.target.value);
                    this.$set(params.row, "$isEdit", false);
                  },
                },
              });
            } else {
              return h(
                "div",
                {
                  on: {
                    click: () => {
                      this.$set(params.row, "$isEdit", true);
                    },
                  },
                },
                params.row.age
              );
            }
          },
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
  methods: {
    clgdata() {
      console.log(this.data1);
    },
  },
};
</script>
