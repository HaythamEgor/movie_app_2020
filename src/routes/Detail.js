import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <div className="movie">                
                       <img src = {location.state.poster}/>
                       <span className="movie_data">
                       <h1 className="movie_title">{location.state.title}</h1>
                       <h5 className="movie_year">{location.state.year}</h5>
                       <h5 className="movie_rating">★{location.state.rating}/10.0</h5>
                       <h5 className="movie_genres">{location.state.genres}</h5>
                       <h3 className="movie_summary">{location.state.summary}</h3>
                       </span>
                   </div>
                   
        }
        else {
            return null;
        }
    }
}

export default Detail;