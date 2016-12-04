'use strict';

var selectAll = function(query) {
  return Array.from(document.body.querySelectorAll(query));
};

// TODO: Add friend.
exports.clickAddFriendRequest = function() {
  Array.from(document.body.querySelectorAll('.FriendRequestAdd')).forEach((add, i) => {
    if (i > 5) { return; }
    setTimeout(() => {
      add.click();
      Array.from(document.body.querySelectorAll('.uiOverlayFooter .layerCancel')).forEach((cancel) => {
        cancel.click();
      });
    }, (200 + 200 * Math.random()) * i);
  });
};

// TODO: Cancel friend request.

// Array.from(document.body.querySelectorAll('.FriendRequestAdd')).forEach((like) => {
//   setTimeout(() => {
//   }, 100);
// });

// TODO: Confirm friend.
