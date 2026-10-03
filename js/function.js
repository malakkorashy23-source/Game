function startGame() {
  for (let egg of $eggs) {
    let speed=Math.random() * 10;
    moveEgg(egg ,speed );
    isEggHunted(egg)
  }

  let theGame=requestAnimationFrame(startGame);
  
  if(lifeScore <= 0){
    cancelAnimationFrame(theGame)
    $(".start").slideDown(1000);
    $(".start").find("h3").text("Game Over Try Again! ^-^")
    lifeScore=5;
    score=0;
    localStorage.setItem("highestScore",highestScore);
  }
};

function moveEgg(egg, speed) {
  let topOfEgg = $(egg).offset().top,
    bottomOfBasket = $(".basket").offset().top + $(".basket").outerHeight(true),
    indexOfEgg= $eggs.index(egg);

    if ( topOfEgg < bottomOfBasket) {
    $(egg).offset({
      top: topOfEgg + Math.random() * speed +1
    });
    } else{
        if(lifeScore>0){
            returnEgg(egg);
            $brokenEggs.eq(indexOfEgg).fadeIn(500).fadeOut(500);
            $("#LifeScore").text(--lifeScore);
        }
    }
};

function returnEgg(egg){
    $(egg).offset({
        top: defaultTopOfEgg
    })
};

function isEggHunted( egg){
    if(coalition(egg,basket) == true){
        $(".score").text(++score);
        $("#HighestScore").text(++highestScore);
        returnEgg(egg);
    }
};

function coalition(egg,basket){
    let tEgg=$(egg).offset().top,
        lEgg=$(egg).offset().left,
        bEgg=tEgg + $(egg).outerHeight(true),
        rEgg=lEgg + $(egg).outerWidth(true),

        tBasket=$(basket).offset().top,
        lBasket=$(basket).offset().left,
        bBasket=tBasket + $(basket).outerHeight(true),
        rBasket=lBasket + $(basket).outerWidth(true);

    if(bEgg< tBasket | lEgg> rBasket | tEgg > bBasket | rEgg< lBasket){
        return false;
    }

    return true ;
};