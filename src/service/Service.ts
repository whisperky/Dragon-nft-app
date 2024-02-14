import {Manager} from "socket.io-client";
import WebApp from "@twa-dev/sdk";

export default class Service {
    static Connect() {
        const URL = import.meta.env.VITE_REACT_APP_BACKEND_URL ?? "http://localhost:5000";
        const manager = new  Manager(URL, {
            // reconnectionDelayMax: 10000,
        });
        const socket = manager.socket('/game',{
            auth: {
                tg_id: (WebApp?.initDataUnsafe?.user?.id ?? '').toString(),
                initDate: WebApp.initData,
            }
        });
        socket.on('connection', () => {

        }).on('connect_error', (err: any) => {
            alert("Websocket connection error: " + err.message);
        })
        return socket;
    }
}