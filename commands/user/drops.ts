import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import chalk from "chalk";

export default {
	name: "drops",
	category: "user",
	description: "Shows the drops help info",
	slash: true,
	testOnly: false,
	guildOnly: true,
	requiredPermissions: ["SEND_MESSAGES"],

	callback: async ({ client, interaction }) => {
		// Embed values
		const color = "#000000";
		const title = "Santa Bot Drops";
		const description = "Drops are very important to <@774520746344054824>. \n\n**Presents drops by chat activity is exclusive to Premium**\nRemember to set up the channel where <@774520746344054824> is going to talk using `+sbsetup #channel`.\n\nIf you don't have premium, you'd have to manually drop candy pieces using `+sbdrop`. Your moderation team can help you too, they need *manage messages* permissions. ";

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
				`${chalk.green(`[COMMAND]`)} ${chalk.yellow(interaction.user.tag)} used the ${chalk.green(
					`/drops command in ${chalk.yellow(interaction.guild?.name)}`
				)}`
			)
		);
	},
} as ICommand;
