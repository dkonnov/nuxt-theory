<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user of users" :key="user">
        <a href="#" @click.prevent="goto(user)">User: {{ user }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          users: [1, 2, 3, 4, 5]
        });
      }, 3000);
    });
  },
  data() {
    return {
      pageTitle: "Пользователи"
    };
  },
  methods: {
    goto(user) {
      this.$router.push("/users/" + user);
    }
  }
};
</script>
