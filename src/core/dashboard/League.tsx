import logo from '/public/trophy/bronze-small.svg';

const League = () => {
    return (
        <div className='flex justify-around mb-10'>
            <div className='league-squad-holder'>
                <div className='db-league'>
                    <img className='league-image' src={logo} alt='DragonCoin'/>
                    <p>Bronze</p>
                </div>
                <div className='col-divider'></div>
                <div className='db-squad'>
                    <div>Join Squad</div> <div>⟶</div>
                </div>
            </div>
        </div>
    );
};

export default League;
