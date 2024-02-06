const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "chat-by-bot",
  description: "sử dụng bot để chat.",
  options: [
    {
      name: "content",
      description: "nội dung chat.",
      type: ApplicationCommandOptionType.String,
    },
  ],
  devOnly: true,

  callback: async (client, interaction) => {
    try {
      await interaction.deferReply();

      const contentUser = interaction.options.get("content").value;

      await interaction.editReply(`${contentUser}`);
      
    } catch (error) {
      console.log(`chat-by-bot: ${error}`);
    }
  },
};
