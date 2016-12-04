'use strict';

// TODO: Add friend.
exports.clickAddFriendRequest = function() {
  var selectElements = function(query) {
    return Array.from(document.body.querySelectorAll(query));
  };

  selectElements('.FriendRequestAdd').forEach((add, i) => {
    if (i > 6) { return; }

    setTimeout(() => {
      add.click();
      selectElements('.uiOverlayFooter .layerCancel').forEach((cancel) => {
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
