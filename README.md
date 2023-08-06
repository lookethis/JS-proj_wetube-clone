# Wetube Reloded

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See user
/users/logout -> Log Out
/users/edit -> Edit My Profile
/users/remove -> Remove My Profile

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video
/videos/comments -> Comment on a video
/videos/comments/delete -> Delete A Comment of a Video

- View Engine: 웹 애플리케이션에서 사용하는 템플릿을 렌더링하기 위한 도구. 웹 애플리케이션에서 동적 콘텐츠를 생성하기 위해 사용됩니다. 즉, 웹 서버에서 데이터와 템플릿을 결합하여 최종적으로 클라이언트에게 보여줄 HTML을 생성하는 역할. (예.Pug(Jade),EJS, Handlebars 등은 Node.js 환경에서 널리 사용되는 뷰 엔진)
- View Engine 사용 이유
  (1) 동적 콘텐츠: 웹 페이지의 일부분이나 전체를 동적으로 생성
  (2) 재사용성: 웹 애플리케이션의 여러 부분에서 공통적으로 사용되는 레이아웃이나 컴포넌트를 재사용(예. header, footer 등)
  (3) 분리: 프론트엔드와 백엔드의 코드를 분리하여 각 영역의 전문성을 유지하고 코드의 관리와 확장성을 향상
