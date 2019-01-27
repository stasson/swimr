const pkg = require('../package.json')

export function cli() {
  console.log(`hello from ${pkg.name}`)
}
