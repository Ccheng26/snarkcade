// const remote = require('electron').remote
// const main = remote.require('./main.js')

// let button = document.createElement('button')
// button.textContent = 'Save \'em'
// button.addEventListener('click', () => {
// main.openWindow()
// }, false)
// document.body.appendChild(button)


//this is a global variable used several times:
var questionCounter = 0;

var whatToDoWithAnswers = function() {
    $('.booleanChecker').click(function() {
            var $target = $(event.target)
            if ($target.hasClass('true')) {
                $timerDiv.html(timeLeft += 5)
                $success=$('audio')[0];
                $success.play()
                $('#progressInner').animate({width: (questionCounter+1)*10+'%'}, 'slow')
                $('#userInput').hide()
                    //"replacement" moves the correct answer's button into the Upper Area
                $('.replaceHere').replaceWith(($target))
                $('#userInput').children('ul').remove()
                $('.true').removeClass("true").addClass('learnMore ')
                questionCounter += 1;
                isPaused = true
            }


            else if ($target.hasClass('false')) {
                //the esle statement means that a false answer was chosen.
                $('.gameContainer').hide()
                $('#userInput').children('ul').remove()
                $('#ending').show()
                $wrong=$('audio')[1];
                $wrong.play()
                isPaused = true
            }

            else if ($target.hasClass('learnMore')) {
                window.open('https://tatoeba.org/eng/sentences/search?from=epo&to=eng&query=' + $('.learnMore').text())
            }
            // checking whether the game is over:
            if (lvl1Questions.length == (questionCounter)) {
                $('#victory').show()
              $victorySound=$('audio')[2];
                $victorySound.play()

            } else {
                $('#inbetweenQuestions').show()
                //here was the error saver
            }

        }) //end of booleanChecker

}






//code for Timer:
timeLeft = 56;
$timerDiv = $('#timer');
    //paused time when game first loads.
var isPaused = true;

//inspiration for count down
//http://stackoverflow.com/questions/21277900/javascript-pausing-setinterval
var countdown = window.setInterval(
    function() {
        if (!isPaused) {
            timeLeft--;
            $timerDiv.html(timeLeft);
        }

        if (timeLeft <= 0) {
            isPaused = true
            $('.gameContainer').hide()
            $('#userInput').children('ul').remove()
            $('#ending').show()
                $wrong=$('audio')[1];
                $wrong.play(1000)
        };


    }, 1000)
//if game lost:
$('#tryAgain').click(function() {
window.location.reload()
})


//this counter calls up the question that's appearing.
var questionCounter = 0;
//array for questions
//the following is the array for level 1
var lvl1Questions = [

    {
        english: "The boy was with me.",
        question: "La knabo" + '<span class="replaceHere"><button class="blankButton">blank</button></span>' + "kun vi.",
        answers: [{
            text: "ĵurnalo",
            boolean: false
        }, {
            text: "estas",
            boolean: false
        }, {
            text: "ŝatos",
            boolean: false
        }, {
            text: "estis",
            boolean: true
        }, {
            text: "avino",
            boolean: false
        }, {
            text: "nepo",
            boolean: false
        }]
    },


    {
        english: "The boy is fast!",
        question: "La" + '<span class="replaceHere"><button class="blankButton">blank</button></span>' + "estas rapida!",
        answers: [{
            text: "ĵaluza",
            boolean: false
        }, {
            text: "rapido",
            boolean: false
        }, {
            text: "bela",
            boolean: false
        }, {
            text: "beba",
            boolean: false
        }, {
            text: "knabo",
            boolean: true
        }, {
            text: "kuniklo",
            boolean: false
        }]
    },


    {
        english: "Tomorrow will be a sunny day!",
        question: "Morgaŭ" + '<span class="replaceHere"><button class="blankButton">blank</button></span>' + " suna tago!",
        answers: [{
            text: "estas",
            boolean: false
        }, {
            text: "estu",
            boolean: false
        }, {
            text: "estiga",
            boolean: false
        }, {
            text: "estus",
            boolean: false
        }, {
            text: "estinteco",
            boolean: false
        }, {
            text: "estos",
            boolean: true
        }]
    },

    {
        english: "I will be there tomorrow!",
        question: "Mi estos tie" + '<span class="replaceHere"><button class="blankButton">blank</button></span>',
        answers: [{
            text: "akvo",
            boolean: false
        }, {
            text: "morgaŭ",
            boolean: true
        }, {
            text: "hundo",
            boolean: false
        }, {
            text: "vino",
            boolean: false
        }, {
            text: "ĉevala",
            boolean: false
        }, {
            text: "bela",
            boolean: false
        }]
    },

    {
        english: "The girl is playing with the cat",
        question: "La knabino ludas kun la " + '<span class="replaceHere"><button class="blankButton">blank</button></span>',
        answers: [{
            text: "hundo",
            boolean: false
        }, {
            text: "koko",
            boolean: false
        }, {
            text: "serpento",
            boolean: false
        }, {
            text: "kato",
            boolean: true
        }, {
            text: "viro",
            boolean: false
        }, {
            text: "virino",
            boolean: false
        }]
    }, {
        english: "The woman is tall",
        question: "La virino estas" + '<span class="replaceHere"><button class="blankButton">blank</button></span>',
        answers: [{
            text: "bela",
            boolean: false
        }, {
            text: "rapida",
            boolean: false
        }, {
            text: "virina",
            boolean: false
        }, {
            text: "sendependa",
            boolean: false
        }, {
            text: "alta",
            boolean: true
        }, {
            text: "knabino",
            boolean: false
        }]
    }, {
        english: "The man fell",
        question: "La viro" + '<span class="replaceHere"><button class="blankButton">blank</button></span>',
        answers: [{
            text: "estos",
            boolean: false
        }, {
            text: "manĝos",
            boolean: false
        }, {
            text: "dormas",
            boolean: false
        }, {
            text: "falis",
            boolean: true
        }, {
            text: "falas",
            boolean: false
        }, {
            text: "falos",
            boolean: false
        }]
    },

    {
        english: "The young boy is playing with the cat.",
        question: "La juna knabo" + '<span class="replaceHere"><button class="blankButton">blank</button></span> kun la kato',
        answers: [{
            text: "konis",
            boolean: false
        }, {
            text: "kuiros",
            boolean: false
        }, {
            text: "purigis",
            boolean: false
        }, {
            text: "ludas",
            boolean: true
        }, {
            text: "vidos",
            boolean: false
        }, {
            text: "kuniklo",
            boolean: false
        }]
    },
    {
        english: "I did not sleep yesterday",
        question: "Mi ne" + '<span class="replaceHere"><button class="blankButton">blank</button></span> hieraŭ',
        answers: [{
            text: "dancos",
            boolean: false
        }, {
            text: "estas",
            boolean: false
        }, {
            text: "ĉiel",
            boolean: false
        }, {
            text: "hundo",
            boolean: false
        }, {
            text: "dormis",
            boolean: true
        }, {
            text: "preĝas",
            boolean: false
        }]
    },
    {
        english: "The warm coffee is tasty!",
        question: "La varma" + '<span class="replaceHere"><button class="blankButton">blank</button></span> estas bongusta!',
        answers: [{
            text: "sandviĉo",
            boolean: false
        }, {
            text: "biero",
            boolean: false
        }, {
            text: "tablo",
            boolean: false
        }, {
            text: "kafo",
            boolean: true
        }, {
            text: "junulo",
            boolean: false
        }, {
            text: "fenestro",
            boolean: false
        }]
    }
]


