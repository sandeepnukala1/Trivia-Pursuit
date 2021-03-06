let apiData, categories, selectedCategory, questions = [];

const $squares = $(".square")
const $disabledButton = $('#disabled-game')
const $resetGame = $('#reset-game')
const $primaryButton = $('#play-game')
const $categorySection = $('#category-section')
let timerCount = 30
let $question = $("#question")
let $A = $("#a")
let $B = $("#b")
let $C = $("#c")
let $D = $("#d")
let $answer = $("#answer")
let $p1score = $("#player1 h4")
let $p2score = $("#player2 h4")
let $message = $("#message-board")

let currentStateOfTrivia = {
  player1: 0,
  player2: 0,
  currentQuestion: {},
  which: true
}

//set the category ids for the categories
$('#sports').data('myVal', 4);
$('#entertainment').data('myVal', 1);
$('#history').data('myVal', 2);
$('#science').data('myVal', 5);
$('#geography').data('myVal', 3);

//disable auto slide for bootstrap
$('.carousel').carousel({
  interval: false,
});

//set base URL for All api calls
const Baseurl = "https://cdn.contentful.com/spaces/tgp7uzkwkoer/environments/master/entries?access_token=7Mk1mGkO7qdF4JFqDQztUdD9K1p2WlfNP6HLiQnp-Oc&content_type="

//get categories
$.ajax(Baseurl+ 'categories').then(categoryData => {
  categories = categoryData.items.map(c => {
    return {
      category: c.fields.categoryName,
      id: c.fields.categoryId
    }
  });
  console.log(categories)
});


//hide questions and answers content on first screen
$("#questions-main-content").hide()
$primaryButton.hide()
$resetGame.hide()

let highlightClass = 'highlighted-category';

$squares.click(function() {
  $squares.removeClass(highlightClass)
  $(this).addClass(highlightClass)
  selectedCategory = $(this).data("myVal")
  $primaryButton.show()
  $disabledButton.hide()
})

$("#play-game").on("click", playGameButtonClicked);

function playGameButtonClicked(event) {
  event.preventDefault();
  renderPlayerHTML();
}

$resetGame.on("click", function() {
  location.reload(true)
})

function renderPlayerHTML() {
  $.ajax(Baseurl+ `${selectedCategory}`).then(eData => {
    console.log(eData)
    questions = eData.items.map(q => {
      return q.fields
    })
    console.log(questions)

    setQuestions(questions);

    $categorySection.hide()
    $("#trivia-carousel-content").hide()
    $("#questions-main-content").show()
    $primaryButton.hide()
    $resetGame.show()
  })
}

function setQuestions(q) {
  const randomIndex = Math.floor(Math.random()*q.length)
  const randomQuestion = q[randomIndex]
  console.log(randomQuestion)
  $question.text(randomQuestion.question)
  $A.text(randomQuestion.a)
  $B.text(randomQuestion.b)
  $C.text(randomQuestion.c)
  $D.text(randomQuestion.d)
  // $answer.text(randomQuestion.answer)
  
  $p1score.text(currentStateOfTrivia.player1)
  $p2score.text(currentStateOfTrivia.player2)  

  console.log(currentStateOfTrivia.player1, currentStateOfTrivia.player2)

  if(currentStateOfTrivia.which) {
    $message.text(`Player1's Turn`)
  } else {
    $message.text(`Player2's Turn`)
  }

  $("li").off()
  $("li").on("click", (event) => {
      chooseAnswer(event, randomQuestion)
  })
}

function chooseAnswer(event, question) {
  if(event.target.innerText === question.answer) {
    console.log("correct")
    if(currentStateOfTrivia.which) {
      currentStateOfTrivia.player1++
      currentStateOfTrivia.which = !currentStateOfTrivia.which
    }else {
      console.log("incorrect")
        currentStateOfTrivia.player2++
        currentStateOfTrivia.which = !currentStateOfTrivia.which
    }
   
    setQuestions(questions)
  } else {
    
    setQuestions(questions)
    currentStateOfTrivia.which = !currentStateOfTrivia.which
  }
  
  setQuestions(questions)
}
