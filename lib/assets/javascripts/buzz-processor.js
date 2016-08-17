const Mincer = require('mincer')

function BuzzProcessor () {
  Mincer.Template.apply(this, arguments)
}

require('util').inherits(BuzzProcessor, Mincer.Template)

BuzzProcessor.prototype.evaluate = function (context, locals) {
  this.data = this.data.replace(/'(5|10|15)( Fizz)?'/g, "'$1$2 Buzz'")
}

module.exports = BuzzProcessor
