let reviewdata = [
  {
    title: "Blogging Technology",
    author: 0,
    //
    content: "<section><p> For developers, blogging has become a prominent tool to update your clients and log your own work, but what technology should a developer use?</p><p> We at <b>Byte Planet Publishing</b> have reviewed two useful blog assets (<b>Wordpress</b> and <b>Jackyl</b>). To determine the ups and the downs. But most importantly, what looks best when used by a developer. Firstly to determine the right back-end architecture for a project, the developer must choose a platform designed for their solution.</p></section><section class=\”flex11\”><section></section><section></section></section>"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: 2,
    //
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

function loadArticle(ID) {

  let review = reviewdata[ID];

  loadAuthor(review.author);
  document.getElementById('title').innerHTML = review.title;
  document.getElementById('content').innerHTML = review.content;

}

// page setup
function load() {

  // default article
  loadArticle(0);

  document.getElementById('reviewlist').innerHTML = `

    ${reviewdata.map((review, id) => `
      <li>
        <a onclick="loadArticle(${id})">
          <b>${review.title}</b> by <b>${data.authors[review.author].name}</b>
        </a>
      </li>
    `).join('')}

  `

}
