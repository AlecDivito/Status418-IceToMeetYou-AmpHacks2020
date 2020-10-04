import { IStatistic } from "../models/ICommunities";
import IContext from "../models/IContext";

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
    {
        title: 'Jobs Within Walking Distance', statistic: "Plumbing", answers: [
            { question_id: 4, answer_ids: [0] },
            { question_id: 5, answer_ids: [0, 1, 2] },
            { question_id: 6, answer_ids: [6] }
        ]
    }
];

function GetStatistics(context: IContext): IStatistic[] {
    let stats = Statistics;
    let statistics = stats.filter(s => {
        for (const mapping of s.answers) {
            let user_answers = context[mapping.question_id];
            for (const answer of user_answers) {
                if (!mapping.answer_ids.includes(answer.id)) {
                    return false
                }
            }
        }
        return true;
    });
    const shuffled = statistics.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

export default GetStatistics;