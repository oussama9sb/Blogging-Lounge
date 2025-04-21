import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

// const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
// const dataset = process.env.SANITY_STUDIO_DATASET;
const projectsId = process.env;
console.log("projectId", projectsId);

export default defineConfig({
  basePath: "/studio",
  name: "Sanity_Blogging",
  title: "Sanity Blogging",

  projectId: "p1h6b1n6",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
