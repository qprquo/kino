import {
  getBackdrop,
  getPoster,
  TMovieData,
  TMovieDataFull
} from './api';

export const transformMovies = (items: TMovieData[]) => {
  return items.map((item) => ({
    ...item,
    poster_path: getPoster(item.poster_path, 185),
    backdrop_path: getBackdrop(item.backdrop_path, 1280),
    release_date: new Date(item.release_date).getFullYear().toString(),
    vote_average: Math.round(item.vote_average * 1e1) / 1e1
  }));
};

export const transformMovie = (movie: TMovieDataFull) => ({
  ...movie,
  poster_path: getPoster(movie.poster_path, 342),
  backdrop_path: getBackdrop(movie.backdrop_path, 1280),
  release_date: new Date(movie.release_date).getFullYear().toString(),
  status: movie.status === 'Released'
    ? 'Вышел'
    : movie.status === 'Post Production'
      ? 'Пост-продакшн'
      : movie.status == 'Planned'
        ? 'Планируется'
        : movie.status
});
