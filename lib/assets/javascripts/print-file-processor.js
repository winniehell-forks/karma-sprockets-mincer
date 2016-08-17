const Mincer = require('mincer')

function PrintFileProcessor () {
  Mincer.Template.apply(this, arguments)
}

require('util').inherits(PrintFileProcessor, Mincer.Template)

PrintFileProcessor.prototype.evaluate = function (context, locals) {
  this.data = `console.log('${this.file}:')\n` + this.data
}

module.exports = PrintFileProcessor
