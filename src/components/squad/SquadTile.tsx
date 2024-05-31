import {getColorWithId, leagueName, profileAvatarName} from "../../helpers/helper.ts";
import {LeagueNameType, LeaguePresets} from "../../types/types.ts";
import React from "react";
import {squadDataLeague} from "../../types/data.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectSquad} from "../../store/squad.ts";
import {ImageSliceType} from "../../types/store.ts";

const SquadTile = ({id, name, league, image, squad, isFixed = false}: {
    id: string;
    name: string;
    league: LeagueNameType;
    image: string | null;
    squad: squadDataLeague;
    isFixed?: boolean;
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const im: ImageSliceType = useSelector((state: any) => state.image);
    const OPEN_IMG = im.optional.find((img) => img.name === 'OPEN_ARROW');
    const LEAGUE_IMG = im.league.find((img) => leagueName(img.name) === league);
    const shortName = profileAvatarName(name);
    return (
        <div className={'squad-tile-con blur-round-border-bg'} style={isFixed ? {
            position: 'fixed',
            bottom: '0',
            width: '100%',
            background: '#282828',
            margin: '0',
            borderRadius: '0'
        } : {}} onClick={() => {
            dispatch(selectSquad(squad));
            navigate(`/squad-detail/${squad.id}`);
        }}>
            <div className='flex items-center'>
                {/*<img className='du-user-image' src={userOne} alt='user one'/>*/}
                <div className='squad-tile-image' style={{backgroundColor: getColorWithId(id)}}>
                    {image == null ? <p>{shortName}</p> : <img src={image} alt='squad-image'/>}
                </div>
                <div className='du-user-info'>
                    <p className='du-user-name'>{name.length > 25 ? name.slice(0, 8) + " ..." : name}</p>
                    {LEAGUE_IMG !== null && im.isLeagueDone ?
                        <div className='squad-tile-league'><img src={LEAGUE_IMG?.img.small.src} className="max-w-[16px]" alt='bronze'/>
                            <span>{league}</span></div> : null
                    }
                </div>
            </div>
            <div className='du-trailer-container'>
                {OPEN_IMG ? <img className='friend-trailer-img' src={OPEN_IMG?.img.src} alt='opener'/> : null}
            </div>
        </div>
    );
};

export default SquadTile;
