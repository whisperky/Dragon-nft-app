import React, {useEffect} from 'react';
import {ImageSliceType, SquadSliceType, UserSliceType} from "../types/store.ts";
import {useDispatch, useSelector} from "react-redux";
import WebApp from "@twa-dev/sdk";
import DragonUser from "../components/DragonUser.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {getColorWithId, leagueName, leagueToNumber, profileAvatarName} from "../helpers/helper.ts";
import {numShort} from "../helpers/score.helper.ts";
import {enablePageLoop, squadLoading} from "../store/squad.ts";
import {changeLeagueType, setLeagueNo, setLoadLeaguePage} from "../store/league.ts";
import SquadSkeleton from "../skeleton/SquadSkeleton.tsx";

const SquadDetail = () => {
    const squad: SquadSliceType = useSelector((state: any) => state.squad);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const COIN_IMAGE = image.core.find((img) => img.name === 'COIN_TOOL');
    const OPEN_ARROW = image.optional.find((img) => img.name === 'OPEN_ARROW');
    const SQUAD_DETAIL_BG = image.optional.find((img) => img.name === 'SQUAD_DETAIL_BG');
    let LEAGUE_IMAGE = null;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let {id} = useParams();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    const user: UserSliceType = useSelector((state: any) => state.user);
    const LEAGUE_IMG = image.league.find((img) => leagueName(img.name) === leagueName(squad.squad?.league.preset));
    let isMySquad = false;
    useEffect(() => {
        if (squad.squad == null) {
            dispatch(squadLoading());
            user.websocket.emit('getSquad', {
                id: id
            });
        } else {
            user.websocket.emit('getSquadTopUsers', {
                id: squad.squad.id
            });
        }
    }, [squad.squad]);
    const shortName = profileAvatarName(squad.squad?.name);
    return squad.isLoading ? <SquadSkeleton/> : (
        <div className='squad-detail-con'>
            <div className='squad-detail-header'>
                {SQUAD_DETAIL_BG ?
                    <img className='squad-detail-header-bg' src={SQUAD_DETAIL_BG?.img.src} alt='background'/> : null}
                <div className='squad-detail-header-box'>
                    {squad.squad?.image == null ? <div className='squad-detail-profile'
                                                       style={{
                                                           background: getColorWithId(squad.squad?.chat_id.slice(1) ?? '0'),
                                                           display: 'flex',
                                                           justifyContent: 'center',
                                                           alignItems: 'center',
                                                           width: '30vw',
                                                           height: '30vw',
                                                           fontSize: '30px'
                                                       }}>{shortName}</div> :
                        <img className='squad-detail-profile'
                             src={import.meta.env.VITE_REACT_APP_BACKEND_URL + '/pimg/squad-profile/' + squad.squad?.image + '.jpg'}
                             alt='squad-profile'/>
                    }
                    <p className='squad-detail-name'>
                        {squad.squad?.name}
                    </p>
                    {LEAGUE_IMG !== null && image.isLeagueDone ?
                        <div className='flex gap-2' onClick={() => {
                            dispatch(setLoadLeaguePage(false))
                            dispatch(changeLeagueType('squad'))
                            dispatch(setLeagueNo(leagueToNumber(leagueName(squad.squad.league.preset))));
                            if (squad.isPageLoop) {
                                navigate('/league', {replace: true})
                            } else {
                                navigate('/league')
                                dispatch(enablePageLoop())
                            }
                        }}>
                            <div className='squad-tile-league'><img src={LEAGUE_IMG?.img.small.src}
                                                                    alt='bronze'/><span>{leagueName(squad.squad?.league.preset)}</span>
                            </div>
                            {OPEN_ARROW ?
                                <img className='friend-trailer-img' src={OPEN_ARROW?.img.src} alt='opener'/> : null}
                        </div> : null}
                    <p className='squad-detail-description'>
                        {squad.squad?.description}
                    </p>
                    <div className='squad-score-box'>
                        <div className='flex flex-col'>
                            <div className='flex gap-2 items-center'>
                                <img className='squad-score-coin' src={COIN_IMAGE?.img?.src} alt='coin'/>
                                <span className='squad-score-no'>{numShort(squad.squad?.score)}</span>
                            </div>
                            <div className='flex gap-2 items-center justify-center'>
                                {/*<div className='squad-score-coin'></div>*/}
                                <p className='squad-score-no-text text-glass'>Mined in squad</p>
                            </div>
                        </div>
                        <div className='col-divider'></div>
                        <div className='flex flex-col justify-center'>
                            <p className='squad-score-no'>{squad.squad?.members}</p>
                            <p className='squad-score-no-text text-glass'>Players</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='squad-detail-invite'>
                <button className='squad-detail-invite-btn' onClick={() => {
                    WebApp.openTelegramLink(`https://t.me/${import.meta.env.VITE_REACT_APP_BOT_USERNAME}?start=fren`);
                    WebApp.close();
                }}>Invite a Fren
                </button>
            </div>
            <div className='squad-detail-btn-con'>
                {(user.data?.squad_id == squad.squad?.id) ?
                    <button onClick={() => {
                        WebApp.showConfirm(`You are going to leave ${squad.squad.name} Squad.`, (val) => {
                            if (val) {
                                user.websocket.emit('leaveSquad', {
                                    id: squad.squad.id
                                });
                            }
                        });
                    }} className={'squad-detail-btn'}>Leave Squad</button> :
                    <button onClick={() => navigate(`/join-squad/${squad.squad.id}`)}
                            className='squad-detail-btn'>Join Squad</button>}
                {/*<button className='squad-detail-btn'>Boost</button>*/}
            </div>

            <div className='squad-members'>
                {squad.topSquadUsers.length === 0 ? <div>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div> : null}
                {
                    squad.topSquadUsers.length === 0 ?
                        <div className='no-squad-members'>
                            <p>No members yet</p>
                        </div> : null
                }
                {squad.topSquadUsers.map((user, index) =>
                    <DragonUser key={user.tg_id} id={user.id} fName={user.fName} lName={user.lName} rank={index + 1}
                                coin={user.balance}/>)
                }
            </div>
        </div>
    );
};

export default SquadDetail;