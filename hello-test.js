// ============ HELLOMOBILE DATA ============

const benefits = [
  {
    id: "hello-친구추천",
    통신사: "헬로모바일",
    종류: "친구추천 신세계상품권",
    금액: 210000,
    기간: 7,
    월지급액: 30000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    조건: [{ 타입: "최소요금", 값: 15900 }]
  },
  {
    id: "hello-프로모션코드-14만",
    통신사: "헬로모바일",
    종류: "프로모션코드 신세계상품권 (15,900원 이상)",
    금액: 140000,
    기간: 7,
    월지급액: 20000,
    지급방식: "매월",
    현금성: true,
    분류: "기본",
    조건: [
      { 타입: "최소요금", 값: 15900 },
      { 타입: "행동", 값: "프로모션코드 입력" }
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
    받을수있는혜택: ["hello-친구추천-6만", "hello-프로모션코드-4만"],
    옵션혜택: ["hello-갤럭시s26"]
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
