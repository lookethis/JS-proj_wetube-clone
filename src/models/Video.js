import mongoose from "mongoose";

// define shape of the model(자료의 형태, 이 프로젝트에서는 비디오 별 데이터 형식)
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#{word}`));
});

// 모델의 형태대로 모델 만들기
const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;
