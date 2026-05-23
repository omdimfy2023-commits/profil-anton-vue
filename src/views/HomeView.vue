<template>
  <main class="page hero">
    <section class="hero-left">
      <span class="badge">
        UTS Interaksi Manusia dan Komputer
      </span>

      <h1>
        Halo, Saya
        <span>Anton Dimas Unawekla</span>
      </h1>

      <p>
        Saya adalah mahasiswa Informatika semester 4 angkatan 2024.
        Website ini dibuat sebagai profil pribadi dengan tampilan modern,
        clean, responsif, dan nyaman digunakan.
      </p>

      <div class="hero-info">
        <div>
          <strong>Program Studi</strong>
          <span>Informatika</span>
        </div>

        <div>
          <strong>NPM</strong>
          <span>24 411 108</span>
        </div>

        <div>
          <strong>Umur</strong>
          <span>21 Tahun</span>
        </div>
      </div>

      <div class="btn-group">
        <RouterLink
          to="/tentang"
          class="btn btn-primary"
        >
          Lihat Profil Saya
        </RouterLink>

        <RouterLink
          to="/hobi"
          class="btn btn-secondary"
        >
          Lihat Hobi
        </RouterLink>
      </div>
    </section>

    <section class="profile-card">

      <img
        src="../assets/foto-profil.png"
        alt="Foto Anton"
        class="profile-photo"
      />

      <h2>Anton Dimas Unawekla</h2>

      <p>
        Mahasiswa Informatika | Semester 4
      </p>

      <div class="stats">
        <div>
          <strong>2024</strong>
          Angkatan
        </div>

        <div>
          <strong>4</strong>
          Semester
        </div>

        <div>
          <strong>UTS</strong>
          Project
        </div>
      </div>
    </section>
  </main>
</template>