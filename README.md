# 🍊 제주고 _JEJUGO_

![thumbnail](https://github.com/user-attachments/assets/23f28deb-ce28-419a-b5d7-d196502d989c)

**숏폼 기반 탐색과 AI 루트 설계, 혼잡도**까지! 나만의 제주를 누릴 수 있는 여행 서비스, **JejuGo**

<br /><br />

# ✈️ 배경 _Problem_

![problem](https://github.com/user-attachments/assets/05cbbd4a-aaac-430d-83dd-a261c715314f)

제주를 방문하는 외국인 여행객의 여행 동선 설계의 어려움과, 소수의 명소만 집중되는 혼잡도로 인해 재방문 의사가 저하되는 문제가 나타나고 있습니다.

이러한 문제를 해결하기 위해, **숏츠 영상을 통해 제주 로컬 여행지를 자연스럽게 발견하고, AI가 개인 선호에 맞는 여행 루트를 추천해주는 '제주고'** 서비스를 개발했습니다.

<br /><br />

# ✨ 서비스 소개 _Solution_

[jejugo demo video](https://github.com/user-attachments/assets/4283987d-ac4f-495c-8417-9927a02068bb)

|        **기능**         |                **설명**                |
| --------------------- | ------------------------------------ |
| **숏츠 기반 탐색 경험**  | · 글이 아닌 영상으로 제주 탐험 <br /> · Tictok, Instagram이 익숙한 Z세대 외국인 최적화 |
| **AI 기반 동선 추천**  | · 저장만 하면 알아서 일정 완성 <br /> · 교통, 거리, 운영 시간, 숙소 위치를 반영한 효율적 동선 자동 설계 |
| **로컬 중심 탐색 설계**  | · 로컬 카페, 해변, 숲 트래킹 등 히든 스팟 중심 <br /> · Sunset Coast, Forest Trail 등 감성 구역 탐색 |
| **지도 + 혼잡도 시각화**  | · 현재 위치 기준 거리/혼잡도 실시간 확인 <br /> · 티맵 지도 연동하여 도보 경로 루트 확인 가능 |

<br />

## 1️⃣ Step 1: 숏폼 기반 장소 탐색

![step_1](https://github.com/user-attachments/assets/23866bfd-7839-418e-b3f0-134a7e625d53)

- 사용자는 여행 일정을 입력하고, 입력한 조건에 맞춘 숏폼을 확인할 수 있습니다.

- 직관적으로 정보를 얻을 수 있는 숏폼을 기반으로 여행지를 탐색하고, 저장합니다.

<br />

## 2️⃣ Step 2: 위치 기반 루트 제안 및 저장 기능

![step_2](https://github.com/user-attachments/assets/097fb06f-f4e6-43cd-915d-3434a015444a)

- 내가 담은 장소로 나만의 여행 코스를 만들 수 있습니다.

- 시간대별로 예상되는 혼잡도 정보를 제공하여 한적한 곳 위주로 경로를 탐색할 수 있도록 합니다.

<br />

## 3️⃣ Step 3: 혼잡도 기반 추천

![step_3](https://github.com/user-attachments/assets/f9b9092b-cd18-45e8-bfa0-851e2b55887c)

- 실시간 혼잡도 데이터를 반영한 장소를 추천합니다.

- 사용자가 저장한 장소들을 기반으로, 거리·이동·시간 혼잡도를 고려해 AI가 자동으로 여행 일정을 설계합니다.

<br /><br />

# 🏝️ 개발 _Tech_

![tech_stack](https://github.com/user-attachments/assets/62726373-3f2b-4acc-ac5b-096afd0b0131)

| **스택**         | **선정 이유 및 효과**                                                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nest.js**      | · 구조화된 개발 환경과 풍부한 기본 기능 덕분에 빠르게 안정적인 서버를 구축하고 핵심 로직 개발에 집중할 수 있습니다. |
| **MySQL** | · 빠른 초기 세팅과 쉬운 연동, 검증된 안정성으로 단기간 내 안정적인 데이터베이스를 구축할 수 있습니다. |
| **AWS**          | · 자동 확장과 높은 안정성, 다양한 관리 도구를 활용해 신속하게 안정적인 서비스를 구축·운영할 수 있습니다. |

<br /><br />

# 🏅 팀원 _Team_

<img src="https://github.com/user-attachments/assets/cc8e3d97-7f39-4337-bd5b-7ff2d2fa0851" alt="구름톤 상장" width="635" />

<table>
  <tr>
    <th>기획자</th>
    <th>디자이너</th>
    <th>백엔드</th>
    <th>프론트엔드</th>
    <th>프론트엔드</th>
  </tr>
  <tr>
    <td align="center">
      <img width="100" alt="돌하르방" src="https://github.com/user-attachments/assets/34eb29fd-d0f4-408b-8080-4213557e9bac" />
    </td>
    <td align="center">
      <img width="100" alt="돌하르방" src="https://github.com/user-attachments/assets/34eb29fd-d0f4-408b-8080-4213557e9bac" />
    </td>
    <td align="center">
      <img width="100" alt="돌하르방" src="https://github.com/user-attachments/assets/34eb29fd-d0f4-408b-8080-4213557e9bac" />
    </td>
    <td align="center">
      <img width="100" alt="돌하르방" src="https://github.com/user-attachments/assets/34eb29fd-d0f4-408b-8080-4213557e9bac" />
    </td>
    <td align="center">
      <img width="100" alt="돌하르방" src="https://github.com/user-attachments/assets/34eb29fd-d0f4-408b-8080-4213557e9bac" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="mailto:8clara@gachon.ac.kr" ><b>변교리</b></a>
    </td>
    <td align="center">
      <a href="mailto:s94291495@gmail.com"><b>송정연</b></a>
    </td>
    <td align="center">
      <a href="https://github.com/jinhyo" target="_blank" rel="noopener noreferrer"><b>정진효</b></a>
    </td>
    <td align="center">
      <a href="https://github.com/eungwang1" target="_blank" rel="noopener noreferrer"><b>심은광</b></a>
    </td>
    <td align="center">
      <a href="https://github.com/hansololiviakim" target="_blank" rel="noopener noreferrer"><b>김한솔</b></a>
    </td>
  </tr>
</table>
