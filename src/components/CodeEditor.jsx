import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ language = "javascript", defaultValue = "// Write your code here" }) => {
  const [code, setCode] = useState(defaultValue);

  const handleCodeChange = (value) => {
    setCode(value || "");
  };

  const handleRun = () => {
    alert("Your code:\n\n" + code);
    // 🔹 Later: send this `code` to backend for execution
  };

  return (
    <div style={{ height: "80vh", display: "flex", flexDirection: "column" }}>
      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={handleCodeChange}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
      <button 
        onClick={handleRun} 
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Run Code
      </button>
    </div>
  );
};

export default CodeEditor;
