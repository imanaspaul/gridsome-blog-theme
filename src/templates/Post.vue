<template>
  <Layout>
    
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-9 mb-5 post">
          <g-image alt="Cover image" v-if="$page.post.coverimage" :src="$page.post.coverimage" style="width:100%" />

          <div class="px-3">
            
          <h1 class="text-lead my-3">
                  {{ $page.post.title }}
          </h1>
          <g-image src="../assets/images/profile.jpg" alt="author" style="width:30px; border-radius:50px" class="mb-1" /><span class="author"> Manas Paul</span>
          <PostTags :post="$page.post" class="my-2" />
          <div v-html="$page.post.content" class="mx-2" />
            <div v-html="$page.post.content" />
                 <div class="post-comments">
                  <!-- Add comment widgets here -->
                  <vue-disqus shortname="devedblog" :identifier="$page.post.title"></vue-disqus>
                 </div>
          </div>
        </div>

        <!-- side bar  -->
        <div class="col-md-3">
        <Recent/>
        </div>
      </div>
    </div>

   
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'
import Recent from '~/components/Recent.vue'
export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    Recent
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    coverimage
  }
}
</page-query>
<style lang="scss">
  .post{
    background-color: rgb(255, 255, 255)!important;
    padding: 0px;
  }
  .sidebar {
  overflow: auto!important;
  position: -webkit-sticky!important;
  position: sticky!important;
  top: 5%!important;
  }
</style>