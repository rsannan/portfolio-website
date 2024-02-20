<template>
  <nav
    class="flex justify-between flex-wrap bg-transparent/5 text-text-200 lg:flex-nowrap"
  >
    <div class="p-4 text-sm lg:text-xl">
      <h1 class="font-semibold">Reginald Shawn Annan</h1>
      <p class="font-light">Software Engineer</p>
    </div>
    <div class="p-3 lg:hidden">
      <NavbarSVG @click="handleMenu" />
    </div>

    <Transition appear @enter="onEnter" @leave="onLeave">
      <div v-if="openMenu">
        <DropDownMenu />
      </div>
    </Transition>
  </nav>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
import NavbarSVG from "./NavbarSVG.vue";
import DropDownMenu from "./DropDownMenu.vue";
import { gsap } from "gsap";
import tailwindConfig from "../../../tailwind.config";
export default {
  components: { NavbarSVG, DropDownMenu },
  setup() {
    const showMenu = ref(false);
    const windowWidth = ref(window.innerWidth);
    const lgBreakPoint = Number(
      tailwindConfig.theme.screens.lg.replace("px", "")
    );
    const openMenu = computed(() => {
      return windowWidth.value >= lgBreakPoint ? true : showMenu.value;
    });
    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    const handleResize = (e) => {
      windowWidth.value = e.target.innerWidth;
    };
    const onEnter = (el, done) => {
      const tl = gsap.timeline({ duration: 0.5 });
      tl.from(el, {
        x: 1024,
        opacity: 0,
        ease: "circ",
      });
      tl.from(".li-link", {
        opacity: 0.2,
        onComplete: done,
      });
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

    return { showMenu, handleMenu, onEnter, onLeave, openMenu };
  },
};
</script>
