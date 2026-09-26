const { spawn } = require('child_process')
const { ipcRenderer } = require('electron')

function pickFolder() {
  ipcRenderer.invoke('pick-folder').then((folder) => {
    if (folder) {
      document.getElementById('folder').value = folder
    }
  })
}

function startDownload() {
  const url = document.getElementById('url').value
  const folder = document.getElementById('folder').value || `${process.env.HOME}/Downloads`
  const output = document.getElementById('output')

  if (!url) {
    output.textContent = 'Please paste a URL first.'
    return
  }

  output.textContent = 'Starting download...\n'

  const format = document.getElementById('format').value

  const args = format === 'audio'
    ? [
        '-f', 'bestaudio[ext=m4a]',
        '--yes-playlist',
        '--progress',
        '--newline',
        '--js-runtimes', 'deno:/home/udah-e/.deno/bin/deno',
        '-o', `${folder}/%(title)s.%(ext)s`,
        url
      ]
    : [
        '-f', 'best[height<=480]',
        '--progress',
        '--newline',
        '--js-runtimes', 'deno:/home/udah-e/.deno/bin/deno',
        '-o', `${folder}/%(title)s.%(ext)s`,
        url
      ]

  const dl = spawn('yt-dlp', args)

  dl.stdout.on('data', (data) => {
    const text = data.toString()
    if (text.includes('[download]')) {
      const lines = output.textContent.split('\n')
      lines[lines.length - 1] = text.trim()
      output.textContent = lines.join('\n')
    } else {
      output.textContent += text
    }
  })

  dl.stderr.on('data', (data) => {
    output.textContent += data.toString()
  })

  dl.on('close', (code) => {
    if (code === 0) {
      output.textContent += '\n DOWNLOAD COMPLETE'
    } else {
      output.textContent += '\n Something went WRONG.'
    }
  })
}

function updateYtdlp() {
  const output = document.getElementById('output')
  output.textContent = 'Checking for updates...\n'

  const update = spawn('yt-dlp', ['-U'])

  update.stdout.on('data', (data) => {
    output.textContent += data.toString()
  })

  update.stderr.on('data', (data) => {
    output.textContent += data.toString()
  })

  update.on('close', (code) => {
    if (code === 0) {
      output.textContent += '\n✅ Update check complete!'
    } else {
      output.textContent += '\n❌ Update failed.'
    }
  })
}


