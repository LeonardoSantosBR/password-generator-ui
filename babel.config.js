module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: ["API_HOST"],
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
