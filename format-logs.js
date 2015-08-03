var through2 = require('through2');

var noop = function() {};

var matchRegex = function(regex) {
  return function(str) {
    return regex.test(str);
  };
};

var isTAPFirstLine = matchRegex(/(.*) LOG: 'TAP (.*)'/);
var isLogLine = matchRegex(/(.*) LOG: '(.*)'/);

var sequentialStringCatcher = {
  queue: [],
  callbacks: {},
  done: true,

  startWhen: function(startWhenFn) {
    this.callbacks.startWhen = startWhenFn;
    return this;
  },

  takeWhile: function(takeWhileFn) {
    this.callbacks.takeWhile = takeWhileFn;
    return this;
  },

  onEnd: function(onEndFn) {
    this.callbacks.onEnd = ogsnEndFn;
    return this;
  },

  add: function(str) {
    if (this.done && !this.callbacks.startWhen(str)) {
      return false;
    }

    this.done = false;

    if (this.callbacks.takeWhile(str)) {
      this.queue.push(str);
      return true;
    }

    this.done = true;
    this.callbacks.onEnd(this.queue.join('\n'));
    this.queue.length = 0;
    return false;
  }
};

module.exports = function() {
  var sequentialCatcher = Object.create(sequentialStringCatcher)
    .startWhen(isTAPFirstLine)
    .takeWhile(isLogLine)
    .onEnd(function(block) {
      console.log('\n================');
      console.log(block);
      console.log('================\n');
    });

  return through2(function(chunk, enc, callback) {
    var str = chunk.toString();

    if (!sequentialCatcher.add(str)) {
      this.push(Buffer.concat([Buffer('\n'), chunk]));
    }

    callback();
  });
};