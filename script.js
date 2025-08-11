document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginBtn = document.querySelector('.login');
    const signupBtn = document.querySelector('.signup');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const closeModals = document.querySelectorAll('.close-modal');
    
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'flex';
    });
    
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'flex';
    });
    
    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // In a real app, you would send this to your backend
        console.log('Login attempt with:', { email, password });
        alert('Login functionality would connect to backend in production');
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const goal = document.getElementById('signupGoal').value;
        
        // In a real app, you would send this to your backend
        console.log('Signup attempt with:', { name, email, password, goal });
        alert('Signup functionality would connect to backend in production');
        signupModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Tab functionality for marketplace
    const tabBtns = document.querySelectorAll('.tab-btn');
    const marketplaceItems = document.querySelector('.marketplace-items');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // In a real app, you would fetch data for the selected tab
            const tab = btn.getAttribute('data-tab');
            loadMarketplaceItems(tab);
        });
    });
    
    // Load initial data
    loadIdeas();
    loadMarketplaceItems('websites');
    loadAITools();
    loadTestimonials();
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Data loading functions
function loadIdeas() {
    const ideas = [
        {
            title: "AI-Powered Content Agency",
            description: "Start an agency that uses AI to create high-quality content at scale for businesses.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            revenue: "$120M/yr potential",
            category: "AI Services"
        },
        {
            title: "Niche SaaS for E-commerce",
            description: "Build specialized software solving one specific problem for online store owners.",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
            revenue: "$500M/yr potential",
            category: "Software"
        },
        {
            title: "Micro-Consulting Platform",
            description: "Connect experts with businesses for 15-minute consulting calls at premium rates.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
            revenue: "$80M/yr potential",
            category: "Consulting"
        },
        {
            title: "Automated Dropshipping 2.0",
            description: "Combine AI with dropshipping to automate product selection, marketing, and customer service.",
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
            revenue: "$300M/yr potential",
            category: "E-commerce"
        },
        {
            title: "Digital Real Estate Investing",
            description: "Buy, develop, and sell websites and online businesses like physical real estate.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
            revenue: "$1B/yr potential",
            category: "Investing"
        },
        {
            title: "Hyper-Local Subscription",
            description: "Create premium subscription services tailored to specific neighborhoods or cities.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            revenue: "$150M/yr potential",
            category: "Subscription"
        }
    ];
    
    const ideasGrid = document.querySelector('.ideas-grid');
    ideasGrid.innerHTML = '';
    
    ideas.forEach(idea => {
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `
            <div class="idea-image" style="background-image: url('${idea.image}')"></div>
            <div class="idea-content">
                <h3>${idea.title}</h3>
                <p>${idea.description}</p>
                <div class="idea-meta">
                    <span class="idea-category">${idea.category}</span>
                    <span class="idea-revenue">${idea.revenue}</span>
                </div>
            </div>
        `;
        ideasGrid.appendChild(ideaCard);
    });
}

function loadMarketplaceItems(category) {
    const items = {
        websites: [
            {
                title: "Established Blog - Tech Niche",
                description: "Profitable tech blog with 50k monthly visitors",
                image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
                price: "$125,000",
                revenue: "$12k/mo"
            },
            {
                title: "E-commerce Store - Pet Supplies",
                description: "Dropshipping store with automated fulfillment",
                image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
                price: "$85,000",
                revenue: "$8k/mo"
            },
            {
                title: "SaaS Template - React Based",
                description: "Complete codebase for SaaS startup",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
                price: "$45,000",
                revenue: "License"
            },
            {
                title: "Affiliate Marketing Site",
                description: "SEO-optimized site in finance niche",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
                price: "$65,000",
                revenue: "$5k/mo"
            }
        ],
        apps: [
            {
                title: "Fitness App - 50k Users",
                description: "iOS/Android app with subscription model",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
                price: "$250,000",
                revenue: "$20k/mo"
            },
            {
                title: "Mobile Game Source Code",
                description: "Popular hyper-casual game codebase",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
                price: "$75,000",
                revenue: "License"
            }
        ],
        saas: [
            {
                title: "Marketing Automation SaaS",
                description: "Fully developed with 200 paying customers",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                price: "$1.2M",
                revenue: "$45k/mo"
            },
            {
                title: "AI Writing Assistant",
                description: "Proprietary NLP models included",
                image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff",
                price: "$850,000",
                revenue: "$32k/mo"
            }
        ],
        content: [
            {
                title: "YouTube Channel - 500k Subs",
                description: "Personal finance niche with monetization",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
                price: "$450,000",
                revenue: "$15k/mo"
            },
            {
                title: "Course Platform - Coding",
                description: "50 courses with 10k active students",
                image: "https://images.unsplash.com/photo-1542621334-a254cf47733d",
                price: "$320,000",
                revenue: "$25k/mo"
            }
        ]
    };
    
    const marketplaceItems = document.querySelector('.marketplace-items');
    marketplaceItems.innerHTML = '';
    
    const categoryItems = items[category] || items.websites;
    
    categoryItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'marketplace-item';
        itemElement.innerHTML = `
            <div class="marketplace-item-image" style="background-image: url('${item.image}')"></div>
            <div class="marketplace-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="marketplace-item-price">${item.price}</div>
                <button class="cta-secondary" style="width: 100%">View Details</button>
            </div>
        `;
        marketplaceItems.appendChild(itemElement);
    });
}

