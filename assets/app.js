const careerData = {
  electrician: {
    title: "Electrician / Construction",
    text: "Uses logical branching to choose the safest, fastest fix when wiring, load limits, and client needs conflict.",
  },
  social: {
    title: "Social Work",
    text: "Relies on pattern recognition to spot changing habits, risk triggers, and the next best intervention.",
  },
  writing: {
    title: "Writing / Law",
    text: "Builds arguments like proofs: claim, evidence, warrants, and a clean line of reasoning.",
  },
};

const pathwayData = {
  stem: {
    title: "STEM Pathway",
    text: "Focus on modeling, data analysis, and advanced problem solving.",
    list: [
      "Courses: Algebra II, Statistics, Pre-Calculus",
      "Skills: Modeling change, interpreting data",
      "Outcomes: Engineering, tech, research readiness",
    ],
  },
  health: {
    title: "Health Pathway",
    text: "Builds precision, measurement, and evidence-based reasoning.",
    list: [
      "Courses: Statistics, Applied Math, Data Literacy",
      "Skills: Interpreting studies, dosage math",
      "Outcomes: Health science and medical careers",
    ],
  },
  business: {
    title: "Business Pathway",
    text: "Emphasizes financial math, budgeting, and forecasting.",
    list: [
      "Courses: Financial Math, Statistics",
      "Skills: ROI analysis, risk evaluation",
      "Outcomes: Entrepreneurship and finance readiness",
    ],
  },
  trades: {
    title: "Trades Pathway",
    text: "Connects geometry, measurement, and technical applications.",
    list: [
      "Courses: Technical Math, Geometry",
      "Skills: Precision measurement, blueprint reading",
      "Outcomes: Skilled trades and certification success",
    ],
  },
};

const flowData = {
  starts: {
    algebra1: {
      title: "Algebra I only",
      text: "A standard entry point. High school builds the next layer step by step.",
      grade: 4,
    },
    geometry: {
      title: "Algebra I + Geometry",
      text: "You enter ahead of the usual pace, so the pathway can move faster.",
      grade: 3,
    },
    algebra2: {
      title: "Algebra II already",
      text: "You are already ahead of the curve and can branch into advanced options sooner.",
      grade: 2,
    },
  },
  careers: {
    stem: {
      title: "STEM",
      year11: "Pre-Calculus or Statistics",
      year12: "Calculus, AP Statistics, or Modeling",
      year11Text: "Choose a course that deepens functions, data, and problem solving.",
      year12Text: "Finish with a class that prepares you for engineering or tech pathways.",
      text: "This route prepares you for engineering, technology, and research work.",
    },
    health: {
      title: "Health",
      year11: "Statistics or Applied Math",
      year12: "Data Analysis, Medical Math, or Quantitative Reasoning",
      year11Text: "Focus on measurement, studies, and the math behind health decisions.",
      year12Text: "End with a course that supports nursing, health science, or lab work.",
      text: "This route connects math to health science, nursing, and medical careers.",
    },
    business: {
      title: "Business",
      year11: "Financial Math or Statistics",
      year12: "Economics, Accounting Math, or Consumer Finance",
      year11Text: "Build a base in budgets, percentages, and smart money choices.",
      year12Text: "Wrap up with a class that points toward finance or entrepreneurship.",
      text: "This route helps with budgeting, investing, and decision-making.",
    },
    trades: {
      title: "Trades",
      year11: "Technical Math or Geometry",
      year12: "Blueprint Math, Measurement, or Applied Problem Solving",
      year11Text: "Practice measurement, space, and the math behind tools and design.",
      year12Text: "Choose a course that matches construction, welding, or certification work.",
      text: "This route supports skilled trades, construction, and certification work.",
    },
  },
};

const buttons = document.querySelectorAll("[data-career]");
const outputTitle = document.querySelector("[data-career-title]");
const outputText = document.querySelector("[data-career-text]");

if (buttons.length && outputTitle && outputText) {
  const setActive = (key) => {
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.career === key);
    });
    outputTitle.textContent = careerData[key].title;
    outputText.textContent = careerData[key].text;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => setActive(button.dataset.career));
  });

  setActive("electrician");
}

const pathwayButtons = document.querySelectorAll("[data-pathway]");
const pathwayTitle = document.querySelector("[data-pathway-title]");
const pathwayText = document.querySelector("[data-pathway-text]");
const pathwayList = document.querySelector("[data-pathway-list]");

if (pathwayButtons.length && pathwayTitle && pathwayText && pathwayList) {
  const setPathway = (key) => {
    pathwayButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.pathway === key);
    });
    pathwayTitle.textContent = pathwayData[key].title;
    pathwayText.textContent = pathwayData[key].text;
    pathwayList.innerHTML = "";
    pathwayData[key].list.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      pathwayList.appendChild(li);
    });
  };

  pathwayButtons.forEach((button) => {
    button.addEventListener("click", () => setPathway(button.dataset.pathway));
  });

  setPathway("stem");
}

