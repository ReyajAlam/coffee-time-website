gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero h1", { duration: 1.2, y: -100, opacity: 0, ease: "back.out(1.7)" });
gsap.from(".hero p", { duration: 1.2, y: 50, opacity: 0, delay: 0.3, ease: "power2.out" });
gsap.from(".btn-shop", { duration: 1, scale: 0.5, opacity: 0, delay: 0.6, ease: "elastic.out(1, 0.3)" });

// Best Sellers Animation
gsap.utils.toArray(".product-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    rotation: -5,
    duration: 1,
    delay: index * 0.2,
    ease: "power3.out"
  });
});

// Delivery Section Animation
gsap.from(".delivery-section .content", {
  scrollTrigger: {
    trigger: ".delivery-section",
    start: "top 75%"
  },
  x: -200,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});
gsap.from(".delivery-section .btn-shop", {
  scrollTrigger: {
    trigger: ".delivery-section",
    start: "top 75%"
  },
  scale: 0,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "back.out(1.7)"
});

// About Section Animation
gsap.from(".about-section h2", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 85%"
  },
  y: 50,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out"
});
gsap.from(".about-section p", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 85%"
  },
  y: 30,
  opacity: 0,
  duration: 0.9,
  stagger: 0.2,
  ease: "power2.out"
});

// Why Choose Us Animation
gsap.from(".feature-box", {
  scrollTrigger: {
    trigger: ".choose-section",
    start: "top 85%"
  },
  y: 100,
  opacity: 0,
  rotation: 5,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out"
});

// Product Highlight Animation
gsap.from(".product-highlight .col-md-6:first-child img", {
  scrollTrigger: {
    trigger: ".product-highlight",
    start: "top 85%"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});
gsap.from(".product-highlight .col-md-6:last-child", {
  scrollTrigger: {
    trigger: ".product-highlight",
    start: "top 85%"
  },
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});

// Testimonial Section Animation
gsap.from(".testimonial-section h2", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 85%"
  },
  y: 50,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out"
});
gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 85%"
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "back.out(1.7)"
});

// Latest Blog Animation
gsap.from(".latest-blog-section .section-heading", {
  scrollTrigger: {
    trigger: ".latest-blog-section",
    start: "top 85%"
  },
  y: 50,
  opacity: 0,
  duration: 0.9,
  ease: "power2.out"
});
gsap.from(".latest-blog-section .col-md-4", {
  scrollTrigger: {
    trigger: ".latest-blog-section",
    start: "top 85%"
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out"
});

// Footer Animation
gsap.from(".footer-section", {
  scrollTrigger: {
    trigger: ".footer-section",
    start: "top 95%"
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});