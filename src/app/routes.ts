import Study_Vanilla from "@/components/00_study/vanilla";
import Study_Context from "@/components/00_study/context";
import Accordion from "@/components/01_accordion";
import TabMenu from "@/components/02_tabMenu";
import ToolTip from "@/components/03_tooltip";

const routePaths = [
  "/",
  "/study",
  "/study/vanilla",
  "/study/context",
  "/accordion",
  "/tabMenu",
  "/tooltip",
] as const;

export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};

export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};

export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};

export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: ["/study", "/accordion", "/tabMenu", "/tooltip"],
  },
  "/study": {
    key: "/study",
    link: "/study/vanilla",
    name: "이론",
    children: ["/study/vanilla", "/study/context"],
  },
  "/study/vanilla": {
    key: "/study/vanilla",
    link: "/study/vanilla",
    name: "Study_Vanilla",
    children: Study_Vanilla,
  },
  "/study/context": {
    key: "/study/context",
    link: "/study/context",
    name: "Context",
    children: Study_Context,
  },
  "/accordion": {
    key: "/accordion",
    link: "/accordion",
    name: "아코디언",
    children: Accordion,
  },
  "/tabMenu": {
    key: "/tabMenu",
    link: "/tabMenu",
    name: "탭메뉴",
    children: TabMenu,
  },
  "/tooltip": {
    key: "/tooltip",
    link: "/tooltip",
    name: "툴팁",
    children: ToolTip,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute => {
  return Array.isArray(route.children);
};

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (route) => routes[route]
);
