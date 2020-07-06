import React, { Component, Fragment } from 'react';
import Spotify from 'spotify-web-api-js';
import NavBar from './NavBar';
import playlistId from './zodiacplaylist/playlistId';
import ZodiacPlaylist from './zodiacplaylist/ZodiacPlaylist';

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
                        <h1 style={{ color: 'white' }}> Select Your Zodiac to Discover New Music!</h1>
                    </div>
                    <div style={playlist}>
                        {playlistId.map((playlist) => {
                            return <ZodiacPlaylist playlistId={playlist.id} />
                        })}
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