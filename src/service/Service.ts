import {Manager} from "socket.io-client";

export default class Service {
    static Connect() {
        const URL = import.meta.env.VITE_REACT_APP_BACKEND_URL ?? "http://localhost:5000";
        const manager = new  Manager(URL, {
            // reconnectionDelayMax: 10000,
        });
        const socket = manager.socket('/game',{
            auth: {
                token: localStorage.getItem('token'),
                tg_id: localStorage.getItem('tg_id'),
            }
        });
        socket.on('connection', () => {

        });
        return socket;
    }
}