<template>
  <div class="box-border container mx-auto" />
</template>

<script>
/* eslint-disable camelcase */
export default {
  async asyncData({ $content, store }) {
    const [{ links_list }] = await $content('menu').fetch()
    store.commit('ui/SET_ASIDE_DATA', links_list)
  },
}
</script>
