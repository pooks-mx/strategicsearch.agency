export default {
  async fetch(request, env, ctx) {
    return env.ASSETS.fetch(request); // simply serve static site
  },
};
