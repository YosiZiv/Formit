exports.createSession = async (req, res) => {
  console.log("function work", req.body);
  return res.status(200).json({ message: "all set up" });
};
