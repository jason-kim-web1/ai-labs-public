const fs = require("fs");
const path = require("path");

// --- 사용할 수 있는 도구 정의 ---
// Ollama API에 전달할 도구 스키마입니다.
const tools = [
  {
    type: "function",
    function: {
      name: "readFile",
      description: "주어진 경로의 텍스트 파일 내용을 읽습니다.",
      parameters: {
        type: "object",
        properties: {
          fileName: {
            type: "string",
            description: "읽을 파일의 이름",
          },
        },
        required: ["fileName"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "writeFile",
      description: "주어진 경로에 텍스트 파일을 만듭니다.",
      parameters: {
        type: "object",
        properties: {
          fileName: {
            type: "string",
            description: "새로 만들 파일 이름",
          },
          content: {
            type: "string",
            description: "파일에 쓸 내용",
          },
        },
        required: ["fileName", "content"],
      },
    },
  },
];

const basePath = path.resolve(path.resolve(), 'files');

// --- 도구에 해당하는 실제 Node.js 함수 구현 ---
// 이 함수들은 LLM의 지시에 따라 애플리케이션이 실행합니다.
const availableTools = {
  readFile: ({ fileName }) => {
    try {
      const filePath = path.resolve(basePath, fileName);
      return fs.readFileSync(filePath, "utf8");
    } catch (error) {
      console.error(`-> Tool: readFile 실패 - ${error.message}`);
      throw new Error(`Error reading file '${filePath}': ${error.message}`); // 에러 메시지 반환
    }
  },
  writeFile: ({ fileName, content }) => {
    try {
      if (!fs.existsSync(basePath)) fs.mkdirSync(basePath);
      const filePath = path.resolve(basePath, fileName);
      fs.writeFileSync(filePath, content, "utf8");
    } catch (error) {
      console.error(`-> Tool: writeFile 실패 - ${error.message}`);
      throw new Error(`Error writing file '${fileName}': ${error.message}`);
    }
  },
};

exports.tools = tools;
exports.availableTools = availableTools;
