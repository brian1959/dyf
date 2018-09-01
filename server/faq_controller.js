module.exports = {
  getFaqs: (req, res, next) => {
    const db = req.app.get("db");

    db.get_faq()
      .then(faqs => res.status(200).send(faqs))
      .catch(err => {
        res
          .status(500)
          .send({
            errorMessage:
              "Oops! Something went wrong. Our engineers have been informed!"
          });
        console.log(err);
      });
  },

  getCategories: (req, res, next) => {
    const db = req.app.get("db");

    db.get_faq_categories()
      .then(categories => res.status(200).send(categories))
      .catch(err => {
        res
          .status(500)
          .send({
            errorMessage:
              "Oops! Something went wrong. Our engineers have been informed!"
          });
        console.log(err);
      });
  }
};
