const program = require("commander");
program.option("--foo <text>")
program.parse(process.argv)
const options = program.opts()
console.log(options.foo)
// run w/ commander-params.js --foo bar
// return bar
