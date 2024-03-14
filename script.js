gsap.to('#nav',{
    backgroundColor:"#000",
    duration:0.5,
    height:"6vh",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.classList.contains('active')) {
          answer.classList.remove('active');
        } else {
          closeAllAnswers();
          answer.classList.add('active');
        }
      });
    });
  
    function closeAllAnswers() {
      const faqAnswers = document.querySelectorAll('.faq-answer');
      faqAnswers.forEach(function(answer) {
        answer.classList.remove('active');
      });
    }
  });
  

  var slide = document.getElementsByClassName("slide");
  var indicator = document.getElementById("indicator");
  var dots = document.getElementsByClassName("dots");
  var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
  var l = slide.length;
  var interval = 2000;
  var set;

  window.onload = function () {
      initialize();
      slide[0].style.opacity = "1";
      for (var j = 0; j < l; j++) {
          indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
      }

      dots[0].style.background = "#696969";

  }

  function initialize() {
      if (autoplay === "true")
          set = setInterval(function () { next(); }, interval);
  }



  function change(index) {
      clearInterval(set);
      count = index;
      for (var j = 0; j < l; j++) {
          slide[j].style.opacity = "0";
          dots[j].style.background = "#bdbdbd";
      }
      slide[count].style.opacity = "1";
      dots[count].style.background = "#696969";


  }

  var count = 0;
  function next() {
      clearInterval(set);
      slide[count].style.opacity = "0";
      count++;
      for (var j = 0; j < l; j++) {
          dots[j].style.background = "#bdbdbd";
      }


      if (count == l) {
          count = 0;
          slide[count].style.opacity = "1";
          dots[count].style.background = "#696969";

      } else {
          slide[count].style.opacity = "1";
          dots[count].style.background = "#696969";
      }
      initialize()
  }


  function prev() {
      clearInterval(set);
      slide[count].style.opacity = "0";
      for (var j = 0; j < l; j++) {
          dots[j].style.background = "#bdbdbd";
      }
      count--;

      if (count == -1) {
          count = l - 1;
          slide[count].style.opacity = "1";
          dots[count].style.background = "#696969";

      } else {
          slide[count].style.opacity = "1";
          dots[count].style.background = "#696969";
      }
      initialize()
  }

  const tips = [
    "Set Clear Goals",
    "Practice Regularly",
    "Immerse Yourself",
    "Use Flashcards",
    "Find a Language Partner",
    "Listen to Podcasts",
    "Watch Videos with Subtitles",
    "Read Children's Books",
    "Label Items in Your House",
    "Use Language Learning Apps",
    "Join Online Language Communities",
    "Write in a Journal",
    "Take Language Classes",
    "Practice Speaking Aloud",
    "Sing Songs in the Language",
    "Learn Grammar in Context",
    "Use Mnemonics to Remember Words",
    "Set Aside Dedicated Study Time",
    "Take Advantage of Language Exchange Programs",
    "Use Sticky Notes for Vocabulary",
    "Watch News in the Target Language",
    "Play Language Learning Games",
    "Visit Language-Speaking Countries",
    "Listen to Audiobooks",
    "Attend Language Meetups",
    "Use Language Learning Websites",
    "Practice Shadowing",
    "Create a Language Learning Schedule",
    "Use Language Learning YouTube Channels",
    "Repeat Phrases Out Loud",
    "Write Your Own Dialogues",
    "Teach Someone Else",
    "Listen to Language Learning Podcasts",
    "Set Realistic Expectations",
    "Reward Yourself for Milestones",
    "Study Pronunciation",
    "Use a Variety of Learning Resources",
    "Find Authentic Materials",
    "Stay Consistent",
    "Learn Slang and Idioms",
    "Watch Language Learning Tutorials",
    "Join Language Learning Challenges",
    "Create Mind Maps for Vocabulary",
    "Take Advantage of Free Resources",
    "Celebrate Your Progress",
    "Practice Active Listening",
    "Use Language Learning Software",
    "Engage in Language Exchanges Online",
    "Keep a Language Learning Notebook",
    "Stay Motivated and Have Fun!",
];

const tipContainer = document.getElementById('tipContainer');
const showTipBtn = document.getElementById('showTipBtn');

function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

function displayRandomTip() {
    const tip = getRandomTip();
    tipContainer.innerHTML = `<p>${tip}</p>`;
}

showTipBtn.addEventListener('click', displayRandomTip);

// Display a random tip when the page loads
displayRandomTip();
