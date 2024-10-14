// QuestionSet.js


const firstLessonExercises = [
    {
        id: 1,
        question: 'What does API stand for?',
        answers: ['Application Programming Interface',
            'Advanced Programming Interface',
            'Application Program Interface',
            'Automated Programming Interface'],
        correctAnswer: 'Application Programming Interface',
    },

    {
        id: 3,
        question: `Which programming language is often 
        used for building web servers?`,
        answers: ['Java', 'Python', 'JavaScript', 'C#'],
        correctAnswer: 'JavaScript',
    },
    {
        id: 4,
        question: 'What is the purpose of SQL?',
        answers: ['Styling web pages', 'Querying databases',
            'Creating animations', 'Developing mobile apps'],
        correctAnswer: 'Querying databases',
    },
    {
        id: 5,
        question: 'What does MVC stand for in web development?',
        answers: ['Model View Controller', 'Model Visual Controller',
            'Model View Component', 'Model Visual Component'],
        correctAnswer: 'Model View Controller',
    },
]

const firstLesson = {
    lessonsId: 1,
    exercises: firstLessonExercises
}


export const languageSet = {
    langs: [
        {
            id: 1,
            lang_name: "Ogoni",
            lang_icon: "/images/flag1.png",
            region: "Rivers State",
            tribes: ['Java', 'Python', 'JavaScript', 'C#'],
            lessons: [firstLesson]
        },
        {
            id: 2,
            lang_icon: "/images/flag1.png",
            lang_name: "Yoruba",
            region: "Lagos State",
            tribes: ['Java', 'Python', 'JavaScript', 'C#'],
            lessons: []
        },

    ],
};