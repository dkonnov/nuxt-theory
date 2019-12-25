export const actions = {
  async fetchUsers() {
    try {
      const users = await this.$axios.$get(
        "http://jsonplaceholder.typicode.com/users"
      );
      return users;
    } catch (e) {
      throw e;
    }
  }
};
