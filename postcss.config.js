module.exports = {
  plugins: {
    autoprefixer: true,
    cssnano: {
      reduceIdents: false,
      zindex: false,
      discardUnused: {
        fontFace: false,
      },
    },
  },
};

