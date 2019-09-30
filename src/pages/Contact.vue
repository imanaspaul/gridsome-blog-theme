<template>
  <Layout>
    <div class="container my-5">
      <h1 class="text-center">Contact Us</h1>
      <div class="row">
          <div class="col-md-6 offset-md-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat ullam suscipit eligendi maiores dolor possimus commodi iure incidunt voluptatibus.</p>
      <p>Email Us : wixcode@mail.com</p>
         <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
              <input type="hidden" data-form-email="true">
              <div class="form-group">
                <input type="text" class="form-control" name="name" required="" placeholder="Name*" data-form-field="Name">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" required="" placeholder="Email*" data-form-field="Email">
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
              </div>
              <div class="form-group">
                   <div data-netlify-recaptcha="true"></div>
              </div>
              <div>
                <button type="submit" class="btn btn-warning form-control">Send</button>
              </div>
         </form>
          </div>
      </div>
      
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact Us - wixcode',
    htmlAttrs: {
      lang: 'en',
    },
}
}
</script>