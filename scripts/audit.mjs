import puppeteer from "puppeteer-core";
import { existsSync, readFileSync } from "node:fs";

const axe = readFileSync("node_modules/axe-core/axe.min.js", "utf8");
/**
 * Runs axe against the dev server in both stocks. Start `npm run dev` first.
 * Point CHROME at your browser if it is not in one of the usual places.
 */
const CANDIDATES = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const executablePath = CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No browser found. Set CHROME to a Chrome or Edge binary.");
  process.exit(1);
}

const URL = process.env.URL ?? "http://localhost:3000/";
const browser = await puppeteer.launch({ executablePath, headless: "new", args: ["--hide-scrollbars"] });
let failed = 0;

for (const [name, dark] of [["paper", false], ["ink", true]]) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  await page.evaluate((d) => localStorage.setItem("teardown-stock", d ? "ink" : "paper"), dark);
  await page.goto(URL, { waitUntil: "networkidle0" });
  const isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  if (isDark !== dark) throw new Error(`theme did not apply for ${name}`);
  await new Promise((r) => setTimeout(r, 1500));
  await page.evaluate(axe);
  const res = await page.evaluate(async () =>
    await window.axe.run(document, {
      runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"],
    }),
  );
  console.log(`\n=== ${name.toUpperCase()}: ${res.violations.length} violations ===`);
  for (const v of res.violations) {
    console.log(`[${v.impact}] ${v.id}: ${v.help}`);
    for (const n of v.nodes.slice(0, 3)) {
      console.log("   ", n.target.join(" "), "|", (n.failureSummary || "").split("\n").slice(0, 2).join(" "));
    }
  }
  await page.close();
}
await browser.close();
process.exit(failed > 0 ? 1 : 0);
