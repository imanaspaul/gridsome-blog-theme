<template>
  <Layout>
    <div class="container my-5">
      <h1 class="tag-title text-center space-bottom">
      #{{ $page.tag.title }} Realted Posts
      </h1>
      <div class="row mt-5">
          <Postcard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </div>
    

  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            coverimage
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import Postcard from '~/components/Postcard.vue'
export default {
  name: "Tag View",
  components: {
    Author,
    Postcard
  },
  metaInfo: {
    title: "Deved Blog theme"
  }
}
</script>

<style lang="scss">
</style>