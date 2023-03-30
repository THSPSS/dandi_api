<h1>About this project</h1>

![Uploading image.png…]()


-----
<p>도시 투어 스탬프 어플리케이션 'DANDI' 서버 입니다.</p>
<p>DANDI는 지역경제 활성화를 목적으로 다양한 명소로 관광객의 유치를 기원하며 만든 앱입니다.</p>
<p>깔끔하고 직관적인 UI로 고객들이 쉽게 사용할 수 있게 만들고자 하였으며, 회원가입 로그인부터 장소에 대한 정보를
얻고 방문하여 스탬프를 받는 과정까지 구현하였습니다.</p>
<p>DANDI 전용 Rest API를 만들어 회원 정보 입력, 스탬프 내역과 장소에 대한 정보를 받을 수 있게 만들었습니다</p>

👉 단디 홈페이지: <a href="https://dandi21.netlify.app/" target="_blank"/>Live Demo</a>

<h2>Build with:</h2>
1)Node.js , express 
2)MySQL


<h2>API</h2>
BASE_URL = https://api-fvwt.onrender.com/api/

1) 장소에 대한 정보 <br>

GET : location

예시 : 

[
    {
        "no": 1,
        "name": "이월드",
        "code": "EWORLD",
        "latitude": 35.8545,
        "longitude": 128.562
    }
]


2) 장소와 관련된 힌트 <br>

GET : hint

예시 : 

[
    {
        "location_no": 1,
        "name": "이월드",
        "address": "대구광역시 달서구 두류공원로 200",
        "description": "세계유일의 Tower와 Park가 어울러진 유럽식\r\n도시공원이다. 랜드마크인 83타워에서 대구\r\n시내의 야경을 한 눈에 볼 수 있다.",
        "picture_path": "./file/main2.png",
        "latitude": 35.8545,
        "longitude": 128.562
    }
]
