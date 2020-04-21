exports.createSession = async (req, res) => {
  // START UP CREATE FUNCTION FOR Session refactored later
  console.log("function work", req.body);
  return res.status(200).json({ message: "all set up" });
};
