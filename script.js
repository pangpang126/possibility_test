const names = [
    "고영인", "천사윤", "임세빈", "표재호", "견인우", 
    "강바다", "마재윤", "권대도", "권제원", "류해든(해든)", "박하운(하운)",
    "류해든(아무개)", "박하운(모)", "고영인(모)", "나태서(모)",
    "윤건혁", "손정훈", "유인혁(쿨가이)", "견인하", "나연서", "백건", "고영인(쾌남)"
];


const probabilities = [
    3.0, 3.0, 3.0, 3.0, 3.0, 
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 0.33, 0.33, 0.33, 
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0
];

function weightedRandomIndex(probArray) {
    const total = probArray.reduce((sum, p) => sum + p, 0);
    const rand = Math.random() * total;
    let cumulative = 0;

    for (let i = 0; i < probArray.length; i++) {
        cumulative += probArray[i];
        if (rand < cumulative) return i;
    }
    return probArray.length - 1; // fallback
}

function getRandomNames() {
    if (names.length < 2) {
        document.getElementById("result").innerText = "2개 이상의 이름이 필요합니다.";
        return;
    }

    let firstIndex = weightedRandomIndex(probabilities);
    let secondIndex;
    do {
        secondIndex = weightedRandomIndex(probabilities);
    } while (secondIndex === firstIndex); // 중복 방지

    const first = names[firstIndex];
    const second = names[secondIndex];

    document.getElementById("result").innerText = `생성된 CP : ${first} x ${second}`;
}

function goToWebsite() {
    window.location.href = "https://example.com"; // 원하는 사이트 링크로 변경
}
