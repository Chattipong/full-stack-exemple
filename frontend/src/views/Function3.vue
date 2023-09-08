<template>
  <DefaultTemplate>
    <div class="content">
      <div id="function-page">
        <h2 class="mg-0 text-center color-main">Test Function 3</h2>
        <div class="box-detail-date">
          <p v-for="(row, index) in data" :key="index">
            <span class="pd-r-5"> {{ row }} ==> </span>
            {{ calArray(row) }}
          </p>
        </div>
      </div>
    </div>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/template/DefaultTemplate";

export default {
  components: {
    DefaultTemplate,
  },
  data() {
    return {
      data: {
        1: [], // null
        2: [1], // 1
        3: [1, 2, 3], // 2
        4: [1, 1], // 1
        5: [1, 2, 3, 4, 5, 6], // 5
        6: [1, 5, 3, 2, 5, 10], // 5
        7: [100, 5, 3, 2, 99], // 99
        8: [35, 5, 3, 2, 5, 100], // 35
        9: [1, 5, 101, 2, 5, 10], // 10
        10: [10, 10, 9], // 9
      },
    };
  },
  methods: {
    calArray(row) {
      let result = "";
      let array = Array.from(new Set(row));

      if (array.length == 0) {
        result = "null";
      } else if (array.length == 1) {
        result = array[0];
      } else if (array.length > 1) {
        let sortData = array.sort(function (a, b) {
          return b - a;
        });
        result = sortData[1];
      }
      return result;
    },
  },
};
</script>
