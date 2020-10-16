commands.on(
  {
    name: 'ask'
  },
  (args) => ({
    question: args.text()
  }),
  async (message, { question }) => {
    const s_channel = await discord.getGuildTextChannel('Q_AND_A_CHANNEL_ID');
    message.reply('Your question has been sent to <#Q_AND_A_CHANNEL_ID>!');
    message.delete();
    const embed = new discord.Embed();
    embed.setAuthor({
      name: message.author.getTag(),
      iconUrl: message.author.getAvatarUrl()
    });
    embed.setTitle(`${question}`);
    embed.setDescription(
      '❔ Answer the question they ask by text ℹ️\n\n**When done:**\nReact with ✅ when the question has been answered'
    );
    embed.setColor(0x002eff);
    s_channel?.sendMessage({ embed: embed }).then((x) => {
      x.addReaction('✅');
    });
  }
);
