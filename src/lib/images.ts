import { publicPath } from "@/lib/publicPath";

/** Centralized image URLs for the marketing site — prefer local assets from /public/images */
export const images = {
  hero: {
    /** Hair salon interior — stylist at work */
    background:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4",
  },
  product: {
    dashboard: publicPath("/images/dashboard.jpg"),
    membership: publicPath("/images/membership.jpg"),
    packages: publicPath("/images/packages.jpg"),
    loyalty: publicPath("/images/loyalty.jpg"),
    staff: publicPath("/images/staff-overview.jpg"),
    inventory: publicPath("/images/inventory-landing.jpg"),
    customers: publicPath("/images/customers.jpg"),
  },
  research: {
    interview: publicPath("/images/research-interview.jpg"),
    reception: publicPath("/images/research-reception.jpg"),
    inventory: publicPath("/images/research-inventory.jpg"),
    whiteboard: publicPath("/images/research-journey-mapping.jpg"),
    wireframe: publicPath("/images/research-workflow.jpg"),
    notes: publicPath("/images/research-shadowing.jpg"),
    team: publicPath("/images/research-problems.jpg"),
  },
} as const;
