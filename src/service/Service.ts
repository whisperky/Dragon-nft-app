import {Manager} from "socket.io-client";
// import WebApp from "@twa-dev/sdk";

export default class Service {
    static Connect() {
        const URL = import.meta.env.VITE_REACT_APP_BACKEND_URL ?? "http://localhost:5000";
        const manager = new  Manager(URL, {
            // reconnectionDelayMax: 10000,
        });
        const socket = manager.socket('/game',{
            auth: {
                // tg_id: (WebApp?.initDataUnsafe?.user?.id ?? '').toString(),
                // initDate: WebApp.initData,
                tg_id: '353575758',
                initDate: 'query_id=AAFOIxMVAAAAAE4jExWLmb06&user=%7B%22id%22%3A353575758%2C%22first_name%22%3A%22Mikiyas%22%2C%22last_name%22%3A%22Lemlemu%22%2C%22username%22%3A%22m_miko%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1707912953&hash=79e9fad618466dc1214fb1d7414ac2949fbbfbacf7c80d53f7c61ee45a7c487a',
            }
        });
        socket.on('connection', () => {

        }).on('connect_error', (err: any) => {
            alert("Websocket connection error: " + err.message);
        })
        return socket;
    }
}