<template>
  <Navbar class="fixed top-0 left-0 right-0" />

  <div
    class="bg-gradient-to-bl from-nature-300 from-40% to-nature-500 to-60% h-svh"
  >
    <Hero />
  </div>
  <div class="bg-reddish-200 h-svh"></div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Hero from "@/components/Hero/Hero.vue";
export default {
  components: { Navbar, Hero },
};
</script>
