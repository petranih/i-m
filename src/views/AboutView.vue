<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.body.className = "about-page";
});
</script>
<template>
  <div class="about">
    <header
      id="header"
      class="header d-flex align-items-center light-background sticky-top"
    >
      <div
        class="container-fluid position-relative d-flex align-items-center justify-content-between"
      >
        <router-link
          to="/about"
          class="logo d-flex align-items-center me-auto me-xl-0"
        >
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="../assets/img/logo.png" alt=""> -->
          <h1 class="sitename">ftra.n.r</h1>
        </router-link>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>
              <router-link to="/about" class="active">About</router-link>
            </li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div class="header-social-links">
          <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>

    <main class="main">
      <!-- About Section -->
      <section id="about" class="about section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>About</h2>
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4">
              <img src="../assets/img/profil.jpeg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 content">
              <h2>Web Developer.</h2>
              <p class="fst-italic py-3">
                "Menciptakan Solusi dan Inspirasi Melalui Kreativitas dan
                Dedikasi"
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>10 Des 2002</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Website:</strong>
                      <span>fitra.triforce.digital</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>0876675556</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Sumenep</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                      <span>22</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>gokilfitra528@gmail.com</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="py-3">
                "Tugas yang dipilih dengan cermat serta kerja keras dan
                kesulitan dalam melaksanakannya. Pilihan yang nyata. Siapa pun
                dapat meraih kesuksesan dan mengatasinya. Tidak ada yang dapat
                menuduh dengan menyakitkan pada waktu tertentu. Dan segala
                sesuatunya menjadi miliknya. Hasrat untuk menjalankan tugas
                dengan penuh perhatian karena alasan yang jelas. Dan juga, ada
                dedikasi dari mereka yang menolak dan menentang segala sesuatu."
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- /About Section -->

      <!-- Skills Section -->
      <section id="skills" class="skills section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row skills-content skills-animation">
            <div class="col-lg-6">
              <div class="progress">
                <span class="skill"
                  ><span>HTML</span> <i class="val">100%</i></span
                >
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <!-- End Skills Item -->

              <div class="progress">
                <span class="skill"
                  ><span>CSS</span> <i class="val">90%</i></span
                >
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <!-- End Skills Item -->

              <div class="progress">
                <span class="skill"
                  ><span>JavaScript</span> <i class="val">75%</i></span
                >
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <!-- End Skills Item -->
            </div>

            <div class="col-lg-6">
              <div class="progress">
                <span class="skill"
                  ><span>PHP</span> <i class="val">80%</i></span
                >
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <!-- End Skills Item -->

              <div class="progress">
                <span class="skill"
                  ><span>WordPress/CMS</span> <i class="val">90%</i></span
                >
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <!-- End Skills Item -->
            </div>
          </div>
        </div>
      </section>
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
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>
