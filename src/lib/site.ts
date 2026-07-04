export const siteConfig = {
  name: "Cimatti & Roberts Bricklaying & Construction",
  shortName: "Cimatti & Roberts",
  tagline: "Free advice. Free quotes. Trusted local builders.",
  secondaryTagline: "Building the future, restoring the past",
  keyMessage:
    "No job is too small or too large — reliable, professional results every time.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cimattiandroberts.co.uk",
  locale: "en_GB",
  email: "cimattiandrobertsbricklaying@outlook.com",
  address: {
    street: "57 Parc Pentywyn",
    town: "Deganwy",
    county: "Conwy",
    postcode: "LL31 9FP",
    full: "57 Parc Pentywyn, Deganwy, Conwy, LL31 9FP",
  },
  founders: [
    {
      name: "Sam Cimatti",
      role: "Co-founder",
      phone: "07872463390",
      phoneDisplay: "07872 463390",
      whatsapp: "447872463390",
    },
    {
      name: "Jason Roberts",
      role: "Co-founder",
      phone: "07861140795",
      phoneDisplay: "07861 140795",
      whatsapp: "447861140795",
    },
  ],
  hours: "Mon–Sat (call anytime) · Sunday closed",
  experience: "30+ years",
  serviceArea:
    "North Wales — Deganwy, Conwy, Llandudno, Colwyn Bay, Abergele, Rhyl, Bangor and surrounding areas",
  social: {
    facebook:
      "https://www.facebook.com/p/Cimatti-Roberts-Bricklaying-construction-61567352952805/",
    facebookReviews:
      "https://www.facebook.com/profile.php?id=61567352952805&sk=reviews&locale=en_GB",
    google: "https://share.google/XKEjvlNhH3uxbzKFX",
  },
  intro:
    "With more than three decades of hands-on experience, Cimatti & Roberts Bricklaying & Construction provides high-quality workmanship across all aspects of construction. We offer free advice and no-obligation quotations for projects of any size.",
  whyChooseUs: [
    "High-quality workmanship",
    "Fully insured",
    "Quality guaranteed",
    "Professional, clean, and tidy service",
    "Free, no-obligation quotations",
  ],
  trustPoints: [
    "Over 30 years' experience",
    "Based in North Wales",
    "Local, family-run team",
    "Sam Cimatti & Jason Roberts — both contactable directly",
  ],
  lastContentUpdate: "2026-07-04",
} as const;

export const primaryPhone = siteConfig.founders[1].phone;
export const primaryPhoneDisplay = siteConfig.founders[1].phoneDisplay;
