# Deploying Disfrio Web to GitHub Pages

Since I cannot directly create a repository on your GitHub account, please follow these steps to deploy the site:

1.  **Create a New Repository on GitHub**
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `disfrio-web` (or any name you prefer).
    *   Make sure it is **Public**.
    *   Click "Create repository".

2.  **Push the Code**
    Open your terminal in the `disfrio-web` folder (I will do the local git setup for you) and run:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/disfrio-web.git
    git branch -M main
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` with your actual GitHub username)*

3.  **Configure GitHub Pages**
    *   Go to your repository **Settings** > **Pages**.
    *   Under **Build and deployment** > **Source**, select **GitHub Actions**.
    *   Select **Next.js** -> **Configure**.
    *   Commit the generated workflow file.

    **Alternative (Simpler for Static Export):**
    *   Since we configured `output: 'export'`, you can also use the default **Deploy from a branch** method if you push the `out` folder, but the **GitHub Actions** method is recommended for Next.js.

    **Easiest Method (gh-pages package):**
    I can set up the `gh-pages` package so you just run `npm run deploy`.

    **Do you want me to set up the `npm run deploy` script for you?**
