import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import chalk from "chalk";

export default {
	name: "prefix",
	category: "user",
	description: "Shows the prefix help info",
	slash: true,
	testOnly: false,
	guildOnly: true,
	requiredPermissions: ["SEND_MESSAGES"],

	callback: async ({ client, interaction }) => {
		// Embed values
		const color = "#BC0057";
		const title = "Changing Boo Bot's Prefix";
		const description = "How to change the Bot prefix, you may ask?" + 
        "\nYou need to be a premium user." + 
        "\nJust use `+sbprefix <your prefix>` and it will change.";
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
					`/prefix command in ${chalk.yellow(interaction.guild?.name)}`
				)}`
			)
		);
	},
} as ICommand;
