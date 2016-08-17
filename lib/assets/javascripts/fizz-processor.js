const Mincer = require('mincer')

function FizzProcessor () {
  Mincer.Template.apply(this, arguments)
}

require('util').inherits(FizzProcessor, Mincer.Template)

FizzProcessor.prototype.evaluate = function (context, locals) {
  this.data = this.data.replace(/'(3|6|9|12|15)'/g, "'$1 Fizz'")
}

module.exports = FizzProcessor
