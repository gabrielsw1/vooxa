const { execSync } = require('child_process')

// Instala as dependências
execSync('npm install', { stdio: 'inherit' })

// Executa o build do Quasar
execSync('quasar build', { stdio: 'inherit' })
