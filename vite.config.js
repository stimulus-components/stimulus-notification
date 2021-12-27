import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') return {}

  return {
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
}
