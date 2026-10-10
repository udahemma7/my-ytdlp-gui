a desktop gui for yt-dlp. paste your link , select a folder and your preferred quality and download

<img width="1920" height="1080" alt="Screenshot from 2026-10-10 17-47-48" src="https://github.com/user-attachments/assets/97465f92-3cd9-4b48-85dc-e46de0024384" />




FEATURES

.paste a playlist/song or video url and download

.you can select your preferred quality from: 720p, 480p, 360p or audio only

.audio is saved as m4a (no re-encoding)

.live download progress with speed and ETA

.select download destination (default is /downloads)

.one click yt-dlp update button


REQUIREMENTS

.yt-dlp

.ffmpg

.deno

.nodejs(LTS and NPM)


**YT-DLP:**

used for downloading

to install; check https://github.com/yt-dlp/yt-dlp/wiki


**FFMPG:**

used to merge video and audio streams

to install; https://www.reddit.com/r/linuxmint/comments/13s8zsg/how_to_install_latest_version_of_ffmpeg/


**DENO:**

used for solving youtube js challenges

to install; curl -fsSL https://deno.land/install.sh ~ sh 

or https://docs.deno.com/runtime/getting_started/installation/


**NODEJS:**

to build and run from source

to install; nodejs.org



**TO RUN FROM SOURCE:**

GIT CLONE HTTPS://GITHUB.COM/UDAHEMMA7/MY-YTDLP-GUI.GIT

CD MY-YTDLP-GUI

NPM INSTALL

NPM START

**TO BUILD A STAND ALONE APP:**
after npm install
run :npm run build


**Usage:**
Paste a video  song or playlist URL.

(Optional) Click Browse to choose a save folder.

Pick a quality or Audio only (M4A).

Click Download.

Click Update now and then to keep yt-dlp current.

Platform support

Built and tested on Linux Mint
(also tested on fedora kde).

Windows and macOS builds are not set up,

and the app assumes Linux-style paths
(if you know what you are doing code can still be modiffied to to work on whatever platform)

**Known limitations**

yt-dlp, ffmpeg and Deno are not bundled (see Requirements).

The Update button runs yt-dlp -U, which only works if yt-dlp was installed as the standalone binary. 

If you installed it with apt or pip, update it with that package manager instead.

Quality options above 360p use separate video and audio streams that are merged with ffmpeg, so they take longer than 360p.

Deno is looked up at ~/.deno/bin/deno, falling back to deno on your PATH

**Disclaimer**

This is a personal-use wrapper around yt-dlp. It does not host or distribute any content. You are responsible for complying with the terms of service of the sites you download from and with the copyright laws where you live. Only download content you have the right to download.

**LICENSE**

released under the MIT license (see license)

**BUILT WITH**

YT-DLP

ELECTRON

DENO

NPM
