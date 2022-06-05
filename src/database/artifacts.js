export default [
    {
        id: 1,
        name: "Востребовать кредитные обязательства",
        icon: "assets/artifacts/1.png",
        action: function (params) {
            return params.find(param => param.slug === "finance").value += 50;
        }
    },
    {
        id: 2,
        name: "Открыть склад вооружения",
        icon: "assets/artifacts/2.png",
        action: function (params) {
            return params.find(param => param.slug === "policy").value += 50;
        }
    },
    {
        id: 3,
        name: "Раздать еду со склада населению",
        icon: "assets/artifacts/3.png",
        action: function (params) {
            return params.find(param => param.slug === "population").value += 50;
        }
    },
    {
        id: 4,
        name: "Выдать вакцину",
        icon: "assets/artifacts/4.png",
        action: function (params) {
            return params.find(param => param.slug === "medicine").value += 50;
        }
    },
]