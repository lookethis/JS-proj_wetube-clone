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

export const watch = (req, res) => {
  const { id } = req.params;
  console.log("req.params: ", req.params);
  return res.render("watch", { pageTitle: `Watching` });
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
  const video = new Video({
    title,
    description: description,
    createdAt: Date.now(),
    hashtags: hashtags ? hashtags.split(",").map((word) => `#${word}`) : [],
    meta: {
      views: 0,
      rating: 0,
    },
  });
  const dbVideo = await video.save();
  console.log(dbVideo);
  return res.redirect("/"); // 위의 trending을 호출하게 됨
};
