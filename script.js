const names = [
    "루카스",
    "레오나르드",
    "아드리안",
    "나르케",
    "엘리아스",
    "리히트호펜",
    "게오르크",
    "율리아",
    "아델베르트",
    "울리케",
    "프리드리히",
    "아인시델",
    "엘리자베트",
    "하이케",
    "슽",
    "가브리엘레",
    "에마누엘",
    "마리아",
    "메클렌부르크",
    "이스마일로프",
    "베르너",
    "네포무체나",
    "파이",
    "에리히"
    ];

function getRandomNames() {
    if (names.length < 2) {
        document.getElementById("result").innerText = "2개 이상의 이름이 필요합니다.";
        return;
    }

    const randomIndices = [];
    while (randomIndices.length < 2) {
        const index = Math.floor(Math.random() * names.length);
        if (!randomIndices.includes(index)) randomIndices.push(index);
    }

    const [first, second] = randomIndices.map((index) => names[index]);
    document.getElementById("result").innerText = `생성된 CP : ${first} x ${second}`;
}

function goToWebsite() {
    window.location.href = "https://example.com"; // 원하는 사이트 링크로 변경
}

// const names = [
//     "고영인(영인)", "천사윤", "임세빈", "표재호", "견인우", 
//     "강바다","마재윤", "권대도", "권제원", "류해든(해든)", "박하운(하운)",
//     "류해든(아무개)", "박하운(모)", "고영인(모)", "나태서(모)",
//     "윤건혁", "손정훈", "유인혁(쿨가이)", "견인하", "나연서", "백건", "고영인(쾌남)"
//   ];

//   // 이름마다 대응하는 선택 확률 (원하는 가중치로 조정 가능)
//   const probabilities = [
//     5.0, 5.0, 5.0, 5.0, 5.0, 
//     1.0,1.0, 1.0, 1.0, 1.0, 1.0,
//     1.0, 1.0, 1.0, 1.0,
//     1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0
//   ];

//   function weightedRandomIndex(probArray) {
//     const total = probArray.reduce((sum, p) => sum + p, 0);
//     const rand = Math.random() * total;
//     let cumulative = 0;

//     for (let i = 0; i < probArray.length; i++) {
//       cumulative += probArray[i];
//       if (rand < cumulative) return i;
//     }

//     return probArray.length - 1;
//   }

//   function getRandomNames() {
//     if (names.length < 2) {
//       document.getElementById("result").innerText = "2개 이상의 이름이 필요합니다.";
//       return;
//     }

//     let firstIndex = weightedRandomIndex(probabilities);
//     let secondIndex;
//     do {
//       secondIndex = weightedRandomIndex(probabilities);
//     } while (secondIndex === firstIndex); // 중복 방지

//     const first = names[firstIndex];
//     const second = names[secondIndex];

//     document.getElementById("result").innerText = `생성된 CP : ${first} x ${second}`;
//   }

//   }
