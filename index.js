#!/usr/bin/env node

const https = require('https');
const chalk = require('chalk');

async function fetchJoke() {
  return new Promise((resolve, reject) => {
    https.get('https://official-joke-api.appspot.com/jokes/programming/random', (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const jokes = JSON.parse(data);
          resolve(jokes[0]);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h')) {
      console.log(chalk.cyan('\n😂 dev-jokes-cli\n'));
      console.log('Get random programming jokes from the internet!\n');
      console.log(chalk.yellow('Usage:'));
      console.log('  npx dev-jokes-cli');
      console.log('  dev-jokes\n');
      console.log(chalk.yellow('Options:'));
      console.log('  --help, -h    Show this help message');
      console.log('  --version, -v Show version\n');
      process.exit(0);
    }

    if (args.includes('--version') || args.includes('-v')) {
      const pkg = require('./package.json');
      console.log(chalk.cyan(`v${pkg.version}`));
      process.exit(0);
    }

    console.log(chalk.dim('\n🔄 Fetching a fresh joke...\n'));
    const joke = await fetchJoke();

    console.log(chalk.bold.cyan('🎭 Dev Joke of the Moment:'));
    console.log(chalk.dim('─'.repeat(50)));
    console.log('\n' + chalk.yellow('Q: ') + chalk.white(joke.setup));
    console.log(chalk.green('A: ') + chalk.white.bold(joke.punchline + ' 😄'));
    console.log('\n' + chalk.dim('─'.repeat(50)));
    console.log(chalk.dim('💡 Run again for another joke!\n'));

  } catch (error) {
    console.error(chalk.red('\n❌ Error fetching joke:'), error.message);
    console.log(chalk.yellow('\n💡 Check your internet connection and try again!\n'));
    process.exit(1);
  }
}

main();
