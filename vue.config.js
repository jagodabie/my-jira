const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
});
//TODO: normalnie to zaimportować !
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
         @import "./src/components/scss/_variables.scss";
        `,
      },
    },
  },
};
