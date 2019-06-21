const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:linuxdev-br/linuxdev-br.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)