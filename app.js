//stopBut.style.display = "inline-block"

genBut.addEventListener("click", genCard)

stopBut.addEventListener("click", endGame)

function genCard(){
  hideAllCards()

  card = Math.floor(Math.random() * 78)
  cardCounter++

  console.log("card number" + card)
  console.log("card counter " + cardCounter)


  cardArray[card].classList.remove('hidden')
  message.textContent = `You drew ${nameArray[card]}! Please take a moment to consider
  this card's imagery and any messages it might have for you!`
  messageBottom.textContent = ""

    if (cardCounter === 1){
      messageBottom.textContent = "Hopefully you enjoyed your One Card Reading!"
      firstCard = cardArray[card]
      firstCardName = nameArray[card]
    }

    if (cardCounter === 2){
    messageBottom.textContent = "Oh? You drew another card...?"
  }
    if (cardCounter === 3){
    messageBottom.textContent = "And another..."
  }
  if (cardCounter === 4){
    message.textContent = "But... this was a one card reading..."
  }

    if (cardCounter === 7) {
      message.textContent = `${nameArray[card]}? How interesting...`
  }
    if (cardCounter === 8){
      message.textContent = `And ${nameArray[card]} as well...`
    }

    if (cardCounter === 9){
      message.textContent = "..."
    }

    if (cardCounter === 12 || cardCounter === 17){
      genWeirdCard()
    }

    if (cardCounter === 20 || cardCounter === 21 ||
       cardCounter === 22|| cardCounter === 25){
      message.textContent = `${nameArray[card]}.`
      }

    if (cardCounter === 23){
      message.textContent = `${nameArray[card]}.`
      messageBottom.textContent = `You know. You've drawn 23 cards so far.`
    }
    if (cardCounter === 24 || cardCounter === 41){
      genWeirdCard()
      message.textContent = `${nameArray[card]}.`
      }

    if (cardCounter === 26){
      message.textContent = "Have you even really looked at any of these cards?"
    }
    if (cardCounter === 27){
      message.textContent = "You're meant to get something out of this."
    }

    if (cardCounter === 28){
      genWeirdCard()
      message.textContent = "I guess you're going to draw another now? Without even truly taking this one in?"
    }
    if (cardCounter === 29){
      message.textContent = "Of course."
    }
    if (cardCounter === 30){
      message.textContent = "Well. Guess there's nothing I can do to stop you."
    }

    if (cardCounter === 31 || cardCounter === 36){
      genWeirdCard()
      message.textContent = ""
    }

    if (cardCounter === 39){
      messageBottom.textContent = "What are you looking for..."
    }

    if (cardCounter === 40){
      message.textContent = `${nameArray[card]}.`
      messageBottom.textContent = "Will you ever find it? Will you ever be satisfied?"
    }

    if (cardCounter === 42){
      message.textContent = "Let's try something else."
    }

    if (cardCounter === 43){
      message.textContent = "This time you will draw 3 cards."
      messageBottom.textContent = "Ready?"
    }
    if (cardCounter === 44 || cardCounter === 70){
      genThreeCards()
    }

    if (cardCounter > 46 && cardCounter !== 70){
    tossCoin = Math.floor(Math.random()*2)

    if( tossCoin === 1){
    genWeirdCard()}
  }

    if (cardCounter === 68){
      message.textContent = "This is getting dull."
    }

    if (cardCounter === 69){
    message.textContent = "Again, I want you to draw three cards."
  }

  if (cardCounter === 80){
    message.textContent = "I think I understand."
  }

  if (cardCounter === 81){
    message.textContent = "One card was never going to be enough for you."
  }
  if (cardCounter === 84){
    message.textContent = "You needed more... Just a bit more... But then, for some reason, you couldn't stop."
  }
  if (cardCounter === 85){
    message.textContent = "But you can now"
  }
  if (cardCounter === 86){
    message.textContent = "You now have the option to end this. To put these cards away and finally bring an end to this nonsense. It is in your hands."
    stopBut.classList.remove("hidden")
  }
  if (cardCounter === 87){
    message.textContent = "Or, you may keep going."
  }
  if (cardCounter === 89){
    message.textContent = "You may keep drawing cards, for all I care."
  }
  if (cardCounter === 90){
    message.textContent = "I only ask that when you feel ready-- When you're certain you've recieved all you can from these cards-- that you stop."
  }
  if (cardCounter > 90){
    message.textContent = `You drew ${nameArray[card]}.`
  }
}



