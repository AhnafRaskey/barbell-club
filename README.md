# Barbell Club — Lab 3

A responsive five-page gym website built with HTML, CSS, and JavaScript.

Website: https://ahnafraskey.github.io/barbell-club/

Repository: https://github.com/AhnafRaskey/barbell-club

## Pages

- `index.html`: Home, equipment, and technique videos
- `memberships.html`: Membership options
- `location.html`: Location, map, and hours
- `personal-training.html`: Training intake form
- `signup.html`: Membership registration form

The forms validate sample input in the browser. They do not send or save data or create real accounts.

## Responsive design: class demo notes

1. Every page includes a viewport meta tag so phones use their actual screen width.
2. The main content fills the available space up to a maximum width of 1000px, keeping desktop text readable.
3. Navigation uses Flexbox with wrapping, so links move onto additional rows on smaller screens.
4. Membership sections use flexible, wrapping columns, becoming stacked sections when space is limited.
5. Images use `width: 100%` and `height: auto`. Videos fill their container while keeping a 16:9 aspect ratio, and the map also fits its container.
6. Forms use a two-column CSS Grid on larger screens. A media query at 600px changes the forms to one column, reduces padding, and makes submit buttons full width.
7. `box-sizing: border-box` keeps padding and borders inside the declared widths.
8. Lists have explicit left padding so their bullets stay consistently aligned on phones.

For the class demonstration, open Home, Memberships, and Sign Up on a computer and a phone. Point out how navigation wraps, membership sections stack, media scales, and the form changes from two columns to one.

## Verification

All five pages were checked in Chrome at viewport widths of 320px, 375px, 768px, and 1440px. None had horizontal page overflow or broken local images. Form grids displayed one column at phone widths and two columns at tablet and desktop widths.

## Local preview

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000`.

## GitHub Pages publishing

Publish from the `main` branch and the `/(root)` folder in Settings → Pages. Keep the HTML files, `style.css`, and `images/` together at the repository root. The `.nojekyll` file marks this as a plain static site.

The public website URL is included in a comment at the top of every HTML file. Include that same URL with the Canvas submission.

Reference: [GitHub Pages publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
