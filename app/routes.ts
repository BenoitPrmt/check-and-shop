import { type RouteConfig, index, prefix, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("grocery/item", [
    layout("layouts/AppLayout.tsx", [
      route("add", "routes/addItem.tsx"),
      route("edit/:id", "routes/editItem.tsx"),
    ]),
  ])
] satisfies RouteConfig;
