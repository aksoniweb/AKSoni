# AKS Portfolio — Static GitHub Pages Version

This folder is a static HTML/CSS/JavaScript conversion of the supplied ASP.NET Core MVC portfolio. It does not require .NET, a server, or a database.

## Files
- `index.html` — portfolio home page
- `projects/` — static project detail pages
- `assets/css/site.css` — existing portfolio styling
- `assets/js/site.js` — contact popup behavior and current year
- `assets/images/` — supplied profile, gallery, and project screenshots

## Publish with GitHub Pages
1. Create or open the GitHub repository where you want to publish the portfolio.
2. Upload the **contents** of this folder to the repository root (so `index.html` is at the root).
3. Commit and push to the `main` branch.
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the URL shown in Settings → Pages.

## Notes
- The Google Forms contact popup remains an embedded external form and requires internet access.
- GitHub Pages cannot run ASP.NET MVC controllers, C#, Razor, SQL Server, or server-side form handlers. This version replaces the Razor pages with static HTML pages.
- The project detail pages are informational showcases; they do not deploy the actual LMS or desktop applications.
