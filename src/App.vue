<template>
  <h1 class="test text-3xl font-bold underline text-red-300">Home</h1>
</template>

<script>
import { gsap } from "gsap";
export default {
  mounted() {
    gsap.from(".test", {
      x: 200,
    });
  },
};
</script>
