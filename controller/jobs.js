const getJob = async (req, res) => {
  res.render(createViewPath("jobs"), {
    title: "Jobs",
    page_name: "jobs",
  });
};

module.exports = {
  getJob,
};
