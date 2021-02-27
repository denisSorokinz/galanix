import isUrlValid from "./isUrlValid";

const generateQueryString = (
    endpoint: string,
    params: {
        [key: string]: string;
    } = {}
): string | null => {
    endpoint = endpoint.replace("?", "");
    let paramsString = "";
    let paramsKeys = [];

    paramsKeys = Object.keys(params);

    if (paramsKeys.length == 0) return endpoint;
    endpoint += endpoint.endsWith("?") ? "" : "?";
    paramsString = paramsKeys
        .map((key) => {
            return (
                encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
            );
        })
        .join("&");

    const result = `${endpoint}${paramsString}`;
    return isUrlValid(result) ? result : null;
};

export default generateQueryString;
