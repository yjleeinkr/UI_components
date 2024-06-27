import Test1 from "@/components/test1";
import Test2_React from "@/components/test2/react";
import Test2_Vanilla from "@/components/test2/vanilla";

const routePaths = [
  "/",
  "/test1",
  "/test2",
  "/test2/vanilla",
  "/test2/react",
] as const;

export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: string;
  link: string;
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
    children: ["/test1", "/test2"],
  },
  "/test1": {
    key: "/test1",
    link: "/test1",
    name: "테스트1",
    children: Test1,
  },
  "/test2": {
    key: "/test2",
    link: "/test2/vanilla",
    name: "테스트2",
    children: ["/test2/vanilla", "/test2/react"],
  },
  "/test2/vanilla": {
    key: "/test2/vanilla",
    link: "/test2/vanilla",
    name: "Test2_Vanilla",
    children: Test2_Vanilla,
  },
  "/test2/react": {
    key: "/test2/react",
    link: "/test2/react",
    name: "Test2_React",
    children: Test2_React,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute => {
  return Array.isArray(route.children);
};

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (route) => routes[route]
);
