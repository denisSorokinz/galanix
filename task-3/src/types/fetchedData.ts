type fetchedData = Array<{
    tableIndex?: number;
    web_pages: Array<string>;
    name: string;
    domains: Array<string>;
    alpha_two_code: string;
    country: string;
    "state-province": string | null;
}>;

export default fetchedData;
