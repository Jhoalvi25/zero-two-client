interface ErrorResponse {
    error: {message: string}
}

interface Episode {
    id: number,
    title: string,
    synopsis: string,
    number: number,
    seasonNumber: number,
    airDate: string,
    length: number,
    thumbnail: { original?:string, meta?:object },
 
}

export interface Genre {
    id: number,
    name: string
}

export interface Anime {
    id?: number,
    name: string,
    userCount?: number,
    synopsis?: string,
    averageRating?: number,
    favoritesCount?: number,
    startDate?: string,
    endDate?: string,
    popularityRank?: number,
    ratingRank?: number,
    status: string,
    posterImage: string,
    coverImage?: string,
    episodeCount?: number,
    episodeLength?: number,
    youtubeVideoId?: string | number,
    nsfw?: boolean,
    subtype?: string,
    showType: string, 
    ageRatingGuide?: string
    genres?: Genre[],

} // -> Objeto que no es no va pasar
// -> Objecto vacio 

export interface User {
    plan: string,
    id: string,
    nickname: string,
    password: string,
    email: string,
    age: number,
    registered: boolean,
    rol: string,
    persmission: string
}