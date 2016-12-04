'use strict';

// TODO
exports.clickEgoLikes = function() {
  Array.from(document.body.querySelectorAll('.action > .ego_like')).forEach((like) => {
    setTimeout(() => {
      like.click();
    }, 100);
  });
};
