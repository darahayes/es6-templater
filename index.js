var dopeRegex = /\${(?:(\w+)|(.*))}/g

function template (text, args) {
  args = args || {}
  return text.replace(dopeRegex, function (match, g1, g2, offset) {
    if (g1) {
      return args[g1] || ''
    }
    if (g2 || g2 === '') {
      throw Error('Invalid template on line ' + getLineNumber(text, offset) + ': offending text: ' + match)
    }
  })
}

function getLineNumber (text, offset) {
  return text.substring(0, offset).split('\n').length
}

module.exports = template
