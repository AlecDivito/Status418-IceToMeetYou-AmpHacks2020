import { IStatistic } from "../models/ICommunities";

const Statistics: IStatistic[] = [
    {
        title: 'Community', statistic: "60% Arabs", answers: [
            { question_id: 0, answer_ids: [2] },
            { question_id: 1, answer_ids: [7] },
            { question_id: 2, answer_ids: [0, 6, 10] }
        ]
    },
    {
        title: 'Top Amenities', statistic: "Parks, Schools, Grocery", answers: [
            { question_id: 3, answer_ids: [0, 1, 13, 14] },
        ]
    },
    {
        title: 'Top Amenities', statistic: "Parks, Schools, Grocery", answers: [
            { question_id: 3, answer_ids: [0, 1, 13, 14] },
        ]
    },

];
export default Statistics;