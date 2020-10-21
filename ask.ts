commands.on(
  {
    name: 'ask'
  },
  (args) => ({
    question: args.text()
  }),
  async (message, { question }) => {
    const s_channel = await discord.getGuildTextChannel('762892805684723723');
    message.reply('Your question has been sent to <#762892805684723723>!');
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
    embed.setThumbnail({
      url:
        'https://cdn.icon-icons.com/icons2/933/PNG/512/poll-symbol-on-black-square-with-rounded-corners_icon-icons.com_72622.png'
    });
    embed.setColor(0x002eff);
    embed.setTimestamp(new Date().toISOString());
    s_channel?.sendMessage({ embed: embed })
    message.addReaction('✅');
  }
);
