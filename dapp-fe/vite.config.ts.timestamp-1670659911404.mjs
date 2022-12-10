var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// tailwind.config.cjs
var require_tailwind_config = __commonJS({
  "tailwind.config.cjs"(exports, module) {
    module.exports = {
      content: ["./src/**/*.{html,js,svelte,ts}"],
      theme: {
        extend: {}
      },
      plugins: []
    };
  }
});

// vite.config.ts
import { defineConfig } from "file:///D:/courses/sem7/blockchain_tech/svelte-dapp/dapp-fe/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///D:/courses/sem7/blockchain_tech/svelte-dapp/dapp-fe/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";

// postcss.config.js
var import_tailwind_config = __toESM(require_tailwind_config(), 1);
import tailwind from "file:///D:/courses/sem7/blockchain_tech/svelte-dapp/dapp-fe/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/courses/sem7/blockchain_tech/svelte-dapp/dapp-fe/node_modules/autoprefixer/lib/autoprefixer.js";
var postcss_config_default = {
  plugins: [tailwind(import_tailwind_config.default), autoprefixer]
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [svelte()],
  css: { postcss: postcss_config_default }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidGFpbHdpbmQuY29uZmlnLmNqcyIsICJ2aXRlLmNvbmZpZy50cyIsICJwb3N0Y3NzLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvdXJzZXNcXFxcc2VtN1xcXFxibG9ja2NoYWluX3RlY2hcXFxcc3ZlbHRlLWRhcHBcXFxcZGFwcC1mZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY291cnNlc1xcXFxzZW03XFxcXGJsb2NrY2hhaW5fdGVjaFxcXFxzdmVsdGUtZGFwcFxcXFxkYXBwLWZlXFxcXHRhaWx3aW5kLmNvbmZpZy5janNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvdXJzZXMvc2VtNy9ibG9ja2NoYWluX3RlY2gvc3ZlbHRlLWRhcHAvZGFwcC1mZS90YWlsd2luZC5jb25maWcuY2pzXCI7LyoqIEB0eXBlIHtpbXBvcnQoJ3RhaWx3aW5kY3NzJykuQ29uZmlnfSAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbnRlbnQ6IFsnLi9zcmMvKiovKi57aHRtbCxqcyxzdmVsdGUsdHN9J10sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOiB7fVxuICB9LFxuICBwbHVnaW5zOiBbXVxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY291cnNlc1xcXFxzZW03XFxcXGJsb2NrY2hhaW5fdGVjaFxcXFxzdmVsdGUtZGFwcFxcXFxkYXBwLWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb3Vyc2VzXFxcXHNlbTdcXFxcYmxvY2tjaGFpbl90ZWNoXFxcXHN2ZWx0ZS1kYXBwXFxcXGRhcHAtZmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvdXJzZXMvc2VtNy9ibG9ja2NoYWluX3RlY2gvc3ZlbHRlLWRhcHAvZGFwcC1mZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tICdAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlJ1xuaW1wb3J0IHBvc3Rjc3MgZnJvbSAnLi9wb3N0Y3NzLmNvbmZpZy5qcyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbc3ZlbHRlKCldLFxuICBjc3M6IHtwb3N0Y3NzfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY291cnNlc1xcXFxzZW03XFxcXGJsb2NrY2hhaW5fdGVjaFxcXFxzdmVsdGUtZGFwcFxcXFxkYXBwLWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb3Vyc2VzXFxcXHNlbTdcXFxcYmxvY2tjaGFpbl90ZWNoXFxcXHN2ZWx0ZS1kYXBwXFxcXGRhcHAtZmVcXFxccG9zdGNzcy5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvdXJzZXMvc2VtNy9ibG9ja2NoYWluX3RlY2gvc3ZlbHRlLWRhcHAvZGFwcC1mZS9wb3N0Y3NzLmNvbmZpZy5qc1wiO2ltcG9ydCB0YWlsd2luZCBmcm9tICd0YWlsd2luZGNzcydcclxuaW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gJy4vdGFpbHdpbmQuY29uZmlnLmNqcydcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcGx1Z2luczpbdGFpbHdpbmQodGFpbHdpbmRDb25maWcpLGF1dG9wcmVmaXhlcl1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBLFdBQU8sVUFBVTtBQUFBLE1BQ2YsU0FBUyxDQUFDLGdDQUFnQztBQUFBLE1BQzFDLE9BQU87QUFBQSxRQUNMLFFBQVEsQ0FBQztBQUFBLE1BQ1g7QUFBQSxNQUNBLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQTtBQUFBOzs7QUNQdVYsU0FBUyxvQkFBb0I7QUFDcFgsU0FBUyxjQUFjOzs7QUNBdkIsNkJBQTJCO0FBRGtVLE9BQU8sY0FBYztBQUVsWCxPQUFPLGtCQUFrQjtBQUV6QixJQUFPLHlCQUFRO0FBQUEsRUFDYixTQUFRLENBQUMsU0FBUyx1QkFBQUEsT0FBYyxHQUFFLFlBQVk7QUFDaEQ7OztBRERBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQSxFQUNsQixLQUFLLEVBQUMsZ0NBQU87QUFDZixDQUFDOyIsCiAgIm5hbWVzIjogWyJ0YWlsd2luZENvbmZpZyJdCn0K
