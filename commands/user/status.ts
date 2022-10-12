import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import chalk from "chalk";

export default {
	name: "status",
	category: "user",
	description: "Shows a status announcement",
	slash: true,
	testOnly: false,
	guildOnly: true,
	requiredPermissions: ["SEND_MESSAGES"],

	callback: async ({ client, interaction }) => {
		// Embed values
		const color = "#D0021B";
		const title = "Status Update";
		const description = "For the most recent status updates, please check <#775238869142339595> or <#776722654609801217> for updates.\n\nIf you want to report an issue that has not been announced yet, please <#785962163353157662> or ask in <#1027385377008394270>.";
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
					`/serverid command in ${chalk.yellow(interaction.guild?.name)}`
				)}`
			)
		);
	},
} as ICommand;
