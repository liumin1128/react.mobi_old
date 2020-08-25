const child = require('child_process')
const json = require('../package.json')

const sh = `

rm -rf ./node_modules

mv package.json package_back.json 

yarn add ${Object.keys(json.dependencies).join(' ')}

yarn add -D ${Object.keys(json.devDependencies).join(' ')}

`

child.exec(sh, function (err, sto) {
  if (err) {
    console.log(err)
  }
  console.log(sto)
})
