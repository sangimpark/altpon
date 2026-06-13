// ============ HELLOMOBILE DATA ============

const benefits = [
  {
    id: "hello-친구추천",
    통신사: "헬로모바일",
    종류: "친구추천 신세계상품권",
    금액: 150000,          // 6월 갱신: 3만 x 5개월
    기간: 5,
    월지급액: 30000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    범위: "공통",
    조건: [{ 타입: "최소요금", 값: 15900 }, { 타입: "행동", 값: "친구추천 링크 가입" }]
  },
  {
    id: "hello-프로모션코드-14만",
    통신사: "헬로모바일",
    종류: "프로모션코드 신세계상품권 (15,900원 이상)",
    금액: 120000,          // 6월 갱신: 2만 x 6개월
    기간: 6,
    월지급액: 20000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    범위: "공통",
    조건: [
      { 타입: "최소요금", 값: 15900 },
      { 타입: "행동", 값: "프로모션코드 입력 + 셀프개통" }
    ]
  },
  {
    id: "hello-쿠폰팩",
    통신사: "헬로모바일",
    종류: "쿠폰팩 네이버페이",
    금액: 120000,
    기간: 24,
    월지급액: 5000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    조건: [{ 타입: "카테고리", 값: "쿠폰팩" }]
  },
  {
    id: "hello-친구추천-6만",
    통신사: "헬로모바일",
    종류: "친구추천 (15,900원 미만)",
    금액: 60000,
    기간: 6,
    월지급액: 10000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    조건: [
      { 타입: "최소요금", 값: 5000 }
    ]
  },
  {
    id: "hello-프로모션코드-4만",
    통신사: "헬로모바일",
    종류: "프로모션코드 (5천~15,900원 미만)",
    금액: 40000,
    기간: 4,
    월지급액: 10000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    조건: [
      { 타입: "최소요금", 값: 5000 },
      { 타입: "행동", 값: "프로모션코드 입력" }
    ]
  },
  {
    id: "hello-갤럭시s26",
    통신사: "헬로모바일",
    종류: "갤럭시 S26 구매 후 가입",
    금액: 30000,
    기간: 1,
    월지급액: 30000,
    지급방식: "1회",
    현금성: true,
    분류: "옵션",
    조건: [
      { 타입: "최소요금", 값: 5000 },
      { 타입: "행동", 값: "갤럭시 S26 구매" }
    ]
  },
  {
    id: "hello-5g-기간한정",
    통신사: "헬로모바일",
    종류: "5G 기간한정 신세계/CU 상품권",
    금액: 60000,           // 1만 x 6개월. 5G 3종 + 친구추천 가입 시 (6/5~6/18 개통)
    기간: 6,
    월지급액: 10000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    범위: "요금제",        // 5G 요금제만 — 통신사 공통 후킹(27만)엔 미포함
    조건: [{ 타입: "카테고리", 값: "5G" }, { 타입: "행동", 값: "친구추천 가입" }]
  },

  // ============ KT M모바일 (2026-06) ============
  {
    id: "ktm-타임딜",
    통신사: "KT M모바일",
    종류: "타임딜 코드 N페이",
    금액: 300000,
    기간: 10,
    월지급액: 30000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    범위: "공통",
    조건: [{ 타입: "행동", 값: "셀프개통 + 타임딜 코드 입력" }]
  },
  {
    id: "ktm-바로유심",
    통신사: "KT M모바일",
    종류: "바로배송유심",
    금액: 20000,
    기간: 1,
    월지급액: 20000,
    지급방식: "1회",
    현금성: true,
    분류: "기본",
    범위: "공통",
    조건: []
  },
  {
    id: "ktm-pay쿠폰",
    통신사: "KT M모바일",
    종류: "요금제 혜택 N페이 5천 쿠폰",
    금액: 120000,          // ⚠️ 기간 24개월 가정 (영상엔 개월수 표기 없었음, 헬로 쿠폰팩 선례 따름) — 확인 필요
    기간: 24,
    월지급액: 5000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    조건: [{ 타입: "카테고리", 값: "PAY" }]
  },
  {
    id: "ktm-삼성자급제",
    통신사: "KT M모바일",
    종류: "삼성 자급제 M마켓",
    금액: 50000,           // 5천 x 10개월. 단말 보유 조건이라 옵션(계산 미포함, 표시용)
    기간: 10,
    월지급액: 5000,
    지급방식: "매월",
    현금성: true,
    분류: "옵션",
    조건: [{ 타입: "행동", 값: "갤럭시 S24~26/Z폴드5~7 보유" }]
  },

  // ============ 유모바일 (2026-06) ============
  {
    id: "uplus-이벤트코드",
    통신사: "유모바일",
    종류: "이벤트코드 라이프케어몰 포인트 (네이버포인트 교환 가능)",
    금액: 120000,
    기간: 6,
    월지급액: 20000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    범위: "공통",
    조건: [
      { 타입: "최소요금", 값: 15000 },
      { 타입: "행동", 값: "이벤트코드(6월가입혜택) 입력" }
    ]
  },
  {
    id: "uplus-추천결합",
    통신사: "유모바일",
    종류: "친구추천/랜덤결합 추가 포인트",
    금액: 120000,
    기간: 6,
    월지급액: 20000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    범위: "공통",
    조건: [{ 타입: "행동", 값: "친구추천 또는 랜덤결합" }]
  }
];

