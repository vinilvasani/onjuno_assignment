<template>
  <div
    class="dropdown-container absolute p-4 bg-gray-200 shadow-2xl rounded-md right-2/4 transform translate-x-1/2 w-32 sm:w-48"
  >
    <ul>
      <li
        class="text-gray-500 text-base cursor-pointer"
        v-for="item in dropDownItems"
        :key="item.title + '__' + Math.random()"
      >
        <NuxtLink :to="item.src"> {{ item.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-container {
  top: calc(100% + theme('spacing.2'));
}
</style>
<script>
export default {
  props: ['dropDownItems'],
}
</script>