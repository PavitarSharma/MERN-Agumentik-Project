import Info from "../models/Info.js";
import sendMail from "../utils/sendMail.js";

export const createData = async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.contact || !req.body.email) {
      return res.status(403).json({ message: "Invalid Inputs" });
    }

    let data = new Info(req.body);
    data = await data.save();
    // await sendMail({
    //   email: req.body.email,
    //   subject: `Thanks mail`,
    //   message: `Thank you submit data we will consider you`,
    // });

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

export const getAllData = async (req, res, next) => {
  try {
    const datas = await Info.find();

    return res.status(200).json({
      success: true,
      datas,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