const plans = [
  {
    id: "hello-7gb-쿠폰팩-18330",
    통신사: "헬로모바일",
    요금제명: "쿠폰팩 유심 7GB",
    데이터: 7,
    데이터플러스: "1Mbps무제한",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 18330,
    카테고리: ["쿠폰팩"],
    받을수있는혜택: ["hello-친구추천", "hello-프로모션코드-14만", "hello-쿠폰팩"]
  },
  {
    id: "hello-7gb-1mbps-15900",
    통신사: "헬로모바일",
    요금제명: "유심 7GB",
    데이터: 7,
    데이터플러스: "1Mbps무제한",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 15900,
    카테고리: [],
    받을수있는혜택: ["hello-친구추천", "hello-프로모션코드-14만"]
  },
  {
    id: "hello-10gb-쿠폰팩-21300",
    통신사: "헬로모바일",
    요금제명: "쿠폰팩 유심 10GB",
    데이터: 10,
    데이터플러스: "1Mbps무제한",
    통화: "기본",
    문자: "기본",
    월요금: 21300,
    카테고리: ["쿠폰팩"],
    받을수있는혜택: ["hello-친구추천", "hello-프로모션코드-14만", "hello-쿠폰팩"]
  },
  {
    id: "hello-15gb-3mbps-28820",
    통신사: "헬로모바일",
    요금제명: "유심 15GB",
    데이터: 15,
    데이터플러스: "3Mbps무제한",
    통화: 100,
    문자: "기본",
    월요금: 28820,
    카테고리: [],
    받을수있는혜택: ["hello-친구추천", "hello-프로모션코드-14만"]
  },
  {
    id: "hello-15gb-쿠폰팩-31220",
    통신사: "헬로모바일",
    요금제명: "쿠폰팩 유심 15GB",
    데이터: 15,
    데이터플러스: "3Mbps무제한",
    통화: 100,
    문자: "기본",
    월요금: 31220,
    카테고리: ["쿠폰팩"],
    받을수있는혜택: ["hello-친구추천", "hello-프로모션코드-14만", "hello-쿠폰팩"]
  },
  {
    id: "hello-11gb-쿠폰팩-35730",
    통신사: "헬로모바일",
    요금제명: "쿠폰팩 유심 11GB+일2GB",
    데이터: 11,
    데이터플러스: "3Mbps무제한 + 일2GB",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 35730,
    카테고리: ["쿠폰팩"],
    받을수있는혜택: ["hello-친구추천", "hello-프로모션코드-14만", "hello-쿠폰팩"]
  },
  {
    id: "hello-5g-10gb-9900",
    통신사: "헬로모바일",
    요금제명: "5G유심 10GB",
    데이터: 10,
    데이터플러스: null,
    통화: 200,
    문자: 100,
    월요금: 9900,
    카테고리: ["5G"],
    받을수있는혜택: ["hello-친구추천", "hello-프로모션코드-14만", "hello-5g-기간한정"],
    옵션혜택: ["hello-갤럭시s26"],
    가입URL: "https://direct.lghellovision.net/rate/rateViewUsim.do"
  },

  // ============ KT M모바일 (2026-06) ============
  // 밀리 버전 = 요금제혜택 밀리의서재(비현금, 계산 미포함) / PAY 버전 = N페이 5천쿠폰(계산 포함)
  {
    id: "ktm-7gb-밀리-16300",
    통신사: "KT M모바일",
    요금제명: "모두다 맘껏 7GB+ (밀리)",
    데이터: 7,
    데이터플러스: "1Mbps무제한 (최대22GB)",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 16300,
    카테고리: [],
    받을수있는혜택: ["ktm-타임딜", "ktm-바로유심"],
    옵션혜택: ["ktm-삼성자급제"],
    가입URL: "https://www.ktmmobile.com/rate/rateComp.do"
  },
  {
    id: "ktm-10gb-pay-21200",
    통신사: "KT M모바일",
    요금제명: "모두다 맘껏 10GB+ (PAY)",
    데이터: 10,
    데이터플러스: "1Mbps무제한 (최대30GB)",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 21200,
    카테고리: ["PAY"],
    받을수있는혜택: ["ktm-타임딜", "ktm-바로유심", "ktm-pay쿠폰"],
    옵션혜택: ["ktm-삼성자급제"],
    가입URL: "https://www.ktmmobile.com/rate/rateComp.do"
  },
  {
    id: "ktm-10gb-밀리-19000",
    통신사: "KT M모바일",
    요금제명: "모두다 맘껏 10GB+ (밀리)",
    데이터: 10,
    데이터플러스: "1Mbps무제한 (최대30GB)",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 19000,
    카테고리: [],
    받을수있는혜택: ["ktm-타임딜", "ktm-바로유심"],
    옵션혜택: ["ktm-삼성자급제"],
    가입URL: "https://www.ktmmobile.com/rate/rateComp.do"
  },
  {
    id: "ktm-15gb-밀리-21500",
    통신사: "KT M모바일",
    요금제명: "모두다 맘껏 15GB+ (밀리)",
    데이터: 15,
    데이터플러스: "1Mbps무제한 (최대35GB)",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 21500,
    카테고리: [],
    받을수있는혜택: ["ktm-타임딜", "ktm-바로유심"],
    옵션혜택: ["ktm-삼성자급제"],
    가입URL: "https://www.ktmmobile.com/rate/rateComp.do"
  },
  {
    id: "ktm-15gb-pay-23700",
    통신사: "KT M모바일",
    요금제명: "모두다 맘껏 15GB+ (PAY)",
    데이터: 15,
    데이터플러스: "1Mbps무제한 (최대35GB)",
    통화: "기본",
    문자: "기본",
    영상부가통화: 300,
    월요금: 23700,
    카테고리: ["PAY"],
    받을수있는혜택: ["ktm-타임딜", "ktm-바로유심", "ktm-pay쿠폰"],
    옵션혜택: ["ktm-삼성자급제"],
    가입URL: "https://www.ktmmobile.com/rate/rateComp.do"
  },

  // ============ 유모바일 (2026-06) ============
  // 요금제별 비현금 혜택(윌야쿠르트/쿠팡이츠/다이소/이마트24)은 계산 미포함이라 생략 — 렌더링에서 표시 추가 예정
  {
    id: "uplus-데이터플러스-7gb-17500",
    통신사: "유모바일",
    요금제명: "데이터플러스 7GB+ (22GB)",
    데이터: 22,
    데이터플러스: "1Mbps무제한",
    통화: "기본",
    문자: "기본",
    월요금: 17500,
    카테고리: [],
    받을수있는혜택: ["uplus-이벤트코드", "uplus-추천결합"],
    가입URL: "https://www.uplusumobile.com/product/pric/usim/pricList"
  },
  {
    id: "uplus-플러스알파-4.5gb-15500",
    통신사: "유모바일",
    요금제명: "플러스알파 4.5GB+",
    데이터: 4.5,
    데이터플러스: "1Mbps무제한",
    통화: "기본",
    문자: "기본",
    월요금: 15500,
    카테고리: [],
    받을수있는혜택: ["uplus-이벤트코드", "uplus-추천결합"],
    가입URL: "https://www.uplusumobile.com/product/pric/usim/pricList"
  },
  {
    id: "uplus-이츠-7gb-18400",
    통신사: "유모바일",
    요금제명: "이츠 7GB+ (12GB)",
    데이터: 12,
    데이터플러스: "1Mbps무제한",
    통화: "기본",
    문자: "기본",
    월요금: 18400,
    카테고리: [],
    받을수있는혜택: ["uplus-이벤트코드", "uplus-추천결합"],
    가입URL: "https://www.uplusumobile.com/product/pric/usim/pricList"
  },
  {
    id: "uplus-lte-7gb-15900",
    통신사: "유모바일",
    요금제명: "LTE 7GB+ (12GB)",
    데이터: 12,
    데이터플러스: null,
    통화: "기본",
    문자: "기본",
    월요금: 15900,
    카테고리: [],
    받을수있는혜택: ["uplus-이벤트코드", "uplus-추천결합"],
    가입URL: "https://www.uplusumobile.com/product/pric/usim/pricList"
  },
  {
    id: "uplus-다성비-17gb-19400",
    통신사: "유모바일",
    요금제명: "다성비 17GB+ (22GB)",
    데이터: 22,
    데이터플러스: "1Mbps무제한",
    통화: "기본",
    문자: "기본",
    월요금: 19400,
    카테고리: [],
    받을수있는혜택: ["uplus-이벤트코드", "uplus-추천결합"],
    가입URL: "https://www.uplusumobile.com/product/pric/usim/pricList"
  }
];

