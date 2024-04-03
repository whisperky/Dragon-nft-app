import leftArrow from '../../../public/icon/defaults/left-arrow.svg';
import rightArrow from '../../../public/icon/defaults/right-arrow.svg';
import DragonCoiners from "./DragonCoiners.tsx";
import DragonUser from "../DragonUser.tsx";
import {useDispatch, useSelector} from "react-redux";
import {ImageSliceType, LeagueSliceType, UserSliceType} from "../../types/store.ts";
import {capitalizeFirstLetter, highLowScore, leagueName} from "../../helpers/helper.ts";
import {changeLeagueType, changeTime, nextLeague, prevLeague, setUserTop, useTemp} from "../../store/league.ts";
import React, {useEffect} from "react";
import LeagueList from "../../skeleton/LeagueList.tsx";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const LeagueHeader = () => {
    const user: UserSliceType = useSelector((state: any) => state.user);
    const league: LeagueSliceType = useSelector((state: any) => state.league);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const dispatch = useDispatch();
    const leagueLogo = image.league.find((x) => leagueName(x.name) == league.league)?.img.main.src;
    const leagueBg = image.league.find((x) => leagueName(x.name) == league.league)?.img.bg.src;
    const element = document.querySelector('.lh-rank-img');
    const leagueTextElement = document.querySelector('.lh-text-value');
    const leagueScoreElement = document.querySelector('.lh-score-value');
    const topUsersElement = document.querySelector('.topUserList');
    let percentage = ((BigInt(user.data?.balance ?? BigInt(0)) * BigInt(100)) / highLowScore(league.no).high);
    percentage = percentage > BigInt(100) ? BigInt(100) : percentage;
    percentage = highLowScore(league.no).low < BigInt(user.data?.balance ?? 0) ? percentage : BigInt(0);
    console.log(percentage);

    useEffect(() => {
            leagueTextElement?.classList.add('animate__animated', 'animate__fadeInUp');
            leagueScoreElement?.classList.add('animate__animated', 'animate__headShake');
            topUsersElement?.classList.add('animate__animated', 'animate__fadeIn');
            if (league.leagueTempData.find((x) => x.no === league.no) == undefined) {
                user.websocket.emit('getLeague', {
                    no: league.no,
                    type: league.type,
                })
            } else {
                dispatch(useTemp(league.no));
            }
    }, [league.no]);
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
                           onAnimationEnd={() => leagueScoreElement?.classList.remove('animate__animated', 'animate__headShake')}>From { league.isLoading ? <SkeletonTheme  baseColor="#2f2f2f" highlightColor="#444">
                            <Skeleton className='mx-2' width={30} height={10}/>
                        </SkeletonTheme> : BigInt(league.leagueData.score).toLocaleString() } Dragoncoin</p>
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
                        league.isLoading ? <LeagueList /> :
                        league.type == 'miner' ?
                            league.topUsers?.length > 0 ?
                                league.topUsers?.map((u: any, i: number) => {
                                    i++;
                                    if (user.data.id == u.id) {
                                        dispatch(setUserTop(i))
                                    }
                                    return <DragonUser id={u.tg_id} key={i} fName={u.fName} lName={u.lName} rank={i}
                                                       coin={u.balance}/>;
                                }) : <div className='flex flex-col items-center '>
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
                                <span style={{marginTop: '2rem',fontSize: '100px'}}>🚧</span>
                                <p style={{
                                    color: '#ffffff',
                                    opacity: '.4',
                                    fontSize: '15px',
                                    width: '70vw',
                                    textAlign: 'center'
                                }}>Under construction.</p>
                            </div>
                    }
                </div>
            </div>
            {league.userTop > 0 ?
                <DragonUser isFixed={true} id={user.data.tg_id} key={user.data.id} fName={user.data.fName}
                            lName={user.data.lName} rank={league.userTop}
                            coin={user.data.balance.toString()}/> : <></>}
        </div>
    )
        ;
};

export default LeagueHeader;
