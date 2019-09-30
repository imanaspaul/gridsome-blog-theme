<template>
 <div>
  <b-navbar toggleable="lg" type="light" variant="white" sticky>
    <div class="container">
    <b-navbar-brand to="/"><b>{{ $static.metadata.siteName }}</b></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
    
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto text-right">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/allpost">All Posts</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="contact">Contact</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    name: "Header"
}
</script>