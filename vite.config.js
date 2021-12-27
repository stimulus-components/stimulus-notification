const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-notification'
    },
    rollupOptions: {
      external: ['stimulus-use', '@hotwired/stimulus'],
      output: {
        globals: {
          '@hotwired/stimulus': 'Stimulus',
          'stimulus-use': 'useTransition'
        }
      }
    }
  }
}
