<template>
  <DefaultTemplate>
    <div class="content">
      <div id="home">
        <el-button round @click="signOut" v-if="user">ออกจากห้อง</el-button>
        <h2 class="mg-0 text-center color-main">Chat in My Room</h2>
        <LoginName v-if="!user" />
        <div v-else>
          <div class="box-message">
            <Message :data="arrMessage" />
            <el-form
              label-position="top"
              :model="form"
              ref="ruleForm"
              @submit.native.prevent="sendMessage"
            >
              <el-input
                placeholder="คุยเลย. . ."
                v-model="form.message"
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
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/template/DefaultTemplate";
import LoginName from "@/components/LoginName";
import Message from "@/components/Message";
import { mapState } from "vuex";

export default {
  components: {
    LoginName,
    Message,
    DefaultTemplate,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  data() {
    return {
      arrMessage: [],
      form: {
        message: "",
      },
      loading: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.form.message) {
        this.loading = true;
        this.$socket.emit("newMessage", this.form.message);
        this.form.message = "";
      }
    },

    signOut() {
      this.$store.commit("SIGNOUT");
      this.arrMessage = [];
    },
  },
  sockets: {
    getMessage(dataGet) {
      setTimeout(() => {
        this.loading = false;
        if (this.user.socketId == dataGet.socketId) {
          dataGet.align = "end";
        } else {
          dataGet.align = "start";
        }
        this.arrMessage.push(dataGet);
      }, 100);
    },
  },
};
</script>
