const fs = require('fs')
const child = require('child_process')
const json = require('../package.json')

const jsonWithOutPackage = {
  ...json,
}

delete jsonWithOutPackage.dependencies
delete jsonWithOutPackage.devDependencies

fs.writeFile('package.json', JSON.stringify(jsonWithOutPackage, null, 2), function (err) {
  //写入同目录下的Data.txt文件
  if (err) throw err

  const sh = `

rm -rf ./node_modules

yarn add ${Object.keys(json.dependencies).join(' ')}

yarn add -D ${Object.keys(json.devDependencies).join(' ')}

`

  child.exec(sh, function (err, sto) {
    if (err) {
      console.log(err)
    }
    console.log(sto)
  })
})
