const mineflayer = require('mineflayer');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot Is Ready')
});

app.listen(3000, () => {
  console.log('server started');
});

const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
})

const bot = mineflayer.createBot({
    host: 'JumpyDime.aternos.me',
    port: 41427,
    username: 'Jumpy_SMP',
    password:""
})

function lookAtPlayer(){
    const filter = (entity) => entity.type === 'player';

    const player = bot.nearestEntity(filter);

    if (!player) return;

    const pos = player.position.offset(o, player.height, 0);
    bot.lookAt(pos);
}
bot.on('physicTick', lookAtPlayer);

function jump(){
    bot.setControlState("jump", true);
}

bot.on('physicTick', jump);

bot.on("entityHurt", (entity) =>{
    if (entity !== bot.entity) return;
    
    bot.chat("Rules To Remember");
    bot.chat("1.Do not hurt anyone");
    bot.chat("2.Do not Fight");
    bot.chat("3.Stay friendly");
    bot.chat("4.Repot to the police or court for qurels");
    bot.chat("5.And many more rules from the Indian Constitution");

});