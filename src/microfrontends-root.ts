import type { LoadApp } from "single-spa-layout/dist/types/browser/constructApplications";
import type { ResolvedRoutesConfig } from "single-spa-layout/dist/types/isomorphic/constructRoutes";

import { registerApplication, start } from "single-spa";
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";

import layout from "./layout.html";

const routes: ResolvedRoutesConfig = constructRoutes(layout);
const loadApp: LoadApp = ({ name }) => System.import(name);

const applications = constructApplications({ routes, loadApp });
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
