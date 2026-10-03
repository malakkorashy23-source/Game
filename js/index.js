let $eggs = $(".egg"),
    defaultTopOfEgg = $eggs.offset().top,
    $brokenEggs=$(".brokenEgg"),
    basket=$(".basket"),
    lifeScore=5,
    score=0,
    highestScore=0;

if(localStorage.getItem("highestScore") != null){
    highestScore=localStorage.getItem("highestScore") ;
    $("#HighestScore").text(highestScore);
};

$(window).on("pointermove",function (e) {
   let hafWidthOfBasket = $(".basket").outerWidth(true) / 2;
   
   if ( e.pageX >= hafWidthOfBasket && e.pageX < $("#Game").outerWidth(true) - hafWidthOfBasket) {
      $(".basket").offset({
      left: e.pageX - hafWidthOfBasket,
    });
  }
});

$(window).on("keydown",function (e){
    let basketLeft=$(".basket").offset().left;
 
    if(e.key == "ArrowRight"){
        if( basketLeft < ($("#Game").outerWidth(true) - $(".basket").outerWidth(true))){
            $(".basket").offset({
                left: $(".basket").offset().left + 100,
            });
        }
    }

    if(e.key == "ArrowLeft"){
        if(basketLeft > 0){
            $(".basket").offset({
                left: $(".basket").offset().left - 100,
            });
        }
    }
     
});

$(".start").click(function () {
  $(".start").slideUp(1000, function () {
    startGame();
    $eggs.offset({
        top: defaultTopOfEgg
    })
    $("#LifeScore").text("5");
    $(".score").text("0");
  });
});