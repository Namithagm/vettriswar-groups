// Central place for site copy and structured data.
//
// DEMO DATA NOTICE: The company details below (email addresses, phone
// numbers, office address, and social links) are temporary demo values used
// to showcase a fully working, production-ready template. Swap them for the
// real company details in this one file before going live — everything else
// in the project reads from here.

export const SITE = {
  name: "Vettriswar Groups of Company",
  legalName: "Vettriswar Groups of Company",
  tagline: "Engineering Excellence, Delivering Trust",
  description:
    "Vettriswar Groups of Company is a business and technology solutions company delivering software development, AI solutions, and enterprise consulting.",
  url: "https://www.vettriswargroups.com",

  // Primary contact email (used as the general/default address across the site).
  email: "info@vettriswargroups.com",
  emails: {
    general: "info@vettriswargroups.com",
    sales: "sales@vettriswargroups.com",
    support: "support@vettriswargroups.com",
    careers: "careers@vettriswargroups.com",
  },

  // Primary phone (used for click-to-call links across the site).
  phone: "+91 98765 43210",
  phones: ["+91 98765 43210", "+91 91234 56789"],

  address: {
    line1: "2nd Floor, No. 48, Tamil Sangam Road",
    line2: "Opposite Arignar Anna Library, Shankar Nagar",
    locality: "Salem",
    region: "Tamil Nadu",
    postalCode: "636007",
    country: "India",
    countryCode: "IN",
    full: "2nd Floor, No. 48, Tamil Sangam Road, Opposite Arignar Anna Library, Shankar Nagar, Salem, Tamil Nadu – 636007, India",
    mapQuery: "Tamil Sangam Road, Shankar Nagar, Salem, Tamil Nadu 636007",
  },

  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
    // schema.org openingHours format, used in the Organization JSON-LD.
    schema: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
  },

  social: {
    linkedin: "https://linkedin.com/company/vettriswargroups",
    facebook: "https://facebook.com/vettriswargroups",
    instagram: "https://instagram.com/vettriswargroups",
    youtube: "https://youtube.com/@vettriswargroups",
    twitter: "https://x.com/vettriswargroups",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Demo founder profile — replace with the real founder's details.
export const FOUNDER = {
  name: "Maneswar Abishek",
  title: "Founder & CEO",
  bio: "Maneswar leads Vettriswar Groups of Company's engineering and consulting practice, working closely with clients across manufacturing, healthcare, and finance to turn ambitious technology roadmaps into shipped, dependable systems.",
  linkedin: "https://www.linkedin.com/in/maneswar-abishek-5b38b12a0/",
  quote: "\u201cWe build with purpose, and we deliver with pride.\u201d",
};
