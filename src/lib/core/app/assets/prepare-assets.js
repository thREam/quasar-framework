'use strict';

module.exports = function(context, assetExports, done) {
  if (typeof assetExports === 'function') {
    assetExports.call(
      context,
      function(vue) {
        quasar.nextTick(function() {
          done(vue);
        });
      }
    );
    return; // <<< EARLY EXIT
  }

  quasar.nextTick(function() {
    done(assetExports);
  });
};
