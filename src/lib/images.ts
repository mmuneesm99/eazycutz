/** Centralized image URLs for the marketing site — prefer local assets from /public/images */
export const images = {
  hero: {
    /** Hair salon interior — stylist at work */
    background:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4",
  },
  product: {
    dashboard: "/images/dashboard.jpg",
    membership: "/images/membership.jpg",
    packages: "/images/packages.jpg",
    loyalty: "/images/loyalty.jpg",
    staff: "/images/staff-overview.jpg",
    inventory: "/images/inventory-landing.jpg",
    customers: "/images/customers.jpg",
  },
  research: {
    interview: "/images/research-interview.jpg",
    reception: "/images/research-reception.jpg",
    inventory: "/images/research-inventory.jpg",
    whiteboard: "/images/research-journey-mapping.jpg",
    wireframe: "/images/research-workflow.jpg",
    notes: "/images/research-shadowing.jpg",
    team: "/images/research-problems.jpg",
  },
} as const;
