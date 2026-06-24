import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Coins,
  GraduationCap,
  Hammer,
  Home,
  Leaf,
  Lightbulb,
  LineChart,
  Megaphone,
  Scale,
  Settings,
  Shield,
  Sun,
  TreePine,
  TrendingUp,
} from "lucide-react";

export const servicesSeo = {
  title: "Services",
  description:
    "End-to-end business consulting, operational management, investment advisory, renewable energy, agricultural advisory, agri-tourism, and property management from Abhyudaya CMS.",
} as const;

export const servicesIntro = {
  title: "Our Services",
  headline: "Your Single-Window Growth Partner",
  body: "At Abhyudaya Consultants & Management Services (Abhyudaya CMS), we serve as your strategic growth partner by providing end-to-end business consulting, operational management, and specialized advisory solutions. Our mission is to help businesses, institutions, entrepreneurs, and property owners achieve sustainable growth through structured planning, efficient execution, and long-term value creation.",
} as const;

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceSubsection = {
  title: string;
  intro?: string;
  items: string[];
};

export type ServiceCategory = {
  id: string;
  title: string;
  description?: string;
  items?: ServiceItem[];
  bulletPoints?: string[];
  subsections?: ServiceSubsection[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "strategic-business-engineering",
    title: "Strategic Business Engineering",
    items: [
      {
        id: "business-design-innovation",
        title: "Business Design & Innovation",
        description:
          "We help transform ideas into sustainable enterprises by designing scalable business models, operational frameworks, and financial structures tailored to your goals.",
        icon: Lightbulb,
      },
      {
        id: "management-consulting",
        title: "Management Consulting",
        description:
          "Our strategic advisory services support leadership teams in navigating organizational challenges, driving transformation, and improving overall business performance.",
        icon: Briefcase,
      },
      {
        id: "business-development",
        title: "Business Development & Market Expansion",
        description:
          "We identify growth opportunities, develop revenue-generation models, and create market-entry strategies that enable businesses to expand confidently into new markets.",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    items: [
      {
        id: "operations-management",
        title: "Operations Management",
        description:
          "We streamline business operations by optimizing workflows, eliminating inefficiencies, and implementing performance-driven systems that improve productivity and reduce costs.",
        icon: Settings,
      },
      {
        id: "office-facility-management",
        title: "Office & Facility Management",
        description:
          "From administrative support and HR coordination to vendor management and policy implementation, we ensure smooth day-to-day operations so your teams can focus on core business objectives.",
        icon: Building2,
      },
      {
        id: "turnkey-project-management",
        title: "Turnkey Project Management",
        description:
          "From concept to completion, we manage every phase of your project, including planning, execution, resource allocation, and risk management, delivering ready-to-operate solutions on schedule.",
        icon: Hammer,
      },
    ],
  },
  {
    id: "specialized-sector-management",
    title: "Specialized Sector Management",
    items: [
      {
        id: "institution-management",
        title: "Institution Management",
        description:
          "We provide customized governance, compliance, and operational frameworks for educational institutions, healthcare facilities, NGOs, and other organizations to ensure efficiency and service excellence.",
        icon: GraduationCap,
      },
      {
        id: "property-management",
        title: "Property Management",
        description:
          "Our property management solutions help protect and enhance asset value through maintenance oversight, tenant coordination, leasing support, and regulatory compliance management.",
        icon: Home,
      },
    ],
  },
  {
    id: "market-influence",
    title: "Market Influence & Brand Visibility",
    items: [
      {
        id: "advertisement-promotion",
        title: "Advertisement & Promotion",
        description:
          "We help businesses build strong market presence through integrated branding, advertising, and promotional strategies across digital, print, and outdoor media channels.",
        icon: Megaphone,
      },
    ],
  },
  {
    id: "financial-investment-advisory",
    title: "Financial Future & Investment Advisory",
    items: [
      {
        id: "balanced-investment-consultation",
        title: "Balanced Investment Consultation",
        description:
          "We assist individuals, startups, and businesses in making informed financial decisions that support both immediate needs and long-term wealth creation.",
        icon: Scale,
      },
      {
        id: "strategic-financial-planning",
        title: "Strategic Financial Planning",
        description:
          "Our experts develop customized financial roadmaps aligned with your liquidity requirements, investment objectives, and growth aspirations.",
        icon: LineChart,
      },
      {
        id: "risk-return-optimization",
        title: "Risk & Return Optimization",
        description:
          "Through market analysis and portfolio diversification strategies, we help clients balance risk while maximizing potential returns.",
        icon: Shield,
      },
      {
        id: "capital-support-advisory",
        title: "Capital Support & Advisory",
        description:
          "We provide guidance on capital allocation, fundraising strategies, investment planning, and financial structuring for startups and established enterprises.",
        icon: Coins,
      },
    ],
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Solutions",
    description:
      "We help businesses, industries, institutions, and communities transition toward sustainable energy solutions through strategic planning and implementation support.",
    bulletPoints: [
      "Solar energy solutions",
      "Wind energy advisory",
      "Energy storage systems",
      "Energy efficiency optimization",
      "Carbon footprint reduction strategies",
      "Sustainable operational planning",
    ],
  },
  {
    id: "soil-health-agricultural",
    title: "Soil Health & Agricultural Advisory",
    description:
      "Healthy soil is the foundation of sustainable agriculture and long-term farming profitability. Our advisory services combine traditional agricultural practices with modern scientific methods to improve soil fertility, optimize nutrient management, enhance moisture retention, and increase crop productivity.",
    bulletPoints: [
      "Improved soil vitality",
      "Higher crop yields",
      "Reduced input costs",
      "Better water retention",
      "Sustainable nutrient management",
      "Long-term agricultural resilience",
    ],
  },
  {
    id: "agri-tourism-farm-development",
    title: "Integrated Agri-Tourism & Farm Development",
    description:
      "We specialize in comprehensive master planning solutions that create multiple revenue streams for landowners and agricultural investors.",
    subsections: [
      {
        title: "High-Value Agricultural Development",
        intro: "We design and develop:",
        items: [
          "Organic farming ecosystems",
          "Managed orchards",
          "Farm-to-table production models",
          "Sustainable agricultural infrastructure",
        ],
      },
      {
        title: "Eco-Tourism & Experiential Destinations",
        intro: "We create engaging visitor experiences through:",
        items: [
          "Wellness retreats",
          "Nature-based tourism concepts",
          "Eco-resorts and farm stays",
          "Interactive farming experiences",
          "Educational agricultural workshops",
        ],
      },
    ],
  },
];

export const whyChooseAbhyudaya = {
  title: "Why Choose Abhyudaya CMS?",
  points: [
    {
      title: "Comprehensive Solutions",
      description:
        "One trusted partner for business consulting, management services, operations, investments, renewable energy, agriculture, and property management.",
    },
    {
      title: "Industry Expertise",
      description:
        "A multidisciplinary team delivering practical solutions across diverse industries and sectors.",
    },
    {
      title: "Customized Strategies",
      description:
        "Every solution is designed around your unique goals, challenges, and growth objectives.",
    },
    {
      title: "Sustainable Growth Focus",
      description:
        "We prioritize long-term value creation, operational excellence, and measurable business outcomes.",
    },
    {
      title: "End-to-End Execution",
      description:
        "From planning and strategy to implementation and management, we stay with you every step of the journey.",
    },
  ],
  closing:
    "Partner with Abhyudaya CMS and unlock sustainable growth through innovation, efficiency, and strategic excellence.",
} as const;

export type FeaturedService = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  categoryId: string;
};

export const featuredServices: FeaturedService[] = [
  {
    id: "strategic-business-engineering",
    title: "Strategic Business Engineering",
    description:
      "Business design, management consulting, and market expansion strategies for sustainable enterprise growth.",
    icon: Lightbulb,
    categoryId: "strategic-business-engineering",
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    description:
      "Operations, facility management, and turnkey project delivery that improve productivity and reduce costs.",
    icon: Settings,
    categoryId: "operational-excellence",
  },
  {
    id: "financial-investment-advisory",
    title: "Financial Future & Investment Advisory",
    description:
      "Investment consultation, financial planning, risk optimization, and capital advisory for long-term wealth creation.",
    icon: Coins,
    categoryId: "financial-investment-advisory",
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Solutions",
    description:
      "Solar, wind, storage, and efficiency strategies to reduce energy costs and build sustainable operations.",
    icon: Sun,
    categoryId: "renewable-energy",
  },
  {
    id: "soil-health-agricultural",
    title: "Soil Health & Agricultural Advisory",
    description:
      "Science-backed soil and crop advisory to improve fertility, yields, and long-term farming profitability.",
    icon: Leaf,
    categoryId: "soil-health-agricultural",
  },
  {
    id: "agri-tourism-farm-development",
    title: "Integrated Agri-Tourism & Farm Development",
    description:
      "Master planning for organic farms, eco-tourism destinations, and multi-revenue agricultural investments.",
    icon: TreePine,
    categoryId: "agri-tourism-farm-development",
  },
];

/** Flat list of all service cards for previews or structured data */
export function getAllServiceItems(): ServiceItem[] {
  return serviceCategories.flatMap((category) => category.items ?? []);
}
