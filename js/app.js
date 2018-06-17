// Enemies our player must avoid
let Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // set up x, y, coordinates and speed
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
        if (this.x > 606) {
          this.x = -150;
          this.speed = 100 + Math.floor(Math.random() * 222);
        }

        if (player.x < this.x + 80 &&
               player.x + 80 > this.x &&
               player.y < this.y + 60 &&
               60 + player.y > this.y) {
               player.x = 202;
               player.y = 404;
           }
    };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
let Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// all enemy objects in an array called allEnemies
let allEnemies = [];
allEnemies.push(new Enemy(-150,61,600));
allEnemies.push(new Enemy(-150,145,200));
allEnemies.push(new Enemy(-150,225,100));
allEnemies.push(new Enemy(-150,225,200));

// Place the player object in a variable called player

// start location of player
let player = new Player(202, 404);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
