const brotli = require('brotli')
const fs = require('fs')

const brotliSettings = {
  extension: 'br',
  mode: 0, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11
  lgwin: 22 // window size
}

const path = 'dist/angular-tutorial-blogs';

fs.readdirSync(path).forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
    const result = brotli.compress(fs.readFileSync(path + '/' + file), brotliSettings)
    if (result) {
      fs.writeFileSync(path + '/' + file + '.br', result)
    }
  }
})
