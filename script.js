// Mock data for job listings
const jobListings = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechNova",
        logo: "TN",
        location: "San Francisco, CA",
        salary: "$110,000 - $130,000",
        jobType: "Full-time",
        experienceLevel: "Mid-level",
        description: "We are looking for a skilled Frontend Developer to join our innovative team. You will be responsible for building user interfaces, implementing new features, and ensuring cross-browser compatibility.",
        responsibilities: [
            "Develop and maintain responsive web applications",
            "Collaborate with UI/UX designers to implement designs",
            "Write clean, efficient, and maintainable code",
            "Optimize applications for maximum speed and scalability",
            "Troubleshoot and fix bugs in existing projects"
        ],
        requirements: [
            "3+ years of experience in frontend development",
            "Strong knowledge of JavaScript, HTML5, and CSS3",
            "Experience with modern frameworks like React, Vue, or Angular",
            "Understanding of responsive design principles",
            "Familiarity with version control systems (Git)"
        ],
        skills: ["JavaScript", "React", "HTML5", "CSS3", "Git"],
        postedDate: "2 days ago",
        applicationUrl: "https://technova.com/careers"
    },
    {
        id: 2,
        title: "Data Scientist",
        company: "AnalyticsPro",
        logo: "AP",
        location: "Remote",
        salary: "$120,000 - $150,000",
        jobType: "Full-time",
        experienceLevel: "Senior",
        description: "Join our data science team to develop and implement advanced analytical models. You'll work with big data to solve complex business problems and drive decision-making.",
        responsibilities: [
            "Design and implement machine learning models",
            "Process, clean, and verify data integrity",
            "Analyze large datasets to discover valuable insights",
            "Present findings to stakeholders",
            "Collaborate with engineering teams to implement models"
        ],
        requirements: [
            "5+ years of experience in data science",
            "Advanced degree in Computer Science, Statistics, or related field",
            "Strong programming skills in Python or R",
            "Experience with machine learning libraries",
            "Knowledge of big data technologies"
        ],
        skills: ["Python", "Machine Learning", "SQL", "Data Analysis", "Statistics"],
        postedDate: "1 week ago",
        applicationUrl: "https://analyticspro.com/jobs"
    },
    {
        id: 3,
        title: "UX/UI Designer",
        company: "CreativeMinds",
        logo: "CM",
        location: "New York, NY",
        salary: "$90,000 - $115,000",
        jobType: "Full-time",
        experienceLevel: "Mid-level",
        description: "We're seeking a talented UX/UI Designer to create exceptional user experiences. You'll be responsible for the design and visual components of our digital products.",
        responsibilities: [
            "Create wireframes, prototypes, and user flows",
            "Conduct user research and usability testing",
            "Design visually appealing interfaces",
            "Collaborate with developers to implement designs",
            "Maintain design systems and style guides"
        ],
        requirements: [
            "3+ years of experience in UX/UI design",
            "Strong portfolio demonstrating design thinking",
            "Proficiency in design tools (Figma, Sketch, Adobe XD)",
            "Understanding of user-centered design principles",
            "Knowledge of HTML/CSS is a plus"
        ],
        skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Wireframing"],
        postedDate: "3 days ago",
        applicationUrl: "https://creativeminds.design/careers"
    },
    {
        id: 4,
        title: "DevOps Engineer",
        company: "CloudSphere",
        logo: "CS",
        location: "Austin, TX",
        salary: "$125,000 - $145,000",
        jobType: "Full-time",
        experienceLevel: "Senior",
        description: "Join our DevOps team to build and maintain our cloud infrastructure. You'll be responsible for deployment automation, monitoring, and system reliability.",
        responsibilities: [
            "Implement CI/CD pipelines",
            "Manage cloud infrastructure (AWS, Azure, or GCP)",
            "Automate deployment processes",
            "Monitor system performance and troubleshoot issues",
            "Implement security best practices"
        ],
        requirements: [
            "4+ years of experience in DevOps or SRE roles",
            "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
            "Experience with containerization (Docker, Kubernetes)",
            "Proficiency in scripting languages (Python, Bash)",
            "Understanding of infrastructure as code (Terraform, CloudFormation)"
        ],
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
        postedDate: "1 week ago",
        applicationUrl: "https://cloudsphere.tech/jobs"
    },
    {
        id: 5,
        title: "Product Manager",
        company: "InnovateTech",
        logo: "IT",
        location: "Chicago, IL",
        salary: "$115,000 - $135,000",
        jobType: "Full-time",
        experienceLevel: "Mid-level",
        description: "We're looking for a Product Manager to drive our product vision and strategy. You'll work closely with engineering, design, and marketing teams to deliver exceptional products.",
        responsibilities: [
            "Define product vision, strategy, and roadmap",
            "Gather and analyze user feedback",
            "Prioritize features and create detailed specifications",
            "Collaborate with cross-functional teams",
            "Monitor product performance and metrics"
        ],
        requirements: [
            "3+ years of experience in product management",
            "Strong analytical and problem-solving skills",
            "Excellent communication and stakeholder management",
            "Experience with agile development methodologies",
            "Technical background or understanding of software development"
        ],
        skills: ["Product Strategy", "Agile", "User Stories", "Analytics", "Market Research"],
        postedDate: "5 days ago",
        applicationUrl: "https://innovatetech.com/careers"
    },
    {
        id: 6,
        title: "Backend Developer",
        company: "ServerStack",
        logo: "SS",
        location: "Remote",
        salary: "$100,000 - $130,000",
        jobType: "Full-time",
        experienceLevel: "Mid-level",
        description: "Join our engineering team to build robust and scalable backend systems. You'll be responsible for developing API endpoints, database design, and server-side logic.",
        responsibilities: [
            "Design and implement API endpoints",
            "Develop database schemas and queries",
            "Write efficient, maintainable, and secure code",
            "Integrate with third-party services",
            "Improve performance and scalability of existing systems"
        ],
        requirements: [
            "3+ years of experience in backend development",
            "Strong knowledge of server-side languages (Node.js, Python, Ruby, Java)",
            "Experience with databases (SQL and NoSQL)",
            "Understanding of RESTful API design",
            "Knowledge of security best practices"
        ],
        skills: ["Node.js", "Python", "MongoDB", "REST API", "SQL"],
        postedDate: "2 weeks ago",
        applicationUrl: "https://serverstack.io/jobs"
    },
    {
        id: 7,
        title: "Marketing Specialist",
        company: "GrowthBoost",
        logo: "GB",
        location: "Miami, FL",
        salary: "$70,000 - $90,000",
        jobType: "Full-time",
        experienceLevel: "Entry-level",
        description: "We're seeking a Marketing Specialist to help drive our brand awareness and lead generation efforts. You'll be responsible for creating and executing marketing campaigns across multiple channels.",
        responsibilities: [
            "Plan and execute marketing campaigns",
            "Create engaging content for various platforms",
            "Manage social media accounts",
            "Analyze marketing metrics and prepare reports",
            "Collaborate with sales team to generate leads"
        ],
        requirements: [
            "1-2 years of experience in marketing",
            "Strong written and verbal communication skills",
            "Experience with digital marketing tools",
            "Knowledge of social media best practices",
            "Analytical mindset and attention to detail"
        ],
        skills: ["Digital Marketing", "Social Media", "Content Creation", "Analytics", "SEO"],
        postedDate: "3 days ago",
        applicationUrl: "https://growthboost.com/careers"
    },
    {
        id: 8,
        title: "Project Manager",
        company: "DeliverPro",
        logo: "DP",
        location: "Seattle, WA",
        salary: "$95,000 - $120,000",
        jobType: "Full-time",
        experienceLevel: "Mid-level",
        description: "Join our team as a Project Manager to lead complex projects from conception to completion. You'll coordinate cross-functional teams and ensure projects are delivered on time and within budget.",
        responsibilities: [
            "Develop project plans and timelines",
            "Coordinate resources and team members",
            "Monitor project progress and address issues",
            "Communicate with stakeholders",
            "Ensure project quality and adherence to requirements"
        ],
        requirements: [
            "3+ years of experience in project management",
            "PMP certification or equivalent",
            "Strong organizational and leadership skills",
            "Experience with project management tools",
            "Excellent communication and problem-solving abilities"
        ],
        skills: ["Project Planning", "Agile", "Risk Management", "Stakeholder Management", "Budgeting"],
        postedDate: "1 week ago",
        applicationUrl: "https://deliverpro.com/jobs"
    }
];

