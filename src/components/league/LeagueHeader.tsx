import leftArrow from '../../../public/icon/defaults/left-arrow.svg';
import rightArrow from '../../../public/icon/defaults/right-arrow.svg';
import DragonCoiners from "./DragonCoiners.tsx";
import DragonUser from "../DragonUser.tsx";
import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, LeagueSliceType, SquadSliceType, UserSliceType} from "../../types/store.ts";
import {capitalizeFirstLetter, highLowScore, leagueName} from "../../helpers/helper.ts";
import {
    changeLeagueType,
    changeTime,
    nextLeague,
    prevLeague,
    increasePageLCount,
    setSquadTop,
    setUserTop,
    useTemp, loadLeague
} from "../../store/league.ts";
import React, {useEffect} from "react";
import LeagueListSkeleton from "../../skeleton/LeagueListSkeleton.tsx";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {selectSquad, setTopSquad} from "../../store/squad.ts";
import {useNavigate} from "react-router-dom";

const LeagueHeader = () => {
    const navigate = useNavigate();
    const user: UserSliceType = useSelector((state: any) => state.user);
    const squad: SquadSliceType = useSelector((state: any) => state.squad);
    const league: LeagueSliceType = useSelector((state: any) => state.league);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const dispatch = useDispatch();
    const leagueLogo = image.league.find((x) => leagueName(x.name) == league.league)?.img.main.src;
    const leagueBg = image.league.find((x) => leagueName(x.name) == league.league)?.img.bg.src;
    const element = document.querySelector('.lh-rank-img');
    const leagueTextElement = document.querySelector('.lh-text-value');
    const leagueScoreElement = document.querySelector('.lh-score-value');
    const topUsersElement = document.querySelector('.topUserList');
    let percentage = league.type == 'miner' ? ((BigInt(user.data?.balance ?? BigInt(0)) * BigInt(100)) / highLowScore(league.no, league.type).high) : ((BigInt(squad.userSquad?.score ?? BigInt(0)) * BigInt(100)) / highLowScore(league.no, league.type).high);
    percentage = percentage > BigInt(100) ? BigInt(100) : percentage;
    percentage = highLowScore(league.no, league.type).low < (league.type == 'miner' ? BigInt(user.data?.balance ?? 0) : BigInt(squad.userSquad?.score ?? 0)) ? percentage : BigInt(0);

    useEffect(() => {
        console.log("0000 1")
        if (league.pageLCount > 1) {
            leagueTextElement?.classList.add('animate__animated', 'animate__fadeInUp');
            leagueScoreElement?.classList.add('animate__animated', 'animate__headShake');
            topUsersElement?.classList.add('animate__animated', 'animate__fadeIn');
            if (league.leagueTempData.find((x) => x.no === league.no && x.type === league.type) == undefined) {
                dispatch(loadLeague())
                user.websocket.emit('getLeague', {
                    no: league.no,
                    type: league.type,
                })
            } else {
                dispatch(useTemp());
            }
        } else {
            dispatch(increasePageLCount())
        }
    }, [league.no]);
    useEffect(() => {
        console.log("0000 2")
        if (league.pageLCount > 1) {
            console.log("Type change")
            if (league.leagueTempData.find((x) => x.no === league.no && x.type === league.type) == undefined) {
                dispatch(loadLeague())
                user.websocket.emit('getLeague', {
                    no: league.no,
                    type: league.type,
                })
            } else {
                dispatch(useTemp());
            }
        } else {
            dispatch(increasePageLCount())
        }
    }, [league.type]);
    useEffect(() => {
        league.topUsers?.forEach((x: any, i: number) => {
            if (x.id == user.data?.id) {
                dispatch(setUserTop(i + 1));
            }
        })
        league.topSquads?.forEach((s: any, i: number) => {
            console.log(`${s.name} is rank ${i + 1}`)
            if (s.id == squad.userSquad?.id) {
                console.log(`${s.name} added.`)
                dispatch(setSquadTop(i + 1));
            }
        })
    }, [league.topUsers, league.topSquads, squad.userSquad, league.topUsers, setTopSquad]);
    return (
        <div>
            <div className='league-header'>
                <img className='league-header-bg' src={leagueBg}/>
                <DragonCoiners/>
                <div className='flex justify-between items-center'>
                    <img className={'lh-img ' + (league.no == 1 ? 'opacity-less' : '')} src={leftArrow}
                         onClick={() => dispatch(prevLeague())}/>
                    {leagueLogo ?
                        <img className='lh-rank-img animate__animated animate__zoomIn'
                             onLoad={() => element?.classList.add('animate__animated', 'animate__zoomIn')}
                             onAnimationEnd={() => element?.classList.remove('animate__animated', 'animate__zoomIn')}
                             src={leagueLogo}/> : <></>}
                    <img className={'lh-img ' + (league.no == 8 ? 'opacity-less' : '')} src={rightArrow}
                         onClick={() => dispatch(nextLeague())}/>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <div className='lh-text text-center'>
                        <p className='lh-text-value animate__animated animate__fadeInUp'
                           onAnimationEnd={() => leagueTextElement?.classList.remove('animate__animated', 'animate__fadeInUp')}>{capitalizeFirstLetter(league.league)} League</p>
                        {/*<p>2,862,981 / 10M</p>*/}
                        <p className='flex items-center justify-center lh-score-value animate__animated animate__headShake animate__slow'
                           onAnimationEnd={() => leagueScoreElement?.classList.remove('animate__animated', 'animate__headShake')}>
                            <span className='mr-1'>From</span> {league.isLoading ?
                            <SkeletonTheme baseColor="#2f2f2f" highlightColor="#444">
                                <Skeleton className='mx-2' width={30} height={10}/>
                            </SkeletonTheme> : BigInt(league.leagueData.score).toLocaleString()} <span
                            className='ml-1'>Dragoncoin</span></p>
                    </div>
                </div>
                <div className='league-bar mt-5'>
                    <span className='league-bar-slider' style={{width: percentage + '%'}}></span>
                </div>

                <div className='mt-5'>
                    <div className='league-tabs'>
                        <div id={'league-miner-tab' + (league.type == 'miner' ? ' active' : '')}></div>
                        <label htmlFor='league-miner-tab' className='league-tab'
                               onClick={() => dispatch(changeLeagueType('miner'))}>Miners</label>

                        <div id={'league-squad-tab' + (league.type == 'squad' ? ' active' : '')}></div>
                        <label htmlFor='league-squad-tab' className='league-tab'
                               onClick={() => dispatch(changeLeagueType('squad'))}>Squads</label>
                        <span className='league-tab-slider animate__slow'></span>
                    </div>
                </div>
                <div className='mt-5 hidden'>
                    <div className='league-lines'>
                        <div id={'league-day-line' + (league.time == 'day' ? ' active' : '')}></div>
                        <label htmlFor='league-day-line' className='league-line'
                               onClick={() => dispatch(changeTime('day'))}>Day</label>
                        <div id={'league-week-line' + (league.time == 'week' ? ' active' : '')}></div>
                        <label htmlFor='league-week-line' className='league-line'
                               onClick={() => dispatch(changeTime('week'))}>Week</label>
                        <span className='league-line-slider'></span>
                    </div>
                </div>
                <div className='topUserList animate__animated animate__fadeIn animate__slow'
                     onAnimationEnd={() => topUsersElement?.classList.remove('animate__animated', 'animate__fadeIn')}>
                    {
                        league.isLoading ? <LeagueListSkeleton/> :
                            league.type == 'miner' ?
                                league.topUsers?.length > 0 ?
                                    league.topUsers?.map((u: any, i: number) => {
                                        i++;
                                        return <DragonUser id={u.tg_id} key={i} fName={u.fName} lName={u.lName} rank={i}
                                                           coin={u?.balance}/>;
                                    }) : (
                                        (BigInt(league.leagueData.score) > BigInt(user.data?.balance ?? 0)) ?
                                            <div className='flex flex-col items-center '>
                                                <span style={{fontSize: '150px', height: '27vh'}}>🫵</span>
                                                <p style={{
                                                    color: '#ffffff',
                                                    opacity: '.4',
                                                    fontSize: '14px',
                                                    width: '70vw',
                                                    textAlign: 'center'
                                                }}>No one has been here before, be the first to reach here.</p>
                                            </div> :
                                            <div className='flex flex-col items-center '>
                                                <span style={{fontSize: '100px', height: '20vh'}}>🐲️</span>
                                                <p style={{
                                                    color: '#ffffff',
                                                    opacity: '.4',
                                                    fontSize: '14px',
                                                    width: '70vw',
                                                    textAlign: 'center',
                                                    marginTop: '1rem'
                                                }}>No one on these league, I guess everyone learn to mine after all.</p>
                                            </div>
                                    ) :
                                league.topSquads?.length > 0 ?
                                    league.topSquads?.map((s: any, i: number) => {
                                        i++;
                                        return <DragonUser onClick={() => {
                                            dispatch(selectSquad(null));
                                            navigate(`/squad-detail/${s.id}`);
                                        }} id={s.chat_id.toString().slice(3)} key={i} fName={s.name} lName={null} rank={i}
                                                           coin={s.score}
                                                           img={s.image == null ? undefined : import.meta.env.VITE_REACT_APP_BACKEND_URL + '/pimg/squad-profile/' + s.image + '.jpg'}/>;
                                    }) : (BigInt(league.leagueData.score) > BigInt(squad.userSquad?.score ?? 0)) ?
                                        <div className='flex flex-col items-center '>
                                            <span style={{fontSize: '150px', height: '27vh'}}>🫵</span>
                                            <p style={{
                                                color: '#ffffff',
                                                opacity: '.4',
                                                fontSize: '14px',
                                                width: '70vw',
                                                textAlign: 'center'
                                            }}>No one has been here before, be the first to reach here.</p>
                                        </div> :
                                        <div className='flex flex-col items-center '>
                                            <span style={{fontSize: '100px', height: '20vh'}}>🐲️</span>
                                            <p style={{
                                                color: '#ffffff',
                                                opacity: '.4',
                                                fontSize: '14px',
                                                width: '70vw',
                                                textAlign: 'center',
                                                marginTop: '1rem'
                                            }}>No one on these league, I guess everyone learn to mine after all.</p>
                                        </div>
                    }
                </div>
            </div>
            {league.userTop > 0 && league.type == 'miner' && user.data ?
                <DragonUser isFixed={true} id={user.data.tg_id} key={user.data.id} fName={user.data.fName}
                            lName={user.data.lName} rank={league.userTop}
                            coin={user.data?.balance.toString()}/> : <></>}
            {league.squadTop > 0 && league.type == 'squad' && squad.userSquad ?
                <DragonUser isFixed={true} id={squad.userSquad?.chat_id.slice(3) ?? '93283982'}
                            key={squad.userSquad?.id} fName={squad.userSquad?.name}
                            lName={null} rank={league.squadTop}
                            coin={squad.userSquad?.score.toString()}
                            onClick={() => {
                                dispatch(selectSquad(null));
                                navigate(`/squad-detail/${squad.userSquad?.id}`);
                            }}
                            img={squad.userSquad?.image == null ? undefined : import.meta.env.VITE_REACT_APP_BACKEND_URL + '/pimg/squad-profile/' + squad.userSquad?.image + '.jpg'}
                /> : <></>}
        </div>
    )
        ;
};

export default LeagueHeader;
