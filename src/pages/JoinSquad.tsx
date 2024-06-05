import React, {useEffect} from 'react';
import {ImageSliceType, SquadSliceType, UserSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import WebApp from "@twa-dev/sdk";
import {squadLoading} from "../store/squad.ts";
import {useParams} from "react-router-dom";
import {getColorWithId} from "../helpers/helper.ts";

const JoinSquad = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const squad: SquadSliceType = useSelector((state: any) => state.squad);
    const COIN_IMAGE = image.coiners.find((img) => img.name === 'A');
    const dispatch = useDispatch();
    let {id} = useParams();
    useEffect(() => {
        if (squad.squad == null) {
            dispatch(squadLoading());
            user.websocket.emit('getSquad', {
                id: id
            });
        }
    }, [squad.squad]);
    return (
        <div className='join-squad'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='join-squad-con'>
                <div className='join-squad-images'>
                    {squad.squad?.image == null ? <div
                            className='animate__animated animate__fadeInLeft animate__slow join-squad-squad' style={{
                            background: getColorWithId(squad.squad?.chat_id.slice(1) ?? '0'),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        }}>{squad.squad?.name.split(" ").map((n) => n.charAt(0).toUpperCase())}</div> :
                        <img className='animate__animated animate__fadeInLeft animate__slow join-squad-squad'
                             src={import.meta.env.VITE_REACT_APP_BACKEND_URL + '/pimg/squad-profile/' + squad.squad?.image + '.jpg'}/>
                    }
                    <div className='animate__animated animate__fadeInRight animate__slow join-squad-you'>YOU</div>
                </div>
                <div style={{overflow: 'hidden'}}>
                    <div
                        className='animate__animated animate__fadeInDown animate__delay-1s animate__slow flex flex-col items-center'>
                        <p className='join-squad-title'>Join {squad.squad?.name} Clan</p>
                        <p className='join-squad-subtitle'>Every tap counts towards your clan score.</p>
                        <p className='join-squad-subtitle2'>Clan leaderboard will show your contribution</p>
                        <p className='join-squad-bottom-text'>More fun playing together ✨</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <button className={'join-squad-btn'} onClick={() => {
                    user.websocket.emit('joinSquad', {
                        id: squad.squad.id
                    });
                }}>Join Clan
                </button>
            </div>
        </div>
    );
};

export default JoinSquad;