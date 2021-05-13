p5.prototype.preloadDelay = (ms = 1000, cb) => {
    const ret = {};
    const self = this;

    setTimeout(() => {
        if (typeof callback == 'function') {
            callback(ret); // do the callback.
        }
        self._decrementPreload();
    }, ms);

    return ret;
}
p5.prototype.registerPreloadMethod('preloadDelay');
