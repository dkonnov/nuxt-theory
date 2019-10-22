<template>
  <section>
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user of users" :key="user">
        <a href="#" @click.prevent="goto(user)">User: {{ user }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    users: [1, 2, 3, 4, 5]
  }),
  methods: {
    goto(user) {
      this.$router.push("/users/" + user);
    }
  }
};
</script>