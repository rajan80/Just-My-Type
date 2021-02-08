$(document).ready(function () {
  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let sentenceIndex = 0;
  let currentSentence = sentences[sentenceIndex];
  let characterIndex = 0;
  let currentCharacter = currentSentence[characterIndex];
  let highlight = 10;
  let yellowBlock = $("#yellow-block");
  //let feedback=$("#feedback");
  let numberOfMistakes=0;

  $("#sentence").append(currentSentence);
  $("#target-letter").append(currentCharacter);

  $("#keyboard-upper-container").hide();

  $(document).keypress(function (e) {
    console.log(currentSentence.charCodeAt(currentCharacter));
    // console.log(e.key)
    //   console.log(e.keyCode)
    if (currentSentence.charCodeAt(characterIndex) === e.keyCode) {
      //   console.log('test')
      // console.log(currentCharacter)
      characterIndex++;
      highlight = highlight + 17;
      currentCharacter = currentSentence[characterIndex];
      $("#target-letter").empty();
      $("#target-letter").append(currentCharacter);
      $("#feedback").append("<span class= ' glyphicon glyphicon-ok'></span>");
      
      if (currentCharacter === " ") {
        $("#target-letter").append("Space");
        $("#feedback").append("<span class= '.glyphicon-ok'></span>");
    
      } else {
        $("target-letter").append(currentCharacter);
        yellowBlock.css("margin-left", highlight + "px");
      }
    } else {
        $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>");

    }

    if (e.keyCode == 16) {
      $("#keyboard-upper-container").show();
      $("#keyboard-lower-container").hide();
    }
  });

  $(document).keypress(function (e) {
    //template literal selecting specific HTML element with the keyCode
    $(`#${e.keyCode}`).css("background-color", "yellow");
  });

  $(document).keyup(function (e) {
    //have to use this variable because keyup doesn't differentiate upper and lowercase
    let asciiLetter = e.key.charCodeAt(0);

    $(`#${asciiLetter}`).css("background-color", "#f5f5f5");
    yellowBlock.css("margin-left", highlight + "px");
    if (characterIndex == sentences[sentenceIndex].length) {
        highlight= 10;
        sentenceIndex++;
        characterIndex = 0;
    }else{
        

    
    }

    if (e.keyCode == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();
    }
    function WordsPerMinute(minutes, numberOfMistakes){
         numberOfWords / minutes - 2 * numberOfMistakes

    }
  });
});
