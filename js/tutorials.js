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
    // video data from pentacode on youtube: https://www.youtube.com/watch?v=8huMBHx-TKY
    title: "Let's Encypt through certbot",
    code:"8huMBHx-TKY",
    steps: [
      "Goto: <a href=\"https://letsencypt.org/getting-started/\">letsencypt.org</a>",
      "follow to: <a href=\"https://certbot.eff.org\">certbot</a>",
      "Select your webserver type or archicture",
      "Select your webserver OS",
      "run update commands from list",
      "add a certbot repository",
      "update and install from repo",
      "find your website through CLI",
      "for nginx website architecure enter: root@<b>webserver</b>:/etc/nginx/sites-available# sudo letsencypt certonly- a webroot --webroot-path=/usr/share/nginx/<b>website</b>/ -d <b>website</b>",
      "edit nginx configuration files",
      "redirect traffic to https"
    ]
  },
  {
    // video data from javidx9 on youtube: https://www.youtube.com/watch?v=ih20l3pJoeU
    title: "Concepts of 3D graphics",
    code:"ih20l3pJoeU",
    steps: [

    ]
  },
  {
    // video data from computerphile on youtube: https://www.youtube.com/watch?v=ciNHn38EyRc
    title: "SQL Injection Demonstration",
    code:"ciNHn38EyRc",
    steps: [

    ]
  },
  {
    // video data from Root Project on youtube: https://www.youtube.com/watch?v=Mzfw9QWUgTI
    title: "Disposable VMs",
    code:"Mzfw9QWUgTI",
    steps: [
      "<a href=\"sadd.io\">sadd.io</a>",
      "resource for creating either a windows 7 / kali linux disposable virtual machine"
    ]
  },
  {
    // video data from Joe Collins on youtube: https://www.youtube.com/watch?v=HIXzJ3Rz9po
    title: "The Linux File System",
    code:"HIXzJ3Rz9po",
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