// App state
let currentJobIndex = 0;
const matchedJobs = [];

// DOM elements
const cardStack = document.getElementById('card-stack');
const rejectBtn = document.getElementById('reject-btn');
const infoBtn = document.getElementById('info-btn');
const likeBtn = document.getElementById('like-btn');
const matchesList = document.getElementById('matches-list');
const modal = document.getElementById('job-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Initialize the app
function initApp() {
    loadJobCards();
    setupEventListeners();
}

// Load job cards into the stack
function loadJobCards() {
    cardStack.innerHTML = '';
    
    // Add all job cards to the stack
    jobListings.forEach((job, index) => {
        const card = createJobCard(job);
        card.style.zIndex = jobListings.length - index;
        
        if (index === currentJobIndex) {
            card.classList.add('active');
        } else {
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
        }
        
        cardStack.appendChild(card);
    });
}

// Create a job card element
function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.dataset.jobId = job.id;
    
    // Create swipe overlay
    const swipeOverlay = document.createElement('div');
    swipeOverlay.className = 'swipe-overlay';
    
    const swipeLeft = document.createElement('div');
    swipeLeft.className = 'swipe-indicator swipe-left';
    swipeLeft.textContent = 'Pass';
    
    const swipeRight = document.createElement('div');
    swipeRight.className = 'swipe-indicator swipe-right';
    // Complete the swipeRight div
    swipeRight.textContent = 'Interested';

    swipeOverlay.appendChild(swipeLeft);
    swipeOverlay.appendChild(swipeRight);
    card.appendChild(swipeOverlay);

    // Job summary content
    card.innerHTML += `
        <div class="job-header">
            <div class="logo">${job.logo}</div>
            <div>
                <h3>${job.title}</h3>
                <p>${job.company} - ${job.location}</p>
            </div>
        </div>
        <div class="job-meta">
            <span>${job.salary}</span> • 
            <span>${job.jobType}</span> • 
            <span>${job.experienceLevel}</span>
        </div>
    `;
    return card;
}

