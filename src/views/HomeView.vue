<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.body.className = "index-page";
});
</script>

<template>
  <div class="">
    <header
      id="header"
      class="header d-flex align-items-center light-background sticky-top"
    >
      <div
        class="container-fluid position-relative d-flex align-items-center justify-content-between"
      >
        <router-link
          to="/"
          class="logo d-flex align-items-center me-auto me-xl-0"
        >
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="../assets/img/logo.png" alt=""> -->
          <h1 class="sitename">ftra.n.r</h1>
        </router-link>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><router-link to="/" class="active">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div class="header-social-links">
          <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </header>

    <main class="main">
      <!-- Hero Section -->
      <section id="hero" class="hero section">
        <img src="../assets/img/hr.jpeg" alt="" data-aos="fade-in" />

        <div
          class="container text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h2 style="color: cornsilk">Achmad Sarifitra Noer Rahman</h2>
              <p style="color: cornsilk">I'm a progammer, Web Developer</p>
              <router-link to="/about" class="btn-get-started"
                >About Me</router-link
              >
            </div>
          </div>
        </div>
      </section>
      <!-- /Hero Section -->
    </main>

    <footer id="footer" class="footer light-background">
      <div class="container">
        <div class="copyright text-center">
          <p>
            © <span>Copyright</span>
            <strong class="px-1 sitename">ftra.n.r</strong>
            <span>All Rights Reserved<br /></span>
          </p>
        </div>
        <div class="social-links d-flex justify-content-center">
          <a href=""><i class="bi bi-twitter-x"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>
