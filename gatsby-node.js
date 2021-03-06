'use strict'

const resolve = require('path').resolve
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      moduleExtensions: ['tsx', 'ts'],
    },
  })
}

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

// 型情報を読み込む
require('./src/__generated__/gatsby-types')

const {
  createPages,
  onCreateNode,
  createSchemaCustomization,
} = require('./src/gatsby-node/index')

exports.createPages = createPages
exports.onCreateNode = onCreateNode
exports.createSchemaCustomization = createSchemaCustomization
