import '../Css/Details.css';
import ReactPlayer from 'react-player';

function DisplayMovie({ movie, trailer }) {
  return (
    movie,
    trailer && (
      <>
        <div className="posterContainer" key={movie.id}>
          <img className="posterCover" src={movie.image} alt={movie.title} />
        </div>
        <div className="infoContainer">
          <div className="infoContainer1">
            <img className="poster" src={movie.image} alt="movie" />
          </div>
          <div className="mainContent">
            <div className="detailsInfo">
              <h1 className="title"> {movie.title} </h1>
              <div className="movieInfo">
                <p>
                  <span className="year">{movie.year}</span>
                  <span>{movie.runtimeStr}</span> {movie.countries}
                </p>
              </div>
              <p>{movie.genres}</p>
              <p> {movie.directors} </p>
              <p>
                <span className="rating"> &#x2605; </span>
                {movie.imDbRating}
              </p>
            </div>
            <h2 className="Plot">Synopsis</h2>
            <p className="moviePlot">{movie.plot}</p>
            <div className="Cast">Cast</div>
            <div className="castContainer">
              {movie.actorList.slice(0, 6).map((actor) => (
                <div key={actor.id} className="actorsInfo">
                  <img
                    className="castPictures"
                    src={actor.image}
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                </div>
              ))}
            </div>
            <div className="trailerTitle">
              Trailer
              <ReactPlayer
                url={trailer.url[1]}
                controls
                playing
                muted
                width="100%"
                height="100%"
              />
              {/* <video autoPlay width="500" height="300" controls>
                <source
                  src={t railer.url[1]}
                  className="trailer"
                  type="video/mp4"
                />
                <track
                  src={trailer.url[1]}
                  kind="captions"
                  srcLang="en"
                  label="english_captions"
                />
              </video> */}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default DisplayMovie;
