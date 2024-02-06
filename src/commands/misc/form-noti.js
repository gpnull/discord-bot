const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "form-noti",
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

      const embed = new EmbedBuilder()
        .setAuthor({
          name: "XIN CHÀO",
          iconURL: process.env.LOGO_LINK,
        })
        .setDescription(`Chào mừng <@${interaction.user.id}>.`)
        .setColor("#CC99FF")
        .addFields(
          {
            name: "__Lưu ý:__",
            value: `${contentUser}`,
          }
        )
        .setThumbnail(process.env.LOGO_LINK)
        .setFooter({
          text: "server name",
          iconURL: process.env.LOGO_LINK,
        })
        .setImage(process.env.BANNER_WELCOME_LINK)
        .setTimestamp();


      await interaction.editReply({ embeds: [embed] });
      
    } catch (error) {
      console.log(`form-noti: ${error}`);
    }
  },
};
