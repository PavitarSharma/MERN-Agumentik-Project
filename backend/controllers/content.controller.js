import Content from "../models/Content.js";

export const createContentData = async (req, res, next) => {
  try {
    if (!req.body.image || !req.body.content) {
      return res.status(403).json({ message: "Invalid Inputs" });
    }
    let data = new Content(req.body);
    data = await data.save();

    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllContentData = async (req, res, next) => {
  try {
    const contents = await Content.find();

    return res.status(200).json({
      success: true,
      data: contents,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getContentData = async (req, res, next) => {
  try {
    const content = await Content.findById(req.params.id);

    if(!content) {
      return res.status(404).json("Data not found")
    }

    return res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateContentData = async (req, res, next) => {
    try {
        const { image, content } = req.body;
        const findContent = await Content.findByIdAndUpdate(
          req.params.id,
          { image, content },
          {
            new: true,
            runValidators: true,
            useFindAndMdify: false,
          }
        );
    
        return res.status(201).json({
          success: true,
          data: findContent,
        });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  };
