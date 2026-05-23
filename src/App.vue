<template>
  <div>
    <header class="navbar">
      <RouterLink to="/" class="logo">
        Anton<span>.</span>
      </RouterLink>

      <nav class="nav-menu">
        <RouterLink to="/">Beranda</RouterLink>

        <RouterLink to="/tentang">
          Tentang
        </RouterLink>

        <RouterLink to="/hobi">
          Hobi
        </RouterLink>

        <RouterLink to="/kontak">
          Kontak
        </RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer class="footer">
      <p>
        © 2026 Anton Dimas Unawekla |
        UTS Interaksi Manusia dan Komputer
      </p>
    </footer>
  </div>
</template>