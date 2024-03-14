import {useRouteError} from "react-router-dom";
import WebApp from "@twa-dev/sdk";

const ErrorPage = () => {
    const error: any = useRouteError();
    let title = "There was an error";
    const userid = (WebApp?.initDataUnsafe?.user?.id ?? '').toString();
    let message = "";
    switch (error?.status) {
        case 404:
            message = "Page not found";
            break;
        case 500:
            message = "Internal server error";
            break;
        case 401:
            message = "Unauthorized";
            break;
        case 403:
            message = "Forbidden";
            break;
        case 400:
            message = "Bad request";
            break;
        case 408:
            message = "Request timeout";
            break;
        case 503:
            message = "Service unavailable";
            break;
        case 504:
            message = "Gateway timeout";
            break;
        default:
            title = "Please check your connection and try again."
            message = "Network error" + error;
            break;
    }
    return (
        <div>
            <div
                className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-0 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className="mb-16">
                                {(userid == '353575758' || userid == '376154790') ? <p className="my-2 text-gray-800">{message}</p> : <></>}
                                <p className="my-2 text-gray-800">{error?.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
