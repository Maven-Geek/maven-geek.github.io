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
  role: "Data Scientist",
  location: "Osogbo, Nigeria",

  // Put your photo at images/my_image.jpg (portrait, about 800 x 1000 px).
  // Until it exists, the site shows your initials instead.
  photo: "images/my_image.jpg",

  // The opening lines next to your photo. One string per paragraph.
  intro: [
    "I build machine learning models and turn data into actionable insights with Python, SQL and modern ML frameworks, taking projects from exploratory analysis to deployed, production-ready applications.",
    "I graduated with a First Class in Computer Science with Mathematics from Obafemi Awolowo University in 2026, and I am certified by DataCamp as both a Data Scientist and a Data Engineer."
  ],

  // Short facts shown under the intro (hidden for now).
  facts: [],
  /*
  facts: [
    { label: "Degree", value: "B.Sc. Computer Science with Mathematics, First Class, OAU (2026)" },
    { label: "Certified", value: "DataCamp Data Scientist and Data Engineer" },
    { label: "Looking for", value: "Data science and machine learning roles, remote or on-site" }
  ],
  */

  links: {
    email: "olaniranogoluwa@gmail.com",
    github: "https://github.com/Maven-Geek",
    linkedin: "https://www.linkedin.com/in/timothy-olaniran-8bab7618a/",
    // Set to "resume.pdf" once ready to show the download button again.
    resume: ""
  },

  skills: [
    { group: "Languages", items: ["Python", "SQL"] },
    { group: "Machine learning", items: ["scikit-learn", "XGBoost", "PyTorch", "ONNX Runtime", "Streamlit"] },
    { group: "Data analysis", items: ["pandas", "NumPy", "Matplotlib", "Seaborn"] },
    { group: "Computer vision", items: ["OpenCV", "MobileViTv2", "Grad-CAM", "LRP / zennit"] },
    { group: "Web and APIs", items: ["FastAPI", "React", "Docker", "REST APIs"] },
    { group: "Tools", items: ["Git", "GitHub", "Jupyter", "VS Code"] }
  ],

  projects: [
    {
      title: "Dermatology Clinical Decision Support System",
      url: "https://derm-frontend.vercel.app",
      summary: "A full-stack AI-powered clinical decision support system that classifies skin lesion images (Atopic Dermatitis, Psoriasis, Tinea) using a MobileViTv2 vision transformer and provides visual explainability through Grad-CAM and LRP heatmaps to help clinicians understand and trust predictions.",
      stack: ["Python", "PyTorch", "ONNX Runtime", "FastAPI", "React", "Tailwind CSS", "Docker", "Hugging Face Spaces"],
      links: []
    },
    {
      title: "High Traffic Recipe Prediction",
      url: "https://shorturl.at/mFAlj",
      summary: "A data-driven model for Tasty Bytes that predicts which recipes will attract high website traffic, enabling the product team to optimise homepage recipe selection and boost engagement by up to 40%. Achieved ≥80% precision on the target class. Deployed as an interactive Streamlit app.",
      stack: ["Python", "pandas", "scikit-learn", "Streamlit", "Matplotlib", "Seaborn"],
      links: [{ label: "Code", url: "https://github.com/Maven-Geek/tasty_bytes_model_deployment" }]
    },
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
      role: "Information Technology Intern",
      org: "Nigerian Airspace Management Agency",
      place: "Ikeja, Lagos",
      start: "Apr 2025",
      end: "Oct 2025",
      points: [
        "Delivered IT hardware support, system maintenance, and troubleshooting across department computers and peripherals.",
        "Supported local area network (LAN) operations, cabling, and network connectivity troubleshooting."
      ]
    },
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
    { title: "Associate Data Scientist", org: "DataCamp", when: "2025", url: "https://www.datacamp.com/certificate/DSA0015162725697", image: "images/DS -Cert .jpg" },
    { title: "Data Engineer", org: "DataCamp", when: "2026", url: "", image: "images/DE - Cert.jpg" }
  ],

  // The closing line in the Contact section.
  contactLine: "Hiring a data scientist, or want to build something together? Send me an email."
};
