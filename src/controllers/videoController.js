import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}); // Mongoose의 Model.find()를 프로미스로 사용
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.error(error);
    return res.render("error", { errorMessage: "Failed to load videos." });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (video) {
    return res.render("watch", { pageTitle: video.title, video: video });
  }
  return res.render("404", { pageTitle: "Video not found." });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

// video추가하는 controller
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

// video를 video array에 추가
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description: description,
      createdAt: Date.now(),
      hashtags: hashtags ? hashtags.split(",").map((word) => `#${word}`) : [],
    });
    // const dbVideo = await video.save();
    // console.log(dbVideo);
    return res.redirect("/"); // 위의 trending을 호출하게 됨
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
