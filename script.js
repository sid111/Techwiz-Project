// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Image slider functionality
        const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const dots = document.querySelectorAll('.slider-dot');
        let slideIndex = 0;
        let slideWidth = slide[0].clientWidth;

        // Set initial slide position
        slides.style.transform = `translateX(0)`;

        // Next slide function
        function nextSlide() {
            slideIndex = (slideIndex >= slide.length - 1) ? 0 : slideIndex + 1;
            updateSlider();
        }

        // Previous slide function
        function prevSlide() {
            slideIndex = (slideIndex <= 0) ? slide.length - 1 : slideIndex - 1;
            updateSlider();
        }

        // Update slider position and active dot
        function updateSlider() {
            slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            
            // Update active dot
            dots.forEach((dot, index) => {
                if (index === slideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Event listeners for next and previous buttons
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                slideIndex = index;
                updateSlider();
            });
        });

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Update slide width on window resize
        window.addEventListener('resize', () => {
            slideWidth = slide[0].clientWidth;
            slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        });

        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert(`Thank you for subscribing with: ${email}`);
                this.querySelector('input').value = '';
            }
        });

        // Banner button effects
        const bannerButtons = document.querySelectorAll('.banner-btn');
        bannerButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-5px)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
            });
        });