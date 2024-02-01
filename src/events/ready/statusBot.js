const { ActivityType } = require('discord.js');

module.exports = (client) => {
  console.log(`${client.user.tag} is online.`);

  let status = [
    {
      name: 'Custom Status 1',
      type: ActivityType.Streaming,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Custom Status 2',
      type: ActivityType.Watching,
    },
    {
      name: 'Custom Status 3',
      type: ActivityType.Listening,
    },
  ];

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 3000);
};
