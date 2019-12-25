<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="goto(user)"
          >User: {{ user.name }} ({{ user.email }})</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  asyncData({ $axios }) {
    return $axios
      .$get("http://jsonplaceholder.typicode.com/users")
      .then(users => {
        return {
          users
        };
      })
      .catch(err => {
        error(err);
      });
  },
  data() {
    return {
      pageTitle: "Пользователи"
    };
  },
  methods: {
    goto(user) {
      this.$router.push("/users/" + user.id);
    }
  }
};
</script>
