const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1500 },
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

let player;
let platforms;
let cursors;
let score = 0;
let scoreText;

function preload() {
  this.load.image('platform', 'path/to/platform.png');
  this.load.image('player', 'path/to/player.png');
}

function create() {
  platforms = this.physics.add.staticGroup();

  platforms.create(200, 400, 'platform');
  platforms.create(500, 500, 'platform');
  platforms.create(300, 600, 'platform');

  player = this.physics.add.sprite(200, 300, 'player');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.physics.add.collider(player, platforms);

  cursors = this.input.keyboard.createCursorKeys();

  scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
}

function update() {
  if (cursors.space.isDown && player.body.touching.down) {
    player.setVelocityY(-700);
  }

  // Add your own game logic here, e.g., increase score, generate new platforms, etc.

  scoreText.setText('Score: ' + score);
}
