var twitterHandle = 'uprootedAmber';

function tweetCurrentPage() {
  var textquote =  document.getElementById('text-quote');
    window.open('https://twitter.com/share?url=google.com&text='+ textquote.textContent,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false; 
}

function GenQuote(ev) {
  var randNumber = Math.random() * 19 + 1;
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + randNumber + "&callback=", function(a) {

    $("#text-quote").html(a[0].content + "<p>— " + a[0].title + "</p>");
  });
}

$(document).ready(function(ev) {
  GenQuote(ev);
  $("#new-quote").on("click", function(ev) {
    GenQuote(ev);
  });
});