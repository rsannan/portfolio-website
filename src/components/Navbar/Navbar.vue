<template>
  <nav class="flex justify-between flex-wrap bg-transparent/15 text-text-100">
    <div class="p-4 text-sm">
      <h1 class="font-semibold">Reginald Shawn Annan</h1>
      <p class="font-light">Software Engineer</p>
    </div>
    <div class="p-3">
      <NavbarSVG @click="handleMenu" />
    </div>

    <div v-if="showMenu">
      <DropDownMenu />
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import NavbarSVG from "./NavbarSVG.vue";
import DropDownMenu from "./DropDownMenu.vue";
import { dropDownMenuOut } from "@/animations/NavbarAnimations";

export default {
  components: { NavbarSVG, DropDownMenu },
  setup() {
    const showMenu = ref(false);

    const handleMenu = async () => {
      showMenu.value = !showMenu.value;
    };

    return { showMenu, handleMenu };
  },
};
</script>
