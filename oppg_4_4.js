// 4.4a)
db.lokallag.updateOne(
  { _id: 1 },
  {
    $push: {
      medlemmer: {
        _id: 4,
        fornavn: "Anne",
        etternavn: "Olsen",
        status: "aktiv"
      }
    }
  }
)

// 4.4b)
db.lokallag.insertMany([
  { _id: 2, navn: "Lokallag 2", medlemmer: [] },
  { _id: 3, navn: "Lokallag 3", medlemmer: [] }
])

// 4.4c)
db.lokallag.deleteOne({ _id: 3 })

// 4.4d)
db.lokallag.find()

//4.4e)
db.lokallag.find(
  { _id: 1 },
  { medlemmer: 1, _id: 0 }
)

// 4.4f)
db.lokallag.aggregate([
  { match: { _id: 1 } },
  { unwind: "medlemmer" },
  { sort: { "medlemmer._id": 1 } },
  { limit: 3 }
])

// 4.4g)
db.lokallag.find({
  "medlemmer.adresse.poststed": "Bergen"
})

// 4.4h)
db.lokallag.find({
  medlemmer: {
    $elemMatch: {
      status: "aktiv",
      medlemsavgift: {
        $elemMatch: {
          aar: 2025,
          betalt: "J"
        }
      }
    }
  }
})

// 4.4i)
db.lokallag.find({
  $or: [
    { "medlemmer.fornavn": { $regex: "^A" } },
    { "medlemmer.etternavn": { $regex: "^J" } }
  ]
})

// 4.4j)
db.lokallag.aggregate([
  { $match: { _id: 1 } },
  {
    $project: {
      antallMedlemmer: { $size: "$medlemmer" }
    }
  }
])
