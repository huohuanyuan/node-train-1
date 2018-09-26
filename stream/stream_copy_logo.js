var fs = require('fs')

var source = fs.readFileSync('logo.jpg')

fs.writeFileSync('steam_copy_logo.png',source)