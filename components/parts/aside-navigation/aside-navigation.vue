<template>
  <div class="w-300 shadow-menu-bs h-screen box-border py-15">
    <nuxt-link
      :to="'/'"
      class="block px-20 py-5 font-semibold font-main text-15 mb-15"
    >
      {{ 'Cooking' }}
    </nuxt-link>
    <ul class="flex flex-col">
      <li v-for="(item, index) in asideData" :key="index">
        <nuxt-link
          :to="item.link_path"
          class="px-20 py-5 block font-main text-15 hover:bg-green-900 hover:text-white"
        >
          {{ item.link_name }}
        </nuxt-link>
        <ul v-if="item.sublinks" class="flex flex-col">
          <li v-for="(subitem, subindex) in item.sublinks" :key="subindex">
            <nuxt-link
              :to="subitem.link_path"
              class="px-20 py-5 pl-30 block font-main text-15 hover:bg-green-900 hover:text-white"
            >
              {{ subitem.sublink_name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['asideData']),
  },
}
</script>
