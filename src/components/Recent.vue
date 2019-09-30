<template>
    <div>
        <div class="sidebar text-center">
            <div class=" text-center">Advertisement</div>
           <a href="https://m.do.co/c/e4e28d1412ec" target="_blank" class="text-center"> <g-image src="https://www.jpaul.me/wp-content/uploads/2018/12/1200px-DigitalOcean_logo.svg_.png" alt="" style="width:225px margin:auto" class="imgage" /></a>
        </div>
    </div>
</template>

<script>
import PostTags from '~/components/PostTags'
export default {
    name: "RecentPosts",
    components:{
      PostTags
    }
}
</script>
<style lang="scss" scoped>

.sidebar {

    position: -webkit-sticky !important;
    position: sticky !important;
    top: 5% !important;
    background-color: white;
}
  .imgage {
    vertical-align: middle;
    border-style: none;
    width: 225px;
    margin: 0 auto;
  }
.card {
    height: auto!important;
    .card-heading{
      font-weight: 700;
    } 
}

</style>