export type ProjectStatus =
  | "Personal Project"
  | "Academic Project"
  | "Professional Project";

export type ProjectDetailSection = {
  label: string;
  value: string;
  tags?: string[];
};

export type ProjectEntry = {
  slug: string;
  title: string;
  category: "Financial Project" | "Other Project";
  status: ProjectStatus;
  goal: string;
  summary: string;
  tags: string[];
  detailSections: ProjectDetailSection[];
};

export const projects: ProjectEntry[] = [
  {
    slug: "cryptocurrency-heat-classifier",
    title: "Cryptocurrency Heat Classifier",
    category: "Financial Project",
    status: "Personal Project",
    goal: "Classify cryptocurrencies into three categories: overbought, neutral, or undervalued.",
    summary:
      "A classification framework designed to combine market indicators and machine learning signals into a simple positioning view on digital assets.",
    tags: [
      "Python",
      "Machine Learning",
      "Market Indicators",
      "Multi-Classifier",
      "Random Forest",
      "Time Series",
    ],
    detailSections: [
      { label: "Context", value: "Personal Project" },
      {
        label: "Main Goal",
        value:
          "Goal: Classify cryptocurrencies into 3 categories: Overbought / Neutral / Undervalued.",
      },
      {
        label: "Use",
        value:
          "Personal use to improve my long-term entry/exit strategies and reduce emotional decision-making.",
      },
      {
        label: "Key skills",
        value: "",
        tags: [
          "Python",
          "Machine Learning",
          "Market Indicators",
          "Multi-Classifier",
          "RandomForest",
          "Time Series",
        ],
      },
      {
        label: "Description",
        value:
          "Developed a machine learning classification model for cryptocurrencies using financial indicators and technical analysis.\nCollected and engineered feature data, then calculated market indicators such as RSI, moving averages (SMA/EMA), transaction volumes, and price changes across multiple timeframes to serve as inputs.\nTrained and evaluated supervised learning models including Logistic Regression, Naive Bayes, Decision Trees, and Random Forests, using K-Fold cross-validation to ensure robustness.\nAddressed class imbalance (bullish/bearish vs. neutral trends) through SMOTE oversampling and optimized model performance using the macro F1-score.\nRandom Forest was selected as the final model due to its superior performance in capturing non-linear relationships across all classes.",
      },
      {
        label: "Pipeline",
        value:
          "Data Acquisition -> Feature Engineering -> Data Preprocessing -> Model Training & Evaluation -> Model Selection -> Prediction Model",
      },
    ],
  },
  {
    slug: "defi-liquidation-risk-simulator",
    title: "DeFi Liquidation Risk Simulator",
    category: "Financial Project",
    status: "Personal Project",
    goal: "Estimate the liquidation risk of a DeFi borrowing position using stochastic modeling and Monte Carlo methods.",
    summary:
      "A risk-oriented simulation project focused on downside scenarios, liquidation thresholds, and volatility-driven position sensitivity.",
    tags: [
      "Python",
      "DeFi",
      "Geometric Brownian Motion",
      "Monte Carlo",
      "Market Indicators",
    ],
    detailSections: [
      { label: "Context", value: "Personal Project" },
      {
        label: "Main Goal",
        value:
          "Goal: Estimate the liquidation risk of a DeFi borrowing position using stochastic model and Monte Carlo methods.",
      },
      {
        label: "Use",
        value:
          "Personal use to understand how much I can safely borrow based on the risk I'm willing to accept.",
      },
      {
        label: "Key skills",
        value: "",
        tags: [
          "Python",
          "DeFi",
          "Geometric Brownian Motion (GBM)",
          "Monte Carlo Simulation",
          "Market Indicators",
        ],
      },
      {
        label: "Description",
        value:
          "Built a Python-based simulation tool that models crypto price evolution using Geometric Brownian Motion (GBM), the standard in financial modeling for stochastic asset paths.\nUtilized Monte Carlo simulation to generate thousands of possible price trajectories for ETH, estimating the probability of a DeFi loan being liquidated by computing the Health Factor at each iteration.\nIncluded risk metrics like annual volatility (sigma), expected return (mu) via CAPM, and tracked real-time market prices via yfinance.\nVisualized both the distribution of final prices and the health factor evolution to interpret risk under varied market conditions.",
      },
      {
        label: "Pipeline",
        value:
          "Data Acquisition -> Volatility Estimation -> Position Modeling -> Monte Carlo Simulation -> Liquidation Risk Analysis -> Visualization",
      },
    ],
  },
  {
    slug: "electricity-purchase-optimizer",
    title: "Electricity Purchase Optimizer",
    category: "Financial Project",
    status: "Academic Project",
    goal: "Forecast electricity prices to support optimized purchasing decisions.",
    summary:
      "A time-series forecasting project mixing econometric and deep-learning approaches to improve procurement timing and pricing decisions.",
    tags: [
      "Python",
      "Deep Learning",
      "Linear Regression",
      "Time Series",
      "ARIMA",
      "GRU",
    ],
    detailSections: [
      { label: "Context", value: "Academic Project" },
      {
        label: "Main Goal",
        value:
          "Goal: Forecast electricity prices to optimize the electricity purchase decisions.",
      },
      {
        label: "Use",
        value:
          "TerritoireEnergie, the second-largest buyer of EDF's electricity, wants to optimize its electricity purchases.",
      },
      {
        label: "Key skills",
        value: "",
        tags: [
          "Python",
          "Deep Learning",
          "Linear Regression",
          "Time Series",
          "ARIMA",
          "FineTuning / GRU",
        ],
      },
      {
        label: "Description",
        value:
          "This project focused on forecasting electricity prices to support optimal purchasing decisions for Territoire d'Energie Gard. The objective was to predict future prices and help identify the best time to buy electricity in a volatile market environment.\nFramed as a supervised time series regression problem, the model uses the past 30 days of prices to forecast the next 15 days. The dataset consists of daily French electricity prices from 2012 to 2024.\nTo tackle this challenge, I implemented and compared three approaches:\n- A statistical baseline (ARIMA) with seasonal decomposition\n- A state-of-the-art pretrained transformer (Chronos), evaluated in both zero-shot and fine-tuned settings\n- A custom deep learning model based on GRU, designed to capture nonlinear temporal dependencies\nThe GRU architecture combined sequence modeling with careful preprocessing (normalization and sliding windows), while Chronos leveraged large-scale pretraining on time series data.",
      },
      {
        label: "Pipeline",
        value:
          "Data Collection -> Cleaning & Windowing -> Baseline Modeling -> Deep Learning / Transformer Modeling -> Evaluation -> Forecasting Support",
      },
    ],
  },
  {
    slug: "rag-assisted-admissions-chatbot-agent",
    title: "RAG-Assisted Admissions Chatbot Agent",
    category: "Other Project",
    status: "Professional Project",
    goal: "Implement an intelligent, context-aware chatbot able to respond to user queries about the EDH platform with speed and accuracy.",
    summary:
      "A retrieval-augmented assistant designed to improve user guidance, response quality, and operational support for a higher-education platform.",
    tags: [
      "Python",
      "LangChain",
      "LangSmith",
      "RAG",
      "LLM",
      "Monitoring",
      "Vector Database",
      "Flask",
      "REST API",
    ],
    detailSections: [
      { label: "Context", value: "Professional Project" },
      {
        label: "Main Goal",
        value:
          "Goal: Build a context-aware admissions assistant able to answer platform-related questions accurately and efficiently.",
      },
      {
        label: "Use",
        value:
          "Professional use to reduce support friction, improve response consistency, and accelerate guidance for users of the EDH platform.",
      },
      {
        label: "Key skills",
        value: "",
        tags: [
          "Python",
          "LangChain",
          "LangSmith",
          "RAG",
          "LLM",
          "Monitoring",
          "Vector Database",
          "Flask",
          "REST API",
        ],
      },
      {
        label: "Description",
        value:
          "Designed and implemented a retrieval-augmented chatbot to answer questions related to admissions and platform workflows.\nStructured the pipeline around document retrieval, prompt orchestration, response quality monitoring, and API exposure.\nThe system was designed to improve relevance, reduce hallucinations, and provide a more reliable support experience for platform users.",
      },
      {
        label: "Pipeline",
        value:
          "Knowledge Base Structuring -> Retrieval Pipeline -> Prompt Design -> API Integration -> Monitoring -> Iterative Improvement",
      },
    ],
  },
  {
    slug: "smart-contract-deployment-on-ethereum",
    title: "Smart Contract Deployment on Ethereum",
    category: "Other Project",
    status: "Personal Project",
    goal: "Develop and deploy ERC-20 and ERC-721 smart contracts on an Ethereum testnet using Solidity.",
    summary:
      "A blockchain implementation project covering token standards, wallet interaction, and application integration with a web interface.",
    tags: [
      "Solidity",
      "Blockchain",
      "Ethereum",
      "MetaMask",
      "Smart Contract",
      "Flask",
    ],
    detailSections: [
      { label: "Context", value: "Personal Project" },
      {
        label: "Main Goal",
        value:
          "Goal: Develop and deploy ERC-20 and ERC-721 smart contracts on an Ethereum testnet using Solidity.",
      },
      {
        label: "Use",
        value:
          "Personal use to understand blockchain application design, token standards, and wallet-based interactions.",
      },
      {
        label: "Key skills",
        value: "",
        tags: [
          "Solidity",
          "Blockchain",
          "Ethereum",
          "MetaMask",
          "Smart Contract",
          "Flask",
        ],
      },
      {
        label: "Description",
        value:
          "Built and deployed ERC-20 and ERC-721 smart contracts in a testnet environment to explore fungible and non-fungible token standards.\nIntegrated wallet interaction and a lightweight web interface to test end-to-end contract behavior.\nThis project helped strengthen my understanding of decentralized application architecture and blockchain execution logic.",
      },
      {
        label: "Pipeline",
        value:
          "Contract Design -> Solidity Development -> Testnet Deployment -> Wallet Integration -> Interface Testing",
      },
    ],
  },
];

export const financialProjects = projects.filter(
  (project) => project.category === "Financial Project",
);

export const otherProjects = projects.filter(
  (project) => project.category === "Other Project",
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
