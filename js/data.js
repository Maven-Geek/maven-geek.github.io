/*
  ============================================================================
  YOUR CONTENT LIVES HERE
  ----------------------------------------------------------------------------
  Edit this file to change anything on the site. You do not need to touch
  index.html, style.css or main.js.

  - Text goes inside quotes "like this".
  - Each list item ends with a comma.
  - To remove an item, delete it from { to }, including the comma after it.
  - Dates for articles use YYYY-MM-DD so they sort correctly.
  ============================================================================
*/

window.PORTFOLIO = {
  name: "Timothy Olaniran",
  role: "Data Engineer",
  location: "Ile-Ife, Nigeria",

  // Put your photo at images/profile.jpg (portrait, about 800 x 1000 px).
  // Until it exists, the site shows your initials instead.
  photo: "images/profile.jpg",

  // The opening lines next to your photo. One string per paragraph.
  intro: [
    "I build data pipelines and machine learning models with Python and SQL, taking raw data to clean, tested tables and useful predictions.",
    "I graduated with a First Class in Computer Science with Mathematics from Obafemi Awolowo University in 2026, and I am certified by DataCamp in data engineering and data science."
  ],

  // Short facts shown under the intro.
  facts: [
    { label: "Degree", value: "B.Sc. Computer Science with Mathematics, First Class, OAU (2026)" },
    { label: "Certified", value: "DataCamp Data Engineer and Associate Data Scientist" },
    { label: "Looking for", value: "Junior data engineering roles, remote or on-site" }
  ],

  links: {
    email: "olaniranogoluwa@gmail.com",
    github: "https://github.com/Maven-Geek",
    linkedin: "https://www.linkedin.com/in/timothy-olaniran-8bab7618a/",
    // Add your resume as resume.pdf in the main folder, or set this to "" to hide the button.
    resume: "resume.pdf"
  },

  skills: [
    { group: "Languages", items: ["Python", "SQL"] },
    { group: "Data engineering", items: ["PostgreSQL", "ETL pipelines", "Data modeling"] },
    { group: "Data science and ML", items: ["pandas", "NumPy", "scikit-learn", "XGBoost", "OpenCV", "Matplotlib", "Seaborn"] },
    { group: "Tools", items: ["Git", "GitHub", "Jupyter"] }
  ],

  projects: [
    // Template for your next project. Remove the // at the start of each line to use it.
    // {
    //   title: "Naira Exchange Rate ELT Pipeline",
    //   summary: "Pulls daily exchange rates into PostgreSQL, models them with dbt and refreshes a public dashboard every morning.",
    //   stack: ["Python", "dlt", "PostgreSQL", "dbt", "Airflow", "Docker"],
    //   links: [
    //     { label: "Code", url: "https://github.com/Maven-Geek/REPO" },
    //     { label: "Dashboard", url: "https://..." }
    //   ]
    // },
    {
      title: "Facial Recognition Attendance System",
      summary: "A desktop app that recognises registered people from a live camera feed and records their attendance to an Excel sheet automatically. Built during my SIWES internship at the OAU Computer Centre.",
      stack: ["Python", "OpenCV", "face_recognition", "CustomTkinter", "pandas", "openpyxl"],
      links: [{ label: "Code", url: "https://github.com/Maven-Geek/face_siwes" }]
    },
    {
      title: "House Price Prediction for Real Estate",
      summary: "A regression model that recommends listing prices for a real estate company from house characteristics such as size, location and age.",
      stack: ["pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
      links: [{ label: "Code", url: "https://github.com/Maven-Geek/House-Price-Prediction-for-Real-Estate-Optimization" }]
    },
    {
      title: "DVD Rental Duration Prediction",
      summary: "Predicts how many days a customer will keep a rental, comparing several regression models and tuning the best one.",
      stack: ["pandas", "NumPy", "scikit-learn", "XGBoost"],
      links: [{ label: "Code", url: "https://github.com/Maven-Geek/dvd-rental-prediction" }]
    }
  ],

  experience: [
    {
      role: "Data / IT Intern (SIWES)",
      org: "Obafemi Awolowo University Computer Centre",
      place: "Ile-Ife",
      start: "Aug 2024",
      end: "Oct 2024",
      points: [
        "Digitized and validated responses from more than 2,000 OMR answer sheets with a team of interns.",
        "Built a real-time facial recognition attendance system in Python that logs attendance to Excel."
      ]
    }
  ],

  // Articles: use url for posts on Medium, Hashnode, LinkedIn or dev.to,
  // or point to a page in the articles/ folder (copy articles/template.html to start one).
  articles: [
    {
      title: "What I learned building a facial recognition attendance system",
      date: "2026-11-01",
      summary: "How the system works, what I learned building it during SIWES, and what I would change today.",
      url: "articles/facial-recognition-attendance.html",
      readTime: "6 min read",
      where: ""  // e.g. "Medium" or "Hashnode" for articles hosted elsewhere
    }
  ],

  education: [
    {
      title: "B.Sc. Computer Science with Mathematics, First Class Honours",
      org: "Obafemi Awolowo University, Ile-Ife",
      when: "2020 to 2026"
    }
  ],

  certifications: [
    { title: "Data Engineer", org: "DataCamp", when: "2026", url: "" },
    { title: "Associate Data Scientist", org: "DataCamp", when: "", url: "https://www.datacamp.com/certificate/DSA0015162725697" }
  ],

  // The closing line in the Contact section.
  contactLine: "Hiring a junior data engineer, or want to build something together? Send me an email."
};