// ============ 계산 함수 ============

function calculateBenefitsForN(plan, N) {
  let totalBenefit = 0;

  for (const benefitId of plan.받을수있는혜택) {
    const benefit = benefits.find(b => b.id === benefitId);
    if (!benefit || !benefit.현금성) continue;

    if (benefit.지급방식 === "매월") {
      const months = Math.min(N, benefit.기간);
      totalBenefit += months * benefit.월지급액;
    } else if (benefit.지급방식 === "1회") {
      if (N >= 1) totalBenefit += benefit.금액;
    }
  }

  return totalBenefit;
}

function calculateRealProfit(plan, N) {
  const totalBenefit = calculateBenefitsForN(plan, N);
  const totalCost = plan.월요금 * N;
  return totalBenefit - totalCost;
}

function findOptimalMonths(plan) {
  let bestN = 6;
  let bestMonthlyProfit = -Infinity;

  for (let N = 6; N <= 24; N++) {
    const profit = calculateRealProfit(plan, N);
    const monthlyProfit = profit / N;

    // 동률(>=)이면 더 큰 N으로 갱신 — "혜택 받을 거 다 받고 빠지기" 우선
    if (monthlyProfit >= bestMonthlyProfit) {
      bestMonthlyProfit = monthlyProfit;
      bestN = N;
    }
  }

  return {
    optimalN: bestN,
    monthlyProfit: Math.round(bestMonthlyProfit),
    totalProfit: calculateRealProfit(plan, bestN)
  };
}

