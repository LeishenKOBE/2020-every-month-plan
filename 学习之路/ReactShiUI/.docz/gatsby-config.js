const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'shi-ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Github上传\\ReactShiUI\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './components/**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'doc-site',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'shi-ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Github上传\\ReactShiUI',
          templates:
            'C:\\Github上传\\ReactShiUI\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Github上传\\ReactShiUI\\.docz',
          cache: 'C:\\Github上传\\ReactShiUI\\.docz\\.cache',
          app: 'C:\\Github上传\\ReactShiUI\\.docz\\app',
          appPackageJson: 'C:\\Github上传\\ReactShiUI\\package.json',
          appTsConfig: 'C:\\Github上传\\ReactShiUI\\tsconfig.json',
          gatsbyConfig: 'C:\\Github上传\\ReactShiUI\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Github上传\\ReactShiUI\\gatsby-browser.js',
          gatsbyNode: 'C:\\Github上传\\ReactShiUI\\gatsby-node.js',
          gatsbySSR: 'C:\\Github上传\\ReactShiUI\\gatsby-ssr.js',
          importsJs: 'C:\\Github上传\\ReactShiUI\\.docz\\app\\imports.js',
          rootJs: 'C:\\Github上传\\ReactShiUI\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Github上传\\ReactShiUI\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\Github上传\\ReactShiUI\\.docz\\app\\index.html',
          db: 'C:\\Github上传\\ReactShiUI\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