const stepData = {
  observe: {
    title: "Observe",
    text: "Gather evidence, notice patterns, and ask the right questions.",
  },
  model: {
    title: "Model",
    text: "Translate the situation into numbers, visuals, or systems.",
  },
  decide: {
    title: "Decide",
    text: "Compare options and choose the path that protects your goals.",
  },
  explain: {
    title: "Explain",
    text: "Defend your decision with clear logic and data.",
  },
};

const stepButtons = document.querySelectorAll("[data-step]");
const stepTitle = document.querySelector("[data-step-title]");
const stepText = document.querySelector("[data-step-text]");
const stepWorkspace = document.querySelector("[data-step-workspace]");

if (stepButtons.length && stepTitle && stepText) {
  const setStep = (key) => {
    stepButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.step === key);
    });
    stepTitle.textContent = stepData[key].title;
    stepText.textContent = stepData[key].text;
    setTimeout(() => {
      try {
        if (typeof renderStepWorkspace === "function") renderStepWorkspace(key);
      } catch (e) {
        /* safe no-op if renderer not ready */
      }
    }, 0);
  };

  stepButtons.forEach((button) => {
    button.addEventListener("click", () => setStep(button.dataset.step));
  });

  setTimeout(() => setStep("observe"), 0);
}

const stepState = {};

const renderStepWorkspace = (key) => {
  if (!stepWorkspace) return;
  stepWorkspace.innerHTML = "";

  const mk = (html) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    return wrapper;
  };

  if (key === "observe") {
    const node = mk(`
      <label>Quick notes or numbers<textarea data-observe-input rows="3" placeholder="Type observations, numbers, or facts"></textarea></label>
      <div><button data-observe-run>Analyze</button></div>
      <pre class="observe-output" data-observe-output aria-live="polite"></pre>
    `);

    node.querySelector("[data-observe-run]").addEventListener("click", () => {
      const text = node.querySelector("[data-observe-input]").value || "";
      const nums = (text.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
      const words = text.trim().length ? text.trim().split(/\s+/).length : 0;
      const sum = nums.reduce((a, b) => a + b, 0);
      const avg = nums.length ? sum / nums.length : 0;
      const out = [];
      out.push(`Words: ${words}`);
      out.push(`Numbers found: ${nums.length}`);
      if (nums.length) out.push(`Min: ${Math.min(...nums)}, Max: ${Math.max(...nums)}, Avg: ${avg.toFixed(2)}, Sum: ${sum}`);
      node.querySelector(".observe-output").textContent = out.join("\n");
      stepState.observe = { text, nums, sum, avg };
    });

    stepWorkspace.appendChild(node);
  }

  if (key === "model") {
    const node = mk(`
      <label>Model type<select data-model-type>
        <option value="linear">Linear (add)</option>
        <option value="growth">Growth (%)</option>
      </select></label>
      <label>Start value<input type="number" data-model-start value="10" /></label>
      <label>Rate (add amount or percent)<input type="number" data-model-rate value="5" /></label>
      <label>Steps<input type="number" data-model-steps value="6" min="1" /></label>
      <div><button data-model-run>Run model</button></div>
      <pre class="model-output" data-model-output aria-live="polite"></pre>
    `);

    node.querySelector("[data-model-run]").addEventListener("click", () => {
      const type = node.querySelector("[data-model-type]").value;
      let val = Number(node.querySelector("[data-model-start]").value) || 0;
      const rate = Number(node.querySelector("[data-model-rate]").value) || 0;
      const steps = Math.max(1, Math.floor(Number(node.querySelector("[data-model-steps]").value) || 1));
      const series = [val];
      for (let i = 1; i <= steps; i++) {
        if (type === "linear") val = val + rate;
        else val = val * (1 + rate / 100);
        series.push(Number(val.toFixed(2)));
      }
      node.querySelector(".model-output").textContent = `Series: ${series.join(", ")}\nFinal: ${series[series.length-1]}`;
      stepState.model = { type, series };
    });

    stepWorkspace.appendChild(node);
  }

  if (key === "decide") {
    const node = mk(`
      <label>Option A value<input type="number" data-decide-a value="100" /></label>
      <label>Option B value<input type="number" data-decide-b value="120" /></label>
      <label>Weight (higher means more important)<input type="number" data-decide-weight value="1" step="0.1" /></label>
      <div><button data-decide-run>Compare</button></div>
      <pre class="decide-output" data-decide-output aria-live="polite"></pre>
    `);

    node.querySelector("[data-decide-run]").addEventListener("click", () => {
      const a = Number(node.querySelector("[data-decide-a]").value) || 0;
      const b = Number(node.querySelector("[data-decide-b]").value) || 0;
      const w = Number(node.querySelector("[data-decide-weight]").value) || 1;
      // Simple decision: lower cost wins after applying weight to difference
      const scoreA = a;
      const scoreB = b / w;
      const winner = scoreA === scoreB ? "Tie" : (scoreA < scoreB ? "Option A" : "Option B");
      node.querySelector(".decide-output").textContent = `Option A: ${scoreA}\nOption B (weighted): ${scoreB.toFixed(2)}\nRecommended: ${winner}`;
      stepState.decide = { a, b, weight: w, winner };
    });

    stepWorkspace.appendChild(node);
  }

  if (key === "explain") {
    const node = mk(`
      <label>Decision summary<textarea data-explain-input rows="3" placeholder="Summarize your decision or paste results"></textarea></label>
      <div><button data-explain-run>Generate explanation</button></div>
      <pre class="explain-output" data-explain-output aria-live="polite"></pre>
    `);

    node.querySelector("[data-explain-run]").addEventListener("click", () => {
      const text = node.querySelector("[data-explain-input]").value || "";
      const parts = [];
      if (stepState.observe) parts.push(`Observed ${stepState.observe.nums?.length || 0} numbers, avg ${stepState.observe.avg?.toFixed(2) || "N/A"}`);
      if (stepState.model) parts.push(`Modeled ${stepState.model.type}, final ${stepState.model.series?.slice(-1)[0]}`);
      if (stepState.decide) parts.push(`Decision: ${stepState.decide.winner}`);
      if (text) parts.push(`User: ${text}`);
      const explanation = parts.length ? parts.join("; ") : "Provide inputs in previous steps to build an explanation.";
      node.querySelector(".explain-output").textContent = explanation;
    });

    stepWorkspace.appendChild(node);
  }
};

