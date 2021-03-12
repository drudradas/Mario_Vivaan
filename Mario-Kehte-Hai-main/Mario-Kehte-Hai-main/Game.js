class Game{
    constructor(){

    }
    
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('PlayerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

  }
  play(){
    form.hide();

    Player.getPlayerInfo();
    this.obstacles();
    this.ground2();
console.log(player.index);
var index = 0;
var y;
if(allPlayers!==null){
  
  var index = 0;

  //x and y position of the cars
  //var x = 175 ;

  var y;

  for(var plr in allPlayers){
    //add 1 to the index for every loop
    index = index + 1 ;
console.log(plr)
    //position the cars a little away from each other in x direction
    //x = x + 200;
    //use data form the database to display the cars in y direction
    y = displayHeight -400- allPlayers[plr].distance;
   // Marios[index-1].x = x;
   Marios[index-1].y = y;


    console.log(Marios[index-1].y)  
    
  }
}
   
if(keyDown("UP_ARROW") && (player.index!=null) ){
 // Marios[index-1].velocityY = -4;

  player.distance = 50;
  player.update();
 
}
if(keyDown("DOWN_ARROW")&& (player.index!=null)){
  player.distance = -50;
  player.update();
}


    


  }
obstacles(){

  if( frameCount % 100 === 0){
    var spikedBall = createSprite(displayWidth, Math.round(random(450, 650)), 20, 20);
    spikedBall.velocityX = -10;
    spikedBall.addImage(ballImage);
    spikedBall.scale = 1.3;

  }


}
ground2(){

  if(frameCount % 150 === 0){
    var ground1 = createSprite(displayWidth,Math.round(random(450, 550)), 20,20);
    ground1.velocityX = -10;
    ground1.addImage(groundImage);
    ground1.scale = 0.5;
  }
}

plasticBottles(){
  
}



//if(allPlayers !== undefined){
  

//  for(var plr in allPlayers){
   

//}
}