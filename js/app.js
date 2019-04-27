// let score =0;
// let scor = document.querySelector("span");

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // load image of enemies
    this.sprite = 'images/enemy-bug.png';
};

/* Update the enemy's position, required method for game
 Parameter: dt, a time delta between ticks */
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;

    if (this.x > 505) {
        this.x = -30;
        this.speed = 50 + Math.random() * 400;
       
        // For more fun, if the player wins 10 times will increase the difficulty
        // of the game by increasing the speed of the enemies
            // if ( score => 10) {
            // 	 this.speed = 50 + Math.random() * 1000; }
    };
    /*if the difference between player and enemies less than 102 in x-axis 
    and less than 83 in y-axis then the collison then will be reset the player location */
    var divX = this.x - player.x;
    var divY = this.y - player.y;
    divX = Math.abs(divX);
    divY = Math.abs(divY);
    // console.log(divX,divY);
    if ( divX <= 80 && divY <= 60 ) {
     player.resetPlayer();
     };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Class of Player 
var Player = function (x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
};


Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// if Player is win will be reset the player location 
// and if collison is occure will be reset player location 
Player.prototype.resetPlayer = function () {
    player.x = 200;
    player.y= 405;
};

Player.prototype.handleInput = function (allowedKeys) {
	// This condition to the player if he reached the water area can't move
	if ( this.y > 0) {
   switch (allowedKeys) {
    case 'right': if ( this.x < 400) { this.x += 102;} 
    break;
    case 'left': if ( this.x > 0) { this.x -= 102;} 
    break;
    case 'up': if ( this.y > 0) { this.y -= 83;} 
    break;
    case 'down': if ( this.y < 400) { this.y += 83;} 
    break; }; }

    if ( this.y < 0 ){
        setTimeout(() => {
        this.x = 202;
        this.y = 405; }, 600); 
      // the score can increase more than one in ones cycle , will be logic error
        // score++;
	    // scor.innerHTML = (score);
    };
};




// one object to Player with initial location 
var player = new Player(200,400);

//Three enemies object and initial values for x,y and speed 
let enemy1 = new Enemy(0,60,200);
let enemy2 = new Enemy(0,140,300);
let enemy3 = new Enemy (0,230,350);

let allEnemies = [enemy1,enemy2,enemy3];


// This listens for key presses and sends the keys to 
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
