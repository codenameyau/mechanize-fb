'use strict';

exports.scrollToFooter = function() {
  for (var i=0; i<20; i++) {
    window.setTimeout(() => {
      document.body.querySelector('#pageFooter').scrollIntoView();
    }, 450 * i);
  }
};


exports.addFriendFromProfile = function() {
  var selectElements = function(query) {
    return Array.from(document.body.querySelectorAll(query));
  };

  var elements = Array.from(document.body.querySelectorAll('.FriendRequestAdd:not(.hidden_elem)'));
  for (var i=0; i<elements.length; i++) {
    setTimeout(() => {
      elements[i].click();
      selectElements('.uiOverlayFooter .layerCancel').forEach((cancel) => {
        cancel.click();
      });
    }, (200 + 200 * Math.random()) * i);
  }
};


// TODO: Confirm friend.


// TODO: Unfriend people with fewer than 300 friends or no count.
