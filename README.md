# Vanilla Rec Room Page

## Customize the page

Open `site-settings.js` to edit the page without digging through its HTML.

- Change `theme` to `forest`, `ocean`, or `ember` to switch the whole color palette.
- Edit the values under `text` to change headings, descriptions, and tab labels.
- Edit an image's `src` and `alt` under `images` to replace it.
- Adjust a theme's color values in its `colors` object to change backgrounds, text, borders, and accents.
- Edit `gettingStartedSteps` to change the numbered setup guide.
- Edit `circuits.menus` to change circuit categories, chip names, and explanations.

The circuit guide is a beginner summary of the Rec Room Wiki's CV1 (Legacy) categories. The wiki marks several circuit articles for cleanup, and Vanilla may use different or newer circuits, so treat it as an introduction rather than a definitive Vanilla reference.

The page currently uses screenshots in `images/`:

- `hero`: `api-4.jpg` (Vanilla lobby)
- `overview`: `api-2.jpg` (lobby and avatar)
- `play`: `api-3.jpg` (numbered-block minigame)
- `create`: `api.jpg` (avatar in a room)
- `gettingStarted`: `api-2.jpg` (player in the Vanilla lobby)

To replace an image, change its `src` and `alt` under `images` in `site-settings.js`. Use a direct image URL or a file in this project, such as `./images/my-room-photo.jpg`. Google Images search-result links are not image files; use a direct image URL and make sure you have permission to use it. Add local image files to the repository so GitHub Pages can publish them.

After editing, refresh the page to see the changes. Keep `index.html` and `site-settings.js` together when publishing to GitHub Pages.