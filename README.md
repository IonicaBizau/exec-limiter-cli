
# `$ exec-limiter`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/exec-limiter-cli.svg)](https://www.npmjs.com/package/exec-limiter-cli) [![Downloads](https://img.shields.io/npm/dt/exec-limiter-cli.svg)](https://www.npmjs.com/package/exec-limiter-cli)

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

Documentation can be found at https://github.com/IonicaBizau/exec-limiter-cli#readme.
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2017#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
