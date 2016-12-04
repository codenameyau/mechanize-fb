'use strict';

exports.scrollToFooter = function() {
  for (var i=0; i<20; i++) {
    window.setTimeout(() => {
      document.body.querySelector('#pageFooter').scrollIntoView();
    }, 450 * i);
  }
};


exports.addFriendFromProfile = function() {
  var elements = Array.from(document.body.querySelectorAll('.FriendRequestAdd:not(.hidden_elem)'));

  elements.forEach((elemet, i) => {
    setTimeout(() => {
      elements[i].click();

      var modalFooter = document.body.querySelector('.uiOverlayFooter');
      if (modalFooter) {
        var footerBtns = modalFooter.children;
        var rightmostBtn = footerBtns.length - 1;
        footerBtns[rightmostBtn].click();
      }
    }, (150 + ~~(300 * Math.random())) * i);
  });
};


// TODO: Confirm friend.


// TODO: Unfriend people with fewer than 300 friends or no count.
