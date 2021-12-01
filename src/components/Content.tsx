import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface RatingsProps {
  Source: string;
  Value: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<RatingsProps>;
  Runtime: string;
}

interface Props {
  selectedGenre: {
    title: string,
  },
  movies: Array<MovieProps>
}

export function Content({ selectedGenre, movies }: Props) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}