<template>
  <hr class="block w-svw dropDownMenu lg:" />

  <div class="block w-svw bg-reddish-100 p-4 dropDownMenu">
    <ul class="flex flex-col items-start gap-5">
      <li class="li-link" @click="console.log(showMenu)">About Me</li>
      <li class="li-link">Personal Projects</li>
      <li class="li-link">Contact Me</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
