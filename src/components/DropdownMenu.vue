<template>
  <div
    class="dropdownMenuContainer"
    @click="toggleDropdownMenu"
  >
    <div class="dropdownMenu-btn">
      <h5 class="dropdownMenu-title">
        {{ filterTitle }}
      </h5>

      <SvgIcon
        icon-name="chevron-down"
        icon-class=""
      />
    </div>
    <ul
      class="dropdownMenu-option"
      v-show="isDropdownMenuOpen"
    >
      <li
        v-for="(item, i) in props.dropdownItems"
        :key="i"
        class="option-item"
        @click="filterOption"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  props: {
    dropdownTitle: {
      type: String,
      default: 'Click Me'
    },
    dropdownItems: {
      type: Array,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const dropdownTitle = ref(props.dropdownTitle)
    const filterTitle = computed(() => {
      // console.log(dropdownTitle.value)
      return dropdownTitle.value
    })
    const isDropdownMenuOpen = ref(false)
    const toggleDropdownMenu = () => {
      isDropdownMenuOpen.value = !isDropdownMenuOpen.value
    }
    // console.log(props.dropdownItems)
    const filterOption = (e) => {
      dropdownTitle.value = e.target.innerText
      emit('filter-items', dropdownTitle.value)
    }
    return {
      props,
      filterTitle,
      isDropdownMenuOpen,
      toggleDropdownMenu,
      filterOption
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_dropdownMenu.scss';
</style>
