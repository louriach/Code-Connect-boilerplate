# Figma Code Connect Starter Kit

Connect your Figma design components to your real codebase so that developers see your actual code in Dev Mode, not Figma's auto-generated guesses.

This kit gets you from zero to your first connected component with as little friction as possible.

---

## What you will need before starting

- A **Figma account** on an Organisation or Enterprise plan (Code Connect requires Dev Mode)
- A **Figma file** that contains your design system components (a published library)
- A **codebase** with components you want to link to (React, Vue, Swift, etc.)
- **Node.js 18 or newer** installed on your machine. Check by running `node --version` in your terminal. If you do not have it, download it at [nodejs.org](https://nodejs.org)

---

## Step 1 - Get your Figma File Key

Your file key is the string of letters and numbers in your Figma file's URL.

Open your Figma design file. Look at the URL in your browser. It looks like this:

```
https://www.figma.com/design/aBcDeFgHiJkLmNoP/My-Design-System
                            ^^^^^^^^^^^^^^^^
                            This is your file key
```

Copy that value. You will need it in Step 3.

---

## Step 2 - Generate a Figma Access Token

This is a password that lets the CLI talk to your Figma account.

1. In Figma, click your profile picture (top left) and go to **Settings**
2. Scroll to **Personal access tokens** and click **Generate new token**
3. Give it a name like `code-connect`
4. Set the following scopes:
   - **Code Connect** - Write
   - **File content** - Read
5. Click **Generate** and copy the token immediately. You will not be able to see it again.

---

## Step 3 - Set up your credentials

In the root of this project, duplicate the `.env.example` file and rename the copy to `.env`:

```
cp .env.example .env
```

Open `.env` and fill in your values:

```
FIGMA_ACCESS_TOKEN=your-token-from-step-2
FIGMA_FILE_KEY=your-file-key-from-step-1
```

Note: the `.env` file is already listed in `.gitignore`. Never commit it, as it contains your personal access token.

---

## Step 4 - Configure your project

Open `figma.config.json`. It looks like this:

```json
{
  "codeConnect": {
    "figmaFileKey": "REPLACE_WITH_YOUR_FILE_KEY",
    "include": ["**/*.figma.ts"],
    "label": "React",
    "language": "jsx"
  }
}
```

Here is what each field means:

- **figmaFileKey** - paste your file key from Step 1 here, replacing `REPLACE_WITH_YOUR_FILE_KEY`
- **include** - tells the CLI which files to look at when publishing. The default picks up any file ending in `.figma.ts` anywhere in the project. You do not need to change this.
- **label** - the heading shown above your code snippet in Figma's Inspect panel. Change this to match your stack, for example `Vue`, `Swift`, or `Angular`.
- **language** - controls syntax highlighting in Figma. Common values are `jsx`, `tsx`, `vue`, `swift`, `kotlin`, and `html`. Change it to match your codebase.

---

## Step 5 - Install the Code Connect CLI

Run this once in your terminal from the root of this project:

```
npm install
```

---

## Step 6 - Connect your first component

Open `components/Button.figma.ts` and read through it. Every line is commented and it is a fully working example for a Button component.

To connect your own component:

1. **Copy the template:** duplicate `components/_template.figma.ts` and rename it to match your component, for example `Card.figma.ts`
2. **Get your component's URL:** in Figma, right-click your component in the left panel and choose **Copy link to selection**
3. **Paste the URL** into the `// url=` comment at the top of your new file
4. **Update the snippet** to match how your component is actually used in code
5. **Map any properties** your component has (see the Button example for reference)

---

## Step 7 - Publish to Figma

Once your file is ready, run:

```
npm run publish
```

You will see a list of component names and links. Click a link, switch to Dev Mode in Figma, and your code snippet will appear in the Inspect panel on the right.

---

## Updating a connection

Edit the `.figma.ts` file and run `npm run publish` again. It overwrites the previous version.

---

## Removing a connection

To remove all published connections from this project, run:

```
npm run unpublish
```

To remove a single component's connection, run:

```
npx figma connect unpublish --node=YOUR_COMPONENT_URL
```

---

## File structure

```
figma-code-connect-starter/
├── README.md                  You are here
├── figma.config.json          Project config (language, label, file key)
├── .env.example               Template for your credentials
├── .env                       Your actual credentials (not committed)
├── package.json
└── components/
    ├── Button.figma.ts        A fully worked example, read this first
    └── _template.figma.ts     Blank template, copy this for each component
```

---

## Troubleshooting

**"Cannot find module 'figma'"** - run `npm install` first.

**"Unauthorised"** - your access token is wrong or has expired. Generate a new one in Figma Settings and update your `.env`.

**"File not found"** - double-check your file key in `figma.config.json`. Make sure you have copied just the key (the random string), not the full URL.

**The snippet does not appear in Figma** - make sure you are in Dev Mode (toolbar at the top of the screen). It may take a moment to refresh after publishing.

**The component URL is not working** - right-click the component in the left panel (not on the canvas) and choose **Copy link to selection**.

---

## Going further

- [Full Code Connect CLI docs](https://developers.figma.com/docs/code-connect/)
- [Framework-specific guides](https://developers.figma.com/docs/code-connect/react/) (React, SwiftUI, Vue, Web Components)
- [Template API reference](https://developers.figma.com/docs/code-connect/template-api/) covering all property-mapping methods
