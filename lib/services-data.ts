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
    title: "Detailed Property & Asset Management",
    items: [
      {
        id: "business-design-innovation",
        title: "Farmland & Eco-Agri Management",
        description:
          "End-to-end oversight for agricultural holdings, managed orchards, organic farming setups, soil vitality restoration, and modern agro-infrastructure.",
        icon: Lightbulb,
      },
      {
        id: "management-consulting",
        title: "Commercial & Domestic Property Management",
        description:
          "Complete tenant management, lease administration, regulatory compliance, routine facility maintenance oversight, and asset value enhancement.",
        icon: Briefcase,
      },
      {
        id: "business-development",
        title: "Secured Rental Income Plans for Vacant Plots",
        description:
          "Monetization strategies converting idle/vacant land into steady revenue streams through lease structuring, commercial plot developments, long-term operational leases, and build-to-suit arrangements.",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "operational-excellence",
    title: "Regional Real Estate & Land Investments (Hubli, Mysore & Sirsi)",
    items: [
      {
        id: "operations-management",
        title: "Strategic Land Procurement",
        description:
          "Sourcing prime commercial plots, industrial land, and agriculture land with clear title verification and compliance support.",
        icon: Settings,
      },
      {
        id: "office-facility-management",
        title: "Commercial Land Availability",
        description:
          "Dedicated inventory of highway-facing, institutional, and suburban commercial plots suitable for logistics, godowns, retail centers, and regional hubs in Hubli, Mysore, and Sirsi.",
        icon: Building2,
      },
      {
        id: "turnkey-project-management",
        title: "Integrated Agri-Tourism & Resort Land Development",
        description:
          "Master planning and revenue-generating agricultural models tailored to regional growth corridors.",
        icon: Hammer,
      },
    ],
  },
  {
    id: "specialized-sector-management",
    title: "Outsourced Office & Facility Management",
    items: [
      {
        id: "institution-management",
        title: "Operational Workflow Optimization",
        description:
          "Workflow design, administrative coordination, and cost reduction strategies for lean corporate operations.",
        icon: GraduationCap,
      },
      {
        id: "property-management",
        title: "HR & Vendor Management",
        description:
          "Facility maintenance, third-party vendor oversight, administrative policy enforcement, and infrastructure maintenance.",
        icon: Home,
      },
    ],
  },
  {
    id: "market-influence",
    title: "Financial Future & Futuristic Investment Products",
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
    title: "Financial Future & Futuristic Investment Product",
    items: [
      {
        id: "balanced-investment-consultation",
        title: "Strategic Investment Consultation",
        description:
          "Balanced investment advisory tailored for high-growth potential and long-term wealth creation.",
        icon: Scale,
      },
      {
        id: "strategic-financial-planning",
        title: "Risk-Optimized Portfolio Planning",
        description:
          "Capital allocation roadmaps aligned with liquidity requirements, wealth protection, and high-yielding financial products.",
        icon: LineChart,
      },
      {
        id: "risk-return-optimization",
        title: "Capital Support & Advisory",
        description:
          "Structural guidance on capital allocation and fundraising for growth-stage enterprises.",
        icon: Shield,
      },
    ],
  },
  {
    id: "renewable-energy",
    title: "Life Care, Beauty & Commercial Products Needs",
    bulletPoints: [
      "Commercial Sourcing & Distribution Advisory",
      "Retail & Brand Visibility Management",
    ],    
  },
  {
    id: "soil-health-agricultural",
    title: "Turnkey Project Delivery (Food, Recycling & Sustainable Industries)",
    bulletPoints: [
      "Food Processing & Agri-Industry Projects",
      "Recycling & Waste Management Units",
      "Sustainable & Clean Energy Solutions",
      "Better water retention",
      "Sustainable nutrient management",
      "Long-term agricultural resilience",
    ],
  },
  {
    id: "agri-tourism-farm-development",
    title: "Key Differentiators",
    subsections: [
      {
        title: " Single-Window Execution",
        intro: "We provide end-to-end solutions for:",
        items: [
          "Integrated management spanning property",
          "Finance",
          "Operations",
          "sustainable industries",
        ],
      },
      {
        title: "Eco-Tourism & Experiential Destinations",
        intro: "Active focus and localized capabilities across:",
        items: [
          "Hubli",
          "Mysore",
          "Sirsi",
          "Key Karnataka corridors",
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
