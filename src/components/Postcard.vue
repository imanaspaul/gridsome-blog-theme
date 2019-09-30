<template>
    <div class="col-md-6 col-lg-4">
        <g-link :to="post.path" class="card-link">
        <div class="card mb-5">
            <g-image alt="Cover image" v-if="post.coverimage" class="card-img-top" :src="post.coverimage" />
            <div class="card-body">
                <PostMeta class="text-muted mb-2" :post="post"/>
                <h5 class="card-title mt-3" v-html="post.title" />
                <!-- <PostTags class="post-card__tags" :post="post" /> -->
            </div>
        </div>
        </g-link>
    </div>
</template>
<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
export default {
    name: "Postcard",
    props: ['post'],
    components: {
    PostMeta,
    PostTags
  },
}
</script>
<style lang="scss">
    .card{
        height: 450px!important;
    }
   .card-link{
       color: black!important;
   }
   /* On screens that are 600px wide or less, the background color is olive */
        @media screen and (max-width: 768px) {
         .card{
        height: 490px!important;
        }
        }
</style>