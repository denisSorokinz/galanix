import { fetchedData } from "Types";

interface FetchResultsProps {
    data: fetchedData | null;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
}

export default FetchResultsProps;
