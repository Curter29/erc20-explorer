module.exports = {
  apps : [{
    name: 'ERC20',
    script: './bin/www',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      PORT: 3001,
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'deploy',
      host : 'enface.io',
      ref  : 'origin/master',
      repo : 'git@github.com:Curter29/erc20-explorer.git',
      path : '/var/www/erc20.enface.io',
      'post-deploy' : 'npm install && npm audit fix && pm2 reload ecosystem.config.js --env production'
    }
  }
};
