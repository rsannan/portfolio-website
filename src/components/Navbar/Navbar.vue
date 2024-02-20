<template>
  <nav class="flex justify-between flex-wrap bg-transparent/15 text-text-100">
    <div class="p-4 text-sm">
      <h1 class="font-semibold">Reginald Shawn Annan</h1>
      <p class="font-light">Software Engineer</p>
    </div>
    <div class="p-3">
      <NavbarSVG @click="handleMenu" />
    </div>

    <Transition appear @enter="onEnter" @leave="onLeave">
      <div v-if="showMenu">
        <DropDownMenu />
      </div>
    </Transition>
  </nav>
</template>

<script>
import { ref } from "vue";
import NavbarSVG from "./NavbarSVG.vue";
import DropDownMenu from "./DropDownMenu.vue";
import { gsap } from "gsap";
export default {
  components: { NavbarSVG, DropDownMenu },
  setup() {
    const showMenu = ref(false);

    const onEnter = (el, done) => {
      const tl = gsap.timeline({ duration: 0.5, paused: true });
      tl.from(el, {
        x: 1024,
        ease: "circ",
      });
      tl.from(".li-link", {
        opacity: 0.2,
      });
      tl.play();
    };
    const onLeave = (el, done) => {
      gsap.to(el, {
        duration: 1,
        x: 1024,
        ease: "sine",
        onComplete: done,
      });
      // console.log("animation done");
    };
    const handleMenu = async () => {
      showMenu.value = !showMenu.value;
    };

    return { showMenu, handleMenu, onEnter, onLeave };
  },
};
</script>