var makeNewQuestionAppear = function(questionNum) {

        i = questionNum
        var english = lvl1Questions[i].english
        $('#english').html('<div class="sentences">'+english)
        var esperanto = lvl1Questions[i].question
        $('#esperanto').html('<div class="sentences">'+esperanto)
        $('#userInput').append('<ul id=ulAnswers>')
        for (j = 0; j < lvl1Questions[i].answers.length; j++) {
            //the following are the contents of the internal for loop

            var answer = lvl1Questions[i].answers[j].text
            var correctness = lvl1Questions[i].answers[j].boolean
            $('#ulAnswers').append('<li><button class="' + correctness + ' booleanChecker' + '">' + answer + '</button></li>')
            if ($('#ulAnswers').children().size() == 6) {
            whatToDoWithAnswers()

                return
            }
        }
    } //end of makeNewQuestionAppear
makeNewQuestionAppear(questionCounter)



$('#enterLevel1Button').on("click", function() {
    $('#beginning').hide()
    $('#lvl1').show()
    isPaused = true

})

$('#beginGameButton').on("click", function() {
    $('#lvl1').hide(1000)
    $('.gameContainer').show()
    isPaused = false
})






$('.questionToggler').click(function() {
    makeNewQuestionAppear(questionCounter)
    $('#inbetweenQuestions').hide()
    $('#userInput').show()
    isPaused = false
})






$('.pronounciationButton').click(function() {
    $('#pronounciationWrapper').show()
    isPaused = true
})
$('.lvl1LessonButton').click(function(){
$('#lvl1LessonWrapper').show()
isPaused=true
})

$('.closelvl1Lesson').click(function() {
    var $target = $(event.target)
    if ($target.hasClass('closelvl1Lesson')) {
        $('#lvl1LessonWrapper').css('display', 'none')
    }
})

$('.closePronounciation').click(function() {
    var $target = $(event.target)
    if ($target.hasClass('closePronounciation')) {
        $('#pronounciationWrapper').css('display', 'none')
    }
})


$('#uniqueConsonantsToggler').click(function() {
    $('#uniqueConsonantsTable').show()
    $('#diphthongsTable').hide()
    $('#samePronounciationTable').hide()
    $('#vowelsTable').hide()
})

$('#vowelsToggler').click(function() {
    $('#vowelsTable').css('display', 'table')
    $('#diphthongsTable').hide()
    $('#uniqueConsonantsTable').hide()
    $('#samePronounciationTable').hide()
})


$('#diphthongsToggler').click(function() {
    $('#diphthongsTable').css('display', 'table')
    $('#vowelsTable').hide()
    $('#uniqueConsonantsTable').hide()
    $('#samePronounciationTable').hide()
})

$('#samePronounciationToggler').click(function() {
    $('#samePronounciationTable').css('display', 'table')
    $('#diphthongsTable').hide()
    $('#vowelsTable').hide()
    $('#uniqueConsonantsTable').hide()
})