function genWeirdCard(){
  hideAllCards()

  let weirdCard = Math.floor(Math.random()*22)
  weirdcArray[weirdCard].classList.remove('hidden')
}


function genThreeCards(){
  hideAllCards()
  card1 = Math.floor(Math.random() * 38)
  card2 = Math.floor(Math.random() * 38 + 39)
  card3 = Math.floor(Math.random() * 22)
  card3Name = Math.floor(Math.random() * 77)


  genBut.style.display = "none"
  cardArray[card1].classList.remove('hidden')
  cardArray[card2].classList.remove('hidden')
  if (cardCounter === 44){
    weirdcArray[card3].classList.remove('hidden')
    message.textContent = `${nameArray[card1]}. ${nameArray[card2]}. ${nameArray[card3Name]}. `
    messageBottom.textContent = "Now choose one."
    thirdCard = weirdcArray[card3]
    }
  if (cardCounter === 70){
    firstCard.classList.remove('hidden')
    message.textContent = `${nameArray[card1]}. ${nameArray[card2]}. ${firstCardName}. `
    message.textContent = "This time I want you to choose the very first card you drew. If you can remember."
    thirdCard = firstCard
  }

  cardArray[card1].addEventListener("click", firstFunction)
  cardArray[card2].addEventListener("click", secondFunction)
  thirdCard.addEventListener("click", thirdFunction)
}

  function pickCard(){
    hideAllCards()
    chosenCard.classList.remove('hidden')
    message.textContent = "Interesting"
    messageBottom.textContent = ""
    genBut.style.display = "inline-block"
  }






function endGame(){
  hideAllCards()
  finalCard = cardArray[card]

  genBut.classList.add("hidden")
  stopBut.classList.add('hidden')
  cardBack.classList.remove('hidden')
  message.textContent = "It's over. Finally."
  messageBottom.textContent = "But before you go, I believe these cards may have a final message..."

  cardBack.addEventListener("click", showFinalCards)
  stopBut.style.display = "none"
  genBut.style.display = "none"
}


function showFinalCards(){

  cardBack.classList.add("hidden")
  genBut.classList.add("hidden")
  stopBut.classList.add('hidden')
  firstCard.classList.remove('hidden')
  finalChosenCard.classList.remove('hidden')
  finalCard.classList.remove('hidden')
  message.textContent = "You have seen many cards in this reading. But perhaps these mean something more than the others."
  messageBottom.textContent = "They might represent something to you. A beginning. A choice. A conclusion. This is the final message of the reading. Make of it what you will."
}



function hideAllCards(){
  cardBack.classList.add("hidden")
  for (let i=0; i<cardArray.length; i++){
    cardArray[i].classList.add('hidden')
  }
  for (let i = 0; i<weirdcArray.length; i++){
    weirdcArray[i].classList.add('hidden')
  }
}



function firstFunction(){
  thirdCard.removeEventListener("click", thirdFunction)
  cardArray[card2].removeEventListener("click", secondFunction)
  cardArray[card1].removeEventListener("click", firstFunction)
  chosenCard = cardArray[card1]
  pickCard()
  if (cardCounter < 45){
    finalChosenCard = cardArray[card1]
    }
  if (cardCounter > 69){
  message.textContent = "Hah."}
}

function secondFunction(){
  thirdCard.removeEventListener("click", thirdFunction)
  cardArray[card2].removeEventListener("click", secondFunction)
  cardArray[card1].removeEventListener("click", firstFunction)
  chosenCard = cardArray[card2]
  pickCard()
  if (cardCounter < 45){
    finalChosenCard = cardArray[card2]
}
  if (cardCounter > 69){
  message.textContent = "I see."}
}

function thirdFunction(){
  thirdCard.removeEventListener("click", thirdFunction)
  cardArray[card2].removeEventListener("click", secondFunction)
  cardArray[card1].removeEventListener("click", firstFunction)
  chosenCard = thirdCard
  pickCard()
  if (cardCounter < 45){
    finalChosenCard = thirdCard
}
  if (cardCounter > 69){
  message.textContent = "Very well then. Perhaps you are paying attention."
  }
}
