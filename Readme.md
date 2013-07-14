# every

  human-friendly intervals. uses ![date](http://github.com/matthewmueller/date) for human-friendly date parsing.

## Installation

With node.js:

    npm install every.js

With `component`:

    component install matthewmueller/every

## Examples

```js
every('5 seconds', fn);
every('10 minutes', fn);
every('5 hours', fn);
every('monday at 5pm', fn);
```

## API

### every(time, fn)

Call `fn` every `time`.

Optionally, you may use pass `function(done) { ... }` for asynchronous jobs

## License

  MIT
