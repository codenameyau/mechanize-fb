'use strict';

// Use this to Add Friend requests for any person.
exports.clickAddFriendRequest = function() {
  var selectElements = function(query) {
    return Array.from(document.body.querySelectorAll(query));
  };

  var elements = Array.from(document.body.querySelectorAll('.FriendRequestAdd'));
  var start = 0, stop = 10;

  for (var i=start; i<stop; i++) {
    setTimeout(() => {
      elements[i].click();
      selectElements('.uiOverlayFooter .layerCancel').forEach((cancel) => {
        cancel.click();
      });
    }, (200 + 200 * Math.random()) * i);
  }
};

// Array.from(document.body.querySelectorAll('.FriendRequestAdd')).forEach((like) => {
//   setTimeout(() => {
//   }, 100);
// });

// TODO: Confirm friend.
