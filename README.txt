WEBSITE THEME FIX — deployment

Replace these files on your site:
  index.html
  research.html
  cv.html (if this page is published)
  assets/styles.css
  favicon.png (optional, same as before)

Do not upload the assets folder into the wrong level: the CSS must be
accessible at /assets/styles.css for a site hosted in the domain root.
The light/dark switch JavaScript is now embedded in each HTML page and
DOES NOT require assets/theme.js. You can remove the old theme.js.

After uploading, hard-refresh your browser (Cmd+Shift+R on Mac).
The bulb symbol means switch to Light; the moon means switch to Dark.
The theme selection persists between pages via localStorage.
Your preexisting photos / logo / CV PDF should remain in assets/.
