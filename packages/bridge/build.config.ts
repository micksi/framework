import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    'src/module',
    { input: 'src/runtime/', outDir: 'dist/runtime', format: 'esm', declaration: true }
  ],
  externals: [
    'webpack',
    'vite',
    'vue-meta'
  ]
})
