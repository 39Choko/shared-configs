import { writeFileSync } from "node:fs";
import { config } from "./index";

writeFileSync("biome.json", JSON.stringify(config, null, 2));
