<template>
  <div class="shadow-lg bg-gray-100">
    <div class="container flex py-5 justify-between items-end px-8">
      <!-- Logo Container -->
      <div class="text-gray-600 text-2xl font-bold">
        <NuxtLink to="/">OnJuno</NuxtLink>
      </div>
      <!-- Menu Items Container -->
      <div
        class="relative focus:outline-none"
        @focus="toggleDropDown"
        @blur="toggleDropDown"
        tabindex="0"
      >
        <span class="text-gray-500 text-xl cursor-pointer">Dropdown</span>
        <transition name="fade" mode="out-in">
          <DropDown
            v-if="showDropDown"
            :dropDownItems="dropDownItems"
          ></DropDown>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      dropDownItems: [
        {
          title: 'Page 1',
          src: '/page-1',
        },
        {
          title: 'Page 2',
          src: '/page-2',
        },
        {
          title: 'Page 3',
          src: '/page-3',
        },
        {
          title: 'Page 4',
          src: '/page-4',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      showDropDown: 'GET_SHOWDROPDOWN',
    }),
  },
  methods: {
    ...mapActions({
      dispatchToggleDropDown: 'DISPATCH_SHOWDROPDOWN',
    }),
    toggleDropDown() {
      !this.showDropDown
        ? this.dispatchToggleDropDown(true)
        : this.dispatchToggleDropDown(false)
    },
  },
}
</script>
<style>
</style>
