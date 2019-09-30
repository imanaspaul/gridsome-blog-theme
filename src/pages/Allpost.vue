<template>
  <Layout>
    <div class="container my-5">
      <h1 class="tag-title text-center space-bottom">
      All Posts
      </h1>
      <div class="row mt-5">
         <Postcard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
            <div class="col-md-12 float-right">
                <nav aria-label="Page navigation justify-content-center">
               <ul class="pagination">
                    <Pager :info="$page.posts.pageInfo" class="page-link "/>
                </ul> 
                </nav>
            </div>
      </div>
    </div>
    

  </Layout>
</template>

<page-query>
query Blog($page: Int) {
	posts: allPost(sortBy: "date", perPage: 1, page: $page) @paginate {
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
import Author from '~/components/Author.vue'
import Postcard from '~/components/Postcard.vue'
import { Pager } from 'gridsome'

export default {
  name: "AllPosts",
  components: {
    Author,
    Pager,
    Postcard
  },
  metaInfo: {
    title: "Deved Blog theme"
  }
}
</script>

<style lang="scss">
.pagination{
.nav a {

    color: #070707;
    text-decoration: none;
    background-color: transparent;
    padding: 25px;
    text-decoration: none!important;
}
.nav a.active--exact.active {
    color: #298066;
    font-weight: 900;
    font-size: 16.5px;
}
}
.pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
    margin: 0;
}
a:hover {
    color: #0056b3;
    text-decoration: none;
}
.active--exact active{
    color: #070707;
    font-weight: 900;
}
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    padding-right: 20px;
}
</style>