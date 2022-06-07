export default [
    {
        id: 2,
        character_id: 11,
        text: "Поздравляю, вы прошли Пролог, продолжение истории будет в следующих обновлениях",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: true,
        actions: {
            right: {
                answer: "",
                next_card_id: null,
            },
            left: {
                answer: "",
                next_card_id: null,
            }
        }
    },
    {
        id: 1,
        character_id: 3,
        text: "Здравствуйте, мистер Президент. Вы только что отошли от комы, врачи говорят, у Вас могут быть кратковременные провалы в памяти.",
        icon: 'report_smile.svg',
        back: 'hospital1.png',
        is_regular_deck: true,
        actions: {
            right: {
                answer: "Провалы в памяти?",
                next_card_id: 4,
            },
            left: {
                answer: "Что произошло?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 3,
        character_id: 3,
        text: "Вас нашли на в заброшенной хижине в лесу бес сознания. Вас оперативно доставили в больницу, где вы провели последние два месяца.",
        icon: 'hands_up.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "У меня была семья?",
                next_card_id: 9,
            },
            left: {
                answer: "Что дальше?",
                next_card_id: 8,
            }
        }
    },
    {
        id: 4,
        character_id: 3,
        text: "При проведении МРТ Ваш мозг светился как новогодняя ёлка. Наши спецы пока ничего не понимают, но предупреждают, что после такого память может шалить.",
        icon: 'small_smile.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Я стану овощем?",
                next_card_id: 5,
            },
            left: {
                answer: "Что произошло?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 5,
        character_id: 3,
        text: "Конечно же нет, повторное МРТ показало спад этой самой активности. Врачи говорят все функции мозга в скором времени придут в норму.",
        icon: 'wink.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Не напомните кто вы?",
                next_card_id: 6,
            },
            left: {
                answer: "Что произошло?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 6,
        character_id: 3,
        text: "Ахахах с превеликим удовольствием. Мое имя Уилсон, Вы же чаще называли меня Уил. Я Премьер Министр и так же ваша правая рука и друг.",
        icon: 'blind_small_smile.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Кто я?",
                next_card_id: 7,
            },
            left: {
                answer: "Что произошло?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 7,
        character_id: 3,
        text: "Все оказалось хуже чем я думал. Вы, мой дорогой друг, выбраны народом, чтобы руководить страной и вести всех нас к светлому будущему,",
        icon: 'speech.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Нужно наладить контакты",
                next_card_id: 8,
            },
            left: {
                answer: "Что дальше?",
                next_card_id: 8,
            }
        }
    },
    {
        id: 8,
        character_id: 3,
        text: "Похоже мне нужно заново познакомить вас с вашим аппаратом или Вы предпочтете придти в себя в кругу семьи? ",
        icon: 'regular_phone.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "У меня была семья?",
                next_card_id: 9,
            },
            left: {
                answer: "Государство превыше всего",
                next_card_id: 10,
            }
        }
    },
    {
        id: 9,
        character_id: 3,
        text: "Конечно была и ЕСТЬ! Они как раз ждут за дверью, одно Ваше слово и я открою эту дверь",
        icon: 'wink.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Почему ты их \n сразу не впустил?",
                next_card_id: 11,
            },
            left: {
                answer: "Будь добр, открой дверь",
                next_card_id: 13,
            }
        }
    },
    {
        id: 10,
        character_id: 3,
        text: "Отлично, сейчас вызову водителя и поедем Вас знакомить",
        icon: 'regular_phone.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Все же сначала я хочу увидеть семью",
                next_card_id: 9,
            },
            left: {
                answer: "В дорогу!",
                next_card_id: 12,
            }
        }
    },
    {
        id: 11,
        character_id: 3,
        text: "Вы же понимаете, что по протоколу я должен первый убедится в Вашем добром здравии",
        icon: 'report.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Семья может подождать",
                next_card_id: 12,
            },
            left: {
                answer: "Будь добр, открой дверь",
                next_card_id: 13,
            }
        }
    },
    {
        id: 12,
        character_id: 3,
        text: "Пока вас не было многое успело поменяться. В государстве сущий хаос. Так еще и вирус новый всплыл, вроде бы ничего серьезного, но в Китае говорят все парализовало из-за него.",
        icon: 'report.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Вирус?",
                next_card_id: 21,
            },
            left: {
                answer: "Расскажи о тех к кому мы едем",
                next_card_id: 22,
            }
        }
    },
    {
        id: 13,
        character_id: 1,
        text: "Привет, милый! Мы очень соскучились",
        icon: 'smile.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Привет, Софи",
                next_card_id: 14,
            },
            left: {
                answer: "Привет",
                next_card_id: 15,
            }
        }
    },
    {
        id: 14,
        character_id: 1,
        text: "Если бы меня не предупредили врачи насчет твоей амнезии. В тебя бы уже летело что-нибудь тяжелое. На всякий случай напомню мое имя Люси.",
        icon: 'smirk.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Промолчать",
                next_card_id: 15,
            },
            left: {
                answer: "Не знаю что на меня нашло",
                next_card_id: 15,
            }
        }
    },
    {
        id: 15,
        character_id: 5,
        text: "Привет, пап. Я твой любимый Галчонок. Очень рада, что ты пришел в себя. В интернете я видела очень много статей о твоей смерти, я впервые рада тому что в интернете все врут.",
        icon: 'greetings.svg',
        back: 'hospital3.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Уилсон!",
                next_card_id: 16,
            },
            left: {
                answer: "Как дела в школе?",
                next_card_id: 17,
            }
        }
    },
    {
        id: 16,
        character_id: 3,
        text: "Смотрю память постепенно приходит к Вам. Я очень рад. Ну так что, поедем в правительство или вы еще проведете время с семьей?",
        icon: 'wink.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Поехали",
                next_card_id: 12,
            },
            left: {
                answer: "Я сообщу как буду готов",
                next_card_id: 18,
            }
        }
    },
    {
        id: 17,
        character_id: 5,
        text: "Да потихонечку помаленечку. скоро у нас будут экзамены, я конечно готовлюсь. Но ко всему нельзя же быть готовым",
        icon: 'closed_eyes.svg',
        back: 'hospital3.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Уилсон!",
                next_card_id: 16,
            },
            left: {
                answer: "Люси",
                next_card_id: 18,
            }
        }
    },
    {
        id: 18,
        character_id: 1,
        text: "Уилсон подождите пожалуйста снаружи.",
        icon: 'regular2.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Ничего не делать",
                next_card_id: 19,
            },
            left: {
                answer: "Пусть останется",
                next_card_id: 19,
            }
        }
    },
    {
        id: 19,
        character_id: 1,
        text: "Так  рада тебя увидеть. Честно я очень боялась за тебя. У меня так много вопросов, но увы ответы ты не помнишь. Чтож дорогой, ты пока отдохни, не будем тебя с Галчонком тревожить. Мы тебя сильно любим",
        icon: 'smile.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "На сегодня довольно, нужно отдохнуть",
                next_card_id: 20,
            },
            left: {
                answer: "Уилсон Поехали",
                next_card_id: 12,
            }
        }
    },
    {
        id: 20,
        character_id: 3,
        text: "Доброе утро, мистер Президент. Все в сборе ждут только Вас. За время вашего отсутствие многое успело произойти. Нам пора",
        icon: 'regular.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Подожди внизу, я спущусь",
                next_card_id: 12,
            },
            left: {
                answer: "Поехали",
                next_card_id: 12,
            }
        }
    },
    {
        id: 21,
        character_id: 3,
        text: "Под новый год в Китае обнаружили новый штамм вируса. Как я понял он не страшнее обычного  гриппа, просто заразнее, но лучше вам проконсультироваться с нашим министром здравоохранения – Виталием Павловичем",
        icon: 'report.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Достаточно",
                next_card_id: 26,
            },
            left: {
                answer: "Расскажи подробнее о министре",
                next_card_id: 22,
            }
        }
    },
    {
        id: 22,
        character_id: 6,
        text: "Виталий Павлович на посту министра здравоохранения уже третий год. За время руководства он существенно продвинул медицину в стране.",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Достаточно",
                next_card_id: 26,
            },
            left: {
                answer: "Расскажи еще",
                next_card_id: 23,
            }
        }
    },
    {
        id: 23,
        character_id: 8,
        text: "Елена Анатольевна – Министр финансов, для населения зло во плоти, при любом изменении рынка кто-то теряет и в глазах людей она главное зло капиталистического мира",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Достаточно",
                next_card_id: 26,
            },
            left: {
                answer: "Расскажи еще",
                next_card_id: 24,
            }
        }
    },
    {
        id: 24,
        character_id: 9,
        text: "Петр Алексеевич – Министр науки и просвещения. Не единожды выручал нас. Очень толковый парень. Предположительно у него и министра иностранных дел роман.",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Достаточно",
                next_card_id: 26,
            },
            left: {
                answer: "Министр иностранных дел?",
                next_card_id: 25,
            }
        }
    },
    {
        id: 25,
        character_id: 7,
        text: "Олеся Семенова – Министр внутренних дел. Всей нашей внешней политике мы благодарны ей. Всегда умеет разрядить даже самую накаленную обстановку",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Достаточно",
                next_card_id: 26,
            },
            left: {
                answer: "Кажется я узнаю это место",
                next_card_id: 26,
            }
        }
    },
    {
        id: 26,
        character_id: 3,
        text: "Мы уже подъезжаем. Это здание правительства, за последние годы вы провели здесь времени больше чем в кровати",
        icon: 'regular.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Выйти из машины",
                next_card_id: 30,
            },
            left: {
                answer: "Хорошая шутка",
                next_card_id: 27,
            }
        }
    },
    {
        id: 27,
        character_id: 3,
        text: "Отнюдь, это не шутка, почти каждый день и ночь вы проводите на работе. В народе даже пошел слух...",
        icon: 'report_smile.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Выйти из машины",
                next_card_id: 30,
            },
            left: {
                answer: "Слух?",
                next_card_id: 28,
            }
        }
    },
    {
        id: 28,
        character_id: 3,
        text: "Что-то я разболтался на сегодня, я думаю все же вы не захотите это услышать",
        icon: 'report_smile.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Выйти из машины",
                next_card_id: 30,
            },
            left: {
                answer: "Все же, я настаиваю",
                next_card_id: 29,
            }
        }
    },
    {
        id: 29,
        character_id: 3,
        text: "Нуу эээ... В народе бытует мнение о том, что ваш брак фиктивный, и что вы не видитесь со своей женой, что Вы предпочтете ночь в кабинете за работой над проблемами страны, ночи на брачном ложе...",
        icon: 'speech.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Выйти из машины",
                next_card_id: 30,
            },
            left: {
                answer: "Приму к сведению",
                next_card_id: 30,
            }
        }
    },
    {
        id: 30,
        character_id: 3,
        text: "А вот и наша обитель. великое и могущественное здание правительства нашего государства!",
        icon: 'wink.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Впечатляет",
                next_card_id: 31,
            },
            left: {
                answer: "Не впечатляет",
                next_card_id: 31,
            }
        }
    },
    {
        id: 31,
        character_id: 3,
        text: "Так или иначе, пройдемте внутрь, будем Вас знакомить. Начнем с 1 этажа. К Финансистам или к Здравоохранению?",
        icon: 'speech.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Финансистам",
                next_card_id: 31,
            },
            left: {
                answer: "Здравоохранение",
                next_card_id: 32,
            }
        }
    },
    {
        id: 32,
        character_id: 9,
        text: "Здравствуйте, уважаемый президент. Рад видеть вас биологически цельным",
        icon: 'regular.svg',
        back: 'lab.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "",
                next_card_id: null,
            },
            left: {
                answer: "",
                next_card_id: null,
            }
        }
    },
    {
        id: 33,
        character_id: 8,
        text: "Ой. здравствуйте, господин Президент. Я так рада что вы в добром здравии.",
        icon: 'desk_greetings.svg',
        back: 'speech_room.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Здравствуйте, Светлана Аркадьевна",
                next_card_id: null,
            },
            left: {
                answer: "Здравствуйте, Елена Анатольевна",
                next_card_id: null,
            }
        }
    },
]