const spendRange = document.querySelector("[data-spend-range]");
const spendOutput = document.querySelector("[data-spend-output]");
const spendCaption = document.querySelector("[data-spend-caption]");

if (spendRange && spendOutput && spendCaption) {
  const updateSpend = () => {
    const daily = Number(spendRange.value);
    const weekly = daily * 7;
    const monthly = daily * 30;
    const annual = daily * 365;
    const tenYear = annual * 10;
    const fortyYear = annual * 40;

    // Investment comparison: if you invested the daily amount each month at 6% annual
    const monthlyContribution = daily * 30;
    const annualRate = 0.06;
    const monthlyRate = annualRate / 12;
    const periods40 = 40 * 12;
    const future40 = monthlyContribution * ((Math.pow(1 + monthlyRate, periods40) - 1) / monthlyRate);

    spendOutput.textContent = `Daily: $${daily.toLocaleString()} · Weekly: $${weekly.toLocaleString()} · Monthly: $${monthly.toLocaleString()} · Year: $${annual.toLocaleString()}`;
    spendCaption.textContent = `Over 10 years: $${tenYear.toLocaleString()} · Over 40 years: $${fortyYear.toLocaleString()}. If you instead saved about $${monthlyContribution.toLocaleString()} per month at 6% interest for 40 years, you'd have approximately $${Math.round(future40).toLocaleString()}.`;
  };

  spendRange.addEventListener("input", updateSpend);
  updateSpend();
}

const puzzleData = {
  planA: {
    title: "Plan A wins by minutes",
    text: "Short daily practice adds up: 15 minutes x 5 days = 75 minutes per week.",
  },
  planB: {
    title: "Plan B looks bigger, but it's not",
    text: "One long session feels intense, but 60 minutes once a week is less total time.",
  },
};

const puzzleButtons = document.querySelectorAll("[data-puzzle]");
const puzzleTitle = document.querySelector("[data-puzzle-title]");
const puzzleText = document.querySelector("[data-puzzle-text]");

if (puzzleButtons.length && puzzleTitle && puzzleText) {
  const setPuzzle = (key) => {
    puzzleButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.puzzle === key);
    });
    puzzleTitle.textContent = puzzleData[key].title;
    puzzleText.textContent = puzzleData[key].text;
  };

  puzzleButtons.forEach((button) => {
    button.addEventListener("click", () => setPuzzle(button.dataset.puzzle));
  });

  setPuzzle("planA");
}

const mythData = {
  stress: {
    title: "Myth: A fourth year only adds stress.",
    text: "Fact: Applied options reduce pressure while building real-life problem solving.",
  },
  schedule: {
    title: "Myth: The schedule will not fit.",
    text: "Fact: Flexible pathways keep electives while meeting math goals.",
  },
  benefit: {
    title: "Myth: Only college-bound students benefit.",
    text: "Fact: Data literacy and budgeting skills help every student.",
  },
};

const mythButtons = document.querySelectorAll("[data-myth]");
const mythTitle = document.querySelector("[data-myth-title]");
const mythText = document.querySelector("[data-myth-text]");

if (mythButtons.length && mythTitle && mythText) {
  const setMyth = (key) => {
    mythButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.myth === key);
    });
    mythTitle.textContent = mythData[key].title;
    mythText.textContent = mythData[key].text;
  };

  mythButtons.forEach((button) => {
    button.addEventListener("click", () => setMyth(button.dataset.myth));
  });

  setMyth("stress");
}

