# Timothy Olaniran: portfolio site

A plain HTML, CSS and JavaScript site. No build step, no framework, so it runs as-is on GitHub Pages or Vercel.

```
index.html                  the page layout (you rarely need to edit this)
js/data.js                  ALL your content: intro, skills, projects, experience, articles, contact
js/main.js                  turns data.js into the page (no need to edit)
css/style.css               design; change the colours at the top under :root
images/profile.jpg          your photo (add this)
images/favicon.svg          the browser tab icon
resume.pdf                  your resume (add this)
articles/template.html      copy this to write an article hosted on the site
articles/facial-recognition-attendance.html   a draft article to finish
.nojekyll                   tells GitHub Pages to serve files exactly as they are
```

## 1. Make it yours

1. **Photo:** save a portrait photo as `images/profile.jpg` (about 800 x 1000 px, face near the top third). Until it exists, the site shows your initials.
2. **Resume:** export your resume to PDF and save it as `resume.pdf` in the main folder. To hide the download button instead, set `resume: ""` in `js/data.js`.
3. **Content:** open `js/data.js` and edit the text. Every section of the page comes from this file.
4. **Articles:** either link to posts on Medium, Hashnode, LinkedIn or dev.to, or write them on the site (see below).
5. **Draft article:** finish `articles/facial-recognition-attendance.html` by replacing each [bracketed prompt], or delete its entry from `articles` in `js/data.js` until it is ready.

## 2. Preview on your computer

Double-click `index.html` to open it in your browser. Refresh after each edit.

## 3. Publish on GitHub Pages (free)

1. Sign in to GitHub and create a new **public** repository named exactly `Maven-Geek.github.io`.
2. On the repo page, click **Add file > Upload files**, drag in everything from this folder (including the `css`, `js`, `images` and `articles` folders and the `.nojekyll` file), then click **Commit changes**.
3. Go to **Settings > Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then **Save**.
4. After a minute or two the site is live at **https://maven-geek.github.io**.

To update the site later, edit the file on GitHub (pencil icon) or upload the changed file again. It redeploys automatically.

Tip: `.nojekyll` starts with a dot, so your computer may hide it. If it does not upload, create it on GitHub with **Add file > Create new file**, name it `.nojekyll`, leave it empty and commit.

## 4. Or publish on Vercel (free)

1. Put the files in a GitHub repository (any name), as in steps 1 and 2 above.
2. Sign in at vercel.com with GitHub, click **Add New > Project** and import the repository.
3. Set **Framework Preset** to **Other**. Leave the build command empty and the output directory as the default.
4. Click **Deploy**. You get a link like `your-project.vercel.app`, and every push to GitHub redeploys the site.

Both services let you add a custom domain later (for example timothyolaniran.com) under their domain settings.

## Writing an article on the site

1. Copy `articles/template.html` and rename the copy, e.g. `articles/my-first-pipeline.html` (lowercase, hyphens, no spaces).
2. Change the title, date and text in the copy. Instructions are in the comment at the top of the file.
3. Add an entry to `articles` in `js/data.js`:

```js
{
  title: "Building my first ELT pipeline",
  date: "2026-12-01",
  summary: "One or two sentences on what the reader will learn.",
  url: "articles/my-first-pipeline.html",
  readTime: "7 min read",
  where: ""
},
```

For an article hosted elsewhere, put its full link in `url` and the site name in `where`, e.g. `where: "Hashnode"`. Articles are sorted newest first automatically.

## Adding a project

In `js/data.js`, copy one of the blocks under `projects` (from `{` to `},`) and change the text. A ready-made block for an ELT pipeline project is commented out at the top of the list; delete the `//` at the start of each of its lines to use it.

## Changing the colours

The colours are defined at the top of `css/style.css` under `:root` (light mode) and in the two dark-mode blocks below it. The dotted indigo panel behind your photo is inspired by adire cloth; its colours are `--cloth` and `--cloth-dot`.
