'use strict';

// Needs fix for async.
exports.scrollToFooter = function(selector) {
  var getCurrentHeight = () => {
    return document.body.querySelector(selector).offsetHeight;
  };

  var prevHeight = 0;
  var currHeight = getCurrentHeight();

  for (var i=0; prevHeight < currHeight; i++) {
    window.setTimeout(() => {
      document.body.querySelector('#pageFooter').scrollIntoView();
      prevHeight = currHeight;
      currHeight = getCurrentHeight();
      console.log(prevHeight, currHeight);
    }, 350 * i);
  }
};
