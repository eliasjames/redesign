const articles = [
  {
    "category": "music",
    "date": 20160310,
    "link": "https://medium.com/@eliasjudas/top-records-the-dealer-51797722eea3",
    "shortName": "My Top Records: Chico Hamilton’s 'The Dealer'"
  },
  {
    "category": "life and love",
    "link": "https://medium.com/@eliasjudas/this-earth-day-lets-do-little-aae25b01e0e9",
    "shortName": "This Earth Day, Let's Do Little"
  },
  {
    "category": "music",
    "date": 20180624,
    "link": "https://medium.com/@eliasjudas/my-top-records-moby-grape-c8a0697d2680",
    "shortName": "My Top Records: 'Moby Grape'"
  },
  {
    "category": "technical",
    "date": 20200422,
    "link": "https://medium.com/@eliascarlston/software-is-made-of-tiny-differences-53e1371628bc",
    "shortName": "Software is made of tiny differences"
  },
  {
    "category": "humane computing",
    "date": 20200415,
    "link": "https://medium.com/@eliascarlston/music-and-programming-the-loop-ee70a8ef6a1e",
    "shortName": "Music and Programming: the loop"
  },
  {
    "category": "technical",
    "date": 20200408,
    "link": "https://medium.com/@eliascarlston/redirecting-standard-streams-to-files-1d851117a91a",
    "shortName": "Redirecting Standard Streams to Files"
  },
  {
    "category": "humane computing",
    "date": 20200210,
    "link": "https://medium.com/@eliascarlston/the-first-lesson-of-programming-simple-aint-easy-60cbcc368e2",
    "shortName": "The First Lesson of Programming"
  },
  {
    "category": "humane computing",
    "date": 20180624,
    "link": "https://medium.com/@eliascarlston/science-and-spirituality-c8af0fc4ddf3",
    "shortName": "Science and Spirituality"
  },
  {
    "category": "technical",
    "date": 20200401,
    "link": "https://medium.com/@eliascarlston/command-line-plumbing-pipes-and-streams-369c7e4ded08",
    "shortName": "Command-line Plumbing: Pipes and Streams"
  },
  {
    "category": "technical",
    "date": 20180624,
    "link": "https://medium.com/@eliascarlston/command-line-text-tools-see-urls-3f8fd609fd26",
    "shortName": "Command-line text tools: See URLs"
  },
  {
    "category": "humane computing",
    "date": 20200121,
    "link": "https://medium.com/@eliascarlston/why-is-computer-programming-an-art-f51580280024",
    "shortName": "Why is Computer Programming an Art?"
  },
  {
    "category": "life and love",
    "date": 20190417,
    "link": "https://medium.com/@eliascarlston/if-youre-not-outraged-maybe-you-re-asserting-emotional-sovereignty-206574593248",
    "shortName": "If you’re not outraged, maybe you’re asserting emotional sovereignty"
  },
  {
    "category": "technical",
    "date": 20200311,
    "link": "https://medium.com/analytics-vidhya/internet-protocols-demystified-97e4075c6958",
    "shortName": "Internet Protocols Demystified"
  },
  {
    "category": "technical",
    "date": 20200304,
    "link": "https://medium.com/@eliascarlston/agile-demystified-c897925319e7",
    "shortName": "Agile Demystified"
  },
  {
    "category": "life and love",
    "date": 20190410,
    "link": "https://medium.com/@eliascarlston/simple-aint-easy-f0db41523188",
    "shortName": "Simple Ain't Easy"
  },
  {
    "category": "lyrics",
    "link": "https://medium.com/@eliascarlston/ideal-eyes-aa7f6695fa9",
    "shortName": "Ideal Eyes"
  },
  {
    "category": "life and love",
    "date": 20190306,
    "link": "https://medium.com/@eliascarlston/love-the-darkness-91f6e683e8e5",
    "shortName": "Love the Darkness"
  },
  {
    "category": "humane computing",
    "date": 20180624,
    "link": "https://medium.com/@eliascarlston/lessons-learned-13e9c3476629",
    "shortName": "Hard Lessons Learned from Half a Lifetime Practicing Programming"
  },
  {
    "category": "life and love",
    "date": 20180624,
    "link": "https://medium.com/@eliascarlston/the-importance-of-the-command-line-interface-36f8f520a656",
    "shortName": "Your Choice"
  },
  {
    "category": "technical",
    "date": 20180307,
    "link": "https://medium.com/@eliascarlston/the-importance-of-the-command-line-interface-36f8f520a656",
    "shortName": "The importance of the Command Line Interface"
  },
  {
    "category": "technical",
    "date": 20180624,
    "link": "https://medium.com/@eliascarlston/a-beginner-s-guide-to-debugging-243f09546f34",
    "shortName": "A Beginner’s Guide to Debugging"
  },
  {
    "category": "humane computing",
    "date": 20160310,
    "link": "https://medium.com/@eliascarlston/finding-a-writing-voice-b4bb95efd978",
    "shortName": "Finding a Writing Voice"
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
