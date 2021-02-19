<template>
  <div class="flex flex-col justify-center items-center max-w-3xl mx-auto p-8">
    <h1 class="text-gray-600 text-5xl font-bold mt-32 sm:mt-42 text-center">
      {{ pageTitle }}
    </h1>
    <h2 class="text-gray-500 text-xl font-semibold mt-4 text-center">
      Click on the Dropdown (top right) to show the dropdown menu, to hide the
      dropdown menu click anywhere outside the Dropdown element
    </h2>
    <p class="text-gray-500 text-base mt-4 text-center">
      This behavior of the dropdown menu has been achieved using the focus and
      blur events on the Dropdown element
    </p>
  </div>
</template>
<script>
export default {
  props: ['pageTitle'],
}
</script>