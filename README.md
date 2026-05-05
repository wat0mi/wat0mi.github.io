# watomi · bio

A personal linktree-style page in royal heraldic style.

## How to publish on GitHub Pages (URL → `https://wat0mi.github.io/`)

1. Open https://github.com/new
2. **Repository name** → enter exactly: `wat0mi.github.io`
3. Set to **Public**, do NOT add README/`.gitignore`/license — leave empty
4. Click **Create repository**
5. On the empty repo page, click **uploading an existing file** (or drag-and-drop)
6. Drag everything from this folder into the upload area:
   - `index.html`
   - `styles.css`
   - `script.js`
   - the entire `assets/` folder
7. Scroll down → **Commit changes**
8. Wait ~1 minute, then visit **https://wat0mi.github.io/**

That's it.

## File map

```
.
├── index.html      ← page markup
├── styles.css      ← all styling (cream/heraldic theme)
├── script.js       ← Discord copy-to-clipboard handler
└── assets/
    ├── avatar-400.jpg          ← profile picture (Light Yagami)
    ├── coat-of-arms.jpg        ← faded background watermark (Austria-Hungary)
    └── eagle-shield-cutout.png ← small heraldic crest (transparent bg)
```

## Editing later

- Change links → edit `index.html`, search for `https://steamcommunity.com/...` or `data-handle="watomi07"`
- Change motto → edit the line `<em>Tria in Uno,&nbsp;Unum in Tribus</em>` and the Russian line below it
- Change colors → edit the `:root` block at the top of `styles.css`
- Change avatar → replace `assets/avatar-400.jpg` with another square image of the same name
