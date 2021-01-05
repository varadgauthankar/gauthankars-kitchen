const workboxBuild = require("workbox-build");

const buildSW = () => {
  workboxBuild
    .injectManifest({
      swSrc: "src/sw-template.js",
      swDest: "build/service-worker.js",
      globDirectory: "build",
      globPatterns: ["**/*.{jpg,png,svg,html,js,css,ico,json}"],
    })
    .catch(console.error);
};
buildSW();
