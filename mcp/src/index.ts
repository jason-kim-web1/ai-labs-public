import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import registFileTools from "./file/tools.js";

const server = new McpServer({
  name: "MCP example server",
  version: "1.0.0",
});

registFileTools(server);

const transport = new StdioServerTransport();
await server.connect(transport);
