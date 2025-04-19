const presets = [
  [
    '@babel/preset-typescript',
    {
      isTSX: true,
      allExtensions: true
    }
  ],
  [
    '@babel/preset-react',
    {
      runtime: 'automatic'
    }
  ],
  [
    '@babel/preset-env',
    {
      shippedProposals: true,
      useBuiltIns: 'usage',
      corejs: '3'
    }
  ]
]

const plugins = []

module.exports = { presets, plugins }
