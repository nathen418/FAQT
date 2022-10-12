import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import chalk from "chalk";

export default {
	name: "maintenance",
	category: "admin",
	description: "Sends Maintenance message",
	slash: true,
	testOnly: false,
	guildOnly: true,
	requiredPermissions: ["MANAGE_MESSAGES"],

	callback: async ({ client, interaction }) => {
		// Embed values
		const color = "#D0021B";
		const title = "Maintenance Mode";
		const description = "The bot is currently down for maintenance.\nPlease refer to <#775238869142339595> or <#776722654609801217> for more information.\nWe will update everyone when it is back.\nThank you for your patience.";
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
					`/maintenance command in ${chalk.yellow(interaction.guild?.name)}`
				)}`
			)
		);
	},
} as ICommand;
