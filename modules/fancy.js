const { command, styletext, listall, tiny, isPrivate } = require("../lib/");
ezio.addCommand(
  {
    pattern: "fancy",
    fromMe: isPrivate,
    desc: "converts text to fancy text",
    type: "converter",
  },
  async (message, client) => {
    if (!message.reply_message || !message.reply_message.text || !client ||isNaN(client)) {
      let text = tiny(
        "Fancy text generator\n\nReply to a message\nExample: .fancy 32\n\n"
      );
      listall("Fancy").forEach((txt, num) => {
        text += `${(num += 1)} ${txt}\n`;
      });
      return await message.reply(text);
    } else {
      message.reply(styletext(message.reply_message.text, parseInt(client)));
    }
  }
);
