import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import MtlPage from "../app/mtl/page";
import MilPage from "../app/mil/page";
import "../app/globals.css";
import "../app/extra.css";

const pages = { home: Home, mtl: MtlPage, mil: MilPage } as const;
const pageName = document.body.dataset.page as keyof typeof pages | undefined;
const Page = pages[pageName ?? "home"];
const root = document.getElementById("root");

if (!root) throw new Error("Missing #root mount point");

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