function loadAITools() {
    const tools = [
        {
            icon: "fas fa-robot",
            title: "AI Business Idea Generator",
            description: "Generate profitable business ideas tailored to your skills and market trends"
        },
        {
            icon: "fas fa-chart-line",
            title: "Market Analyzer",
            description: "AI-powered tool to identify emerging markets and underserved niches"
        },
        {
            icon: "fas fa-bullhorn",
            title: "Ad Copy Generator",
            description: "Create high-converting ad copy for any platform in seconds"
        },
        {
            icon: "fas fa-search-dollar",
            title: "Deal Evaluator",
            description: "Analyze potential acquisitions and investments with AI-driven metrics"
        },
        {
            icon: "fas fa-users",
            title: "Team Builder",
            description: "Find and evaluate potential co-founders and team members"
        },
        {
            icon: "fas fa-hand-holding-usd",
            title: "Investor Matcher",
            description: "Connect with the perfect investors for your business stage"
        }
    ];
    
    const aiToolsGrid = document.querySelector('.ai-tools-grid');
    aiToolsGrid.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'ai-tool-card';
        toolCard.innerHTML = `
            <div class="ai-tool-icon">
                <i class="${tool.icon}"></i>
            </div>
            <h3>${tool.title}</h3>
            <p>${tool.description}</p>
        `;
        aiToolsGrid.appendChild(toolCard);
    });
}

function loadTestimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Founder, AI Marketing Co",
            text: "BillionDollar.club helped me scale my agency to $5M ARR in just 18 months. The tools and community are invaluable.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Michael Chen",
            role: "CEO, SaaS Ventures",
            text: "I acquired two businesses through the marketplace that now generate $120k/month in passive income.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "David Rodriguez",
            role: "Investor, Tech Angel Fund",
            text: "The deal flow from this platform is better than any other source I've found. Found 3 unicorns here already.",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg"
        }
    ];
    
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialNav = document.createElement('div');
    testimonialNav.className = 'testimonial-nav';
    
    testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = `testimonial ${index === 0 ? 'active' : ''}`;
        testimonialElement.innerHTML = `
            <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
        `;
        testimonialSlider.insertBefore(testimonialElement, testimonialNav);
        
        const dot = document.createElement('div');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        testimonialNav.appendChild(dot);
    });
    
    testimonialSlider.appendChild(testimonialNav);
    
    // Testimonial slider functionality
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = dot.dataset.index;
            document.querySelector('.testimonial.active').classList.remove('active');
            document.querySelector('.testimonial-dot.active').classList.remove('active');
            
            document.querySelectorAll('.testimonial')[index].classList.add('active');
            dot.classList.add('active');
        });
    });
    
    // Auto-rotate testimonials
    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        
        document.querySelector('.testimonial.active').classList.remove('active');
        document.querySelector('.testimonial-dot.active').classList.remove('active');
        
        document.querySelectorAll('.testimonial')[currentTestimonial].classList.add('active');
        document.querySelectorAll('.testimonial-dot')[currentTestimonial].classList.add('active');
    }, 5000);
          }