const courseTakenCheckboxes = document.querySelectorAll("[data-course-taken]");
const recoModeButtons = document.querySelectorAll("[data-reco-mode]");
const modePanels = document.querySelectorAll("[data-mode-panel]");
const discoverQuestions = document.querySelectorAll("[data-discover-step]");
const discoverStepLabel = document.querySelector("[data-discover-step-label]");
const discoverPrevButton = document.querySelector("[data-discover-prev]");
const discoverNextButton = document.querySelector("[data-discover-next]");
const openAnswerInputs = document.querySelectorAll("[data-open-answer]");
const demoButtons = document.querySelectorAll("[data-demo]");
const demoBody = document.querySelector("[data-demo-body]");
const pathSummary = document.querySelector("[data-path-summary]");
const pathProgress = document.querySelector("[data-path-progress]");
const pathGrade = document.querySelectorAll("[data-path-grade]");
const clusterTitle = document.querySelector("[data-cluster-title]");
const clusterSummary = document.querySelector("[data-cluster-summary]");
const clusterTasks = document.querySelector("[data-cluster-tasks]");
const clusterSkills = document.querySelector("[data-cluster-skills]");
const clusterCourses = document.querySelector("[data-cluster-courses]");

const clusterProfiles = {
  stem: {
    name: "STEM and Engineering",
    summary: "Great fit for analytical, systems-focused problem solving.",
    tasks: [
      "Model systems and test solutions",
      "Use data to improve performance",
      "Design and troubleshoot technical processes",
    ],
    skills: [
      "Functions and algebraic modeling",
      "Calculus-style rate of change thinking",
      "Data interpretation and precision",
    ],
    classes: ["Pre-Calculus", "AP Calculus AB/BC", "Statistics", "Computer Science Math"],
  },
  health: {
    name: "Health and Medical Services",
    summary: "Strong fit for evidence-based decisions with people-centered impact.",
    tasks: [
      "Interpret patient or population data",
      "Calculate dosage and risk values",
      "Compare treatment outcomes",
    ],
    skills: [
      "Statistics and probability",
      "Ratios, percentages, and conversions",
      "Reading research graphs and trends",
    ],
    classes: ["Statistics", "Applied Math", "Quantitative Reasoning", "Medical Math"],
  },
  business: {
    name: "Business and Finance",
    summary: "Strong fit for planning, forecasting, and strategic decisions.",
    tasks: [
      "Build budgets and financial plans",
      "Analyze cost versus benefit",
      "Forecast trends and risk",
    ],
    skills: [
      "Financial literacy and interest math",
      "Statistical trend reading",
      "Optimization and tradeoff logic",
    ],
    classes: ["Financial Math", "Statistics", "Consumer Finance", "Accounting Math"],
  },
  trades: {
    name: "Trades and Technical Fields",
    summary: "Best fit for hands-on precision and practical problem solving.",
    tasks: [
      "Measure and estimate materials",
      "Read blueprints and layouts",
      "Troubleshoot with step-by-step logic",
    ],
    skills: [
      "Geometry and spatial reasoning",
      "Unit conversion and measurement accuracy",
      "Applied algebra in technical settings",
    ],
    classes: ["Geometry", "Technical Math", "Algebra II", "Blueprint Math"],
  },
  social: {
    name: "Social Science and Communication",
    summary: "Good fit for people-focused work that uses data and clear reasoning.",
    tasks: [
      "Evaluate survey and community data",
      "Communicate evidence clearly",
      "Support decisions with measurable outcomes",
    ],
    skills: [
      "Data literacy and graph interpretation",
      "Percent change and trend analysis",
      "Evidence-based argumentation",
    ],
    classes: ["Statistics", "Data Literacy", "Quantitative Reasoning", "Economics Math"],
  },
  creative: {
    name: "Creative and Design Fields",
    summary: "Strong fit for expressive, idea-driven work that still uses math structure.",
    tasks: [
      "Design visuals, products, or media experiences",
      "Use audience data to improve creative work",
      "Plan projects with timeline and budget constraints",
    ],
    skills: [
      "Ratios, scale, and proportion",
      "Data-informed design decisions",
      "Financial planning for projects",
    ],
    classes: ["Geometry", "Statistics", "Consumer Finance", "Data Literacy"],
  },
};

