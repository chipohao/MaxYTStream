# MaxTubeStream

**MaxTubeStream** is a Max patch project that demonstrates how to stream YouTube videos directly in Max using Node for Max and the external command-line tool [yt-dlp](https://github.com/yt-dlp/yt-dlp). This project extracts direct streaming URLs from YouTube videos and routes them to Max’s playback objects, allowing you to bypass the standard YouTube player interface.

## Features

- **Direct Streaming:** Uses yt-dlp to extract direct MP4 streaming URLs from YouTube.
- **Node for Max Integration:** Leverages Node for Max to run a custom Node.js script that fetches the URL.
- **Flexible Output:** Supports combined audio-video streams as well as separate video and audio URLs.
- **Ad-Free Playback:** By bypassing YouTube’s official player, the stream typically avoids embedded ads.

## Requirements

- **Max 8 (or later)** with Node for Max enabled.
- **yt-dlp** installed and accessible in your system’s PATH:
  - **macOS:** Install via Homebrew  
    ```bash
    brew install yt-dlp
    ```
  - **Python:** Install via pip  
    ```bash
    pip install yt-dlp
    ```
- **Node.js:** The version bundled with Max is compatible.

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/MaxTubeStream.git
   cd MaxTubeStream
