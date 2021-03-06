import ComponentType from "../models/EComponentType";
import IQuestion from "../models/IQuestion";

const SELECT_LANGUAGE_ID = 0;
const LOCATION_ID = 1;
const COMMUNITY_ID = 2;
const AMENTIAS_ID = 3;
const JOB_SEARCH_ID = 4;
const ENGLISH_ID = 5;
const SKILLS_ID = 6;


const QuestionsData: IQuestion[] = [
    {
        id: SELECT_LANGUAGE_ID,
        question: "Select Language",
        max_answers: 1,
        answers: [
            {
                id: 0,
                answer: "English"
            },
            {
                id: 1,
                answer: "German"
            },
            {
                id: 2,
                answer: "Arabic"
            },
            {
                id: 3,
                answer: "Russian"
            }
        ],
        custom_component: {
            type: ComponentType.ButtonGroup
        }
    },
    {
        id: LOCATION_ID,
        question: "I want to live in...",
        max_answers: 1,
        answers: [
            { id: 0, value: "AB", answer: "Alberta" },
            { id: 1, value: "BC", answer: "British Columbia" },
            { id: 2, value: "MB", answer: "Manitoba" },
            { id: 3, value: "NB", answer: "New Brunswick" },
            { id: 4, value: "NL", answer: "Newfoundland and Labrador" },
            { id: 5, value: "NS", answer: "Nova Scotia" },
            { id: 6, value: "PE", answer: "Prince Edward Island" },
            { id: 7, value: "ON", answer: "Ontario" },
            { id: 8, value: "QC", answer: "Québec" },
            { id: 9, value: "SK", answer: "Saskatchewan" },
        ],
        custom_component: {
            type: ComponentType.ButtonGroup,
            data: {
                size: 'small'
            }
        }
    },
    {
        id: COMMUNITY_ID,
        question: "with a community of...",
        max_answers: 3,
        answers: [
            { id: 0, answer: "Arabs" },
            { id: 1, answer: "Chinese" },
            { id: 2, answer: "Korean" },
            { id: 3, answer: "Indian" },
            { id: 4, answer: "German" },
            { id: 5, answer: "African Americans" },
            { id: 6, answer: "White" },
            { id: 7, answer: "Americans" },
            { id: 8, answer: "Jewish" },
            { id: 9, answer: "European" },
            { id: 10, answer: "Anyone :)" },
        ],
        custom_component: {
            type: ComponentType.ButtonGroup,
            data: {
                size: 'small'
            }
        }
    },
    {
        id: AMENTIAS_ID,
        question: "I want to live around...",
        max_answers: 3,
        answers: [
            { id: 0, answer: "Schools" },
            { id: 1, answer: "Parks" },
            { id: 2, answer: "Restaurants/Bars" },
            { id: 4, answer: "Transit Hub" },
            { id: 5, answer: "Market/Café" },
            { id: 6, answer: "Malls" },
            { id: 9, answer: "Community Centers" },
            { id: 10, answer: "City Activities" },
            { id: 11, answer: "Bike Lanes" },
            { id: 12, answer: "Water" },
            { id: 14, answer: "University" },
            { id: 15, answer: "Grocery Stores" }
        ],
        custom_component: {
            type: ComponentType.ButtonGroup,
            data: {
                size: 'small'
            }
        }
    },
    {
        id: JOB_SEARCH_ID,
        question: "Do you need to find a job in Canada?",
        max_answers: 1,
        answers: [
            { id: 0, answer: "Yes" },
            { id: 1, answer: "No" },
        ],
        custom_component: {
            type: ComponentType.ButtonGroup,
            data: {
                size: 'small'
            }
        }
    },
    {
        id: ENGLISH_ID,
        question: "Do you speak English?",
        max_answers: 1,
        answers: [
            { id: 0, answer: "Fluently" },
            { id: 1, answer: "Decently" },
            { id: 2, answer: "Poorly" },
            { id: 3, answer: "No" },
        ],
        custom_component: {
            type: ComponentType.ButtonGroup,
            data: {
                size: 'small'
            }
        }
    },
    {
        id: SKILLS_ID,
        question: "Select your skills:",
        max_answers: 3,
        answers: [
            { id: 1, answer: "Architecture and Construction" },
            { id: 2, answer: "Finance" },
            { id: 3, answer: "Health Science" },
            { id: 4, answer: "Human Services" },
            { id: 5, answer: "Marketing, Sales and Services" },
            { id: 6, answer: "Transportation, Distribution and Logistics" },
            { id: 7, answer: "Agriculture, Food, Natural Resources" },
            { id: 8, answer: "Arts, Audio, Video, Communications" },
            { id: 9, answer: "Education and Training" },
            { id: 10, answer: "Hospitality and Tourism" },
            { id: 11, answer: "Manufacturing" },
            { id: 12, answer: "Science, Technology, Engineering, Mathematics" },
        ],
        custom_component: {
            type: ComponentType.ButtonGroup,
            data: {
                size: 'small'
            }
        }
    }
];


export const QuestionIds = {
    SELECT_LANGUAGE_ID: SELECT_LANGUAGE_ID,
    LOCATION_ID: LOCATION_ID,
    COMMUNITY_ID: COMMUNITY_ID,
    AMENTIAS_ID: AMENTIAS_ID,
    JOB_SEARCH_ID: JOB_SEARCH_ID,
    ENGLISH_ID: ENGLISH_ID,
    SKILLS_ID: SKILLS_ID,
}

export default QuestionsData;