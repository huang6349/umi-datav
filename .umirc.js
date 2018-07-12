export default {
  plugins: [
    ['umi-plugin-routes', {
      exclude: [
        '/components/',
        '/models/',
      ],
    }],
    ['umi-plugin-dva'],
  ],
}
