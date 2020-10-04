interface IStatistic {
    title: string,
    statistic: string,
}

export default interface ICommunities {
    id: number,
    picture: string,
    title: string,
    statistics: IStatistic[],
}
