export default [
    {
        id: 1,
        character_id: 3,
        text: "Вы помните что с вами произошло?",
        actions: {
            right: {
                answer: "Да",
                next_card_id: 2
            },
            left: {
                answer: "Нет",
                next_card_id: 3
            }
        }
    },
    {
        id: 2,
        character_id: 3,
        text: "Отлино!",
        actions: {
            right: {
                answer: "Да",
                next_card_id: null,
            },
            left: {
                answer: "Да",
                next_card_id: null,
            }
        }
    },
    {
        id: 3,
        character_id: 3,
        text: "Тогда позвольте расказать что тут произошло",
        actions: {
            right: {
                answer: "Я весь внимание",
                next_card_id: null,
            },
            left: {
                answer: "Слушаю",
                next_card_id: null,
            }
        }
    },
]