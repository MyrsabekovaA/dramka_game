export default [
    {
        id: 1,
        character_id: 3,
        text: "Здравствуйте, мистер Президент. Вы только что отошли от комы, врачи говорят, у Вас могут быть кратковременные провалы в памяти.",
        icon: 'report_smile.svg',
        back: 'car_regular.svg',
        is_regular_deck: true,
        actions: {
            right: {
                answer: "Провалы в памяти?",
                next_card_id: null,
            },
            left: {
                answer: "Что произошло?",
                next_card_id: null,
            }
        }
    },
]