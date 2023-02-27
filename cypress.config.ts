import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8100',
    projectId: "h7qnsa"
    //setupNodeEvents(on, config) {
    // implement node event listeners here
    //},
  },
  chromeWebSecurity: false,
  env: {}
});
