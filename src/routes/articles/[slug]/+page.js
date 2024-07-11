import { load as loading } from "$lib/utils/load.js";

export const load = (context) => {
    context.params.page = "articles";
    return loading(context);
};