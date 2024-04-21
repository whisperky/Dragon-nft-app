import React, {useEffect} from 'react';
import celebration from '../../public/icon/squad/celebration.svg';
import WebApp from "@twa-dev/sdk";
import SquadTile from '../components/squad/SquadTile';
import '../squad.css';
import {useNavigate} from "react-router-dom";
import {SquadSliceType, UserSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import SquadSkeleton from "../skeleton/SquadSkeleton.tsx";
import {squadData, squadDataLeague} from "../types/data.ts";
import {leagueName} from "../helpers/helper.ts";
import {squadLoading} from "../store/squad.ts";

const Squad = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    const user: UserSliceType = useSelector((state: any) => state.user);
    const squad: SquadSliceType = useSelector((state: any) => state.squad);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(squadLoading())
        user.websocket.emit('getTopSquads')
    }, []);
    return !squad.isLoading ? (
        <div className='squad-con'>
            <div className='squad-header'>
                <img className='squad-header-bg' src='../../public/background/squad/Squad_BG.svg' />
                <div className='squad-header-bg-effect'></div>
                <img className='squad-header-img' src={celebration} alt='celebration'/>
                <p className='squad-text-join-title'>Join Squad!</p>
                <p className='squad-text-sm text-glass'>These squards recruiting now.</p>
                <p className='squad-text-sm text-glass'>Do you wanna join?</p>
                <button className='join-squad-btn' onClick={() => {
                    WebApp.openTelegramLink(`https://t.me/${import.meta.env.VITE_REACT_APP_BOT_USERNAME}?start=squad`);
                    WebApp.close();
                }}>Join another
                    squad
                </button>
            </div>
            <div className='squad-list-con'>
                {
                    squad.topSquad.map((sq: squadDataLeague, index: number) => <SquadTile key={sq.chat_id.slice(1)}
                                                                                          squad={sq} name={sq.name}
                                                                                          league={leagueName(sq.league?.preset)}
                                                                                          id={sq.chat_id.slice(1)}
                                                                                          image={sq.image == null ? null : import.meta.env.VITE_REACT_APP_BACKEND_URL + '/pimg/squad-profile/' + sq.image + '.jpg'}/>)
                }
            </div>
        </div>
    ) : <SquadSkeleton/>;

};

export default Squad;