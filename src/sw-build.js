const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild
    .injectManifest({
      swSrc: "src/sw-base.js",
      swDest: "build/sw.js",
      globDirectory: "build",
      globPatterns: ["**/*.{js,css,html,txt,ico,jpg,png}"],
      globIgnores: ["service-worker.js", "precache-manifest.*", "robots.txt"],
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    });
};

buildSW();