// Set up event listeners
function setupEventListeners() {
    rejectBtn.addEventListener('click', handleReject);
    likeBtn.addEventListener('click', handleLike);
    infoBtn.addEventListener('click', showJobDetails);
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

// Handle rejecting a job
function handleReject() {
    swipeCard('left');
}

// Handle liking a job
function handleLike() {
    const job = jobListings[currentJobIndex];
    matchedJobs.push(job);
    addToMatches(job);
    swipeCard('right');
}

// Swipe card logic
function swipeCard(direction) {
    const currentCard = document.querySelector('.job-card.active');
    if (!currentCard) return;

    currentCard.classList.add(`swipe-${direction}`);
    setTimeout(() => {
        currentCard.remove();
        currentJobIndex++;

        if (currentJobIndex < jobListings.length) {
            const nextCard = cardStack.children[currentJobIndex];
            nextCard.classList.add('active');
            nextCard.style.opacity = '1';
            nextCard.style.pointerEvents = 'auto';
        } else {
            cardStack.innerHTML = '<p>No more jobs available.</p>';
        }
    }, 300);
}

// Show detailed modal info
function showJobDetails() {
    const job = jobListings[currentJobIndex];
    modalBody.innerHTML = `
        <h2>${job.title} @ ${job.company}</h2>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p><strong>Type:</strong> ${job.jobType}</p>
        <p><strong>Experience:</strong> ${job.experienceLevel}</p>
        <p><strong>Description:</strong> ${job.description}</p>
        <h4>Responsibilities</h4>
        <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        <h4>Requirements</h4>
        <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
        <h4>Skills</h4>
        <p>${job.skills.join(', ')}</p>
        <a href="${job.applicationUrl}" target="_blank" class="apply-btn">Apply Now</a>
    `;
    modal.style.display = 'block';
}

// Add matched job to list
function addToMatches(job) {
    const item = document.createElement('li');
    item.textContent = `${job.title} @ ${job.company}`;
    matchesList.appendChild(item);
}

// Initialize app on DOM load
document.addEventListener('DOMContentLoaded', initApp);
