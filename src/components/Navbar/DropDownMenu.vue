<template>
  <hr class="block w-svw dropDownMenu lg:hidden" />

  <div
    class="block w-svw bg-reddish-100 p-4 dropDownMenu lg:bg-transparent/5 lg:w-auto lg:h-full"
  >
    <ul
      class="flex flex-col items-start gap-5 lg:flex-row lg:justify-end lg:items-center lg:h-full"
    >
      <li class="li-link hover:border-b-2">About Me</li>
      <li class="li-link hover:border-b-2">Personal Projects</li>
      <li class="li-link hover:border-b-2">Contact Me</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
