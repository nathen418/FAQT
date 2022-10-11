import chalk from "chalk";
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  name: "help",
  category: "user",
  description: "Shows the help embed",
  slash: true,
  testOnly: false,
  guildOnly: true,
  requiredPermissions: ["SEND_MESSAGES"],

  callback: async ({ client, interaction }) => {
    const color = "#0099ff";
    const thumbnail =
      "https://antaresnetwork.com/resources/FAQT/base-server-icon.png";
    const title = "Help and Commands List";
    const description =
      "Welcome to FAQT! I am a base bot that has boilerplate functionality. Meant as a jumping off point for new bots.";
    const footer = `Delivered in: ${client.ws.ping}ms | FAQT | ${process.env.VERSION}`;
    const footerIcon = "https://antaresnetwork.com/resources/FAQT/icon.jpg";

    const Embed = new MessageEmbed()
      .setColor(color)
      .setTitle(title)
      .setThumbnail(thumbnail)
      .setDescription(description)
      .setFooter({ text: footer, iconURL: footerIcon });
    await interaction.reply({ embeds: [Embed] });

    // Log the command usage
    console.log(
      chalk.blue(
        `${chalk.green(`[COMMAND]`)} ${chalk.yellow(
          interaction.user.tag
        )} used the ${chalk.green(`/help`)} command in ${chalk.yellow(
          interaction.guild?.name
        )}`
      )
    );
  },
} as ICommand;
