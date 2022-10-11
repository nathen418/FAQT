import { TextChannel } from "discord.js";
import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
import chalk from "chalk";

export default {
  name: "say",
  category: "owner",
  description: "Makes the bot say something",
  slash: true,
  expectedArgs: "<content> <channel>",
  minArgs: 1,
  permissions: ["MANAGE_MESSAGES", "MANAGE_GUILD"],
  guildOnly: true,
  ownerOnly: true,
  options: [
    {
      name: "content",
      description: "What to say",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      required: true,
    },
    {
      name: "channel",
      description: "The channel to say the thing in",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL,
      required: false,
    },
  ],

  callback: ({ interaction }) => {
    const content = interaction.options.getString("content") as string;
    const channel =
      (interaction.options.getChannel("channel") as TextChannel) ||
      (interaction.channel as TextChannel);
    if (!content) {
      interaction.reply({
        content: "You need to provide a content to say",
        ephemeral: true,
      });
      return;
    }
    channel.send(content);
    interaction.reply({
      content: `Message sent in <#${channel.id}>`,
      ephemeral: true,
    });

    // Log the command usage
    console.log(
      chalk.blue(
        `${chalk.green(`[COMMAND]`)} ${chalk.yellow(
          interaction.user.tag
        )} used the ${chalk.green(`/say`)} command in ${chalk.yellow(
          interaction.guild?.name
        )}`
      )
    );
  },
} as ICommand;
