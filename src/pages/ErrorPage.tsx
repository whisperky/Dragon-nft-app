import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error:any = useRouteError();
    let title = "There was an error";
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
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-0 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className="mb-16">
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    {title}
                                </h1>
                                <p className="my-2 text-gray-800">{message}</p>
                                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Retry</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="error" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
