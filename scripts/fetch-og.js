// scripts/fetch-og.js   (keep .js)
import ogs from "open-graph-scraper";
import fs from "fs";

const url = process.argv[2];
if (!url) {
  console.error("Usage: node scripts/fetch-og.js <url>");
  process.exit(1);
}

const { result } = await ogs({ url });

const preview = {
  url,
  title: result.ogTitle,
  description: result.ogDescription,
  image: result.ogImage?.url,
};

fs.writeFileSync(
  "src/data/linkPreviews.json",
  JSON.stringify(preview, null, 2)
);

console.log("Preview written → src/data/linkPreviews.json");
