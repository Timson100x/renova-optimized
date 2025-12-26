import { Server } from "@modelcontextprotocol/sdk/server";
import { z } from "zod";

const server = new Server(
  {
    name: "foxy-mcp",
    version: "0.0.1",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.tool("ping", {
  description: "Simple ping tool",
  inputSchema: z.object({
    text: z.string().describe("Text to echo back"),
  }),
  async execute({ text }) {
    return {
      content: [
        {
          type: "text",
          text: `pong: ${text}`,
        },
      ],
    };
  },
});

server.run();
