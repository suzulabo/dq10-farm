export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Explicitly handle root to serve index.html if needed,
    // though usually static assets handling does this if configured.
    // For simple single page apps, this fallback is good.
    return env.ASSETS.fetch(request);
  },
};
