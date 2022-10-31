import { Link } from './link'
export type PortfolioItem = {
    imagePath: string,
    title: string,
    summarys: string[],
    techs: {
        text: string,
        color: string,
    }[],
    links: Link[],
};