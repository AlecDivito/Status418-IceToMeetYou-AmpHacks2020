import { IStatistic } from "../models/ICommunities";
import IContext from "../models/IContext";

const Statistics: IStatistic[] = [
    {
        title: 'Community: Arabs', statistic: "1.6% Arabs", answers: [
            { question_id: 1, answer_ids: [7] },
            { question_id: 2, answer_ids: [0, 6, 10] }
        ]
    },
    {
        title: 'Community: Indians', statistic: "5.8% Indians", answers: [
            { question_id: 1, answer_ids: [7] },
            { question_id: 2, answer_ids: [3, 6, 10] }
        ]
    },
    {
        title: 'Community: Chinese', statistic: "5.6% Chinese", answers: [
            { question_id: 1, answer_ids: [7] },
            { question_id: 2, answer_ids: [3, 6, 10] }
        ]
    },
    {
        title: 'Top Amenities', statistic: "Parks, Schools, Grocery", answers: [
            { question_id: 3, answer_ids: [0, 1, 13, 14] },
        ]
    },
    {
        title: 'Ontario', statistic: "Bendale, Bayview Woods-Steeles, Broadview North, Etobicoke West Mall", answers: [
            { question_id: 1, answer_ids: [7] },
        ]
    },
    {
        title: 'German Neighborhoods', statistic: "Bloor West Village, Little Bavaria, Roncesvalles Village", answers: [
            { question_id: 2, answer_ids: [4] },
        ]
    },
    {
        title: 'Jobs', statistic: "5.6% Unemployment rate", answers: [
            { question_id: 4, answer_ids: [0] },
        ]
    },
    {
        title: 'English Proficiency', statistic: "86.3% English only", answers: [
            { question_id: 5, answer_ids: [5] },
        ]
    },
    {
        title: 'Skills: STEM', statistic: "36,698 new tech jobs. Average salary: $62,522.", answers: [
            { question_id: 4, answer_ids: [0] },
            { question_id: 6, answer_ids: [12] },
        ]
    },
    {
        title: 'Transportation, Distribution and Logistics: : ', statistic: "Average salary: $44,836", answers: [
            { question_id: 4, answer_ids: [0] },
            { question_id: 6, answer_ids: [12] },
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