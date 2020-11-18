/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (obj) =>{
  const $tweet = $(`<article class="tweet">Hello world</article>`);
}


const tweetObj =  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}


const $tweet = createTweetElement(tweetObj)

console.log($tweet)
$('#tweets-container').append($tweet)

// ARTICLE STRUCTURE TO USE

// <article> 
// <header id="top-of-tweet">
//   <img class="tweet-Avatar" src="/images/profile-hex.png">
//   <div class="tweet-user"> @user </div>
// </header>
//   <span class="article-content">
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse laboriosam fuga harum dolorem molestias necessitatibus asperiores at sunt accusamus neque error explicabo temporibus nesciunt nihil, earum est culpa perspiciatis corrupti.</p>
//   </span>
// <footer class="article-footer">
//   <span>Xdays ago</span>
//   <div>
//     <i class="fa fa-flag" aria-hidden="true"></i>
//     <i class="fa fa-retweet" aria-hidden="true"></i>
//     <i class="fa fa-heart" aria-hidden="true"></i>
//   </div>
// </footer>
// </article>