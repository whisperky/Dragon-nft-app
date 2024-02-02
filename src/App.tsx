import Dashboard from "./pages/Dashboard.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import {increaseEnergy, resetCoolDown, setEnergyTimeout} from "./store/score.ts";
import {energyValue, randomRange, rechargeValue, tapValue} from "./helpers/score.helper.ts";
import Boosts from "./pages/Boosts.tsx";
import WebApp from "@twa-dev/sdk";

function App() {
    const score = useSelector((state: any) => state.score);
    const dispatch = useDispatch();
    useEffect(() => {
        let tempEnergy = score.energy;
        if (score.energyTimeout !== null) {
            clearTimeout(score.energyTimeout);
            dispatch(setEnergyTimeout(null))
            dispatch(setEnergyTimeout(
                setInterval(() => {
                    console.log(`Add Energy : ${score.coolDown} --- ${score.energy}`)
                    dispatch(increaseEnergy())
                    if (tempEnergy < energyValue(score.energy_lvl)) {
                        let energy_to_be = tempEnergy + rechargeValue(score.recharge_lvl);
                        tempEnergy = energy_to_be > energyValue(score.energy_lvl) ? energyValue(score.energy_lvl) : energy_to_be;
                    }
                    if (score.coolDown && (tempEnergy > randomRange(tapValue(score.tap_lvl), tapValue(score.tap_lvl) + 7))) {
                        console.log("Reset Cool Down")
                        dispatch(resetCoolDown())
                    }
                }, 1000)
            ))
        } else {
            dispatch(setEnergyTimeout(
                setInterval(() => {
                    console.log(`Add Energy : ${score.coolDown}`)
                    dispatch(increaseEnergy())
                    if (score.coolDown && (score.energy > randomRange(tapValue(score.tap_lvl), tapValue(score.tap_lvl) + 7))) {
                        console.log("Reset Cool Down")
                        dispatch(resetCoolDown())
                    }
                }, 1000)
            ))
        }
    }, [score.coolDown])
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <RootLayout/>,
                errorElement: <ErrorPage/>,
                children: [
                    {
                        path: ':token',
                        children: [
                            {
                                index: true,
                                element: <Dashboard/>,
                            },
                            {
                                path: 'boosts',
                                element: <Boosts/>,
                            }
                        ]
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
                <RouterProvider router={router}/>
            </div>
        );
}

export default App
