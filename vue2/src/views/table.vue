<template>
  <div>
    <Page
      :total="40"
      size="small"
      @on-page-size-change="pagezisechange"
      @on-change="pagechange"
      show-sizer
      show-elevator
    />
  </div>
</template>

<script>
export default {
  methods: {
    pagechange(index) {
      console.log(index, "页码改变");
    },
    pagezisechange(s) {
      console.log(s, "每页条数改变", "页码变为1");
    },
  },
};
</script>

<style lang="scss" scoped></style>
