## YouTube Streaming in Max Patch

This patch demonstrates how to stream YouTube videos directly in Max using Node for Max and an external command-line tool (yt‑dlp). The setup works as follows:

### Node Script (watch-youtube.js):

A Node for Max script calls yt‑dlp with the appropriate parameters (e.g. -f best[ext=mp4] -g) to extract a direct streaming URL from a given YouTube link.

The script outputs a message tagged combined_url if a merged audio-video stream is available. If separate streams are returned, it outputs video_url and audio_url.

### Max Patch Setup:

A node.script object loads the watch-youtube.js script.

An open message (e.g. open https://youtu.be/your_video) triggers the Node script.

Use a route combined_url object to filter the output, then pass it through a prepend read object to format the message as read <URL>.

The resulting message is sent to a jit.movie~ object, which plays the video stream.

Connect jit.movie~'s video output to a display object (such as jit.pwindow) and its audio output to your MSP chain.

### Requirements
Max 8 or later with Node for Max enabled.

yt‑dlp installed and accessible in your system’s PATH (e.g., via Homebrew or pip).

Node.js (the version bundled with Max is compatible).

