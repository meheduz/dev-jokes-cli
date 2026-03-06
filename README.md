# dev-jokes-cli

[![npm version](https://img.shields.io/npm/v/@meheduz/dev-jokes-cli.svg)](https://www.npmjs.com/package/@meheduz/dev-jokes-cli)
[![npm downloads](https://img.shields.io/npm/dm/@meheduz/dev-jokes-cli.svg)](https://www.npmjs.com/package/@meheduz/dev-jokes-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Get random programming jokes from the internet in your terminal - instant mood booster for developers!

## Quick Start

No installation needed! Just run:

```bash
npx @meheduz/dev-jokes-cli
```

Or install globally:

```bash
npm install -g @meheduz/dev-jokes-cli
dev-jokes-cli
```

## Example Output

```
Fetching a fresh joke...

Dev Joke of the Moment:
──────────────────────────────────────────────────

Q: Why do programmers prefer dark mode?
A: Because light attracts bugs!

──────────────────────────────────────────────────
Run again for another joke!
```

## Features

- **Live Internet Jokes** - Fetches fresh jokes from Official Joke API
- **Always Different** - New joke every time you run it
- **Colorful Output** - Beautiful terminal UI with chalk
- **Lightning Fast** - Instant jokes, minimal delay
- **Zero Config** - Works out of the box
- **NPX Ready** - No installation required
- **Cross-Platform** - Works on macOS, Linux, Windows

## Use Cases

- Take a quick break during coding sessions
- Lighten the mood during code reviews
- Start team meetings with a laugh
- Add to your terminal startup script
- Share with fellow developers

## Commands

```bash
dev-jokes-cli          # Show a random joke
dev-jokes-cli --help   # Show help
dev-jokes-cli --version # Show version
```

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Submit a PR

## Installation as Dependency

```bash
npm install @meheduz/dev-jokes-cli
```

```javascript
const { execSync } = require('child_process');
execSync('npx @meheduz/dev-jokes-cli', { stdio: 'inherit' });
```

## Show Your Support

Give a star if this project made you smile!

## License

MIT

## Links

- [NPM Package](https://www.npmjs.com/package/@meheduz/dev-jokes-cli)
- [GitHub Repository](https://github.com/meheduz/dev-jokes-cli)
- [Report Issues](https://github.com/meheduz/dev-jokes-cli/issues)

---

**Made by developers, for developers**

*Keep coding, keep laughing!*
