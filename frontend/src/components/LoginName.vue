<template>
  <div class="box-message">
    <el-form
      label-position="top"
      :model="form"
      ref="ruleForm"
      @submit.native.prevent="login"
    >
      <el-form-item label="กรอกชื่อเพื่อเข้าสู่แชท">
        <el-input
          placeholder="กรุณากรอกชื่อ. . ."
          v-model="form.name"
          class="input-with-select"
        >
          <el-button
            slot="append"
            type="sumit"
            native-type="submit"
            :loading="loading"
            >ส่ง</el-button
          >
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { HTTP } from "@/service/axios";

export default {
  data() {
    return {
      loading: false,
      form: {
        name: "",
      },
    };
  },
  methods: {
    login() {
      if (this.form.name != "") {
        HTTP.post(`user/create`, this.form)
          .then((res) => {
            if (res.data.success) {
              this.$socket.emit("login", this.form.name);
            } else {
              this.$message({
                message: "ชื่อผู้ใช้งานซ้ำ",
                type: "error",
                duration: 4000,
              });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  sockets: {
    getLogin(dataGet) {
      if (dataGet.name == this.form.name) {
        console.log(dataGet);
        this.$store.commit("SET_USER", dataGet);
      }
    },
  },
};
</script>
