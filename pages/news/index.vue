<template>
  <div class="main_contents">
    test
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ $config, $axios }) {
    const news = await $axios.$get(`${$config.baseURL}/wp-json/wp/api/news`)
    return {
      news
    }
  },
  data () {
    return {
      kvFlag: false
    }
  },
  computed: {
    newsData () {
      return this.news.data.filter((item, index) => {
        if (index >= 0 && index < 3) return item
        return false
      })
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
 .main{
  width: 100%;
 }
</style>
