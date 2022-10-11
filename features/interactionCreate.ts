import { Client } from "discord.js";

// Listen interactionCreate events from the client
export default (client: Client): void => {
  client.on("interactionCreate", async (interaction) => {
    // console.log("Interaction created!");
  });
};

export const config = {
  dbName: "INTERACTION_CREATE",
  displayName: "Interaction Create Event (ICE)",
};
