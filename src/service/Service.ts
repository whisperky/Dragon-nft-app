import {Manager} from "socket.io-client";
import WebApp from "@twa-dev/sdk";

export default class Service {
    static Connect() {
        const URL = import.meta.env.VITE_REACT_APP_BACKEND_URL ?? "http://localhost:6000";
        const manager = new Manager(URL, {
            // reconnectionDelayMax: 10000,
            transports: ["websocket"],
        });
        const socket = manager.socket('/game', {
            auth: {
                // tg_id: (WebApp?.initDataUnsafe?.user?.id ?? '').toString(),
                // initData: WebApp.initData,
                tg_id: '353575758',
                initData: 'query_id=AAFOIxMVAAAAAE4jExUozThw&user=%7B%22id%22%3A353575758%2C%22first_name%22%3A%22Mikiyas%22%2C%22last_name%22%3A%22Lemlemu%22%2C%22username%22%3A%22m_miko%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1709523270&hash=57c8fe2e11cdb8b8f70b3179f3d5d2f4d40267914d29bf2e10bc6a858749e544'
            }
        });
        socket.on('connection', () => {

        }).on('connect_error', (err: any) => {
            console.log("Websocket connection error: " + err.message);
        })
        return socket;
    }
}