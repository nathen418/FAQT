import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import chalk from "chalk";
import faq from "../../faq/faq.json";

export default {
  name: "faq",
  category: "user",
  description: "FAQ",
  slash: true,
  testOnly: false,
  guildOnly: true,
  minArgs: 1,
	maxArgs: 1,
  expectedArgs: "<number>",
  requiredPermissions: ["SEND_MESSAGES"],
  options: [
		{
			name: "faq_number",
			description: "Any number 1-18",
			required: true,
			type: 4,
		},
	],

  callback: async ({ client, interaction, args }) => {


    if(Number(args[0]) > faq.length || Number(args[0]) < 1) {
      interaction.reply({ content: `Please enter a number between 1 and ${faq.length}`, ephemeral: true });
      return;
    }

    // Embed values
    const color = "#0099ff";
    const title = faq[Number(args[0])-1].title;
    const description = faq[Number(args[0])-1].description;
    const footer = `Delivered in: ${client.ws.ping}ms | FAQT | ${process.env.VERSION}`;
    const footerIcon = `https://cdn.discordapp.com/avatars/${client.user?.id}/${client.user?.avatar}.jpeg`;

    const Embed = new MessageEmbed()
      .setColor(color)
      .setTitle(title)
      .setDescription(description)
      .setFooter({ text: footer, iconURL: footerIcon });

    // Return the embed
    await interaction.reply({ embeds: [Embed] });

    // Log the command usage
    console.log(
      chalk.blue(
        `${chalk.green(`[COMMAND]`)} ${chalk.yellow(
          interaction.user.tag
        )} used the ${chalk.green(`/faq ${Number(args[0])}`)} command in ${chalk.yellow(
          interaction.guild?.name
        )}`
      )
    );
  },
} as ICommand;
