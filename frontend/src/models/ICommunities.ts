import IPick from "./IPick";

export interface IStatistic {
    title: string,
    statistic: string,
    answers: IPick[],
}

export interface ICommunities {
    id: number,
    picture: string,
    title: string,
    statistics: IStatistic[],
}
