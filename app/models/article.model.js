module.exports = mongoose => {
  const Article = mongoose.model(
    "article",
    mongoose.Schema(
      {
        title: String,
        content: String
      },
      { timestamps: true }
    )
  );

  return Article;
};
