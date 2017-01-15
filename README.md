
# `$ exec-limiter`

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/exec-limiter-cli.svg)](https://www.npmjs.com/package/exec-limiter-cli) [![Downloads](https://img.shields.io/npm/dt/exec-limiter-cli.svg)](https://www.npmjs.com/package/exec-limiter-cli) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Run multiple shell commands in parallel, but with a limit.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g exec-limiter-cli
```

:bulb: **ProTip**: If you want to use this package as module, check out [`exec-limiter`—the API version of it](http://github.com/IonicaBizau/exec-limiter).


Then, run `exec-limiter --help` and see what the CLI tool can do.


```
$ exec-limiter --help
Usage: exec-limiter <input> [options]

Run multiple shell commands in parallel, but with a limit.

Command arguments:
  <input>  The input file.

Options:
  -m, --max <max>  The number of how many parallel processes you want
                   to run.
  -v, --version    Displays version information.
  -h, --help       Displays this help.

Examples:
  $ exec-limiter -m 3 commands.txt

Documentation can be found at https://github.com/Bloggify/exec-limiter-cli#readme.
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2017#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
