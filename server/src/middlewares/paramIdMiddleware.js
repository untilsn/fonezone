export const checkIdParam = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, message: "Thiếu ID trong URL!" });
  }
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return res.status(400).json({ success: false, message: "ID không hợp lệ!" });
  }
  next();
};