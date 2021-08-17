<template>
  <div class="box-border container mx-auto">
    <ul class="flex space-x-15 font-main">
      <li
        v-for="(post, index) in posts"
        :key="index"
        class="text-black bg-grey-100 rounded-5 p-15 w-1/2 p-3 ..."
      >
        <h3>{{ post.title }}</h3>
        <span>{{ post.description }}</span>
        <span>{{ post.date }}</span>
        <p>{{ post.body.children[0].children[0].value }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const [translations, posts] = await Promise.all([
      $content('translations').fetch(),
      $content('posts').fetch(),
    ])
    return { translations, posts }
  },
}
</script>
