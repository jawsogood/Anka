const config = require('./config.js');
const keep_alive = require('./keep_alive.js')

if(config.shardManager.shardStatus == false){

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: config.TOKEN || process.env.TOKEN });
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();

} else {

require("./bot.js")

}
