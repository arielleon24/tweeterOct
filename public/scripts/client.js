/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//// THIS IS THE SAME AS DOCUMENT.READY
$(document).ready(function () {
  loadTweets();
  $("form").on("submit", function (event) {
    event.preventDefault();
    if (!$("#tweet-text").val()) {
      $("#error").html("Your tweet is empty").show(2000, hideError);
    } else if ($("#tweet-text").val().length > 140) {
      $("#error")
        .html("You have exceeded the character limit")
        .show(2000, hideError);
    } else {
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize(),
      })
        .then(function () {
          console.log("AJAX COMPLETED");
          loadTweets();
        })
        .catch((err) => console.log(err));
    }
  });
});

const loadTweets = function () {
  $.ajax({
    dataType: "json",
    method: "GET",
    url: "/tweets",
  }).then(function (tweets) {
    $("#posted-tweets").empty();
    renderTweets(tweets);
  });
};

const renderTweets = function (tweets) {
  tweets.forEach((tweet) => {
    let tweetsContainer = $("#posted-tweets");
    let tweetElement = createTweetElement(tweet);
    tweetsContainer.prepend(tweetElement);
  });
  $("#tweet-text").val('');
};

const createTweetElement = function (tweet) {
  let $tweet = `        
<article> 
<header id="top-of-tweet">
  <div id="avatar-and-name"><img class="tweet-Avatar" src="${escape(
    tweet.user.avatars
  )}"> ${escape(tweet.user.name)}</div>
  <div class="tweet-user"> ${escape(tweet.user.handle)} </div>
</header>
  <span class="article-content">
    <p>${escape(tweet.content.text)}</p>
  </span>
<footer class="article-footer">
  <span>${moment(tweet.created_at)}</span>
  <div class="flags">
    <i class="fa fa-flag" aria-hidden="true"></i>
    <i class="fa fa-retweet" aria-hidden="true"></i>
    <i class="fa fa-heart" aria-hidden="true"></i>
  </div>
</footer>
</article>`;

  return $tweet;
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const hideError = function () {
  setTimeout(function () {
    $("#error").hide();
  }, 2000);
};
