'use strict';

var likes = require('../console/likes');
var friends = require('../console/friends');

/***********************************************************
* Add additional console commands here.
************************************************************/
var functionMap = {
  'like-ego': {
    description: 'Clicks the like button on related content.',
    fn: likes.clickEgoLikes
  },

  'add-friend': {
    description: 'Clicks the add friend button for requested friends.',
    fn: friends.clickAddFriendRequest
  }
};

/***********************************************************
* UTILITIES
************************************************************/
var showHelp = function() {
  console.log('Available commands: \n');
  Object.keys(functionMap).map(function(key) {
    console.log(key, '-', functionMap[key].description);
  });
};

var pruneFn = function(fn) {
  var fnSource = fn.toString();
  var fnBody = fnSource.substring(
    fnSource.indexOf('{') + 1,
    fnSource.lastIndexOf('}')
  ).replace(/\n\s+/g, '');
  return fnBody;
};

var immediatelyInvokeFn = function(fnBody) {
  return `(function() {${fnBody.replace(/\n/g, '')}}());`;
};

var showOneliner = function(fn) {
  console.log(immediatelyInvokeFn(pruneFn(fn)));
};

/***********************************************************
* MAIN PROGRAM
************************************************************/
var action = process.argv[2];
var limit = process.argv[3];
var actionChosen = functionMap[action];

if (!action || !actionChosen) {
  process.exit(showHelp());
}

// Needs to evaluate.
var options = {
  limit: limit ? parseInt(limit, 10) : 0
};

showOneliner(actionChosen.fn);
