---
layout: home
title: Cognitive Science & LLMs
nav_exclude: true
permalink: /:path/
seo:
  type: Course
  name: Cognitive Science & LLMs
---

# Cognitive Science & LLMs

Are LLMs helping or hurting your productivity? Are they causing you to lose your skills or critical thinking ability? Both? These are open research questions, and the findings so far are mixed. In this seminar, we will review and discuss human-AI interaction research and work together to design and run our own small studies to measure the effects of LLMs on our productivity and thinking.

**Optional in-person:** Tuesdays 8–9pm EST · Zoom link in Canvas · Starting May 19

Lectures will be recorded and available for async participation.

### Local development environment

Just the Class requires no special Jekyll plugins and can run on GitHub Pages' standard Jekyll compiler.

## Local Development

To set up a local development environment:

1. **Install Prerequisites**:
   - Ensure you have Ruby `3.3.6` installed.
   - If using Homebrew, install Ruby with `brew install ruby`.
   - If using `rbenv`, install and select the correct version:
     - `brew install rbenv`
     - `rbenv install 3.3.6`
     - `rbenv local 3.3.6`
     - `rbenv rehash`
     - Confirm you are using the correct Ruby:
       - `ruby -v` should show `ruby 3.3.6`
   - Install Bundler: `gem install bundler`

2. **Clone and Setup**:
   - Clone your repository: `git clone <your-repo-url>`
   - Navigate to the project directory: `cd <your-repo-directory>`
   - Install dependencies: `bundle install`

3. **Run Locally**:
   - Start the Jekyll server: `bundle exec jekyll serve`
   - Open your browser to `http://localhost:4000` to view the site.
   - The server will auto-reload when you make changes to files.

For more details, see the GitHub Docs on [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

## Deployment

Just the Class is designed for deployment on GitHub Pages.

1. **Configure GitHub Pages**:
   - In your repository settings, go to "Pages" and set the source to "Deploy from a branch" (select `main` or `master` branch).
   - Alternatively, use GitHub Actions for more control (see [GitHub Pages documentation](https://docs.github.com/en/pages)).

2. **Deploy**:
   - Commit your changes: `git add .` and `git commit -m "Update site"`
   - Push to the configured branch: `git push origin main`
   - GitHub Pages will automatically build and deploy your site. It may take a few minutes.
   - Your site will be available at `https://<username>.github.io/<repository-name>` or your custom domain if configured.

If you encounter build issues, check the repository's Actions tab for error logs.
