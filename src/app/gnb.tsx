"use client";

import Link from "next/link";
import {
  ChildRoute,
  ParentRoute,
  ROUTE,
  ROUTE_PATH,
  gnbRootList,
  isParentRoute,
  routes,
} from "./routes";
import classNames from "classnames";
import { useParams } from "next/navigation";

const ParentGnbItem = ({
  route,
  currentPath,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
}) => {
  const { link, name, children } = route;
  const open = children.includes(currentPath);

  return (
    <li className={classNames("parent", `items-${children.length}`, { open })}>
      <Link href={link}>{name}</Link>
      <ul className="subRoutes">
        {children.map((path) => {
          const route = routes[path];
          return (
            <GnbItem route={route} currentPath={currentPath} key={route.key} />
          );
        })}
      </ul>
    </li>
  );
};

const ChildGnbItem = ({
  route,
  currentPath,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
}) => {
  const { link, name } = route;
  return (
    <li className={classNames({ active: link === currentPath })}>
      <Link href={link}>{name}</Link>
    </li>
  );
};

const GnbItem = ({
  route,
  currentPath,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
}) => {
  if (isParentRoute(route))
    return <ParentGnbItem route={route} currentPath={currentPath} />;
  return <ChildGnbItem route={route} currentPath={currentPath} />;
};

const Gnb = () => {
  const { item = [] } = useParams();
  const currentPath = ["", ...item].join("/") as ROUTE_PATH;

  return (
    <aside>
      <h1>
        <Link href="/">UI Collection</Link>
      </h1>
      <ul className="mainRoutes">
        {gnbRootList.map((route) => (
          <GnbItem route={route} currentPath={currentPath} key={route.key} />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
