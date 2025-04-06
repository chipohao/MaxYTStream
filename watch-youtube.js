"use strict";

const maxApi = require("max-api");
const { exec } = require("child_process");

// 指定 yt-dlp 的完整路徑，請根據你的系統確認此路徑是否正確
const YTDLP_PATH = "/usr/local/bin/yt-dlp";

// 當 Max 傳送 "open <YouTube網址>" 訊息時觸發
maxApi.addHandler("open", (url) => {
  // 使用 yt-dlp 指令，參數說明：
  // -f best[ext=mp4]：選擇最佳的 MP4 格式（通常為包含視訊與音訊的合成串流）
  // -g：僅輸出 URL，不下載影片
  const command = `${YTDLP_PATH} -f best[ext=mp4] -g "${url}"`;

  maxApi.post(`執行指令: ${command}`);

  // 執行 yt-dlp 指令，並傳遞系統環境變數確保 PATH 正確
  exec(command, { env: process.env }, (error, stdout, stderr) => {
    if (error) {
      maxApi.post(`yt-dlp error: ${error.message}`);
      return;
    }
    if (stderr) {
      maxApi.post(`yt-dlp stderr: ${stderr}`);
    }

    // 處理 yt-dlp 輸出：可能會有一行（合成串流）或兩行（分離視訊與音訊）
    const lines = stdout.trim().split('\n').filter(line => line.trim() !== "");

    if (lines.length === 0) {
      maxApi.post("yt-dlp 沒有回傳任何 URL。");
      return;
    } else if (lines.length === 1) {
      // 回傳合成串流 URL
      maxApi.outlet("combined_url", lines[0]);
      maxApi.post(`取得合成串流: ${lines[0]}`);
    } else if (lines.length >= 2) {
      // 若回傳多筆，預設第一行為視訊串流、第二行為音訊串流
      maxApi.outlet("video_url", lines[0]);
      maxApi.outlet("audio_url", lines[1]);
      maxApi.post(`取得視訊串流: ${lines[0]}`);
      maxApi.post(`取得音訊串流: ${lines[1]}`);
    }
  });
});
