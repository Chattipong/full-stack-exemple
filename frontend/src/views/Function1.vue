<template>
  <DefaultTemplate>
    <div class="content">
      <div id="function-page">
        <h2 class="mg-0 text-center color-main">
          Test Function Callback , Promise <br />
          Async/Await
        </h2>
        <div class="is-flex js-center mg-y-5">
          <el-button round @click="funCallback" type="primary"
            >Callback</el-button
          >
          <el-button round @click="funAsync" type="danger"
            >Async / Await</el-button
          >
        </div>
      </div>
    </div>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/template/DefaultTemplate";
import { examData } from "@/service/exam-data.json";

export default {
  components: {
    DefaultTemplate,
  },
  data() {
    return {
      examData: examData,
      productTotal: null,
    };
  },
  mounted() {},
  methods: {
    funCallback() {
      console.log("------- Callback ------- ");
      console.log("Test 1");
      console.log("Test 2");
      console.log("Test 3");
    },
    async funAsync() {
      console.log("------- Async / Await ------- ");
      console.log("Test 1");
      const product = await this.examDataTest();
      console.log(product);
      console.log("Test 2");
      console.log("Test 3");
    },
    async examDataTest() {
      const product = await this.examData.reduce((result, f) => {
        if (f.is_editable_price == false) {
          const obj = {
            name: f.name,
            totalSubProductWeight: f.products
              .map((item) => item.weight)
              .reduce((prev, next) => prev + next),
          };
          result.push(obj);
        }
        return result;
      }, []);
      return product;
    },
  },
};
</script>
