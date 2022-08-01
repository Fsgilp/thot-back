module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      email: String,
      name: String,
      surname: String,
      password:  String,
      company: {cif: String, name:String, active: Boolean},
      tests: [{title: String, qualification: Number, 
        attemps: {count:Number, attemp: [{test_date: Date, qualification: Number}]}, 
        pass: Boolean, certificate: Boolean, last_date: Date}],
      active: Boolean,
      isCompany: Boolean,
      roles: [String]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
