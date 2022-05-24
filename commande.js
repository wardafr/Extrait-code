const mongoose = require("mongoose");

const commandeSchema = mongoose.Schema({
  id: { type: String, required: true },
  produitId: { type: String, required: true },
  userId: { type: String, required: true },
  etat: { type: Number, required: true },
  date_commande: { type: String, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model("Commande", commandeSchema);
