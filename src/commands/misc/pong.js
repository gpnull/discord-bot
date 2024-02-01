module.exports = {
  name: 'pong',
  description: 'Pong!',
  // devOnly: Boolean,
  // testOnly: true,
  // options: Object[],
  deleted: Boolean,

  callback: (client, interaction) => {
    interaction.reply(`Ping! ${client.ws.ping}ms`);
  },
};
