import React from 'react';
import './Detail.css';
class Detail extends React.Component {

  

    componentDidMount() {
        const {location,history} = this.props;

        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        
        if(location.state){
        return <div className="detail">
        <img src ={location.state.poster}></img>
            <span className="movie_data">
                <h1>{location.state.title}</h1>
                <h5>{location.state.year}</h5>
                <h5>{location.state.genres}</h5>
                <h4>★{location.state.rating}/10.0</h4>
                <h3>{location.state.summary}</h3>
            </span>
        </div>
        } else {
            return null
        }
        
    }
    
}

export default Detail;