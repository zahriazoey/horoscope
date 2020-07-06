import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

export default class Pisces extends Component {
    constructor(props) {
        super(props);
        const params = this.getHashParams();

        this.state = {
            playlistData: {
                name: '',
                url: '',
                image: '',
            },
        }
        if (params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token)
        }
    }

    getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q)
        }
        return hashParams;
    }

    piscesPlaylist = () => {
        spotifyWebApi.getPlaylist('37i9dQZF1DWX0EDWtabVRv')
            .then((data) => {
                console.log('updating')
                console.log(data)
                this.setState({
                    playlistData: {
                        name: data.name,
                        url: data.external_urls.spotify,
                        image: data.images[0].url
                    }
                })
            })
    }

    componentDidMount() {
        this.piscesPlaylist();
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <a href={this.state.playlistData.url} target='_blank' rel="noopener noreferrer">
                    <img src={this.state.playlistData.image} alt='playlist' />
                </a>
            </div>
        )
    }
}