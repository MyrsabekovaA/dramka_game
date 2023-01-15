export default [
    {
        id: 2,
        character_id: 11,
        text: "Congratulations, you have passed the Prologue, the continuation of the story will be in the next updates",
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
        text: "Hello, Mr. President. You have just recovered from a coma, doctors say you may have short-term memory lapses.",
        icon: 'report_smile.svg',
        back: 'hospital1.png',
        is_regular_deck: true,
        actions: {
            right: {
                answer: "Memory lapses?",
                next_card_id: 4,
            },
            left: {
                answer: "What happened?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 3,
        character_id: 3,
        text: "You were found in an abandoned hut in the forest without consciousness. You were promptly taken to the hospital where you spent the last two months.",
        icon: 'hands_up.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Did I have a family?",
                next_card_id: 9,
            },
            left: {
                answer: "What's next?",
                next_card_id: 8,
            }
        }
    },
    {
        id: 4,
        character_id: 3,
        text: "During the MRI, your brain glowed like a Christmas tree. Our specialists do not understand anything yet, but they warn that after such a memory can be naughty.",
        icon: 'small_smile.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Will I become a vegetable?",
                next_card_id: 5,
            },
            left: {
                answer: "What happened?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 5,
        character_id: 3,
        text: "Of course not, repeated MRI showed a decline in this very activity. Doctors say all brain functions will soon return to normal.",
        icon: 'wink.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Don't remind me who you are?",
                next_card_id: 6,
            },
            left: {
                answer: "What happened?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 6,
        character_id: 3,
        text: "Ahahah with great pleasure. My name is Wilson, you used to call me Wil more often. I am the Prime Minister and also your right hand and friend.",
        icon: 'blind_small_smile.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Who am I?",
                next_card_id: 7,
            },
            left: {
                answer: "What happened?",
                next_card_id: 3,
            }
        }
    },
    {
        id: 7,
        character_id: 3,
        text: "Everything turned out to be worse than I thought. You, my dear friend, have been chosen by the people to lead the country and lead us all to a brighter future,",
        icon: 'speech.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "We need to establish contacts",
                next_card_id: 8,
            },
            left: {
                answer: "What's next?",
                next_card_id: 8,
            }
        }
    },
    {
        id: 8,
        character_id: 3,
        text: "It looks like I need to re-introduce you to your device, or would you prefer to come to your senses with your family? ",
        icon: 'regular_phone.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Did I have a family?",
                next_card_id: 9,
            },
            left: {
                answer: "The state is above all",
                next_card_id: 10,
            }
        }
    },
    {
        id: 9,
        character_id: 3,
        text: "Of course it was and is! They are just waiting outside the door, one word from you and I will open this door",
        icon: 'wink.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Why didn't you let them in right away?",
                next_card_id: 11,
            },
            left: {
                answer: "Please open the door",
                next_card_id: 13,
            }
        }
    },
    {
        id: 10,
        character_id: 3,
        text: "Great, I'll call the driver now and let's go introduce you",
        icon: 'regular_phone.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "I still want to see my family first",
                next_card_id: 9,
            },
            left: {
                answer: "On the road!",
                next_card_id: 12,
            }
        }
    },
    {
        id: 11,
        character_id: 3,
        text: "You understand that according to the protocol I have to be the first to make sure of your good health",
        icon: 'report.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Family can wait",
                next_card_id: 12,
            },
            left: {
                answer: "Please open the door",
                next_card_id: 13,
            }
        }
    },
    {
        id: 12,
        character_id: 3,
        text: "While you were away, a lot of things managed to change. The state is in complete chaos. So also a new virus has surfaced, it seems to be nothing serious, but in China they say everything was paralyzed because of it.",
        icon: 'report.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Virus?",
                next_card_id: 21,
            },
            left: {
                answer: "Tell us about those we are going to",
                next_card_id: 22,
            }
        }
    },
    {
        id: 13,
        character_id: 1,
        text: "Hi, honey! We really missed you",
        icon: 'smile.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Hello, Sophie",
                next_card_id: 14,
            },
            left: {
                answer: "Hello",
                next_card_id: 15,
            }
        }
    },
    {
        id: 14,
        character_id: 1,
        text: "If the doctors hadn't warned me about your amnesia. Something heavy would have been flying at you by now. Just in case, I'll remind you my name is Lucy.",
        icon: 'smirk.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Keep silent",
                next_card_id: 15,
            },
            left: {
                answer: "I don't know what came over me",
                next_card_id: 15,
            }
        }
    },
    {
        id: 15,
        character_id: 5,
        text: "Hi, Dad. I'm your favorite Jackdaw. I am very glad that you have come to your senses. I've seen a lot of articles about your death on the Internet, I'm glad for the first time that everyone is lying on the Internet.",
        icon: 'greetings.svg',
        back: 'hospital3.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Wilson!",
                next_card_id: 16,
            },
            left: {
                answer: "How are things at school?",
                next_card_id: 17,
            }
        }
    },
    {
        id: 16,
        character_id: 3,
        text: "I see the memory is gradually coming to you. I am very happy. So, shall we go to the government or will you still spend time with your family?",
        icon: 'wink.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Let's go",
                next_card_id: 12,
            },
            left: {
                answer: "I'll let you know when I'm ready",
                next_card_id: 18,
            }
        }
    },
    {
        id: 17,
        character_id: 5,
        text: "Yes, little by little. soon we will have exams, of course I am preparing. But you can't be ready for everything",
        icon: 'closed_eyes.svg',
        back: 'hospital3.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Wilson!",
                next_card_id: 16,
            },
            left: {
                answer: "Lucy",
                next_card_id: 18,
            }
        }
    },
    {
        id: 18,
        character_id: 1,
        text: "Wilson, please wait outside.",
        icon: 'regular2.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Do nothing",
                next_card_id: 19,
            },
            left: {
                answer: "Let it stay",
                next_card_id: 19,
            }
        }
    },
    {
        id: 19,
        character_id: 1,
        text: "So glad to see you. Honestly, I was very afraid for you. I have so many questions, but alas, you don't remember the answers. Well, dear, you have a rest for now, we won't bother you with a Galchon. We love you very much",
        icon: 'smile.svg',
        back: 'hospital2.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "That's enough for today, we need to rest",
                next_card_id: 20,
            },
            left: {
                answer: "Wilson Let's go",
                next_card_id: 12,
            }
        }
    },
    {
        id: 20,
        character_id: 3,
        text: "Good morning, Mr. President. Everyone is waiting only for you. A lot has happened during your absence. We have to go",
        icon: 'regular.svg',
        back: 'hospital1.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Wait downstairs, I'll come down",
                next_card_id: 12,
            },
            left: {
                answer: "Let's go",
                next_card_id: 12,
            }
        }
    },
    {
        id: 21,
        character_id: 3,
        text: "A new strain of the virus was discovered in China on New Year's Eve. As I understand it, it is not worse than the usual flu, just more contagious, but it is better for you to consult with our Minister of Health – Vitaly Pavlovich",
        icon: 'report.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Enough",
                next_card_id: 26,
            },
            left: {
                answer: "Tell us more about the minister",
                next_card_id: 22,
            }
        }
    },
    {
        id: 22,
        character_id: 6,
        text: "Vitaly Pavlovich has been the Minister of Health for the third year. During his leadership, he has significantly advanced medicine in the country.",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Enough",
                next_card_id: 26,
            },
            left: {
                answer: "Tell me more",
                next_card_id: 23,
            }
        }
    },
    {
        id: 23,
        character_id: 8,
        text: "Elena Anatolyevna is the Minister of Finance, evil is in the flesh for the population, with any change in the market someone loses and in the eyes of people she is the main evil of the capitalist world",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Enough",
                next_card_id: 26,
            },
            left: {
                answer: "Tell me more",
                next_card_id: 24,
            }
        }
    },
    {
        id: 24,
        character_id: 9,
        text: "Pyotr Alekseevich is the Minister of Science and Education. He helped us out more than once. A very smart guy. Presumably he and the Foreign Minister are having an affair.",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Enough",
                next_card_id: 26,
            },
            left: {
                answer: "Foreign Minister?",
                next_card_id: 25,
            }
        }
    },
    {
        id: 25,
        character_id: 7,
        text: "Olesya Semenova is the Minister of Internal Affairs. We are grateful to her for all our foreign policy. Always able to defuse even the most heated situation",
        icon: 'regular.svg',
        back: 'stars.svg',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Enough",
                next_card_id: 26,
            },
            left: {
                answer: "I think I recognize this place",
                next_card_id: 26,
            }
        }
    },
    {
        id: 26,
        character_id: 3,
        text: "We are already approaching. This is the government building, in recent years you have spent more time here than in bed",
        icon: 'regular.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Get out of the car",
                next_card_id: 30,
            },
            left: {
                answer: "Good joke",
                next_card_id: 27,
            }
        }
    },
    {
        id: 27,
        character_id: 3,
        text: "By no means, this is not a joke, you spend almost every day and night at work. There was even a rumor among the people...",
        icon: 'report_smile.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Get out of the car",
                next_card_id: 30,
            },
            left: {
                answer: "Hearing?",
                next_card_id: 28,
            }
        }
    },
    {
        id: 28,
        character_id: 3,
        text: "I've been talking too much for today, I still don't think you want to hear it",
        icon: 'report_smile.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Get out of the car",
                next_card_id: 30,
            },
            left: {
                answer: "Still, I insist",
                next_card_id: 29,
            }
        }
    },
    {
        id: 29,
        character_id: 3,
        text: "Well, uh... There is an opinion among the people that your marriage is fictitious, and that you do not see your wife, that you would prefer a night in the office working on the problems of the country, a night on the marriage bed ...",
        icon: 'speech.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Get out of the car",
                next_card_id: 30,
            },
            left: {
                answer: "I'll take note",
                next_card_id: 30,
            }
        }
    },
    {
        id: 30,
        character_id: 3,
        text: "And here is our abode. the great and powerful government building of our state!",
        icon: 'wink.svg',
        back: 'car_regular.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Impressive",
                next_card_id: 31,
            },
            left: {
                answer: "Not impressive",
                next_card_id: 31,
            }
        }
    },
    {
        id: 31,
        character_id: 3,
        text: "Anyway, let's go inside, we'll introduce you. Let's start from the 1st floor. To Financiers or to Healthcare?",
        icon: 'speech.svg',
        back: 'car_regular.png',
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
        id: 32,
        character_id: 9,
        text: "Hello, dear President. Glad to see you biologically whole",
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
        text: "Oh. hello, Mr. President. I'm so glad you're in good health.",
        icon: 'desk_greatings.svg',
        back: 'speech_room.png',
        is_regular_deck: false,
        actions: {
            right: {
                answer: "Hello, Svetlana Arkadyevna",
                next_card_id: null,
            },
            left: {
                answer: "Hello, Elena Anatolyevna",
                next_card_id: null,
            }
        }
    },
]