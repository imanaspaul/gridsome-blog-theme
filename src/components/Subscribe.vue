<template>
   <div class="container-fliud bg-white mb-5">
        <div class="container py-5">
        <div class="row">
            <div class="col-md-6">
                <g-image src="../assets/images/subscribe.png" class="card-img-top" alt="..."/>
            </div>
            <div class="col-md-4 p-2  mx-5">
                <h1 class="card-title align-middle mt-4">Be a better Django Developer</h1>
                <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis quisquam maiores.</p>
                <form name="contact" method="POST" data-netlify="true">
                <input class="form-control align-middle mt-2" type="text">
                <b-button variant="dark" class="form-control button align-middle mt-3" type="submit">Subscribe</b-button>
                </form>
            </div>

            
        </div>
    </div>
   </div>
</template>
<script>
export default {
    name: "Subscriber"
}
</script>