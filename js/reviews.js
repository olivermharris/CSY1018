let reviewdata = [
  {
    title: "Blogging Technology",
    author: 0,
    //
    content: "<section><p>For developers, blogging has become a prominent tool to update your clients and log your own work, but what technology should a developer use?</p><p>We at <b>Byte Planet Publishing</b> have reviewed two useful blog assets (<b>Wordpress</b> and <b>Jackyl</b>). To determine the ups and the downs. But most importantly, what looks best when used by a developer. Firstly to determine the right back-end architecture for a project, the developer must choose a platform designed for their solution.</p></section><section class=\"flex11\"><section><p>test</p></section><section><h3> Jackyl</h3><p><b>Jackyl</b> is a static site generator, this is intended for more advanced developers to create a blog, log, etc.. almost from scratch.</p><h3>Benefits</h3><ul><li>Fully customisable</li><li>Hackable</li><li>Programable</li></ul><h3>Disadvantages</h3><ul><li>Difficult to start</li><li>From Scratch</li></ul></section></section><section><p>To conclude, choosing the right logging or blogging architecture is up to the developer, but creating a less uniform design will make them stand out from the rest.</p></section>"
  },
  {
    title: "test",
    author: 2,
    //
    content: "<section><p>For developers, blogging has become a prominent tool to update your clients and log your own work, but what technology should a developer use?</p><p>We at <b>Byte Planet Publishing</b> have reviewed two useful blog assets (<b>Wordpress</b> and <b>Jackyl</b>). To determine the ups and the downs. But most importantly, what looks best when used by a developer. Firstly to determine the right back-end architecture for a project, the developer must choose a platform designed for their solution.</p></section><section class=\"flex11\"><section><p>test</p></section><section><h3> Jackyl</h3><p><b>Jackyl</b> is a static site generator, this is intended for more advanced developers to create a blog, log, etc.. almost from scratch.</p><h3>Benefits</h3><ul><li>Fully customisable</li><li>Hackable</li><li>Programable</li></ul><h3>Disadvantages</h3><ul><li>Difficult to start</li><li>From Scratch</li></ul></section></section><section><p>To conclude, choosing the right logging or blogging architecture is up to the developer, but creating a less uniform design will make them stand out from the rest.</p></section>"
  },
  {
    title: "",
    author: 2,
    //
    content: ""
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
