<template>
  <div>
    <main>
      <Nuxt />
    </main>
    <AsideNavigation />
  </div>
</template>

<script>
import AsideNavigation from '@/components/parts/aside-navigation/aside-navigation.vue'
export default {
  components: {
    AsideNavigation,
  },
}
</script>
