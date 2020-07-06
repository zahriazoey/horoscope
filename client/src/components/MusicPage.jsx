import React, { Component, Fragment } from 'react';
import Spotify from 'spotify-web-api-js';
import Aries from './zodiacplaylist/Aries'
import Taurus from './zodiacplaylist/Taurus'
import Gemini from './zodiacplaylist/Gemini'
import Cancer from './zodiacplaylist/Cancer'
import Leo from './zodiacplaylist/Leo'
import Virgo from './zodiacplaylist/Virgo';
import Libra from './zodiacplaylist/Libra'
import Scorpio from './zodiacplaylist/Scorpio';
import Sag from './zodiacplaylist/Sag'
import Capricorn from './zodiacplaylist/Capricorn'
import Aquarius from './zodiacplaylist/Aquarius'
import Pisces from './zodiacplaylist/Pisces';
import NavBar from './NavBar';
import playlistId from './zodiacplaylist/playlistId';

const spotifyWebApi = new Spotify();

class MusicPage extends Component {
    constructor(props) {
        super(props);
        const params = this.getHashParams();

        this.state = {
            loggedIn: params.access_token ? true : false,
            playlistData: {
                name: '',
                url: '',
                image: '',
            },
            id: playlistId,
        }
        if (params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token)
        }
    }

    getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <Fragment>
                    <div>
                        <NavBar />
                        <h1 style={{ color: 'white' }}> Select your zodiac to discover new music!</h1>
                    </div>
                    <div style={playlist}>
                    <Aries /> 
                    <Taurus />
                    <Gemini />
                    <Cancer />
                    <Leo />
                    <Virgo />
                    <Libra />
                    <Scorpio />
                    <Sag />
                    <Capricorn />
                    <Aquarius />
                    <Pisces /> 
                </div> 
                </Fragment>
            )
        }

    }
}

export default MusicPage;

const playlist = {
    width: '150',
    display: 'flex',
    margin: '25px auto',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
}