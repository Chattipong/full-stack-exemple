<template>
  <div id="inside" class="message-inside">
    <div class="text-welcome">
      <p>
        💌 ขอยินดีต้อนรับทุกท่านที่เข้ามาใช้บริการ Chat in My Room By DreaⓂ️
      </p>
    </div>
    <div
      class="message-inside-group"
      v-for="(msg, index) in data"
      :key="index"
      :class="msg.align"
    >
      <p class="text">{{ msg.text }}</p>
      <span class="time">{{ msg.time | timeTh }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  watch: {
    data() {
      setTimeout(() => {
        var objDiv = document.getElementById("inside");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 100);
    },
  },
};
</script>
