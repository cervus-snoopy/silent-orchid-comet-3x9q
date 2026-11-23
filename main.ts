import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "The ATM offered me a receipt for my last ten dollars, like I needed a souvenir of the crime scene.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
