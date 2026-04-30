db.arrangement.insertMany([
    {
        _id: 1,
        navn: "Hackathon",
        pameldinger: [
            { medlemsnummer: 1, navn: "Anna Jensen" },
            { medlemsnummer: 2, navn: "Per Hansen" },
            { medlemsnummer: 3, navn: "Kari Lie" }
        ]
    },
    {
        _id: 2,
        navn: "Workshop",
        pameldinger: [
            { medlemsnummer: 1, navn: "Anna Jensen" },
            { medlemsnummer: 2, navn: "Per Hansen" },
            { medlemsnummer: 3, navn: "Kari Lie" }
        ]
    }
]);

