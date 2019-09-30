<template>
  <Layout>
  <Subscribe/>
    <div class="container mt-5">
        <h1 class="text-center my-5">Recent Posts</h1>
      <div class="row">
        <Postcard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        <div class="col-md-6 offset-md-3 text-center mb-5">
           <b-button v-if="$page.posts.edges > 3" variant="dark" class=" align-middle mt-3" to="/allpost">All Posts</b-button>
        </div>
      </div>
    </div>
    
  
<!-- filter: { published: { eq: true }}  -->
  </Layout>
</template>
<page-query>
query Blog($page: Int) {
	posts: allPost(sortBy: "date", perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        coverimage
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Subscribe from '../../src/components/Subscribe'
import Postcard from '../../src/components/Postcard'
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Deved Blog theme'
  },
  components:{
    Postcard,
    Pager,
    Subscribe,
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
