<template>
  <div>
    <h1>{{ user.name }}</h1>
    {{ user.phone }}
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params, error, store }) {
    try {
      const user = await store.dispatch("users/fetchUserById", params.id);
      return { user };
    } catch (e) {
      error(e);
    }
  }
};
</script>