function getPlanResult(plan) {
  // 옵션혜택(조건부 추가) 목록 — 계산에는 미포함, 표시용
  const 옵션혜택목록 = (plan.옵션혜택 || []).map(id => {
    const b = benefits.find(b => b.id === id);
    return b ? { 종류: b.종류, 금액: b.금액 } : null;
  }).filter(Boolean);

  return {
    plan,
    periods: {
      6: {
        혜택: calculateBenefitsForN(plan, 6),
        실질이익: calculateRealProfit(plan, 6),
        월환산: Math.round(calculateRealProfit(plan, 6) / 6)
      },
      7: {
        혜택: calculateBenefitsForN(plan, 7),
        실질이익: calculateRealProfit(plan, 7),
        월환산: Math.round(calculateRealProfit(plan, 7) / 7)
      },
      12: {
        혜택: calculateBenefitsForN(plan, 12),
        실질이익: calculateRealProfit(plan, 12),
        월환산: Math.round(calculateRealProfit(plan, 12) / 12)
      },
      24: {
        혜택: calculateBenefitsForN(plan, 24),
        실질이익: calculateRealProfit(plan, 24),
        월환산: Math.round(calculateRealProfit(plan, 24) / 24)
      }
    },
    optimal: findOptimalMonths(plan),
    옵션혜택목록
  };
}

