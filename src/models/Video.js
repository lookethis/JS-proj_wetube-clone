import mongoose from "mongoose";

// define shape of the model(자료의 형태, 이 프로젝트에서는 비디오 별 데이터 형식)
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// 모델의 형태대로 모델 만들기
const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;
