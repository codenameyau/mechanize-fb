'use strict';

// Use this to Add Friend requests for any person.
exports.clickAddFriendRequest = function(options, filterFn) {
  var selectElements = function(query) {
    return Array.from(document.body.querySelectorAll(query));
  };

  var limit = options.limit;
  var elements = selectElements('.FriendRequestAdd');

  if (filterFn && typeof filteredElements === 'function') {
    elements = selectElements.filter(filterFn);
  }

  for (var i=0; i<elements.length; i++) {
    if (limit && i > limit) { break; }

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
