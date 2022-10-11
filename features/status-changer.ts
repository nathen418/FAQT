import { Client } from "discord.js";

export default (client: Client) => {
  const statusOptions = [
    `/faq | Ping: ${client.ws.ping}ms`,
    `/faq | V.${process.env.VERSION}`,
    "/faq | Hello! I'm FAQT",
    "/faq | nathen418.com"
  ];
  let counter = 0;

  const updateStatus = () => {
    client.user?.setPresence({
      status: "online",
      activities: [
        {
          name: statusOptions[counter],
          type: "PLAYING",
        },
      ],
    });

    if (++counter >= statusOptions.length) {
      counter = 0;
    }

    setTimeout(updateStatus, 1000 * 60 * 5);
  };
  updateStatus();
};

export const config = {
  dbName: "STATUS_CHANGER",
  displayName: "Status Changer",
};
