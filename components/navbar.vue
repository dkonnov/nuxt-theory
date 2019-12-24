<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Nuxt</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact active-class="active" class="nav-link" to="/"
              >Главная</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              no-prefetch
              active-class="active"
              class="nav-link"
              to="/users"
              >Пользователи</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about"
              >О программе</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/login"
              >Логин</nuxt-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
