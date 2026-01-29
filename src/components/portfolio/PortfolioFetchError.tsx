import { useContext } from "react";
import { AppContext } from "../../App.tsx";
import fetchPortfolioItems from "../../utils/fetchPortfolioItems.ts";

const PortfolioFetchError = () => {
    const { dispatchAppState } = useContext(AppContext);
    return (
        <div className="d-sm-inline-block border-red p-1 rounded-1">
            <h6 className="text-red">Something went wrong </h6>
            <p>The portfolio could not be fetched</p>
            <p className="small">
                Check your connection, otherwise the server might be down so
                please try later
            </p>
            <button
                className="small red mt-2 mb-1"
                onClick={() => fetchPortfolioItems(dispatchAppState)}
                style={{ fontSize: "1.6rem" }}
            >
                Try again?
            </button>
        </div>
    );
};
export default PortfolioFetchError;
