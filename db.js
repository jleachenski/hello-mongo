const mongoose = require("mongoose")

const mongoDB = "mongodb+srv://jleachenski:ISSIN64KOwheXth2@cluster0.osw4i.mongodb.net/aluguel"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("Conectado com sucesso!"))
    .catch(err => console.log(err))

module.exports = mongoose;
