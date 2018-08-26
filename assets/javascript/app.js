$(document).ready(function(){
    // global variables for the game
var i = 0;
var g = 0;
var clicked = false;
var timer = 15;
var intervalId;
var questionCount;;
var correctCount; 
var incorrectCount;


// questions array
var choices = [{
                question: "In 'The Alliance' episode, Michael is asked by Oscar to donate to his nephew's walkathon for a charity. How much money does Michael donate, not realizing that the donation is per mile and not a flat amount?",
                answerArray: [
                        {
                            answer: "$25.00",
                            correct: true
                        },
                        {
                            answer: "$5.00",
                            correct: false
                        },
                        {
                            answer: "$15.00",
                            correct: false
                        },
                        {
                            answer: "$40.00",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/yidUzriaAGJbsxt58k/200w_d.gif" ,
                wrongURL: "https://media.giphy.com/media/14akZTBhO7rW00/200w_d.gif"
                
               },
               {
                question: "What is Michael Scott's middle name?",
                answerArray: [
                        {
                            answer: "Gary",
                            correct: true
                        },
                        {
                            answer: "Hank",
                            correct: false
                        },
                        {
                            answer: "Phillip",
                            correct: false
                        },
                        {
                            answer: "Jason",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/5wWf7H89PisM6An8UAU/200w_d.gif",
                wrongURL: "https://media.giphy.com/media/guMTWyRGp9Qg8/200w_d.gif"
                }, 
                {
                question: "Which television series revolves around a concierge doctor making house calls in the Hampstons?",
                answerArray: [
                        {
                            answer: "Royal Pains",
                            correct: true
                        },
                        {
                            answer: "Dr.Quinn Medicine Woman",
                            correct: false
                        },
                        {
                            answer: "Doogie Howser, M.D.",
                            correct: false
                        },
                        {
                            answer: "Scrubs",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/1kHmApoKwc3Dy/200w_d.gif",
                wrongURL:"https://media.giphy.com/media/sgfauo9CqBcAw/200w_d.gif" 

                },   
                {
                question: "Who plays the character Dexter on the tv series 'Dexter'?",
                answerArray: [
                        {
                            answer: "Michael C. Hall",
                            correct: true
                        },
                        {
                            answer: "James Roday",
                            correct: false
                        },
                        {
                            answer: "Phillip Seymour Hoffman",
                            correct: false
                        },
                        {
                            answer: "Ed O'Neil",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/S2u9Ldmx480O4/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/jkojXEIwuqp6o/giphy-downsized.gif"
               
                },
                {
                question: "What type of dog is Scooby Doo from the cartoon series, 'Scooby Doo'",
                answerArray: [
                        {
                            answer: "Great Dane",
                            correct: true
                        },
                        {
                            answer: "Poodle",
                            correct: false
                        },
                        {
                            answer: "Bull Mastiff",
                            correct: false
                        },
                        {
                            answer: "Labrador retreiver",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/8Pd4vvz00KoZa/200w_d.gif",
                wrongURL: "https://media.giphy.com/media/ZsjU4Mk3SiwFy/giphy.gif"

                },
                {
                question: "What is Chandler's last name in the show 'Friends'?",
                answerArray: [
                        {
                            answer: "Bing",
                            correct: true
                        },
                        {
                            answer: "Anderson",
                            correct: false
                        },
                        {
                            answer: "Paul",
                            correct: false
                        },
                        {
                            answer: "Gellar",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/3o7qDQ4kcSD1PLM3BK/200w_d.gif", 
                wrongURL: "https://media.giphy.com/media/gJEWhG3f3zszu/200w_d.gif"

                },     
                {
                question: "What hospital does the show 'Grey's Anatomy' take place in?",
                answerArray: [
                        {
                            answer: "Seatle Grace Hospital",
                            correct: true
                        },
                        {
                            answer: "Miami Dade Medical Center",
                            correct: false
                        },
                        {
                            answer: "Johns Hopkins",
                            correct: false
                        },
                        {
                            answer: "New York General",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/12CjZCj2dqlm1i/giphy-downsized.gif",
                wrongURL: "https://media.giphy.com/media/605XNIvvwTaMg/200w_d.gif" 

                }, 
                {
                question: "What are the names of the two Muppet characters that heckle the rest of the cast from the balcony?",
                answerArray: [
                        {
                            answer: "Statler and Waldorf",
                            correct: true
                        },
                        {
                            answer: "William and Johan",
                            correct: false
                        },
                        {
                            answer: "Bert and Ernie",
                            correct: false
                        },
                        {
                            answer: "Cobblepot and Oswald",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/zhJ55GsXRajxm/200w_d.gif",
                wrongURL: "https://media.giphy.com/media/10ABjDisnpRuXS/200w_d.gif" 

                },
                {
                question: "What was Mickey Mouse's name before it was changed to Mickey?",
                answerArray: [
                        {
                            answer: "Mortimer",
                            correct: true
                        },
                        {
                            answer: "Maxwell",
                            correct: false
                        },
                        {
                            answer: "Willie",
                            correct: false
                        },
                        {
                            answer: "Preston",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/r1jbtDXIAjq92/200w_d.gif", 
                wrongURL: "https://media.giphy.com/media/fx04oRcbbVLC8/200w_d.gif"

                },  
                {
                question: "In the tv show The Simpsons, what is the name of Ned Flander's two childen?",
                answerArray: [
                        {
                            answer: "Rod and Todd",
                            correct: true
                        },
                        {
                            answer: "Bart and Lisa",
                            correct: false
                        },
                        {
                            answer: "Sam and Max",
                            correct: false
                        },
                        {
                            answer: "Dustin and Dart",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/3orieUk41XeN25W1qM/giphy-downsized.gif",
                wrongURL: "https://media.giphy.com/media/3ohs7KViF6rA4aan5u/200w_d.gif" 

                },
                {
                question: "On the tv show Modern Family which one of these aliases does Phil Dunphy use?",
                answerArray: [
                        {
                            answer: "Clive Bixby",
                            correct: true
                        },
                        {
                            answer: "Reginald Featherbottom",
                            correct: false
                        },
                        {
                            answer: "Sideshow Bob",
                            correct: false
                        },
                        {
                            answer: "Prison Mike",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/H5v1ojOtgDZVm/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/3ohhwG5oszITo9edJ6/giphy-downsized.gif"

                },
                {
                question: "What does Dean call his car on the tv show Supernatural?",
                answerArray: [
                        {
                            answer: "Baby",
                            correct: true
                        },
                        {
                            answer: "POS",
                            correct: false
                        },
                        {
                            answer: "HellCat",
                            correct: false
                        },
                        {
                            answer: "Sweet Thang",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/tsXtdAtf3cHO8/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/kpr62uiaUKQk8/giphy-downsized.gif"

                },
                {
                question: "On the show Parks and Rec what is Andy Dwyers made up FBI name?",
                answerArray: [
                        {
                            answer: "Burt Macklin",
                            correct: true
                        },
                        {
                            answer: "Inspector Gadget",
                            correct: false
                        },
                        {
                            answer: "Phillip Morris",
                            correct: false
                        },
                        {
                            answer: "Doc Holiday",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/C7rDCSz3iC1Us/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/xTiTnzvzlEj5vD3Tkk/giphy-downsized.gif"

                },
                {
                question: "Where does the TV show Psych take place?",
                answerArray: [
                        {
                            answer: "Santa Barbara",
                            correct: true
                        },
                        {
                            answer: "Miami",
                            correct: false
                        },
                        {
                            answer: "Dallas",
                            correct: false
                        },
                        {
                            answer: "Portland",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/nxM7IbxDeTRxC/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/2r1nnlUarj1vy/giphy-downsized.gif"

                }, 
                {
                question: "Finish the name of this TV show: _____ Notice",
                answerArray: [
                        {
                            answer: "Burn",
                            correct: true
                        },
                        {
                            answer: "Last",
                            correct: false
                        },
                        {
                            answer: "Some",
                            correct: false
                        },
                        {
                            answer: "Don't",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/AE46suju1qXII/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/ULSnTDIA7KkrC/giphy.gif"

                },
                {
                question: "What is the name of the Creature on Rick and Morty whose only purpose is to help?",
                answerArray: [
                        {
                            answer: "Mr.Meeseeks",
                            correct: true
                        },
                        {
                            answer: "Fremulon",
                            correct: false
                        },
                        {
                            answer: "George",
                            correct: false
                        },
                        {
                            answer: "Mr.Peabody",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/rg4iofhciswNy/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/Mp3y4McLBLA1W/giphy-downsized.gif"

                },
                {
                question: "What is Barney's favorite thing to do on How I Met Your Mother?",
                answerArray: [
                        {
                            answer: "High Five",
                            correct: true
                        },
                        {
                            answer: "Shake Hands",
                            correct: false
                        },
                        {
                            answer: "Hide peoples phones",
                            correct: false
                        },
                        {
                            answer: "Scare people",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/irnky0EUGEZnq/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/mvNExt19DqFJS/giphy-downsized.gif"
    
                },
                {
                question: "Who plays the page Kenneth on 30 Rock?",
                answerArray: [
                        {
                            answer: "Jack McBrayer",
                            correct: true
                        },
                        {
                            answer: "James Roday",
                            correct: false
                        },
                        {
                            answer: "Tim Allen",
                            correct: false
                        },
                        {
                            answer: "Alec Baldwin",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/ve8tTGLhXKMmc/giphy.gif", 
                wrongURL: "https://media.giphy.com/media/hgWtlgM8K2Yhy/giphy-downsized.gif"

                },
                {
                question: "What is Schmidt's first name on the show New Girl?",
                answerArray: [
                        {
                            answer: "Winston",
                            correct: true
                        },
                        {
                            answer: "Nick",
                            correct: false
                        },
                        {
                            answer: "Hank",
                            correct: false
                        },
                        {
                            answer: "Simon",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/H7x1H0veAJlo4/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/26uf4xAlDlfU0cvM4/giphy-downsized.gif"

                },
                {
                question: "On the Big Bang Theory, Where is Sheldons spot?",
                answerArray: [
                        {
                            answer: "the couch",
                            correct: true
                        },
                        {
                            answer: "the comic book store",
                            correct: false
                        },
                        {
                            answer: "his home in Texas",
                            correct: false
                        },
                        {
                            answer: "the bus bench",
                            correct: false
                        }
                ],
                gifURL: "https://media.giphy.com/media/f79OYWh5uwIfK/giphy-downsized.gif", 
                wrongURL: "https://media.giphy.com/media/3o7WTNYgMUmNM9jFh6/giphy-downsized.gif"

                }];


                                // Functions Start
// --------------------------------------------------------------------------------------------------------------------------------------------------------


                // timer function
                function run() {
                    if(!intervalId) {
                        intervalId = setInterval(decrement, 1000);
                    }
                };


                // function to show a visual countdown for the timer
                function decrement() {

                    $("#timerArea").html("<p>Timer: " + timer + "</p>");
                    timer--;


                    if (timer === 0) {
                        clicked = true;
                        $("#correctIncorrect").html("<p>You did not pick anything!</p>");
                        addWrongGIF();
                        stop();
                        setTimeout(newQuestion, 1000 * 5);
                        i++;
                        incorrectCount++;


                        
                    }
                }


                // stop function for the timer
                function stop() {
                    clearInterval(intervalId);
                    intervalId = null;
                    timer = 15;
                }

                // function to shuffle an array
                function shuffle(array) {
                    var currentIndex = array.length, temporaryValue, randomIndex;
                  
                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {
                  
                      // Pick a remaining element...
                      randomIndex = Math.floor(Math.random() * currentIndex);
                      currentIndex -= 1;
                  
                      // And swap it with the current element.
                      temporaryValue = array[currentIndex];
                      array[currentIndex] = array[randomIndex];
                      array[randomIndex] = temporaryValue;
                    }
                  
                    return array;
                  }


                //   adds a gif for a correct answer
                  function addGIF() {
                      var image = $("<img>").attr("src", choices[i].gifURL);

                      $("#correctIncorrect").append(image);
                  }

                  
                //   adds a gif for an incorrect answer
                  function addWrongGIF() {
                    var image = $("<img>").attr("src", choices[i].wrongURL);

                    $("#correctIncorrect").append(image);
                }



            // Function to start the game or restart the game
            function startGame() {
                $("#correctIncorrect").empty();
                $("#startButton").addClass("hidden");

                $("#answerOne").removeClass("hidden clickedCorrect clickedWrong");
                $("#answerTwo").removeClass("hidden clickedCorrect clickedWrong");
                $("#answerThree").removeClass("hidden clickedCorrect clickedWrong");
                $("#answerFour").removeClass("hidden clickedCorrect clickedWrong");

                questionCount = 0;
                correctCount = 0;
                incorrectCount = 0;
                i = 0;
                g = 0;

                
                choices = shuffle(choices);
                newQuestion();

            };

             
            // function to bring in a new question it also shuffles the answers
            function newQuestion() {
                        if(questionCount !== choices.length) {
                                $("#correctIncorrect").empty();
                                run();
                                clicked = false;
                                g = i;
                                // shuffles the answers
                                choices[i].answerArray = shuffle(choices[i].answerArray);

                                $("#answerOne").removeClass("clickedCorrect clickedWrong");
                                $("#answerTwo").removeClass("clickedCorrect clickedWrong");
                                $("#answerThree").removeClass("clickedCorrect clickedWrong");
                                $("#answerFour").removeClass("clickedCorrect clickedWrong");


                                $("#questionArea").text(choices[i].question);
                                $("#answerOne").text(choices[i].answerArray[0].answer);
                                $("#answerTwo").text(choices[i].answerArray[1].answer);
                                $("#answerThree").text(choices[i].answerArray[2].answer);
                                $("#answerFour").text(choices[i].answerArray[3].answer);

                                questionCount++;
                        }else {
                                $("#correctIncorrect").empty();
                                $("#questionArea").empty();
                                $("#answerOne").addClass("hidden");
                                $("#answerTwo").addClass("hidden");
                                $("#answerThree").addClass("hidden");
                                $("#answerFour").addClass("hidden");

                                $("#correctIncorrect").append("<p>Correct: " + correctCount + "</p>");
                                $("#correctIncorrect").append("<p>Incorrect: " + incorrectCount + "</p");

                                if(correctCount >= 19) {
                                    $("#correctIncorrect").append("<p>Wow you watch a ton of TV!</p");
                                    $("#correctIncorrect").append("<button id='restart'>Restart</button>");

                                } else if (correctCount >= 15) {
                                    $("#correctIncorrect").append("<p>Not too shabby</p");
                                    $("#correctIncorrect").append("<button id='restart'>Restart</button>"); 
                                } else if (correctCount >= 10) {
                                    $("#correctIncorrect").append("<p>Pretty Good</p");
                                    $("#correctIncorrect").append("<button id='restart'>Restart</button>"); 
                                }else if (correctCount >= 5) {
                                    $("#correctIncorrect").append("<p>You can do better!</p");
                                    $("#correctIncorrect").append("<button id='restart'>Restart</button>"); 
                                }else if (correctCount >=0) {
                                    $("#correctIncorrect").append("<p>Wow you need to watch some tv!</p");
                                    $("#correctIncorrect").append("<button id='restart'>Restart</button>"); 
                                }

                                $("#restart").on("click", function () {
                                    startGame();
                                });
                                 

                        }
                        

            }
                        
// ----------------------------------------------------------------------------------------------------------------------------------
                                            // End Game functions begin on click functions


                                // on click function for the first answer
                        $("#answerOne").on("click", function() {
                            if (!clicked) {
                                    clicked = true;
                                    if(choices[g].answerArray[0].correct) {
                                        $("#answerOne").addClass("clickedCorrect");
                                        $("#correctIncorrect").html("<p>You have picked the correct answer!</p>");
                                        addGIF();
                                        stop();
                                        correctCount++;
                                        i++;
                                        setTimeout(newQuestion, 1000 * 5);
                    
                                    }else {
                                        $("#answerOne").addClass("clickedWrong");
                                        $("#correctIncorrect").html("<p>You have picked the wrong answer!</p>");
                                        stop();
                                        addWrongGIF();
                                        incorrectCount++;
                                        i++;
                                        setTimeout(newQuestion, 1000 * 5);
                                       

                    
                                    }
                        }
                        });
                        

                                // on click function for the second answer
                        $("#answerTwo").on("click", function() {
                            if (!clicked) {
                                clicked = true;
                                if(choices[g].answerArray[1].correct) {
                                    $("#answerTwo").addClass("clickedCorrect");
                                    $("#correctIncorrect").html("<p>You have picked the correct answer!</p>");
                                    addGIF();
                                    stop();
                                    correctCount++;
                                    i++
                                    setTimeout(newQuestion, 1000 * 5);
                                   
                
                                }else {
                                    $("#answerTwo").addClass("clickedWrong");
                                    $("#correctIncorrect").html("<p>You have picked the wrong answer!</p>");
                                    addWrongGIF();
                                    stop();
                                    incorrectCount++;
                                    i++;
                                    setTimeout(newQuestion, 1000 * 5);
                                   
                
                                }
                        }
                        });
                        

                                // on click function for the third answer
                        $("#answerThree").on("click", function() {
                            if (!clicked) {
                                    clicked = true;
                                    if(choices[g].answerArray[2].correct) {
                                        $("#answerThree").addClass("clickedCorrect");
                                        $("#correctIncorrect").html("<p>You have picked the correct answer!</p>");
                                        addGIF();
                                        stop();
                                        correctCount++;
                                        i++
                                        setTimeout(newQuestion, 1000 * 5);
                                       
                                        
                    
                                    }else {
                                        $("#answerThree").addClass("clickedWrong");
                                        $("#correctIncorrect").html("<p>You have picked the wrong answer!</p>");
                                        addWrongGIF();
                                        stop();
                                        incorrectCount++;
                                        i++
                                        setTimeout(newQuestion, 1000 * 5);
                                       
                                       

                    
                                    }
                        }
                        });
                        

                                // on click function for the fourth answer
                        $("#answerFour").on("click", function() {
                            if (!clicked) {
                                    clicked = true;
                                    if(choices[g].answerArray[3].correct) {
                                        $("#answerFour").addClass("clickedCorrect");
                                        $("#correctIncorrect").html("<p>You have picked the correct answer!</p>");
                                        addGIF();
                                        stop();
                                        correctCount++;
                                        i++;
                                        setTimeout(newQuestion, 1000 * 5);
                                       

                    
                                    }else {
                                        $("#answerFour").addClass("clickedWrong");
                                        $("#correctIncorrect").html("<p>You have picked the wrong answer!</p>");
                                        addWrongGIF();
                                        stop();
                                        incorrectCount++;
                                        i++;
                                        setTimeout(newQuestion, 1000 * 5);
                                       
                    
                                    }
                        }

                        });
                        
                       
                    

                    // call the start game at the begining start button
                    $("#startButton").on("click", function () {
                        startGame();


                    });

            


});