function splitRight(self, seperator, maxsplit) {
  var split = self.split(seperator);

  if (typeof maxsplit === 'undefined') {
    var max = split.length-1
  } else {
    var max = (maxsplit >= split.length) ? split.length-1 : maxsplit
  }

  if (max === 0) {
    return [self];
  } else {
    var val = max ? [ split.slice(0, -max).join(seperator) ].concat(split.slice(-max)) : split;
    console.log(val);
    return val;
  }
}

module.exports = splitRight
