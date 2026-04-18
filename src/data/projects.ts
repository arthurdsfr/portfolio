import type { Locale } from "@/components/language-provider";

export type LocalizedText = Record<Locale, string>;

export type ProjectStatus =
  | "Personal Project"
  | "Academic Project"
  | "Professional Project";

export type LocalizedProjectStatus = Record<Locale, string>;

export type ProjectDetailSection = {
  key: "context" | "mainGoal" | "use" | "keySkills" | "description" | "pipeline";
  label: LocalizedText;
  value: LocalizedText;
  tags?: string[];
};

export type ProjectEntry = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  status: LocalizedProjectStatus;
  goal: LocalizedText;
  summary: LocalizedText;
  tags: string[];
  detailSections: ProjectDetailSection[];
};

export const projects: ProjectEntry[] = [
  {
    slug: "cryptocurrency-heat-classifier",
    title: {
      en: "Cryptocurrency Heat Classifier",
      fr: "Classifieur de Signal pour Cryptomonnaies",
    },
    category: {
      en: "Financial Project",
      fr: "Projet financier",
    },
    status: {
      en: "Personal Project",
      fr: "Projet personnel",
    },
    goal: {
      en: "Classify cryptocurrencies into three categories: overbought, neutral, or undervalued.",
      fr: "Classer les cryptomonnaies en trois catégories : surachetées, neutres ou sous-évaluées.",
    },
    summary: {
      en: "A classification framework designed to combine market indicators and machine learning signals into a simple positioning view on digital assets.",
      fr: "Un cadre de classification combinant indicateurs de marché et signaux de machine learning afin de produire une lecture synthétique du positionnement sur les actifs numériques.",
    },
    tags: [
      "Python",
      "Machine Learning",
      "Market Indicators",
      "Multi-Classifier",
      "RandomForest",
      "Time Series",
    ],
    detailSections: [
      {
        key: "context",
        label: { en: "Context", fr: "Contexte" },
        value: { en: "Personal Project", fr: "Projet personnel" },
      },
      {
        key: "mainGoal",
        label: { en: "Main Goal", fr: "Objectif principal" },
        value: {
          en: "Goal: Classify cryptocurrencies into 3 categories: Overbought / Neutral / Undervalued.",
          fr: "Objectif : classer les cryptomonnaies en 3 catégories : surachetées / neutres / sous-évaluées.",
        },
      },
      {
        key: "use",
        label: { en: "Use", fr: "Usage" },
        value: {
          en: "Personal use to improve my long-term entry/exit strategies and reduce emotional decision-making.",
          fr: "Usage personnel pour améliorer mes stratégies d'entrée/sortie de long terme et réduire la prise de décision émotionnelle.",
        },
      },
      {
        key: "keySkills",
        label: { en: "Key skills", fr: "Compétences clés" },
        value: { en: "", fr: "" },
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
        key: "description",
        label: { en: "Description", fr: "Description" },
        value: {
          en: "Developed a machine learning classification model for cryptocurrencies using financial indicators and technical analysis.\nCollected and engineered feature data, then calculated market indicators such as RSI, moving averages (SMA/EMA), transaction volumes, and price changes across multiple timeframes to serve as inputs.\nTrained and evaluated supervised learning models including Logistic Regression, Naive Bayes, Decision Trees, and Random Forests, using K-Fold cross-validation to ensure robustness.\nAddressed class imbalance (bullish/bearish vs. neutral trends) through SMOTE oversampling and optimized model performance using the macro F1-score.\nRandom Forest was selected as the final model due to its superior performance in capturing non-linear relationships across all classes.",
          fr: "Développement d'un modèle de classification en machine learning appliqué aux cryptomonnaies à partir d'indicateurs financiers et d'analyse technique.\nJ'ai collecté et construit les variables d'entrée, puis calculé des indicateurs de marché tels que le RSI, les moyennes mobiles (SMA/EMA), les volumes de transaction et les variations de prix sur plusieurs horizons temporels.\nJ'ai entraîné et évalué plusieurs modèles supervisés, notamment la régression logistique, le Naive Bayes, les arbres de décision et les Random Forests, avec validation croisée K-Fold pour assurer la robustesse.\nJ'ai traité le déséquilibre de classes (tendances haussières/baissières vs. neutres) via SMOTE et optimisé la performance avec le score macro F1.\nLe modèle Random Forest a été retenu comme modèle final en raison de sa capacité supérieure à capter des relations non linéaires entre les classes.",
        },
      },
      {
        key: "pipeline",
        label: { en: "Pipeline", fr: "Pipeline" },
        value: {
          en: "Data Acquisition -> Feature Engineering -> Data Preprocessing -> Model Training & Evaluation -> Model Selection -> Prediction Model",
          fr: "Acquisition des données -> Feature engineering -> Prétraitement -> Entraînement et évaluation -> Sélection du modèle -> Modèle de prédiction",
        },
      },
    ],
  },
  {
    slug: "defi-liquidation-risk-simulator",
    title: {
      en: "DeFi Liquidation Risk Simulator",
      fr: "Simulateur de Risque de Liquidation DeFi",
    },
    category: {
      en: "Financial Project",
      fr: "Projet financier",
    },
    status: {
      en: "Personal Project",
      fr: "Projet personnel",
    },
    goal: {
      en: "Estimate the liquidation risk of a DeFi borrowing position using stochastic modeling and Monte Carlo methods.",
      fr: "Estimer le risque de liquidation d'une position d'emprunt DeFi à l'aide de la modélisation stochastique et de méthodes de Monte Carlo.",
    },
    summary: {
      en: "A risk-oriented simulation project focused on downside scenarios, liquidation thresholds, and volatility-driven position sensitivity.",
      fr: "Un projet de simulation orienté risque, centré sur les scénarios baissiers, les seuils de liquidation et la sensibilité des positions à la volatilité.",
    },
    tags: [
      "Python",
      "DeFi",
      "Geometric Brownian Motion (GBM)",
      "Monte Carlo Simulation",
      "Market Indicators",
    ],
    detailSections: [
      {
        key: "context",
        label: { en: "Context", fr: "Contexte" },
        value: { en: "Personal Project", fr: "Projet personnel" },
      },
      {
        key: "mainGoal",
        label: { en: "Main Goal", fr: "Objectif principal" },
        value: {
          en: "Goal: Estimate the liquidation risk of a DeFi borrowing position using stochastic model and Monte Carlo methods.",
          fr: "Objectif : estimer le risque de liquidation d'une position d'emprunt DeFi à l'aide d'un modèle stochastique et de méthodes de Monte Carlo.",
        },
      },
      {
        key: "use",
        label: { en: "Use", fr: "Usage" },
        value: {
          en: "Personal use to understand how much I can safely borrow based on the risk I'm willing to accept.",
          fr: "Usage personnel pour comprendre combien je peux emprunter de manière raisonnable en fonction du niveau de risque que je suis prêt à accepter.",
        },
      },
      {
        key: "keySkills",
        label: { en: "Key skills", fr: "Compétences clés" },
        value: { en: "", fr: "" },
        tags: [
          "Python",
          "DeFi",
          "Geometric Brownian Motion (GBM)",
          "Monte Carlo Simulation",
          "Market Indicators",
        ],
      },
      {
        key: "description",
        label: { en: "Description", fr: "Description" },
        value: {
          en: "Built a Python-based simulation tool that models crypto price evolution using Geometric Brownian Motion (GBM), the standard in financial modeling for stochastic asset paths.\nUtilized Monte Carlo simulation to generate thousands of possible price trajectories for ETH, estimating the probability of a DeFi loan being liquidated by computing the Health Factor at each iteration.\nIncluded risk metrics like annual volatility (sigma), expected return (mu) via CAPM, and tracked real-time market prices via yfinance.\nVisualized both the distribution of final prices and the health factor evolution to interpret risk under varied market conditions.",
          fr: "Développement d'un outil de simulation en Python modélisant l'évolution du prix des cryptoactifs via le mouvement brownien géométrique (GBM), standard de la modélisation financière des trajectoires stochastiques.\nJ'ai utilisé la simulation de Monte Carlo pour générer des milliers de trajectoires possibles du prix de l'ETH et estimer la probabilité qu'un prêt DeFi soit liquidé en calculant le Health Factor à chaque itération.\nLe projet intègre des métriques de risque telles que la volatilité annuelle (sigma), le rendement espéré (mu) via le CAPM, ainsi qu'un suivi en temps réel des prix de marché via yfinance.\nJ'ai également visualisé la distribution des prix finaux ainsi que l'évolution du Health Factor afin d'interpréter le risque selon différents contextes de marché.",
        },
      },
      {
        key: "pipeline",
        label: { en: "Pipeline", fr: "Pipeline" },
        value: {
          en: "Data Acquisition -> Volatility Estimation -> Position Modeling -> Monte Carlo Simulation -> Liquidation Risk Analysis -> Visualization",
          fr: "Acquisition des données -> Estimation de la volatilité -> Modélisation de la position -> Simulation de Monte Carlo -> Analyse du risque de liquidation -> Visualisation",
        },
      },
    ],
  },
  {
    slug: "electricity-purchase-optimizer",
    title: {
      en: "Electricity Purchase Optimizer",
      fr: "Optimiseur d'Achat d'Électricité",
    },
    category: {
      en: "Financial Project",
      fr: "Projet financier",
    },
    status: {
      en: "Academic Project",
      fr: "Projet académique",
    },
    goal: {
      en: "Forecast electricity prices to support optimized purchasing decisions.",
      fr: "Prévoir les prix de l'électricité afin d'optimiser les décisions d'achat.",
    },
    summary: {
      en: "A time-series forecasting project mixing econometric and deep-learning approaches to improve procurement timing and pricing decisions.",
      fr: "Un projet de prévision en séries temporelles combinant approches économétriques et deep learning pour améliorer le timing d'achat et les décisions d'approvisionnement.",
    },
    tags: [
      "Python",
      "Deep Learning",
      "Linear Regression",
      "Time Series",
      "ARIMA",
      "FineTuning / GRU",
    ],
    detailSections: [
      {
        key: "context",
        label: { en: "Context", fr: "Contexte" },
        value: { en: "Academic Project", fr: "Projet académique" },
      },
      {
        key: "mainGoal",
        label: { en: "Main Goal", fr: "Objectif principal" },
        value: {
          en: "Goal: Forecast electricity prices to optimize the electricity purchase decisions.",
          fr: "Objectif : prévoir les prix de l'électricité afin d'optimiser les décisions d'achat.",
        },
      },
      {
        key: "use",
        label: { en: "Use", fr: "Usage" },
        value: {
          en: "TerritoireEnergie, the second-largest buyer of EDF's electricity, wants to optimize its electricity purchases.",
          fr: "TerritoireEnergie, deuxième plus grand acheteur de l'électricité d'EDF, souhaite optimiser ses achats d'électricité.",
        },
      },
      {
        key: "keySkills",
        label: { en: "Key skills", fr: "Compétences clés" },
        value: { en: "", fr: "" },
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
        key: "description",
        label: { en: "Description", fr: "Description" },
        value: {
          en: "This project focused on forecasting electricity prices to support optimal purchasing decisions for Territoire d'Energie Gard. The objective was to predict future prices and help identify the best time to buy electricity in a volatile market environment.\nFramed as a supervised time series regression problem, the model uses the past 30 days of prices to forecast the next 15 days. The dataset consists of daily French electricity prices from 2012 to 2024.\nTo tackle this challenge, I implemented and compared three approaches:\n- A statistical baseline (ARIMA) with seasonal decomposition\n- A state-of-the-art pretrained transformer (Chronos), evaluated in both zero-shot and fine-tuned settings\n- A custom deep learning model based on GRU, designed to capture nonlinear temporal dependencies\nThe GRU architecture combined sequence modeling with careful preprocessing (normalization and sliding windows), while Chronos leveraged large-scale pretraining on time series data.",
          fr: "Ce projet portait sur la prévision des prix de l'électricité afin d'appuyer les décisions d'achat optimales pour Territoire d'Énergie Gard. L'objectif était de prédire les prix futurs et d'identifier le meilleur moment pour acheter dans un environnement de marché volatil.\nLe problème a été formulé comme une régression supervisée en séries temporelles : le modèle utilise les 30 derniers jours de prix pour prévoir les 15 jours suivants. Le jeu de données regroupe les prix quotidiens français de l'électricité de 2012 à 2024.\nPour répondre à ce défi, j'ai implémenté et comparé trois approches :\n- une baseline statistique (ARIMA) avec décomposition saisonnière\n- un transformer préentraîné de pointe (Chronos), évalué en zero-shot et en fine-tuning\n- un modèle de deep learning basé sur GRU, conçu pour capter des dépendances temporelles non linéaires\nL'architecture GRU combinait modélisation séquentielle et prétraitement rigoureux (normalisation et fenêtres glissantes), tandis que Chronos tirait parti d'un préentraînement à grande échelle sur des données de séries temporelles.",
        },
      },
      {
        key: "pipeline",
        label: { en: "Pipeline", fr: "Pipeline" },
        value: {
          en: "Data Collection -> Cleaning & Windowing -> Baseline Modeling -> Deep Learning / Transformer Modeling -> Evaluation -> Forecasting Support",
          fr: "Collecte des données -> Nettoyage et fenêtrage -> Modélisation baseline -> Modélisation deep learning / transformer -> Évaluation -> Support à la décision",
        },
      },
    ],
  },
  {
    slug: "rag-assisted-admissions-chatbot-agent",
    title: {
      en: "RAG-Assisted Admissions Chatbot Agent",
      fr: "Agent Conversationnel d'Admission Assisté par RAG",
    },
    category: {
      en: "Other Project",
      fr: "Autre projet",
    },
    status: {
      en: "Professional Project",
      fr: "Projet professionnel",
    },
    goal: {
      en: "Implement an intelligent, context-aware chatbot able to respond to user queries about the EDH platform with speed and accuracy.",
      fr: "Implémenter un chatbot intelligent, sensible au contexte, capable de répondre rapidement et précisément aux questions des utilisateurs sur la plateforme EDH.",
    },
    summary: {
      en: "A retrieval-augmented assistant designed to improve user guidance, response quality, and operational support for a higher-education platform.",
      fr: "Un assistant enrichi par la recherche documentaire, conçu pour améliorer l'accompagnement utilisateur, la qualité des réponses et le support opérationnel d'une plateforme d'enseignement supérieur.",
    },
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
      {
        key: "context",
        label: { en: "Context", fr: "Contexte" },
        value: { en: "Professional Project", fr: "Projet professionnel" },
      },
      {
        key: "mainGoal",
        label: { en: "Main Goal", fr: "Objectif principal" },
        value: {
          en: "Goal: Implementation of an intelligent, context-aware chatbot capable of understanding and responding to user queries about the EDH platform with speed and accuracy.",
          fr: "Objectif : mise en place d'un chatbot intelligent, sensible au contexte, capable de comprendre et de répondre aux questions des utilisateurs sur la plateforme EDH avec rapidité et précision.",
        },
      },
      {
        key: "use",
        label: { en: "Use", fr: "Usage" },
        value: {
          en: "Enable users of the EDH platform to get accurate answers to their questions without needing to contact the IT team.",
          fr: "Permettre aux utilisateurs de la plateforme EDH d'obtenir des réponses précises à leurs questions sans avoir besoin de contacter l'équipe IT.",
        },
      },
      {
        key: "keySkills",
        label: { en: "Key skills", fr: "Compétences clés" },
        value: { en: "", fr: "" },
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
        key: "description",
        label: { en: "Description", fr: "Description" },
        value: {
          en: "I developed a conversational AI system using LangGraph to orchestrate an agentic workflow for handling admissions-related queries across the EDH Group of schools. The system leverages Retrieval-Augmented Generation (RAG) to improve response accuracy by classifying user intent and dynamically retrieving contextually relevant documents through a custom context injection pipeline, before generating responses via OpenAI's GPT models.\nI played a key role in designing and implementing the state graph architecture, where each node in the graph encapsulates function such as intent detection, RAG-based context retrieval, context formatting, and final response generation.\nIn addition to core system development, I focused on monitoring and evaluation using LangSmith, conducting iterative testing to identify quality gaps. Based on these insights, I applied prompt engineering techniques to refine the system and enhance the relevance and accuracy of its responses.",
          fr: "J'ai développé un système d'IA conversationnelle utilisant LangGraph pour orchestrer un workflow agentique dédié aux questions liées aux admissions au sein du groupe d'écoles EDH. Le système s'appuie sur le Retrieval-Augmented Generation (RAG) afin d'améliorer la précision des réponses en classifiant l'intention utilisateur et en récupérant dynamiquement les documents contextuellement pertinents via une chaîne d'injection de contexte sur mesure, avant de générer les réponses avec les modèles GPT d'OpenAI.\nJ'ai joué un rôle clé dans la conception et l'implémentation de l'architecture en graphe d'états, où chaque nœud encapsule une fonction spécifique : détection d'intention, récupération de contexte par RAG, formatage du contexte et génération de la réponse finale.\nAu-delà du développement du cœur du système, je me suis concentré sur le monitoring et l'évaluation avec LangSmith, en menant des tests itératifs pour identifier les écarts de qualité. À partir de ces observations, j'ai appliqué des techniques de prompt engineering afin d'améliorer la pertinence et la précision des réponses.",
        },
      },
      {
        key: "pipeline",
        label: { en: "Pipeline", fr: "Pipeline" },
        value: {
          en: "Embedding -> LangGraph Design -> User Interaction -> RAG-based Retrieval -> GPT Response Generation -> Monitoring/Evaluation (LangSmith) -> Prompt Refinement",
          fr: "Embedding -> Conception LangGraph -> Interaction utilisateur -> Récupération par RAG -> Génération de réponse GPT -> Monitoring/Évaluation (LangSmith) -> Raffinement des prompts",
        },
      },
    ],
  },
  {
    slug: "smart-contract-deployment-on-ethereum",
    title: {
      en: "Smart Contract Deployment on Ethereum",
      fr: "Déploiement de Smart Contracts sur Ethereum",
    },
    category: {
      en: "Other Project",
      fr: "Autre projet",
    },
    status: {
      en: "Personal Project",
      fr: "Projet personnel",
    },
    goal: {
      en: "Develop and deploy ERC-20 and ERC-721 smart contracts on an Ethereum testnet using Solidity.",
      fr: "Développer et déployer des smart contracts ERC-20 et ERC-721 sur un testnet Ethereum avec Solidity.",
    },
    summary: {
      en: "A blockchain implementation project covering token standards, wallet interaction, and application integration with a web interface.",
      fr: "Un projet d'implémentation blockchain couvrant les standards de tokens, l'interaction avec un wallet et l'intégration applicative via une interface web.",
    },
    tags: [
      "Solidity",
      "Blockchain",
      "Ethereum",
      "MetaMask",
      "Smart Contract",
      "Flask",
    ],
    detailSections: [
      {
        key: "context",
        label: { en: "Context", fr: "Contexte" },
        value: { en: "Personal Project", fr: "Projet personnel" },
      },
      {
        key: "mainGoal",
        label: { en: "Main Goal", fr: "Objectif principal" },
        value: {
          en: "Goal: Developed and deployed ERC-20 and ERC-721 smart contracts on an Ethereum testnet using Solidity, showcasing fungible and non-fungible token standards.",
          fr: "Objectif : développer et déployer des smart contracts ERC-20 et ERC-721 sur un testnet Ethereum avec Solidity, afin d'illustrer les standards de tokens fongibles et non fongibles.",
        },
      },
      {
        key: "use",
        label: { en: "Use", fr: "Usage" },
        value: {
          en: "Aim is to explore smart contract development and deepen understanding of blockchain technology through ERC-20 and ERC-721 testnet deployments.",
          fr: "L'objectif est d'explorer le développement de smart contracts et d'approfondir la compréhension de la technologie blockchain via des déploiements ERC-20 et ERC-721 sur testnet.",
        },
      },
      {
        key: "keySkills",
        label: { en: "Key skills", fr: "Compétences clés" },
        value: { en: "", fr: "" },
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
        key: "description",
        label: { en: "Description", fr: "Description" },
        value: {
          en: "Deployed an ERC-20 & ERC-721 smart contract on the Ethereum Sepolia testnet using Solidity.\nDeveloped a frontend using React and JavaScript, enabling users to connect their MetaMask wallet, view their token balance, transfer tokens, and track transaction history.",
          fr: "Déploiement de smart contracts ERC-20 et ERC-721 sur le testnet Ethereum Sepolia avec Solidity.\nDéveloppement d'un frontend en React et JavaScript permettant aux utilisateurs de connecter leur wallet MetaMask, de consulter leur solde de tokens, d'effectuer des transferts et de suivre l'historique de leurs transactions.",
        },
      },
      {
        key: "pipeline",
        label: { en: "Pipeline", fr: "Pipeline" },
        value: {
          en: "Smart Contract Development -> Deployment Sepolia Testnet -> React Frontend -> MetaMask Wallet Integration -> Token Balance -> Transaction History Tracking",
          fr: "Développement du smart contract -> Déploiement sur Sepolia -> Frontend React -> Intégration MetaMask -> Consultation du solde -> Suivi de l'historique des transactions",
        },
      },
    ],
  },
];

export const financialProjects = projects.filter(
  (project) => project.category.en === "Financial Project",
);

export const otherProjects = projects.filter(
  (project) => project.category.en === "Other Project",
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
