import {index, layout, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    layout("components/layout/AppLayout.tsx", [
        index("routes/home.tsx"),

        ...prefix("grocery", [
            ...prefix("item", [
                route("add", "routes/addItem.tsx"),
                route("edit/:id", "routes/editItem.tsx"),
            ]),
            ...prefix("list", [
                route("add", "routes/addList.tsx"),
                route("edit/:id", "routes/editList.tsx"),
            ]),
        ]),
    ])
] satisfies RouteConfig;
