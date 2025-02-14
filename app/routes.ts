import {index, layout, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    layout("layouts/AppLayout.tsx", [
        index("routes/home.tsx"),

        ...prefix("grocery/item", [
            route("add", "routes/addItem.tsx"),
            route("edit/:id", "routes/editItem.tsx"),
        ]),
    ])
] satisfies RouteConfig;
