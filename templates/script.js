// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger to X
    mobileMenuBtn.classList.toggle('active');
});

// Carousel functionality
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;
const images = [
    "https://media.gettyimages.com/id/619643870/photo/hungry-african-children-asking-for-food-africa.jpg?s=612x612&w=0&k=20&c=HuSbhCK-BNFVSQsVfSa63gehixkKAfRak2HmQYw7mhY=",
    "https://media.gettyimages.com/id/941788480/photo/portrait-of-girl-kid-having-mid-day-meal-in-indian-school.jpg?s=612x612&w=0&k=20&c=tdMRbWtA9rtYSE_6EpXpSl5E4d4xdvqK7egdYd_Q_MM",
    "",
];

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
}

// Auto-slide every 5 seconds
setInterval(() => changeImage(1), 5000);






// Event listeners for carousel buttons


// Auto advance carousel (optional)


// Pause auto-advance on hover (optional)



// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
document.getElementById('loadMore').addEventListener('click', function() {
    const stories = [
        { img: "story3.jpg", title: "Helping Hands", text: "Through our program, Ravi found access to daily meals and education." },
        { img: "story4.jpg", title: "A Brighter Future", text: "With our help, Meena overcame hunger and started school." }
    ];
    
    stories.forEach(story => {
        const newStory = document.createElement('div');
        newStory.classList.add('story');
        newStory.innerHTML = `
            <img src="${story.img}" alt="${story.title}">
            <h2>${story.title}</h2>
            <p>${story.text}</p>
        `;
        document.getElementById('stories').appendChild(newStory);
        setTimeout(() => newStory.classList.add('show'), 100);
    });
});