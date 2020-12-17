const logout = (req, res) => {
  res
    .clearCookie('token')
    .json({ status: 200, message: 'logout successfully' });
};

module.exports = logout;
