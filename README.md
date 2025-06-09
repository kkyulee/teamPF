# 공용 레포지토리 사용법

### 1. 원본 레포지토리 클론
메인 레포지토리에서 우측에 `FORK`를 눌러서 본인 깃에 포크 한다(레포지토리 복사)

### 2. GitHub DeskTop을 설치 합니다.
https://docs.github.com/ko/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop

### 3. 내 로컬환경(컴퓨터)에 CLONE 하기
1번에서 fork 한 레포지토리의 URL을 이용하여 내 작업환경에 클론을 합니다.

<img width="878" alt="스크린샷 2025-06-05 오후 5 33 46" src="https://github.com/user-attachments/assets/22f494ee-720d-42fb-b01c-eb966d064523" />

상기 이미지에 있는 `https`로 시작하는 url을 복사합니다.<br>
<img width="941" alt="스크린샷 2025-06-05 오후 5 35 21" src="https://github.com/user-attachments/assets/c814f4d1-e89d-441a-acf5-bc363d6d773a" />
<br>
깃허브 데스크탑을 실행하면 초기 화면에 clone할수 있는 두번째 메뉴를 선택하고
<img width="505" alt="스크린샷 2025-06-05 오후 5 36 31" src="https://github.com/user-attachments/assets/f37a6c1b-d360-49e8-8937-2950c22eeff1" />
<br>
표시한 첫번째 칸에 복사한 url을 입력하고,
두번째 항목에는 작업할 폴더 위치를 설정합니다.(클론되는 폴더가 생성되기 때문에 경로 설정을 잘 해야 합니다.)
ex) 바탕화면에 팀깃 이라는 폴더를 생성하고 해당 폴더를 Local Path로 경로 설정 하면 
팀깃/teamPF 폴더가 생성되고 해당 teamPF 폴더 안에는 작업 파일이 생성됩니다.

### 4. 원본 요소와 수정 사항 맞추기
항상 작업 전 메인 레포지토리에 변경 사항이 생길 수 있으니 
<img width="966" alt="스크린샷 2025-06-05 오후 5 55 47" src="https://github.com/user-attachments/assets/ab8e65e8-dec3-4248-ad21-196c9ea35226" />
<br>
오른쪽 빨간 영역을 먼저 클릭 합니다.
<br>
이후에 
<br>
두번째 영역을 클릭하여
<Br>
<img width="363" alt="스크린샷 2025-06-05 오후 5 58 31" src="https://github.com/user-attachments/assets/674745db-4c90-41b7-bb72-249c3276a131" />
<br>
`upstream/main` 이라고 된 항목을 선택 후 병합 시켜줍니다.

### 5. 수정된 사항 
<img width="954" alt="스크린샷 2025-06-05 오후 5 52 58" src="https://github.com/user-attachments/assets/f1b73dcf-b5ad-4ed8-a0c3-5489377abe51" />
<br>
클론 한 위치에서 소스 파일을 수정하면 깃허브 데스크탑에서 수정된 파일의 목록이 생겨납니다.
목록 아래에 Summary는 커밋 메시지 이고, 
그 아래는 커밋의 설명을 기재하는 영역 입니다.
커밋 메시지는 필수 요소이기때문에 입력 해주어야 합니다.
입력 내용을 전부 기재 후 아래에 파란 버튼을 클릭 합니다.
4번항목에서 첫번째로 클릭 한 영역에 push 항목을 실행해줍니다.

