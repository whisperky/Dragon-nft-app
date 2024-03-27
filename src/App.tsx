import Dashboard from "./pages/Dashboard.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Boosts from "./pages/Boosts.tsx";
import League from "./pages/League.tsx";
import {Toaster} from "react-hot-toast";
import WebApp from "@twa-dev/sdk";
import Fren from "./pages/Fren.tsx";
import 'react-loading-skeleton/dist/skeleton.css';
import {useSelector} from "react-redux";
import {TurboSliceType} from "./types/store.ts";
import TurboDashboard from "./pages/TurboDashboard.tsx";

function App() {
    const turbo: TurboSliceType = useSelector((state: any) => state.turbo);
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <RootLayout/>,
                errorElement: <ErrorPage/>,
                children: [
                    {
                        index: true,
                        element: turbo.turboMode ? <TurboDashboard /> : <Dashboard/>,
                    },
                    {
                        path: 'boosts',
                        element: <Boosts/>,
                    },
                    {
                        path: 'league',
                        element: <League/>,
                    },
                    {
                        path: 'fren',
                        element: <Fren/>
                    }
                ]
            }
        ]
    );
    if (WebApp.platform !== 'ios' && WebApp.platform !== 'android')
        return (
            <div id='noDesktop'>
                <span>Desktop is Boring</span>
                <span>open on phone</span>
            </div>
        )
    else
        return (
            <div className="App">
                <div>
                    <Toaster
                        position='bottom-center'
                        toastOptions={{
                            style: {
                                borderRadius: '10px',
                                textAlign: 'center',
                                background: '#333',
                                color: '#fff',
                                fontSize: '15px',
                                height: '35px',
                                marginBottom: '10px'
                            }
                        }}
                    />
                </div>
                <RouterProvider router={router}/>
            </div>
        );
}

export default App
