import { fetchedData } from "Types";

interface CountryFormProps {
    country: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    updateUrl: React.Dispatch<React.SetStateAction<string>>;
    setData: React.Dispatch<React.SetStateAction<fetchedData | null>>;
}

export default CountryFormProps;
