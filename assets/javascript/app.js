$(document).ready(function(){

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
                ] 
                
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
                ]
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
                ] 

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
                ] 
               
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
                ] 

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
                ] 

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
                ] 

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
                ] 

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
                ] 

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
                ] 

                }];
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
                  


            // Onclick function to start the game
            $("#startButton").on("click", function() {
                choices = shuffle(choices);
                $("#startButton").addClass("hidden");

                $("#answerOne").removeClass("hidden");
                $("#answerTwo").removeClass("hidden");
                $("#answerThree").removeClass("hidden");
                $("#answerFour").removeClass("hidden");

                $("#questionArea").text(choices[0].question);
                $("#answerOne").text(choices[0].answerArray[3].answer);
                $("#answerTwo").text(choices[0].answerArray[1].answer);
                $("#answerThree").text(choices[0].answerArray[0].answer);
                $("#answerFour").text(choices[0].answerArray[2].answer);




            });

            $("#answerOne").on("click", function() {
                if(choices[0].answerArray[3].correct) {
                    $("#answerOne").addClass("clickedCorrect");

                }else {
                    $("#answerOne").addClass("clickedWrong");

                }
            });

            $("#answerTwo").on("click", function() {
                if(choices[0].answerArray[1].correct) {
                    $("#answerTwo").addClass("clickedCorrect");

                }else {
                    $("#answerTwo").addClass("clickedWrong");

                }
            });

            $("#answerThree").on("click", function() {
                if(choices[0].answerArray[0].correct) {
                    $("#answerThree").addClass("clickedCorrect");

                }else {
                    $("#answerThree").addClass("clickedWrong");

                }
            });

            $("#answerFour").on("click", function() {
                if(choices[0].answerArray[2].correct) {
                    $("#answerFour").addClass("clickedCorrect");

                }else {
                    $("#answerFour").addClass("clickedWrong");

                }
            });



});