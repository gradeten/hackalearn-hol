# hackalearn-hol
1. node.js 설치 및 azure web app 확장 설치
2. Github 리포지토리 clone(터미널-git clone +링크): git clone https://github.com/gradeten/hackalearn-hol
3. VS code에서 리포지토리(hackalearn-hol>gatsby-app)를 열어준다.
4. 터미널에 다음 명령어를 입력한다:
npm install
npm start
5. gatsby-app 폴더에 있는 숨김 처리된 .git 폴더를 지워서 유지보수가 편리하도록 만들어준다.
6. Git 커밋과 푸시를 해준다.(명령 프롬프트창—git:commit all-git: push)
7. Static web app에 웹앱을 설치한다.(static web app-(+)버튼-이름 지정-build preset 선택-코드 저장 장소 입력)
8. Static web app에서 환경변수를 설정해준다. (폴더 우클릭-open in portal-configuration-add 버튼-Name: BLOG_URI, Value: 본인사이트이름.wordpress.com - Ok - save)
9. Github에서 build and deploy workflow가 제대로 이루어지고 있는지 확인한다.
10. Workflow 작동시, 배포에 성공한 것이다.
