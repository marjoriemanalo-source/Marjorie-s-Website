# Simple No-JS Portfolio

This is a small three-page site built with HTML & CSS only.

How to customize

- Replace your profile photo: put your image at `assets/profile-placeholder.svg` or update `src` attributes in `index.html` and `about.html` to point to your image file.
- Change the photo background on the homepage: the three swatches at the top toggle radio inputs (no JS). To add more, copy an existing `input` + `label` and add a matching CSS rule in `css/styles.css` using the `#yourRadioId:checked ~ .hero .photo` selector.
- Embed a YouTube video: in `projects.html` replace `VIDEO_ID` in `https://www.youtube.com/embed/VIDEO_ID` with your video ID.
- Embed Google Drive files: in `projects.html` replace `FILE_ID` in `https://drive.google.com/file/d/FILE_ID/preview` with your file ID (file must be shared appropriately).

Notes & tips

- No JavaScript is used; all interactions are done via CSS selectors (e.g., `:checked`) and transitions.
- The responsive iframe is done using the `embed` wrapper with `padding-top` for 16:9. If you want 4:3, change padding.

Open `index.html` in a browser to preview locally.
