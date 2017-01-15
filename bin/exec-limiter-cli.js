#!/usr/bin/env node
"use strict";

const Tilda = require("tilda")
    , ExecLimiter = require("exec-limiter")
    , readFile = require("read-utf8")
    ;

let parser = new Tilda(`${__dirname}/../package.json`, {
    options: [
        {
            name: "max"
          , opts: ["m", "max"]
          , desc: "The number of how many parallel processes you want to run."
          , required: true
          , type: Number
        }
    ]
  , args: [
        {
            name: "input"
          , desc: "The input file."
        }
    ]
  , examples: [
        "exec-limiter -m 3 commands.txt"
    ]
}).main(action => {
    readFile(action.args.input, (err, content) => {
        if (err) {
            return parser.exit(err);
        }

        content = content.split("\n").map(c => c.trim()).filter(c => c && !c.startsWith("#"))

        let ex = new ExecLimiter(action.options.max.value);
        content.forEach((c, index) => {
            console.log(`Scheduling the "${c}" command.`);
            ex.add(c, {
                stdio: "inherit"
            }, (err, data) => {
                console.log(`Finished task from line ${index + 1} / ${content.length}`);
            });
        });
    });
});
