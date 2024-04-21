import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import {useDispatch, useSelector} from "react-redux";
import {FrenSliceType, ImageSliceType, UserSliceType} from "../types/store.ts";
import {topFrenLoading} from "../store/fren.ts";
import {topFrenData} from "../types/data.ts";
import SquadSkeleton from "../skeleton/SquadSkeleton.tsx";
import TopFrenUsers from "../components/fren/TopFrenUsers.tsx";

const TopFren = () => {
    const navigate = useNavigate();
    WebApp.BackButton.onClick(() => navigate(-1))
    WebApp.BackButton.show();
    const user: UserSliceType = useSelector((state: any) => state.user);
    const fren: FrenSliceType = useSelector((state: any) => state.fren);
    const image: ImageSliceType = useSelector((state: any) => state.image);
    const topImageBG = image.optional.find((img) => img.name === 'TOP_FRENS_BG');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(topFrenLoading())
        user.websocket.emit('getFren')
    }, [0]);
    return !fren.isTopFrenLoading ? (
        <div className='fren-con'>
            <div className='fren-header'>
                {topImageBG ? <img className='fren-header-bg' src={topImageBG?.img.src} />: null}
                <div className='fren-header-bg-effect'></div>
                <p className='fren-header-img' style={{fontSize: '6rem'}}>📣</p>
                <p className='fren-text-title'>Party kings</p>
                <p className='fren-text-sm text-glass'>Invite more frens to get here.</p>
                <button className='fren-invite-btn' onClick={() => {
                    WebApp.openTelegramLink(`https://t.me/${import.meta.env.VITE_REACT_APP_BOT_USERNAME}?start=fren`);
                    WebApp.close();
                }}>Invite frens
                </button>
            </div>
            <div className='fren-list-con'>
                {
                    fren.topFrens.map((users: topFrenData, index: number) => <TopFrenUsers key={users.id}
                                                                                           fName={users.fName}
                                                                                           lName={users.lName}
                                                                                           id={users.tg_id}
                                                                                           rank={++index}
                                                                                           subtitle={`${users.frens} frens`}
                                                                                           coin={users.earned}
                    />)
                }
            </div>
        </div>
    ) : <SquadSkeleton/>;
};

export default TopFren;