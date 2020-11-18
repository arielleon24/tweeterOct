/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 

 const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//// THIS IS THE SAME AS DOCUMENT.READY
$(() => {
  
})
const renderTweets = function(tweets) {
tweets.forEach (tweet => {
  console.log(tweet)
  let tweetsContainer = $('#posted-tweets')
  let tweetElement = createTweetElement(tweet)
  console.log(tweetElement)
  tweetsContainer.prepend(tweetElement)
  console.log(tweetsContainer)
}) 
}

const createTweetElement = function(tweet) {
let $tweet = `        
<article> 
<header id="top-of-tweet">
  <img class="tweet-Avatar" src="${tweet.user.avatars}">
  <div class="tweet-user"> ${tweet.user.handle} </div>
</header>
  <span class="article-content">
    <p>${tweet.content.text}</p>
  </span>
<footer class="article-footer">
  <span>${tweet.created_at}</span>
  <div>
    <i class="fa fa-flag" aria-hidden="true"></i>
    <i class="fa fa-retweet" aria-hidden="true"></i>
    <i class="fa fa-heart" aria-hidden="true"></i>
  </div>
</footer>
</article>`

return $tweet;
}

renderTweets(data);
