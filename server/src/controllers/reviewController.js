
export const createReviewController = async (req, res, next) => {
  try {
    const review = await createReview(req.body);
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
};

export const getReviewsByProductOrBlogController = async (req, res, next) => {
  try {
    const { referenceModelId } = req.params;
    if(!referenceModelId) {
      return res.status(400).json({ success: false, message: 'referenceModelId là bắt buộc' })
    }
    const reviews = await getReviewsByProductOrBlog(referenceModelId);
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    next(error);
  }
};

export const getReviewByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await getReviewById(id);
    res.status(200).json({ success: true, data: review });
  } catch (error) {
    next(error);
  }
};

export const updateReviewController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedReview = await updateReview(id, req.body);
    res.status(200).json({ success: true, data: updatedReview });
  } catch (error) {
    next(error);
  }
};

export const deleteReviewController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteReview(id);
    res.status(204).json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const approveReviewController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const approvedReview = await approveReview(id);
    res.status(200).json({ success: true, data: approvedReview });
  } catch (error) {
    next(error);
  }
};
