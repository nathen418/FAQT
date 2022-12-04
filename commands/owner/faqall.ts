import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import chalk from "chalk";
import faq from "../../faq/faq.json";

export default {
	name: "faqall",
	category: "owner",
	description: "FAQ but all of them",
	slash: true,
	testOnly: false,
	guildOnly: true,
	requiredPermissions: ["SEND_MESSAGES"],
    ownerOnly: true,


	callback: async ({ client, interaction }) => {
		faq.forEach((q) => {
			// Embed values
			const color = "#0099ff";
			const title = q.title;
			const description = q.description;
			const footer = `Delivered in: ${client.ws.ping}ms | FAQT | ${process.env.VERSION}`;
			const footerIcon = `https://cdn.discordapp.com/avatars/${client.user?.id}/${client.user?.avatar}.jpeg`;

			const Embed = new MessageEmbed()
				.setColor(color)
				.setTitle(title)
				.setDescription(description)
				.setFooter({ text: footer, iconURL: footerIcon });
			interaction.channel?.send({ embeds: [Embed] });
		});
		// Log the command usage
		console.log(
			chalk.blue(
				`${chalk.green(`[COMMAND]`)} ${chalk.yellow(interaction.user.tag)} used the ${chalk.green(
					`/faqall`
				)} command in ${chalk.yellow(interaction.guild?.name)}`
			)
		);
	},
} as ICommand;