const keywordMap = {
  stem: [
    "code",
    "coding",
    "engineer",
    "robot",
    "physics",
    "software",
    "system",
    "research",
    "technology",
    "app",
    "website",
    "tech",
    "program",
    "build",
    "math",
  ],
  health: [
    "doctor",
    "nurse",
    "health",
    "medical",
    "patient",
    "therapy",
    "clinic",
    "wellness",
    "biology",
    "care",
    "team",
  ],
  business: [
    "business",
    "money",
    "finance",
    "marketing",
    "sales",
    "startup",
    "invest",
    "budget",
    "profit",
    "strategy",
    "plan",
  ],
  trades: [
    "build",
    "repair",
    "construction",
    "electrician",
    "mechanic",
    "hands-on",
    "tool",
    "machine",
    "welding",
    "blueprint",
    "fix",
    "tool",
  ],
  social: [
    "teacher",
    "law",
    "lawyer",
    "counselor",
    "community",
    "policy",
    "justice",
    "communication",
    "psychology",
    "help",
    "explain",
  ],
  creative: [
    "design",
    "art",
    "music",
    "video",
    "film",
    "writing",
    "brand",
    "fashion",
    "creative",
    "animation",
    "art",
    "make",
  ],
};

const mathKeywordMap = {
  stem: ["equation", "function", "formula", "graph", "model", "rate", "system"],
  health: ["statistics", "probability", "percent", "ratio", "data", "chart", "evidence"],
  business: ["budget", "interest", "money", "cost", "profit", "loan", "plan"],
  trades: ["measure", "measurement", "scale", "angle", "blueprint", "ruler", "tool"],
  social: ["survey", "data", "trend", "evidence", "graph", "chart", "people"],
  creative: ["shape", "pattern", "design", "symmetry", "ratio", "grid", "layout"],
};

const openAnswers = {
  dreamDay: "",
  favoriteProblems: "",
  confidenceTools: "",
  impact: "",
  mathIdeas: "",
  futureVision: "",
};

let selectedMode = "discover";
let discoverStep = 1;

