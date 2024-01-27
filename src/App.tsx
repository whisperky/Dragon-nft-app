import WebApp from '@twa-dev/sdk'
import TapGame from "./core/TapGame.tsx";

function App() {
    WebApp.expand();
    WebApp.setBackgroundColor('#000000');
    WebApp.setHeaderColor('#000000');
    if (WebApp.platform !== 'ios' && WebApp.platform !== 'android')
        return (
            <div id='noDesktop'>
                <span>Desktop is Boring</span>
                <span>open on phone</span>
            </div>
        )
    else
        return (
            <TapGame />
        )
}

export default App
