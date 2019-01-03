let reviewdata = [
  {
    title: "Test",
    author: 0,
    //
    content: "Content"
  }
]

function loadArticle(ID) {

  let review = reviewdata[ID];

  loadAuthor(review.author);
  document.getElementById('title').innerHTML = review.title;
  document.getElementById('content').innerHTML = review.content;

}
