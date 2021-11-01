// For this project, It will be given over a span of two weeks. 
// Class will be required to do a Flashcard web application or a To-do list web application. 
// Requirements:

// 1) Must make use of Object Oriented Programming in the information used on the flashcards. 
// 2) CSS must demonstrate a minimal level of competency, it cannot be left as black and white. 
// Plus - while the added functionality of the user typing into the flashcards the information is nice but not a must. 
// 3) Javascript constructor functions must be utilized in this project even if it’s minimal.
// No Jquery allowed. 
// It must be done on your github accounts.
// A well organized readMe with markdown has to be used. 

// let url = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Xl9ulMh0BRyo7Q7dX2vUBdl5uadPjptgOHpnKRL5"


// fetch (url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.results.sunrise);
//     console.log(data.results.sunset);

//     $('#sunrise').text(data.results.sunrise);
//     $('#sunset').text(data.results.sunset);
// });

var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
});

document.getElementById("delete_cards").addEventListener("click", () => {
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});

flashcardMaker = (text) => {
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const answer = document.createElement('h2');

  flashcard.className = 'flashcard';

  question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
  question.textContent = text.my_question;

  answer.setAttribute("style", "text-align:center; display:none; color:red");
  answer.textContent = text.my_answer;

  flashcard.appendChild(question);
  flashcard.appendChild(answer);

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none")
      answer.style.display = "block";
    else
      answer.style.display = "none";
  })

  document.querySelector("#flashcards").appendChild(flashcard);
}

contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");

  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1]);
  question.value = "";
  answer.value = "";
}