// 출력 헬퍼: 옵션혜택을 한 줄로 포매팅
function formatOptionLine(plan) {
  const opts = (plan.옵션혜택 || []).map(id => {
    const b = benefits.find(b => b.id === id);
    return b ? `${b.종류} 시 +${b.금액.toLocaleString()}원` : null;
  }).filter(Boolean);
  return opts.length ? `   옵션 (조건부 추가): ${opts.join(", ")}` : null;
}

// ============ 통신사별 공통 후킹 ============
// "어느 요금제를 고르든 누구나 받는" 현금성 기본 혜택의 합.
// 범위:"공통"만 합산 — 쿠폰팩/PAY/5G한정 같은 요금제 특정 혜택과 옵션(단말 보유 등)은 제외.
function getCarrierHook(통신사) {
  return benefits
    .filter(b => b.통신사 === 통신사 && b.현금성 && b.분류 === "기본" && b.범위 === "공통")
    .reduce((sum, b) => sum + b.금액, 0);
}

// 통신사 목록 (등장 순서 유지)
function getCarriers() {
  const seen = [];
  for (const p of plans) if (!seen.includes(p.통신사)) seen.push(p.통신사);
  return seen.map(name => {
    const withUrl = plans.find(p => p.통신사 === name && p.가입URL);
    return {
      통신사: name,
      후킹: getCarrierHook(name),
      가입URL: withUrl ? withUrl.가입URL : "https://direct.lghellovision.net/rate/rateViewUsim.do"
    };
  });
}

// ============ 실행 ============
const sortByOptimal = [...plans].sort((a, b) => {
  return findOptimalMonths(b).monthlyProfit - findOptimalMonths(a).monthlyProfit;
});

const sortBy24 = [...plans].sort((a, b) => {
  return calculateRealProfit(b, 24) - calculateRealProfit(a, 24);
});

const sortBy7 = [...plans].sort((a, b) => {
  return calculateRealProfit(b, 7) - calculateRealProfit(a, 7);
});

console.log("\n=== 정렬 1: 효율 정점 월환산 순 (짧게 갈아타기) ===");
sortByOptimal.forEach((p, i) => {
  const opt = findOptimalMonths(p);
  console.log((i+1) + "위: " + p.요금제명 + " (월요금 " + p.월요금.toLocaleString() + ")");
  console.log("   정점 " + opt.optimalN + "개월 / 실질이익 " + opt.totalProfit.toLocaleString() + " / 월환산 " + opt.monthlyProfit.toLocaleString());
  const optLine = formatOptionLine(p);
  if (optLine) console.log(optLine);
});

console.log("\n=== 정렬 2: 24개월 실질이익 순 (최대 혜택) ===");
sortBy24.forEach((p, i) => {
  const profit = calculateRealProfit(p, 24);
  console.log((i+1) + "위: " + p.요금제명 + " / 24개월 실질이익 " + profit.toLocaleString());
  const optLine = formatOptionLine(p);
  if (optLine) console.log(optLine);
});

console.log("\n=== 정렬 3: 7개월 실질이익 순 (핵심 혜택 시점) ===");
sortBy7.forEach((p, i) => {
  const profit = calculateRealProfit(p, 7);
  console.log((i+1) + "위: " + p.요금제명 + " / 7개월 실질이익 " + profit.toLocaleString());
  const optLine = formatOptionLine(p);
  if (optLine) console.log(optLine);
});
