import { defineConfig } from "vite";
import svelte from "vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: true,
      },
      hot: true,
      emitCss: false,
    }),
  ],
  rollupDedupe: ["svelte"],
});
