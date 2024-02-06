const {
  ApplicationCommandOptionType,
  EmbedBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  name: "form-modal-noti",
  description: "sử dụng bot để chat.",
  devOnly: true,

  callback: async (client, interaction) => {
    try {
      // await interaction.deferReply();

      const modal = new ModalBuilder({
        customId: `myModal-${interaction.user.id}`,
        title: "Chat bằng bot",
      });

      //discord js v14 hiện chỉ cho tối đa 5 input slot
      const titleInput = new TextInputBuilder({
        customId: `titleInput-${interaction.user.id}`,
        label: "tiêu đê ?",
        style: TextInputStyle.Short,
      });

      const contentInput = new TextInputBuilder({
        customId: `contentInput-${interaction.user.id}`,
        label: "nội dung ?",
        style: TextInputStyle.Paragraph,
      });

      const firstActionRow = new ActionRowBuilder().addComponents(titleInput);
      const secondActionRow = new ActionRowBuilder().addComponents(
        contentInput
      );

      modal.addComponents(firstActionRow, secondActionRow);

      await interaction.showModal(modal);

      const filter = (interaction) =>
        interaction.customId === `myModal-${interaction.user.id}`;

      interaction
        .awaitModalSubmit({ filter, time: 300000 })
        .then((modalInteraction) => {
          
          const titleValue =
            modalInteraction.fields.getTextInputValue(`titleInput-${interaction.user.id}`);
          const contentValue =
            modalInteraction.fields.getTextInputValue(`contentInput-${interaction.user.id}`);

          const embed = new EmbedBuilder()
            .setAuthor({
              name: "XIN CHÀO",
              iconURL: process.env.LOGO_LINK,
            })
            .setDescription(`${titleValue}`)
            .setColor("#CC99FF")
            .addFields({
              name: "__Nội dung:__",
              value: `${contentValue}`,
            })
            .setThumbnail(process.env.LOGO_LINK)
            .setFooter({
              text: "server name",
              iconURL: process.env.LOGO_LINK,
            })
            .setImage(process.env.BANNER_WELCOME_LINK)
            .setTimestamp();

          modalInteraction.reply({ embeds: [embed] });
        });
    } catch (error) {
      console.log(`form-modal-noti: ${error}`);
    }
  },
};
