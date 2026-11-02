/*
  All portfolio content lives here. Edit this file to update the site;
  index.html and project.html only handle layout.
  Every fact below comes from the project files, repositories, reports or CV.
*/
window.PORTFOLIO = {
  person: {
    name: "Joman Alsharbini",
    fullName: "Joman A. Alsharbini",
    role: "Computer Science student at Effat University",
    intro:
      "I like building things people can see and use: map dashboards, web apps and machine-learning pipelines that report their results honestly.",
    location: "Jeddah, Saudi Arabia",
    avatar: "assets/img/avatar.webp",
    email: "jumanalsh2@gmail.com",
    phone: "+966 55 274 1171",
    phoneHref: "+966552741171",
    linkedin: "https://www.linkedin.com/in/joman-alsharbini-049a71304",
    github: "https://github.com/jualsh2",
    about: [
      "I'm a Computer Science student at Effat University in Jeddah, expecting to graduate in February 2028. My interest is in AI and data, and most of my projects sit where a model meets a person who has to use its output: a dashboard for crowd managers, a risk score a doctor can question, a stress check with its reasons shown.",
      "I learned on real teams. I've co-led the interface of a Hajj crowd simulation, worked on the modelling phase of a 24-hour IBM datathon, and spent a summer doing IT support at Panda Retail Company. I care about evaluating work honestly: when a model performs at chance level, I say so and explain why."
    ]
  },

  categories: [
    { id: "all", label: "All" },
    { id: "ai", label: "AI & data" },
    { id: "web", label: "Web" },
    { id: "design", label: "Software design" },
    { id: "systems", label: "C++ & data structures" }
  ],

  projects: [
    {
      slug: "hajjsim",
      featured: true,
      title: "HajjSim Agent Studio",
      tagline: "A multi-agent simulation that predicts pilgrim stress and crowd risk across the Hajj rituals.",
      category: ["ai", "web"],
      context: "CS3081 Artificial Intelligence · Spring 2026",
      team: ["Osama Abutaha", "Ahmad Baabod", "Joman Alsharbini", "Sara Bin Shayhun"],
      teamNote: "Team of four",
      role: "Co-led the dashboard design, Leaflet map integration, heatmaps and UI/UX. Co-author of the research paper.",
      tech: ["Python", "JavaScript", "Leaflet", "Chart.js", "HTML/CSS"],
      cover: "assets/img/hajjsim-dashboard.webp",
      coverAlt: "HajjSim dashboard: pilgrim agent form beside a live map of Mina with status-coloured agents",
      problem:
        "More than 2.5 million pilgrims move through spaces like Mina and the Jamarat on a fixed ritual schedule. Crowd control is mostly reactive: dangerous density is spotted only once it has already formed.",
      solution:
        "HajjSim models each pilgrim as an autonomous agent and rehearses the Hajj sequence in a digital twin, so operators can see stress building up and test hazards before they happen.",
      features: [
        "Pilgrim agents with a four-layer anatomy: static profile, dynamic vitals, memory and a perceive–decide–act behaviour engine",
        "Event-driven tick engine where one tick is one ritual stage, from arrival through each ritual",
        "Live map of agents coloured by status (stable, needs support, high risk, panicking) with a density heatmap",
        "Hazard injection, such as blocked gates or dropped luggage, to test how the crowd responds",
        "Severity index chart and a sortable agent roster for inspecting individual pilgrims"
      ],
      results: [
        "Working prototype with a Python simulation backend and a single-page dashboard",
        "Research paper and poster submitted for the course"
      ],
      gallery: [
        { src: "assets/img/hajjsim-dashboard.webp", alt: "HajjSim dashboard with live map and agent controls", caption: "The dashboard: create pilgrim agents on the left, watch them on the live map." },
        { src: "assets/img/hajjsim-agents.webp", alt: "Diagram of the four-layer pilgrim agent", caption: "The four-layer agent anatomy behind each pilgrim." }
      ],
      links: [
        { label: "Code on GitHub", href: "https://github.com/jualsh2/HajjSim" }
      ]
    },

    {
      slug: "neorora",
      featured: true,
      title: "Neorora",
      tagline: "Early dementia-risk screening from seniors' everyday Arabic writing, built in 24 hours at the IBM Z Datathon 2026.",
      category: ["ai"],
      context: "IBM Z Datathon 2026 · October 2026",
      team: ["Tala", "Hanan", "Amal Shuailah", "Joman Alsharbini", "Leen", "Reem"],
      teamNote: "Team of six, three phases: data (Tala, Hanan), model (Amal, Joman), app (Leen, Reem)",
      role: "Co-led and built phase 2 with Amal: model selection, tuning, final evaluation and explainability.",
      tech: ["Python", "scikit-learn", "XGBoost", "Jupyter", "IBM LinuxONE"],
      cover: "assets/img/neorora-roc_top3.webp",
      coverAlt: "Cross-validated ROC curves for SVM, Logistic Regression and Naive Bayes",
      problem:
        "Dementia is usually diagnosed late, and screening tests need a clinic visit or daily effort from the senior. Early changes in how a person writes can go unnoticed for years.",
      solution:
        "With consent, Neorora analyses de-identified social-media posts and gives clinicians a risk score with its reasons. Raw text stays on a local machine; the models run on IBM LinuxONE.",
      features: [
        "209 seniors and 47,935 cleaned Arabic Facebook posts, labelled by the MoCA-B test",
        "23 language and behaviour features per person, such as vocabulary richness, sentence length, repetition and night-time posting",
        "Seven classifiers compared with 5-fold stratified cross-validation against a majority-class baseline",
        "Tuned linear SVM with balanced class weights and a decision threshold chosen on validation data",
        "Permutation importance and the top three reasons behind every individual score"
      ],
      results: [
        "Final test on 42 unseen patients, used once: AUC 0.65, balanced accuracy 0.61, precision 0.79, sensitivity 0.63",
        "The dummy baseline reaches 70.7% accuracy by labelling everyone impaired, so we judged models by AUC and balanced accuracy instead",
        "Honest limits: small sample, moderate signal, one data source; a screening aid, not a diagnosis"
      ],
      gallery: [
        { src: "assets/img/neorora-roc_top3.webp", alt: "ROC curves of the top three models", caption: "Cross-validated ROC curves of the three best models." },
        { src: "assets/img/neorora-final_test.webp", alt: "Confusion matrix and ROC curve on the 42 test patients", caption: "Final test on 42 patients the model never saw." },
        { src: "assets/img/neorora-feature_importance.webp", alt: "Permutation importance of the model features", caption: "What drives the model: posting history, sentence length, repetition." }
      ],
      links: [
        { label: "Team repository", href: "https://github.com/ttt4-hub/NEORORA" }
      ]
    },

    {
      slug: "mental-health",
      featured: true,
      title: "Smart Mental Health Prediction",
      tagline: "A leakage-free ML pipeline that tests whether daily digital habits can predict stress, and reports the answer honestly.",
      category: ["ai"],
      context: "Data Science · Fall 2025",
      team: ["Joman Alsharbini", "Amal Shuailah"],
      teamNote: "Team of two",
      role: "Co-developer of the pipeline, evaluation, explainability and app.",
      tech: ["Python", "pandas", "scikit-learn", "SMOTE", "XGBoost", "SHAP", "Streamlit"],
      cover: "assets/img/mh-shap_summary.webp",
      coverAlt: "SHAP summary plot of feature impact",
      problem:
        "Stress is usually measured with self-reports or interviews. We wanted to test whether everyday behaviour, like screen time, social media, sleep and activity, carries a usable signal.",
      solution:
        "An end-to-end pipeline on a 10,000-row public dataset: exploration, encoding, a stratified split, SMOTE on the training data only, two models, full evaluation, SHAP explanations and a Streamlit app.",
      features: [
        "Exploratory analysis: class balance, correlation heatmap, distributions and outlier boxplots",
        "SMOTE applied only to the training split, so nothing leaks into the test set",
        "Logistic Regression baseline against XGBoost, with confusion matrices and one-vs-rest ROC curves",
        "SHAP summary of which inputs the model relies on",
        "Streamlit app that turns a person's metrics into a risk level with wellness tips"
      ],
      results: [
        "Test accuracy 35.7% (Logistic Regression) and 34.0% (XGBoost), against about 33% for random guessing on three balanced classes",
        "The strongest correlation between any feature and stress is 0.017: the dataset carries almost no signal",
        "I re-checked this independently and documented it in the README instead of reporting the 94% training accuracy"
      ],
      gallery: [
        { src: "assets/img/mh-roc_logreg.webp", alt: "ROC curves close to the diagonal", caption: "ROC curves sit on the diagonal: near-chance performance." },
        { src: "assets/img/mh-shap_summary.webp", alt: "SHAP summary plot", caption: "SHAP shows how the model behaves, not what causes stress." },
        { src: "assets/img/mh-correlation_heatmap.webp", alt: "Correlation heatmap of all features", caption: "Near-zero correlations with the target explain the result." }
      ],
      links: [
        { label: "Code on GitHub", href: "https://github.com/jualsh2/smart-mental-health-prediction" }
      ]
    },

    {
      slug: "jeddah-horizons",
      featured: false,
      title: "Jeddah Horizons",
      tagline: "A database-driven tourism website for Jeddah's landmarks, with accounts and user/admin roles.",
      category: ["web"],
      context: "CS2111 Web Development · Fall 2025",
      team: ["Osama Abutaha", "Joman Alsharbini", "Ahmad Baabod"],
      teamNote: "Team of three",
      role: "Proposed the idea and worked on every part of the site, with a team of three.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "XAMPP"],
      cover: "assets/img/jh-landmarks-top.webp",
      coverAlt: "Jeddah Horizons landmarks page with a grid of landmark cards",
      problem:
        "Information about Jeddah's attractions is spread across many sites. The goal was one simple guide that loads landmarks from a database and supports registered users.",
      solution:
        "A PHP and MySQL site with shared templates, a landmarks catalogue, registration, login and session-based roles.",
      features: [
        "Landmarks catalogue rendered from a MySQL table",
        "Registration with JavaScript and server-side validation and duplicate checks",
        "Password hashing, prepared statements and PHP sessions",
        "Navigation that greets signed-in users and shows an admin-only link"
      ],
      results: [
        "Working site on XAMPP with schema for users, landmarks and reviews"
      ],
      gallery: [
        { src: "assets/img/jh-home.webp", alt: "Jeddah Horizons home page", caption: "Home page." },
        { src: "assets/img/jh-landmarks-top.webp", alt: "Landmarks page", caption: "Landmarks loaded from the database." },
        { src: "assets/img/jh-register.webp", alt: "Registration form", caption: "Registration with validation." }
      ],
      links: [
        { label: "Code on GitHub", href: "https://github.com/jualsh2/jeddah-horizons" }
      ]
    },

    {
      slug: "brainshare",
      featured: false,
      title: "BrainShare",
      tagline: "A student knowledge-sharing platform, designed end to end: requirements, architecture and UI prototype.",
      category: ["design"],
      context: "CS3151 Software Engineering · Spring 2026",
      team: ["Joman Alsharbini", "Amal Shuailah"],
      teamNote: "Team of two",
      role: "Co-designer of the full specification, architecture, UI prototype and research paper.",
      tech: ["Requirements (SRS)", "UML", "C4 model", "UI prototyping", "Business Model Canvas"],
      cover: "assets/img/brainshare-ui.webp",
      coverAlt: "BrainShare UI prototype: login, home, Q&A and profile screens",
      problem:
        "Course notes and answers get lost in busy WhatsApp groups, and students have little reason to share good material.",
      solution:
        "A design for a course-based platform where students share resources, ask and answer questions, and earn points for helpful contributions. This was a design project; no production code was written.",
      features: [
        "Business Model Canvas and competitor analysis",
        "Functional requirements and a use case diagram",
        "C4 context and container diagrams, plus an architecture and data-flow view",
        "Mobile UI prototype: login, home, Q&A and profile",
        "Research paper on AI-driven recommendation systems for the platform"
      ],
      results: [
        "55-page final report, presentation and poster"
      ],
      gallery: [
        { src: "assets/img/brainshare-ui.webp", alt: "BrainShare UI prototype screens", caption: "UI prototype." },
        { src: "assets/img/brainshare-c4.webp", alt: "C4 container diagram", caption: "C4 container diagram." },
        { src: "assets/img/brainshare-usecase.webp", alt: "Use case diagram", caption: "Use case diagram." }
      ],
      links: []
    },

    {
      slug: "postfix",
      featured: false,
      title: "Postfix Expression Evaluator",
      tagline: "A C++ calculator for Reverse Polish Notation built on a hand-made stack and circular queue.",
      category: ["systems"],
      context: "CS2011 Data Structures · Fall 2025",
      team: ["Osama Abutaha", "Ahmad Baabod", "Joman Alsharbini"],
      teamNote: "Team of three",
      role: "Tokenization, input parsing and invalid-token error handling.",
      tech: ["C++"],
      cover: "assets/img/postfix-terminal.webp",
      coverAlt: "Terminal output of the Postfix evaluator: two correct results and two error messages",
      problem:
        "Practise core data structures by implementing them by hand and putting them to work.",
      solution:
        "Input is split into tokens, stored in an array-based circular queue, then evaluated with an array-based stack. No STL containers.",
      features: [
        "Operators + − × ÷ ^ and signed integers",
        "Clear errors for invalid tokens, division by zero, missing operands and leftover operands",
        "O(n) time and space"
      ],
      results: [
        "9 test cases, all passing, from 5 1 2 + 4 * + 3 − = 14 to error handling"
      ],
      sample: "$ ./postfix\nEnter a postfix expression (space separated): 5 1 2 + 4 * + 3 -\nResult: 14\n\n$ ./postfix\nEnter a postfix expression (space separated): 3 0 /\nError: division by zero",
      gallery: [],
      links: [
        { label: "Code on GitHub", href: "https://github.com/jualsh2/postfix-expression-evaluator" }
      ]
    }
  ],

  experience: [
    {
      title: "IT Support Intern",
      org: "Panda Retail Company, Jeddah",
      date: "Summer 2024",
      points: [
        "Supported hardware, software, networks and IP phones",
        "Configured Microsoft 365 (Outlook, Teams, Office) and company devices",
        "Helped with domain setup, proxy configuration and Windows updates"
      ]
    }
  ],

  leadership: [
    { title: "Student Member", org: "IEEE", date: "2026 – present" },
    { title: "Organizer", org: "Effat Career Day", date: "2023" },
    { title: "Coordinator", org: "Effat Graduation Ceremony", date: "2023" },
    { title: "Volunteer", org: "Qiyas Event, Effat University", date: "2023" }
  ],

  // Each skill lists the project slugs where it was used.
  skills: [
    { group: "Languages", items: [
      { name: "Python", projects: ["hajjsim", "neorora", "mental-health"] },
      { name: "JavaScript", projects: ["hajjsim", "jeddah-horizons"] },
      { name: "C++", projects: ["postfix"] },
      { name: "PHP", projects: ["jeddah-horizons"] },
      { name: "SQL", projects: ["jeddah-horizons"] },
      { name: "HTML/CSS", projects: ["hajjsim", "jeddah-horizons"] }
    ]},
    { group: "Data & machine learning", items: [
      { name: "scikit-learn", projects: ["neorora", "mental-health"] },
      { name: "XGBoost", projects: ["neorora", "mental-health"] },
      { name: "SHAP", projects: ["mental-health"] },
      { name: "SMOTE / class imbalance", projects: ["neorora", "mental-health"] },
      { name: "Model evaluation (ROC, AUC, F1)", projects: ["neorora", "mental-health"] },
      { name: "Streamlit", projects: ["mental-health"] }
    ]},
    { group: "Interfaces & tools", items: [
      { name: "Leaflet maps", projects: ["hajjsim"] },
      { name: "Chart.js", projects: ["hajjsim"] },
      { name: "MySQL / XAMPP", projects: ["jeddah-horizons"] },
      { name: "Jupyter & Colab", projects: ["neorora", "mental-health"] },
      { name: "IBM LinuxONE", projects: ["neorora"] }
    ]},
    { group: "Software engineering", items: [
      { name: "Requirements (SRS)", projects: ["brainshare"] },
      { name: "UML & C4 diagrams", projects: ["brainshare"] },
      { name: "UI/UX design", projects: ["hajjsim", "brainshare"] },
      { name: "Stacks & queues", projects: ["postfix"] }
    ]}
  ],

  education: [
    { degree: "B.Sc. in Computer Science", org: "Effat University, Jeddah", date: "Expected February 2028",
      note: "Coursework includes Artificial Intelligence, Data Structures, Databases and Cybersecurity." }
  ],

  // Add a "verify" URL to any certificate to show a verification link.
  certificates: [
    { name: "IEEE Student Membership", issuer: "IEEE", kind: "Membership", date: "Through Dec 2027", image: "assets/img/ieee-membership.webp" },
    { name: "IEEE Computer Society Student Membership", issuer: "IEEE Computer Society", kind: "Membership", date: "2027", image: "assets/img/ieee-computer-society.webp" },
    { name: "Introduction to Power BI", issuer: "DataCamp", date: "Jun 2026", verify: "https://www.datacamp.com/statement-of-accomplishment/course/921cc85c592fccd16b569b048d7b26c4927cf812", image: "https://www.datacamp.com/statement-of-accomplishment/badge/course/921cc85c592fccd16b569b048d7b26c4927cf812.png" },
    { name: "Introduction to Python", issuer: "DataCamp", date: "Jun 2026", verify: "https://www.datacamp.com/statement-of-accomplishment/course/d900fa261a8907b64a582e63dc9026b4cf7e312a", image: "https://www.datacamp.com/statement-of-accomplishment/badge/course/d900fa261a8907b64a582e63dc9026b4cf7e312a.png" },
    { name: "Successful Presentation", issuer: "University of Colorado Boulder (Coursera)", date: "Apr 2025", verify: "https://www.coursera.org/account/accomplishments/records/3SR7QDMBCBEX", image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3SR7QDMBCBEX/CERTIFICATE_LANDING_PAGE~3SR7QDMBCBEX.jpeg" },
    { name: "Academic Information Seeking", issuer: "University of Copenhagen (Coursera)", date: "Nov 2024", verify: "https://www.coursera.org/account/accomplishments/records/HQI3UZONFIU0", image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HQI3UZONFIU0/CERTIFICATE_LANDING_PAGE~HQI3UZONFIU0.jpeg" },
    { name: "Digital Safety and Security", issuer: "Arizona State University (Coursera)", date: "Nov 2024", verify: "https://www.coursera.org/account/accomplishments/records/JEUI8NQQMKR5", image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JEUI8NQQMKR5/CERTIFICATE_LANDING_PAGE~JEUI8NQQMKR5.jpeg" },
    { name: "Programming for Everybody (Getting Started with Python)", issuer: "University of Michigan (Coursera)", date: "Apr 2024", verify: "https://www.coursera.org/account/accomplishments/records/56EN8PY2UU9M", image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~56EN8PY2UU9M/CERTIFICATE_LANDING_PAGE~56EN8PY2UU9M.jpeg" },
    { name: "Python Data Structures", issuer: "University of Michigan (Coursera)", date: "Apr 2024", verify: "https://www.coursera.org/account/accomplishments/records/PZDETXJTLMJV", image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PZDETXJTLMJV/CERTIFICATE_LANDING_PAGE~PZDETXJTLMJV.jpeg" }
  ]
};
