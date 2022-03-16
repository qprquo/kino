export type TGenre = {
  id: number;
  name: string;
};

export type TMovieData = {
  adult: boolean;
  backdrop_path: string;
  genres: TGenre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type TLanguange = {
  iso_639_1: string;
  name: string;
};

export type TCountry = {
  iso_3166_1: string;
  name: string;
};

export type TMovieDataFull = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: number | null;
  budget: number;
  genres: TGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TCompany[];
  production_countries: TCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: TLanguange[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: TCredits;
};

export type TCredit = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type TCredits = {
  id: number;
  cast: TCredit[];
  crew: TCredit[];
};

export type TMovies = TMovieData[];

export type TTMDBResponse = {
  page: number;
  total_pages: number;
  total_results: number;
};

export type TMoviesResponse = TTMDBResponse & { results: TMovies };

export type TTokens = {
  access: string;
  refresh: string;
};

export type TUser = {
  id: number;
  name: string;
  email: string;
  image: any;
  reviewsCount: number;
};

export type TLoginResponse = {
  success: boolean;
  user: TUser & { tokens: TTokens };
};

export type TLogoutResponse = {
  success: boolean;
  message: string;
};

export type TUserReponse = {
  success: boolean;
  user: TUser;
};

export type TCreateUserReponse = TLoginResponse;

export type TRefreshResponse = {
  success: boolean;
  tokens: TTokens;
};

export type TReview = {
  id: number;
  title: string;
  rating: number;
  movieId: number;
  content: string;
  author: TUser;
  liked: boolean;
  likesCount: number;
  createdAt: string;
};

export type TCreateReviewResponse = {
  success: boolean;
  review: TReview;
};

export type TGetReviewResponse = {
  success: boolean;
  review: TReview;
};

export type TReviewsListResponse = {
  success: boolean;
  page: number;
  total: number;
  totalPages: number;
  results: TReview[];
};

export type TLikeAddResponse = {
  success: boolean;
  message: string;
};
