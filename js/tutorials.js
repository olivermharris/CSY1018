// loaded video: videocode[0]
let videodata = [
  {
    // video data from WP Crafter on youtube: https://www.youtube.com/watch?v=QLNy14QTkd8
    title: "Confiqure Wordpress",
    code:"QLNy14QTkd8",
    steps: [
      "delete default post",
      "delete default page",
      "clear trash",
      "bulk action delete the default wordpress plugins",
      "set a nickname in admin settings",
      "choose the method of displaying this nickname publically",
      "update admin profile",
      "change the websites timezone to where it gets the most trafic, or local",
      "select the permalinks tag",
      "choose the postname option for SEO optimization",
      "move to the dashboard",
      "customise the screen options"
    ]
  },{
    code:"Pu_9xIZpbjc",
    steps: [
      "loading",
      "steps",
      "good",
      "or",
      "bad?"
    ]
  },
  {
    title: "",
    code:"Pu_9xIZpbjc",
    steps: [

    ]
  },
  {
    title: "",
    code:"Pu_9xIZpbjc",
    steps: [

    ]
  },
  {
    title: "",
    code:"Pu_9xIZpbjc",
    steps: [

    ]
  },
  {
    title: "",
    code:"Pu_9xIZpbjc",
    steps: [

    ]
  }
];

function loadVideo(ID) {

  // retrieve data
  let loaded = videodata[0];
  let video = videodata[ID];

  // replace old data
  videodata[0] = video;
  videodata[ID] = loaded;

  // replace old video
  document.getElementById(ID).innerHTML = `

  <a onclick="loadVideo(${ID})"></a>
  <iframe src="https://www.youtube-nocookie.com/embed/${loaded.code}?controls=0" allow="encrypted-media;"></iframe>

  `

  // update new tutorial video
  document.getElementById('video').innerHTML = `

  <iframe src="https://www.youtube-nocookie.com/embed/${video.code}" allow="encrypted-media;" allowfullscreen></iframe>

  `

  document.getElementById('steps').innerHTML = `
    ${video.steps.map(step => `
        <li>${step}</li>
      `).join('')}
  `

  document.getElementById('title').innerHTML = `${video.title}`
};
