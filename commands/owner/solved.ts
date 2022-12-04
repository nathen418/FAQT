import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import chalk from "chalk";

export default {
	name: "solved",
	category: "admin",
	description: "Marks Ticket as Solved",
	slash: true,
	testOnly: false,
	guildOnly: true,
	requiredPermissions: ["MANAGE_MESSAGES"],
	ownerOnly: true,


	callback: async ({ client, interaction }) => {
		// Embed values
		const color = "#F8E71C";
		const title = "Solved";
		const description = "Your ticket was marked as solved. If you don't have any more questions it will be closed in a few minutes.\n\nPlease open a new ticket if you need help.";
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
					`/solved command in ${chalk.yellow(interaction.guild?.name)}`
				)}`
			)
		);
	},
} as ICommand;
