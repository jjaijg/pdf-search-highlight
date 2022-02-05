// import { useEffect, useMemo, useState } from "react";
import {
  Worker,
  // Icon,
  // MinimalButton,
  // Position,
  // Tooltip,
  Viewer,
} from "@react-pdf-viewer/core";
import {
  // FlagKeyword,
  // NextIcon,
  // PreviousIcon,
  searchPlugin,
} from "@react-pdf-viewer/search";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";
import { useState } from "react";

const App = () => {
  const [currentKeyword, setCurrentKeyword] = useState({
    keyword: "",
    matchCase: false,
    wholeWords: false,
  });
  const searchPluginInstance = searchPlugin();
  const {
    highlight,
    // jumpToNextMatch,
    // jumpToPreviousMatch
  } = searchPluginInstance;

  // const search = (keyword) => {
  //   setCurrentKeyword(keyword);
  //   highlight(keyword);
  // };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
      <div
        className="rpv-core__viewer"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#eeeeee",
            borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            display: "flex",
            padding: "4px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              display: "flex",
              padding: "0 2px",
            }}
          >
            <input
              style={{
                border: "none",
                padding: "8px",
                width: "200px",
              }}
              placeholder="Enter to search"
              type="text"
              value={currentKeyword.keyword}
              onChange={(e) => {
                setCurrentKeyword({
                  keyword: e.target.value,
                  matchCase: currentKeyword.matchCase,
                  wholeWords: currentKeyword.wholeWords,
                });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && currentKeyword.keyword) {
                  highlight(currentKeyword);
                }
              }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Viewer
            fileUrl={"https://arxiv.org/pdf/1708.08021.pdf"}
            plugins={[searchPluginInstance]}
          />
        </div>
      </div>
    </Worker>
  );
};

export default App;
