import { Services } from '../redux/types.d'
//export const ANIMES :string = 'http://localhost:3001/animes'

//http://localhost:3001/animes

export const SERVICES_ANIMES :Services = 'http://localhost:3001/animes'
export const SERVICES_ANIMES_PAGE_ONE :Services= 'http://localhost:3001/animes?page=1'
export const SERVICES_ANIMES_NAME : Services = 'http://localhost:3001/animes?name='
export const SERVICES_EPISODES : Services = 'http://localhost:3001/episodes/'
export const SERVICES_GENRES :Services = 'http://localhost:3001/genres'
export const SERVICES_NEWEST : Services = 'http://localhost:3001/animes/newest?'
export const SERVICES_OLDEST : Services = 'http://localhost:3001/animes/oldest'
export const SERVICES_SORT_RATING : Services = 'http://localhost:3001/animes/newest?sort=rating'