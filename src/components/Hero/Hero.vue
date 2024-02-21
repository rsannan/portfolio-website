<template>
  <Transition appear @enter="onEnter">
    <div
      class="h-svh container flex flex-col justify-start items-center gap-5 py-32 font-hero md:gap-10"
    >
      <div class="pr-2 hero-icon">
        <Globe />
      </div>
      <div class="text-center text-2xl px-10 hero-head md:text-3xl">
        <h1>
          Work With An Engineer That Is Versatile With A Passion For
          Problem-Solving And A Keen Eye For Detail.
        </h1>
      </div>
      <div class="text-center px-4 text-xl hero-text md:">
        <p>
          I'm thrilled to have the opportunity to introduce myself as a Full
          Stack Software Engineer, ready to collaborate with you to take your
          digital endeavors to new heights.
        </p>
      </div>
      <div class="pt-6 hero-btn">
        <button class="btn-home">Contact Me</button>
        <button class="btn-home ml-3">Get Resume</button>
      </div>

      <div
        class="hidden md:block md:mt-16 md:text-5xl uppercase text-center pl-10"
      >
        <h3 class="inline-block mt-1 splt">Learn More</h3>
        <ArrowDown class="inline-block hero-arrow" />
      </div>
    </div>
  </Transition>
</template>

<script>
import Globe from "@/assets/icons/Globe.vue";
import ArrowDown from "@/assets/icons/ArrowDown.vue";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import splt from "spltjs";
import { gsap } from "gsap";
export default {
  components: { Globe, ArrowDown },
  setup() {
    const onEnter = () => {
      splt({});
      const tl = gsap.timeline({ duration: 0.5 });

      tl.from(".hero-icon", {
        opacity: 0,
        y: 200,
      });
      tl.from(".hero-head", {
        opacity: 0,
        y: 200,
      });
      tl.from(".hero-text", {
        opacity: 0,
        y: 200,
      });
      tl.from(".hero-btn", {
        opacity: 0,
        x: 100,
      });
      tl.from(".char", {
        opacity: 0,
        stagger: 0.2,
        y: 100,
        ease: "back.in",
      });
      tl.from(".hero-arrow", {
        opacity: 0,
      });
    };
    return { onEnter };
  },
};
</script>
