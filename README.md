# MaxTubeStream

MaxTubeStream is a simple Max patch that streams YouTube videos using Node for Max and yt‑dlp. It fetches a direct MP4 stream URL from a YouTube link and sends it to a jit.movie~ object for playback.

## Requirements

- **Max 8 or later** with Node for Max enabled.
- **yt‑dlp** installed and accessible in your system’s PATH  
  *(e.g., on macOS: `brew install yt-dlp` or via pip: `pip install yt-dlp`)*
- **Node.js:** (the version bundled with Max works fine)

## Setup

1. Place the `watch-youtube.js` script in the same folder as your Max patch.
2. In that folder, run:
   ```bash
   npm install
3. Open the Max patch and send an open <YouTube URL> message to the node.script object.

## How It Works
The Node script calls yt‑dlp to extract a direct streaming URL from the given YouTube link and outputs a message (e.g., combined_url <URL>) which is then routed (using objects like [route] and [prepend read]) to a jit.movie~ object for video playback.

### License
MIT License
