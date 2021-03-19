<template>
  <div>
    <h1>Сайт про рибалку</h1>
    <h2>Як ловити карася?</h2>
    <h2>Як ловити коропа?</h2>
    <h2>Як ловити рибу?</h2>
    <div>{{ data }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const data = await $content('careers').fetch()
    return { data }
  },
}
</script>
