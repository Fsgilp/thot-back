module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
      crono: Number,
      questions: [{
        question: String,
        answers: [{
          answer: String,
          correct: Boolean
        }]
      }],
      keys: [String],
      attemps: Number,
      vote_ok: Number,
      vote_ko: Number,
      language: String,
      correccionAutomatica: Boolean,
      author: {
          email: String,
          name: String,
          surname: String
      },
      passed: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