const getTakenCourses = () =>
  Array.from(courseTakenCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

const addCourseBonus = (scores, takenCourses) => {
  if (takenCourses.includes("stats")) {
    scores.health += 1;
    scores.business += 1;
    scores.social += 1;
    scores.creative += 1;
  }
  if (
    takenCourses.includes("precalc") ||
    takenCourses.includes("apcalcab") ||
    takenCourses.includes("apcalcbc") ||
    takenCourses.includes("collegecalc3") ||
    takenCourses.includes("linear")
  ) {
    scores.stem += 2;
  }
  if (takenCourses.includes("geometry")) {
    scores.trades += 2;
    scores.creative += 1;
  }
  if (takenCourses.includes("algebra2")) {
    scores.stem += 1;
    scores.business += 1;
  }
};

const scoreFromText = (scores, text) => {
  const normalized = text.toLowerCase();
  Object.entries(keywordMap).forEach(([cluster, keywords]) => {
    keywords.forEach((keyword) => {
      if (normalized.includes(keyword)) {
        scores[cluster] += 1;
      }
    });
  });

  Object.entries(mathKeywordMap).forEach(([cluster, keywords]) => {
    keywords.forEach((keyword) => {
      if (normalized.includes(keyword)) {
        scores[cluster] += 2;
      }
    });
  });
};

const getBestCluster = (takenCourses) => {
  const scores = {
    stem: 0,
    health: 0,
    business: 0,
    trades: 0,
    social: 0,
    creative: 0,
  };

  Object.values(openAnswers).forEach((answerText) => {
    if (answerText.trim().length > 0) {
      scoreFromText(scores, answerText);
    }
  });

  addCourseBonus(scores, takenCourses);

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
};

const renderList = (element, items) => {
  if (!element) {
    return;
  }
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
};

const updateClusterRecommendation = () => {
  if (selectedMode !== "discover") {
    if (pathSummary) {
      pathSummary.textContent = "Explore sample pathways below, or switch back to Discover for a personalized match.";
    }
    if (pathProgress) {
      pathProgress.style.width = "35%";
    }
    pathGrade.forEach((element) => {
      element.textContent = "--";
    });
    return;
  }

  const takenCourses = getTakenCourses();
  const answeredCount = Object.values(openAnswers).filter(
    (answerText) => answerText.trim().length > 0
  ).length;

  if (answeredCount === 0) {
    if (clusterTitle) {
      clusterTitle.textContent = "Complete at least one question to see your match";
    }
    if (clusterSummary) {
      clusterSummary.textContent = "Your responses will map to a likely career cluster and aligned math classes.";

    }

    return;

  const formatMoney = (value) =>
    `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

  const getNumberValue = (root, selector) => {
    const input = root.querySelector(selector);
    return Number(input?.value) || 0;
  };

  const clampMinimum = (value, minimum) => Math.max(Number.isFinite(value) ? value : 0, minimum);

  const updateShoppingWidget = (root) => {
    const price = clampMinimum(getNumberValue(root, "[data-shopping-price]"), 0);
    const discount = clampMinimum(getNumberValue(root, "[data-shopping-discount]"), 0);
    const tax = clampMinimum(getNumberValue(root, "[data-shopping-tax]"), 0);
    const budget = clampMinimum(getNumberValue(root, "[data-shopping-budget]"), 0);
    const discounted = price * (1 - discount / 100);
    const total = discounted * (1 + tax / 100);
    const savings = price - discounted;
    const balance = budget - total;
    const output = root.querySelector("[data-shopping-output]");

    if (output) {
      output.textContent = `${formatMoney(total)} total after discount and tax. You save ${formatMoney(savings)} and are ${balance >= 0 ? `${formatMoney(balance)} under budget` : `${formatMoney(Math.abs(balance))} over budget`}.`;
    }
  };

  const updateSportsWidget = (root) => {
    const points = clampMinimum(getNumberValue(root, "[data-sports-points]"), 0);
    const gamesPlayed = clampMinimum(getNumberValue(root, "[data-sports-played]"), 1);
    const gamesLeft = clampMinimum(getNumberValue(root, "[data-sports-left]"), 0);
    const average = points / gamesPlayed;
    const projected = average * (gamesPlayed + gamesLeft);
    const output = root.querySelector("[data-sports-output]");

    if (output) {
      output.textContent = `Average: ${average.toFixed(1)} points per game. Projected total if that pace continues: ${projected.toFixed(0)} points.`;
    }
  };

  const updateBuildingWidget = (root) => {
    const length = clampMinimum(getNumberValue(root, "[data-building-length]"), 0);
    const width = clampMinimum(getNumberValue(root, "[data-building-width]"), 0);
    const area = length * width;
    const perimeter = 2 * (length + width);
    const output = root.querySelector("[data-building-output]");

    if (output) {
      output.textContent = `Area: ${area.toFixed(1)} sq ft. Perimeter: ${perimeter.toFixed(1)} ft.`;
    }
  };

  const updateHealthWidget = (root) => {
    const weight = clampMinimum(getNumberValue(root, "[data-health-weight]"), 0);
    const rate = clampMinimum(getNumberValue(root, "[data-health-rate]"), 0);
    const dose = weight * rate;
    const output = root.querySelector("[data-health-output]");

    if (output) {
      output.textContent = `Educational practice dose: ${dose.toFixed(1)} mg. This is a math example, not medical advice.`;
    }
  };

  const updateAppsWidget = (root) => {
    const minutesPerDay = clampMinimum(getNumberValue(root, "[data-apps-minutes]"), 0);
    const daysPerWeek = clampMinimum(getNumberValue(root, "[data-apps-days]"), 0);
    const weeklyMinutes = minutesPerDay * daysPerWeek;
    const weeklyHours = weeklyMinutes / 60;
    const percentOfWeek = (weeklyMinutes / (7 * 24 * 60)) * 100;
    const output = root.querySelector("[data-apps-output]");

    if (output) {
      output.textContent = `${weeklyHours.toFixed(1)} hours per week, which is ${percentOfWeek.toFixed(1)}% of the week.`;
    }
  };

  const updateTravelWidget = (root) => {
    const distance = clampMinimum(getNumberValue(root, "[data-travel-distance]"), 0);
    const speed = clampMinimum(getNumberValue(root, "[data-travel-speed]"), 0.1);
    const stops = clampMinimum(getNumberValue(root, "[data-travel-stops]"), 0);
    const driveHours = distance / speed;
    const totalHours = driveHours + stops / 60;
    const totalMinutes = Math.round(totalHours * 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const output = root.querySelector("[data-travel-output]");

    if (output) {
      output.textContent = `Estimated trip time: ${hours}h ${minutes}m total, including stops.`;
    }
  };

  const updateCookingWidget = (root) => {
    const originalServings = clampMinimum(getNumberValue(root, "[data-cooking-original]"), 1);
    const targetServings = clampMinimum(getNumberValue(root, "[data-cooking-target]"), 1);
    const scale = targetServings / originalServings;
    const flour = clampMinimum(getNumberValue(root, "[data-cooking-flour]"), 0) * scale;
    const milk = clampMinimum(getNumberValue(root, "[data-cooking-milk]"), 0) * scale;
    const sugar = clampMinimum(getNumberValue(root, "[data-cooking-sugar]"), 0) * scale;
    const output = root.querySelector("[data-cooking-output]");

    if (output) {
      output.textContent = `Scale factor: ${scale.toFixed(2)}x. New amounts: ${flour.toFixed(2)} cups flour, ${milk.toFixed(2)} cups milk, ${sugar.toFixed(2)} cups sugar.`;
    }
  };

  const updateBillsWidget = (root) => {
    const planA = clampMinimum(getNumberValue(root, "[data-bills-plan-a]"), 0);
    const planB = clampMinimum(getNumberValue(root, "[data-bills-plan-b]"), 0);
    const yearlyA = planA * 12;
    const yearlyB = planB * 12;
    const difference = Math.abs(yearlyA - yearlyB);
    const winner = yearlyA === yearlyB ? "Both plans cost the same each year." : `${yearlyA < yearlyB ? "Plan A" : "Plan B"} is cheaper by ${formatMoney(difference)} per year.`;
    const output = root.querySelector("[data-bills-output]");

    if (output) {
      output.textContent = `Plan A: ${formatMoney(yearlyA)} per year. Plan B: ${formatMoney(yearlyB)} per year. ${winner}`;
    }
  };

  const updateInvestmentWidget = (root) => {
    const principal = clampMinimum(getNumberValue(root, "[data-invest-principal]"), 0);
    const contribution = clampMinimum(getNumberValue(root, "[data-invest-contribution]"), 0);
    const rate = clampMinimum(getNumberValue(root, "[data-invest-rate]"), 0);
    const years = clampMinimum(getNumberValue(root, "[data-invest-years]"), 0);
    const monthlyRate = rate / 1200;
    const periods = Math.round(years * 12);
    const futurePrincipal = principal * Math.pow(1 + monthlyRate, periods);
    const futureContributions = monthlyRate === 0
      ? contribution * periods
      : contribution * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate);
    const future = futurePrincipal + futureContributions;
    const output = root.querySelector("[data-invest-output]");

    if (output) {
      output.textContent = `Future value: ${formatMoney(future)}. Total contributed: ${formatMoney(principal + contribution * periods)}.`;
    }
  };

  const demoWidgets = {
    shopping: {
      body: `
        <div class="playground-widget">
          <h3>Shopping & budgeting</h3>
          <p>Compare prices, calculate discounts, estimate tax, and decide what fits your budget before you buy.</p>
          <div class="calc-grid">
            <label>Original price ($)<input type="number" min="0" value="80" data-shopping-price /></label>
            <label>Discount (%)<input type="number" min="0" step="0.5" value="15" data-shopping-discount /></label>
            <label>Tax (%)<input type="number" min="0" step="0.1" value="8" data-shopping-tax /></label>
            <label>Budget ($)<input type="number" min="0" value="100" data-shopping-budget /></label>
          </div>
          <div class="calc-output" data-shopping-output></div>
        </div>
      `,
      update: updateShoppingWidget,
    },
    sports: {
      body: `
        <div class="playground-widget">
          <h3>Sports stats</h3>
          <p>Track scores, compare averages, and spot patterns in performance so you can make smarter decisions.</p>
          <div class="calc-grid">
            <label>Total points so far<input type="number" min="0" value="96" data-sports-points /></label>
            <label>Games played<input type="number" min="1" value="8" data-sports-played /></label>
            <label>Games left<input type="number" min="0" value="4" data-sports-left /></label>
          </div>
          <div class="calc-output" data-sports-output></div>
        </div>
      `,
      update: updateSportsWidget,
    },
    building: {
      body: `
        <div class="playground-widget">
          <h3>Building & measuring</h3>
          <p>Measure materials, estimate space, and make sure a project actually fits before you start.</p>
          <div class="calc-grid">
            <label>Length (ft)<input type="number" min="0" step="0.1" value="12" data-building-length /></label>
            <label>Width (ft)<input type="number" min="0" step="0.1" value="9" data-building-width /></label>
          </div>
          <div class="calc-output" data-building-output></div>
        </div>
      `,
      update: updateBuildingWidget,
    },
    health: {
      body: `
        <div class="playground-widget">
          <h3>Health & care</h3>
          <p>Use a ratio to practice dosage math and understand how numbers connect to safer choices.</p>
          <div class="calc-grid">
            <label>Weight (kg)<input type="number" min="0" step="0.1" value="55" data-health-weight /></label>
            <label>Dose rate (mg per kg)<input type="number" min="0" step="0.1" value="2" data-health-rate /></label>
          </div>
          <div class="calc-output" data-health-output></div>
        </div>
      `,
      update: updateHealthWidget,
    },
    apps: {
      body: `
        <div class="playground-widget">
          <h3>Apps & games</h3>
          <p>Track screen time and see how daily use adds up across a whole week.</p>
          <div class="calc-grid">
            <label>Minutes per day<input type="number" min="0" value="90" data-apps-minutes /></label>
            <label>Days per week<input type="number" min="0" max="7" value="5" data-apps-days /></label>
          </div>
          <div class="calc-output" data-apps-output></div>
        </div>
      `,
      update: updateAppsWidget,
    },
    travel: {
      body: `
        <div class="playground-widget">
          <h3>Travel & timing</h3>
          <p>Estimate arrival times, compare gas costs, and plan routes so trips stay on track.</p>
          <div class="calc-grid">
            <label>Distance (miles)<input type="number" min="0" step="0.1" value="120" data-travel-distance /></label>
            <label>Average speed (mph)<input type="number" min="1" step="0.1" value="60" data-travel-speed /></label>
            <label>Stop time (minutes)<input type="number" min="0" step="1" value="20" data-travel-stops /></label>
          </div>
          <div class="calc-output" data-travel-output></div>
        </div>
      `,
      update: updateTravelWidget,
    },
    cooking: {
      body: `
        <div class="playground-widget">
          <h3>Cooking & recipes</h3>
          <p>Scale ingredients, measure portions, and adjust servings without guessing.</p>
          <div class="calc-grid">
            <label>Original servings<input type="number" min="1" value="4" data-cooking-original /></label>
            <label>Target servings<input type="number" min="1" value="6" data-cooking-target /></label>
            <label>Flour (cups)<input type="number" min="0" step="0.25" value="2" data-cooking-flour /></label>
            <label>Milk (cups)<input type="number" min="0" step="0.25" value="1.5" data-cooking-milk /></label>
            <label>Sugar (cups)<input type="number" min="0" step="0.25" value="0.5" data-cooking-sugar /></label>
          </div>
          <div class="calc-output" data-cooking-output></div>
        </div>
      `,
      update: updateCookingWidget,
    },
    bills: {
      body: `
        <div class="playground-widget">
          <h3>Bills & subscriptions</h3>
          <p>Compare monthly plans so hidden costs do not surprise you later.</p>
          <div class="calc-grid">
            <label>Plan A monthly cost ($)<input type="number" min="0" step="0.01" value="45" data-bills-plan-a /></label>
            <label>Plan B monthly cost ($)<input type="number" min="0" step="0.01" value="52" data-bills-plan-b /></label>
          </div>
          <div class="calc-output" data-bills-output></div>
        </div>
      `,
      update: updateBillsWidget,
    },
    investment: {
      body: `
        <div class="playground-widget">
          <h3>Investment & growth</h3>
          <p>Adjust the numbers to see how steady investing grows over time.</p>
          <div class="calc-grid">
            <label>Starting amount ($)<input type="number" min="0" value="500" data-invest-principal /></label>
            <label>Monthly contribution ($)<input type="number" min="0" value="100" data-invest-contribution /></label>
            <label>Annual rate (%)<input type="number" min="0" step="0.1" value="6" data-invest-rate /></label>
            <label>Years<input type="number" min="0" value="10" data-invest-years /></label>
          </div>
          <div class="calc-output" data-invest-output></div>
        </div>
      `,
      update: updateInvestmentWidget,
    },
  };

  let activeDemoKey = "shopping";

  const renderDemoWidget = (key) => {
    if (!demoBody || !demoWidgets[key]) {
      return;
    }

    demoBody.innerHTML = demoWidgets[key].body;
    demoWidgets[key].update(demoBody);
  };

  const updateActiveDemoWidget = () => {
    if (!demoBody || !demoWidgets[activeDemoKey]) {
      return;
    }

    demoWidgets[activeDemoKey].update(demoBody);
  };

  const setDemo = (key) => {
    activeDemoKey = key;

    demoButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.demo === key);
      button.setAttribute("aria-pressed", String(button.dataset.demo === key));
    });

    renderDemoWidget(key);
  };

  if (demoBody) {
    demoBody.addEventListener("input", updateActiveDemoWidget);
  }

  pathGrade.forEach((element) => {
    element.textContent = `${fitScore}%`;
  });
};

const renderDiscoverStep = () => {
  discoverQuestions.forEach((panel) => {
    panel.classList.toggle(
      "active",
      Number(panel.dataset.discoverStep) === discoverStep
    );
  });

  if (discoverStepLabel) {
    discoverStepLabel.textContent = `Question ${discoverStep} of 6`;
  }

  if (discoverPrevButton) {
    discoverPrevButton.disabled = discoverStep === 1;
  }

  if (discoverNextButton) {
    discoverNextButton.textContent = discoverStep === 6 ? "See results" : "Next";
  }
};

const setRecoMode = (mode) => {
  selectedMode = mode;

  recoModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.recoMode === mode);
  });

  modePanels.forEach((panel) => {
    panel.hidden = panel.dataset.modePanel !== mode;
  });

  updateClusterRecommendation();
};

if (
  courseTakenCheckboxes.length &&
  recoModeButtons.length &&
  clusterTitle &&
  clusterSummary
) {
  recoModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setRecoMode(button.dataset.recoMode);
    });
  });

  openAnswerInputs.forEach((input) => {
    input.addEventListener("input", () => {
      openAnswers[input.dataset.openAnswer] = input.value;
      updateClusterRecommendation();
    });
  });

  courseTakenCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateClusterRecommendation);
  });

  if (discoverPrevButton) {
    discoverPrevButton.addEventListener("click", () => {
      discoverStep = Math.max(1, discoverStep - 1);
      renderDiscoverStep();
    });
  }

  if (discoverNextButton) {
    discoverNextButton.addEventListener("click", () => {
      if (discoverStep < 6) {
        discoverStep += 1;
        renderDiscoverStep();
      } else {
        updateClusterRecommendation();
      }
    });
  }

  demoButtons.forEach((button) => {
    button.addEventListener("click", () => setDemo(button.dataset.demo));
  });

  renderDiscoverStep();
  setRecoMode("discover");
  if (demoButtons.length) {
    setDemo("shopping");
  }

  updateClusterRecommendation();
}
}
