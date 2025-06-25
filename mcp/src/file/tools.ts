import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import fs from "fs";
import path from "path";
import { z } from "zod";

const basePath = path.resolve(path.resolve(), 'files');

export default function registFileTools(server: McpServer) {
  server.registerTool(
    "writeFile",
    {
      description: "텍스트 파일을 작성합니다.",
      inputSchema: {
        fileName: z.string(),
        content: z.string(),
      },
    },
    ({ fileName, content }) => {
      if (!fs.existsSync(basePath)) fs.mkdirSync(basePath);
      const filePath = path.resolve(basePath, fileName);
      fs.writeFileSync(filePath, content, "utf8");

      return {
        content: [
          {
            type: "text",
            text: `파일 작성 완료! ${fileName}`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "readFile",
    {
      description: "텍스트 파일을 읽습니다.",
      inputSchema: {
        fileName: z.string(),
      },
    },
    async ({ fileName }) => {
      const filePath = path.resolve(basePath, fileName);
      return {
        content: [
          {
            type: "text",
            text: fs.readFileSync(filePath, "utf8"),
          },
        ],
      };
    }
  );
}
