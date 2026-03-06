#!/usr/bin/env node

const https = require('https');
const chalk = require('chalk');

const API_URL = 'https://official-joke-api.appspot.com/jokes/programming/random';
const TIMEOUT = 5000;

function fetchJoke() {
  return new Promise((resolve, reject) => {
    const request = https.get(API_URL, { timeout: TIMEOUT }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => data += chunk);
      
      res.on('end', () => {
        try {
          const jokes = JSON.parse(data);
          resolve(jokes[0]);
        } catch (error) {
          reject(new Error('Failed to parse joke data'));
        }
      });
    });

    request.on('error', (error) => {
      reject(new Error(`Network error: ${error.message}`));
    });

    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function main() {
  try {
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h')) {
      console.log(chalk.cyan('\ndev-jokes-cli\n'));
      console.log('Get random programming jokes from the internet!\n');
      console.log(chalk.yellow('Usage:'));
      console.log('  npx @meheduz/dev-jokes-cli');
      console.log('  dev-jokes-cli\n');
      console.log(chalk.yellow('Options:'));
      console.log('  --help, -h     Show this help message');
      console.log('  --version, -v  Show version\n');
      return;
    }

    if (args.includes('--version') || args.includes('-v')) {
      const pkg = require('./package.json');
      console.log(chalk.cyan(`v${pkg.version}`));
      return;
    }

    console.log(chalk.dim('\nFetching a fresh joke...\n'));
    const joke = await fetchJoke();

    console.log(chalk.bold.cyan('Dev Joke of the Moment:'));
    console.log(chalk.dim('─'.repeat(50)));
    console.log('\n' + chalk.yellow('Q: ') + chalk.white(joke.setup));
    console.log(chalk.green('A: ') + chalk.white.bold(joke.punchline));
    console.log('\n' + chalk.dim('─'.repeat(50)));
    console.log(chalk.dim('Run again for another joke!\n'));

  } catch (error) {
    console.error(chalk.red('\nError:'), error.message);
    console.log(chalk.yellow('\nPlease check your internet connection and try again.\n'));
    process.exit(1);
  }
}

main();
