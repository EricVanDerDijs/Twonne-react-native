const plugins = [
  [require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./"],
      alias: {
        "src": "./src"
      },
      cwd: "packagejson"
    },
  ],
];


module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};
