interface ErrorResponse {
  error: { message: string };
}

export interface Episode {
  id: number;
  title: string;
  synopsis: string;
  number: number;
  seasonNumber: number;
  airdate: string;
  length: number;
  thumbnail: { original?: string; meta?: object };
  coverImage?: string;
}
export interface CommentInterface {
    id?: number,
    replyingTo?: string,
    content: string,
    rating?: number,
    likesCount?: number,
    spoiler?: boolean,
    id_episode: number,
    userId?: string,
    reply_id? : number,
    user?: User,
    Replies?: Array<CommentInterface>,
    likes?: number
}
export interface Genre {
  id: number;
  name: string;
}

export interface Anime {
  id?: number;
  name: string;
  userCount?: number;
  synopsis?: string;
  averageRating?: number;
  favoritesCount?: number;
  startDate?: string;
  endDate?: string;
  popularityRank?: number;
  ratingRank?: number;
  status: string;
  posterImage: string;
  coverImage?: string;
  episodeCount?: number;
  episodeLength?: number;
  youtubeVideoId?: string | number;
  nsfw?: boolean;
  subtype?: string;
  showType: string;
  ageRatingGuide?: string;
  genres?: Genre[];
} // -> Objeto que no es no va pasar
// -> Objecto vacio

export interface UserInterface {
  image: string;
  plan: string;
  token: string | number;
  id: string;
  nickname: string;
  password: string;
  email: string;
  age: number;
  registered: boolean;
  rol: string;
  permissions: string;
}

export interface Payment {
  data: string;
}

export interface planChange {
  id: string | number;
  token: string;
}

export interface UserLists {
    id: number,
    name: string,
    userId: string,
    animes: number
}

interface AnimeInList {
    id: number,
    name: string,
    posterImage: string,
    showType: string
}

export interface ListDetail {
    id: number,
    name: string,
    userId: string,
    animes: Array<AnimeInList>
}

