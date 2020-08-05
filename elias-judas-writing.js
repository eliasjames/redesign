const articles = [
  {
    "category": "life and love",
    "link": "https://medium.com/@eliascarlston/your-choice-eb736b684b6c",
    "shortName": "Your Choice"
  },
  {
    "category": "lyrics",
    "link": "https://medium.com/@eliascarlston/ideal-eyes-aa7f6695fa9",
    "shortName": "Ideal Eyes"
  },
  {
    "category": "opinion",
    "link": "https://medium.com/@eliasjudas/this-earth-day-lets-do-little-aae25b01e0e9",
    "shortName": "Earth Day"
  },
  {
    "category": "technical",
    "link": "https://medium.com/@eliascarlston/a-beginner-s-guide-to-debugging-243f09546f34",
    "shortName": "A Beginner’s Guide to Debugging"
  },
  {
    "category": "music",
    "link": "https://medium.com/@eliasjudas/top-records-the-dealer-51797722eea3",
    "shortName": "My Top Records: Chico Hamilton’s 'The Dealer'"
  }
];

document.addEventListener("DOMContentLoaded", ()=>{
  const writingList = document.querySelector("#writing-list");
  articles.forEach(e => {
    const eachLI = document.createElement("li");
    eachLI.innerHTML = `
      ${ e.category }: <a href="${ e.link }">${ e.shortName }</a>
    `;
    writingList.appendChild(eachLI);
  });
});
