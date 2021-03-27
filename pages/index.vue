<template>
  <div>
    <h1>Сайт про рибалку</h1>
    <h2>Як ловити карася?</h2>
    <h2>Як ловити коропа?</h2>
    <h2>Як ловити рибу?</h2>
    <pre>{{ data1 }}</pre>
    <pre>{{ data2 }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const [data1, data2] = await Promise.all([
      $content('careers').fetch(),
      $content('translations').fetch(),
    ])
    return { data1, data2 }
  },
}
</script>
