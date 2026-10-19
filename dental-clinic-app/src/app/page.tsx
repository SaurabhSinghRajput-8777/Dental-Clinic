"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// Key features & certifications ticker
const HIGHLIGHTS = [
  "Comprehensive Dental Solutions",
  "Strict Sterilisation & Autoclave Protocol",
  "Painless Root Canal & Implants",
  "Transparent Upfront Pricing",
  "Experienced Dental Surgeons",
  "Gentle Pediatric Dental Care",
  "Advanced Digital Diagnostics",
];

// Doctors team from trisha_dental_details.md
const DOCTORS = [
  {
    name: "Dr. Meenu Sharma",
    title: "Senior Dental Surgeon & Consultant",
    qualification: "BDS (Chaudhary Charan Singh University, Meerut, 2016)",
    experience: "9+ Years of Clinical Excellence",
    scope: "Root Canal Treatment (RCT), Extractions, Scaling, Aesthetic Restorations, General Dental Procedures.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Tushar Sharma",
    title: "Dental Surgeon & Implant Specialist",
    qualification: "BDS, Senior Dental Practitioner",
    experience: "9+ Years of Surgical Practice",
    scope: "Root Canal Treatment (RCT), Advanced Extractions, Implantology, Crowns & Full-Mouth Rehabilitations.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Manish Bhati",
    title: "Dental Surgeon & Cosmetic Care",
    qualification: "BDS, Greater Noida Dental Care",
    experience: "8+ Years of Practice",
    scope: "Root Canal Treatment (RCT), Surgical Extractions, Ultrasonic Scaling, Tooth-Colored Restorations.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
  }
];

// All 9 Services & Treatments Offered from trisha_dental_details.md
const SERVICES = [
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    shortDesc: "Painless therapy for infected pulp & damaged tooth preservation",
    fullDesc: "Our high-precision, painless endodontic therapy removes deep infection, cleans and sterilises the pulp canal, and preserves your natural tooth structure using advanced rotary instruments and digital apex locators.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    time: "45 - 60 mins",
    inclusions: [
      "Digital X-ray assessment & pulp vitality test",
      "Single-visit or multi-visit painless rotary cleaning",
      "Biocompatible hermetic canal obturation",
      "Post-treatment crown restoration planning"
    ]
  },
  {
    id: "implants",
    title: "Dental Implants",
    shortDesc: "Permanent tooth replacements with biocompatible titanium fixtures",
    fullDesc: "Restore missing teeth permanently with state-of-the-art biocompatible titanium implants crowned with custom-milled natural porcelain fixtures that feel, chew, and look just like your natural teeth.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    time: "Surgical precision",
    inclusions: [
      "CBCT 3D bone density & nerve pathway mapping",
      "Minimally invasive surgical implant placement",
      "Osseointegration monitoring & healing abutment",
      "Custom aesthetic zirconia / ceramic final prosthesis"
    ]
  },
  {
    id: "crowns",
    title: "Dental Crowns & Bridges",
    shortDesc: "High-durability porcelain, ceramic & zirconia crowns",
    fullDesc: "Reinforce weakened, heavily decayed, or post-RCT teeth with precision-fit zirconia, E-max ceramic, and porcelain-fused-to-metal crowns crafted for high bite strength and seamless aesthetics.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    time: "2 sessions",
    inclusions: [
      "Conservative 3D preparation & digital scan",
      "Shade matching under natural daylight spectrum",
      "Custom monolithic zirconia or aesthetic ceramic fabrication",
      "Permanent adhesive cementation & bite calibration"
    ]
  },
  {
    id: "braces",
    title: "Dental Braces & Invisible Aligners",
    shortDesc: "Clear aligners and ceramic braces for smile alignment",
    fullDesc: "Correct malocclusions, crowding, and gaps discreetly with custom clear aligners or low-friction aesthetic ceramic and metal braces tailored for adolescents and adults.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    time: "Consultation & plan",
    inclusions: [
      "Comprehensive orthodontic assessment & facial harmony study",
      "Virtual treatment simulation showing final smile result",
      "Custom series of comfortable, removable clear aligners",
      "Periodic progress monitoring & refinement"
    ]
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    shortDesc: "Professional chairside bleaching and stain removal",
    fullDesc: "Safely brighten your teeth by several shades in a single chairside visit using medical-grade whitening gels activated to lift stubborn tea, coffee, smoking, and age-related stains without enamel damage.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80",
    time: "45 mins",
    inclusions: [
      "Gingival barrier protection for sensitive gums",
      "Medical-grade active peroxide brightening gel application",
      "Desensitizing post-treatment mineral therapy",
      "Custom take-home maintenance recommendations"
    ]
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning & Polishing",
    shortDesc: "Ultrasonic scaling, plaque removal & gum protection",
    fullDesc: "Gentle ultrasonic scaling to eliminate calcified tartar (calculus) and bio-film bacteria below and above the gum line, concluded with micro-polishing for a glassy, clean feel.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    time: "30 - 45 mins",
    inclusions: [
      "Full periodontal gum pocket assessment",
      "High-frequency ultrasonic tartar dislodgement",
      "Interdental flossing & stain air-polishing",
      "Personalised oral hygiene guidance"
    ]
  },
  {
    id: "smile-design",
    title: "Smile Designing & Restorations",
    shortDesc: "Bespoke porcelain veneers and tooth-colored cosmetic fillings",
    fullDesc: "Transform uneven, chipped, discolored, or gapped teeth with bespoke porcelain veneers and seamless tooth-colored composite restorations crafted in harmony with your smile line.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    time: "Bespoke plan",
    inclusions: [
      "Facial aesthetics analysis & digital smile mockup",
      "Minimal surface preparation with enamel preservation",
      "Handcrafted ultra-thin aesthetic veneers / restorations",
      "Long-lasting bonding and bite verification"
    ]
  },
  {
    id: "kids-dentistry",
    title: "Kids Dentistry (Pediatric Care)",
    shortDesc: "Gentle, child-friendly preventive and restorative care",
    fullDesc: "Warm, stress-free dental visits designed specifically for young patients. We emphasize preventive fluoride treatments, pit-and-fissure sealants, habit-breaking appliances, and gentle cavity treatment.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    time: "Gentle Care",
    inclusions: [
      "Child-friendly oral examination and reassurance",
      "Preventive fluoride varnish application",
      "Pit & fissure dental sealants to prevent cavities",
      "Thumb-sucking and habit-breaking guidance"
    ]
  }
];

// Patient Journey / Work Process from trisha_dental_details.md
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Comprehensive Diagnosis",
    desc: "In-depth consultation, high-resolution digital imaging, and visual examination to understand your exact oral condition and expectations."
  },
  {
    step: "02",
    title: "Personalised Treatment Plan",
    desc: "A transparent roadmap detailing procedure options, number of visits, timelines, and 100% upfront clear pricing with zero surprises."
  },
  {
    step: "03",
    title: "Advanced Gentle Procedures",
    desc: "Execution of your treatment using strict 4-tier autoclave sterilisation, disposable kits, and gentle painless surgical precision."
  },
  {
    step: "04",
    title: "Aftercare & Long-Term Follow-Up",
    desc: "Structured recovery check-ups, post-operative care guidelines, and regular follow-ups to safeguard your healthy, confident smile."
  }
];

// FAQs from trisha_dental_details.md
const FAQS = [
  {
    q: "What treatments are available at Trisha Dental & Implant Centre?",
    a: "We provide comprehensive dental care under one roof: painless Root Canal Treatment (RCT), Dental Crowns & Bridges, Biocompatible Dental Implants, Tooth-Colored Fillings, Teeth Cleaning & Whitening, Smile Designing (Veneers), Braces & Clear Aligners, and specialized Kids Dentistry."
  },
  {
    q: "How do you maintain hygiene and sterilisation?",
    a: "We adhere to hospital-grade sterilisation protocols using modern B-class autoclaving systems, vacuum sterilizers, disposable instrument kits for every patient, and clinical operatory disinfection between appointments."
  },
  {
    q: "Do you provide dental implants and cosmetic smile treatments?",
    a: "Yes. Our dental surgeons specialize in dental implant surgery, aesthetic smile design, custom porcelain veneers, and professional in-office teeth whitening."
  },
  {
    q: "How can I book an appointment?",
    a: "You can book directly by calling us at +91 8851032523 / +91 7011590115, messaging us instantly on WhatsApp (+91 8851032523), filling out the online booking form on this site, or visiting our clinic in Greater Noida."
  }
];

// Testimonials from trisha_dental_details.md
const REVIEWS = [
  {
    name: "Rohit Mehta",
    role: "Patient (RCT Treatment)",
    review: "Had a great experience at Trisha Dental & Implant Centre. My Root Canal Treatment was completely painless and done with utmost care. Highly recommended!"
  },
  {
    name: "Neha Sharma",
    role: "Patient (Dental Implants)",
    review: "I got my Dental Implants done here and the results are fantastic. The doctor is very professional and follows strict sterilisation protocols. Excellent service!"
  },
  {
    name: "Amit Verma",
    role: "Patient (Teeth Cleaning & Whitening)",
    review: "I went for Teeth Cleaning and Whitening. The results were amazing — my smile looks so much better! The team is very friendly, patient, and caring."
  },
  {
    name: "Pooja Singh",
    role: "Parent (Kids Dentistry)",
    review: "Got my child treated for Kids Dentistry at Trisha Dental. The doctor handled everything so patiently. The clinic is clean, modern, and very comfortable for children."
  }
];

const CLINIC_PHOTOS = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80", caption: "Advanced dental treatment operatory" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80", caption: "Calm, welcoming reception & patient lounge" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80", caption: "High-precision implantology surgical bay" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80", caption: "Digital diagnostics & radiographic assessment lounge" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80", caption: "Hospital-grade autoclave sterilisation station" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80", caption: "Gentle pediatric & family dental suite" }
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeReview, setActiveReview] = useState(0);

  // Booking Form State
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingService, setBookingService] = useState(SERVICES[0].title);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;
    setBookingSubmitted(true);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top Floating Header exactly as Sage Space screenshot */}
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <Link href="#services" className={styles.navPillBtn}>Treatments</Link>
            <Link href="#doctors" className={styles.navPillBtn}>Doctors</Link>
            <Link href="#contact" className={styles.navPillBtn}>Contact</Link>
          </div>

          <div className={styles.navCenter}>
            <Link href="/" className={styles.logoLink} aria-label="Trisha Dental & Implant Centre">
              <span className={styles.brandTitleText}>
                TRISHA DENTAL
                <img 
                  src="/tooth.svg" 
                  alt="Tooth Icon" 
                  className={styles.toothIcon}
                  aria-hidden="true" 
                />
              </span>
            </Link>
          </div>

          <div className={styles.navRight}>
            <a href="tel:+918851032523" className={styles.phoneCircleBtn} title="Call Trisha Dental" aria-label="Call Trisha Dental">
              <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.499 20C14.3762 20 14.2534 20 14.1266 20C13.6294 19.9525 13.1384 19.8494 12.6617 19.6923C10.6502 19.0815 8.77468 18.05 7.14592 16.6585C6.0246 15.6999 5.01255 14.6061 4.13023 13.3994C3.56256 12.6503 3.0457 11.8595 2.58352 11.0331C2.02793 9.99942 1.60545 8.89164 1.32732 7.73927C1.2864 7.57458 1.24958 7.40991 1.21685 7.24522C1.17184 7.04153 1.13091 6.83782 1.06953 6.63846C1.01978 6.44513 0.997713 6.24498 1.00406 6.04471C1.00406 5.97537 1.00406 5.9017 1.00406 5.83235C0.979726 5.30491 1.06494 4.77824 1.25367 4.28947C1.44495 3.71657 1.68891 3.16496 1.98202 2.64258C2.18347 2.27931 2.45228 1.963 2.77225 1.71273C3.09223 1.46246 3.45673 1.28339 3.8438 1.18636C4.21832 1.08978 4.60051 1.03031 4.98543 1.00868C5.13742 0.995956 5.28962 1.0306 5.42326 1.10835C5.64509 1.23556 5.83137 1.4224 5.96337 1.65009C6.22934 2.10515 6.46258 2.56457 6.72446 3.07597C7.03953 3.69573 7.39142 4.28946 7.72695 4.84854C7.84763 5.03567 7.94268 5.23995 8.00929 5.4553C8.05488 5.60772 8.06751 5.76905 8.04626 5.92734C8.02502 6.08564 7.97043 6.23684 7.88654 6.36976C7.75597 6.57142 7.60046 6.75363 7.42416 6.9115L7.35869 6.96784C7.14182 7.18454 6.91268 7.40124 6.68354 7.58759C6.45439 7.77395 6.31527 7.91699 6.13523 8.08601C6.06345 8.15309 5.99769 8.22706 5.93882 8.30702C5.90977 8.34023 5.89045 8.38167 5.88319 8.42629C5.87593 8.47091 5.88103 8.51679 5.8979 8.55839C5.97518 8.77312 6.06963 8.98045 6.18024 9.17814L6.21707 9.24316C7.45172 11.6291 9.35056 13.554 11.6551 14.7559C11.7195 14.7897 11.7866 14.8173 11.8556 14.8383C11.8938 14.8549 11.9356 14.8596 11.9761 14.8519C12.0167 14.8442 12.0544 14.8245 12.0848 14.7949C12.2254 14.6634 12.3542 14.5184 12.4694 14.3615L12.5308 14.2835L12.8254 13.9151C13.0668 13.6074 13.3164 13.2867 13.5947 12.992C13.7642 12.7902 13.9818 12.6405 14.2248 12.5586C14.3772 12.5243 14.5345 12.5224 14.6876 12.5529C14.8407 12.5834 14.9866 12.6457 15.1168 12.7363C15.4278 12.9183 15.7347 13.109 16.0457 13.2997L18.0916 14.5479C18.2654 14.6591 18.4321 14.7821 18.5908 14.9163L18.7831 15.068C18.8481 15.1169 18.9008 15.1821 18.9365 15.2576C18.9721 15.3332 18.9897 15.4169 18.9877 15.5014C18.9877 15.5664 18.9877 15.6314 18.9877 15.6921C19.0037 15.8694 19.0037 16.0478 18.9877 16.2251C18.9324 16.7735 18.7797 17.3058 18.5376 17.794C18.2799 18.2477 17.9323 18.6366 17.5187 18.9338C16.9581 19.3129 16.349 19.6048 15.7101 19.8006C15.3193 19.9361 14.9102 20.0035 14.499 20Z" fill="#463B29"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/918851032523?text=Hello%20Trisha%20Dental,%20I%20would%20like%20to%20book%20an%20appointment" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.headerBookBtn}
            >
              Book an appointment
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className={styles.mobileMenuToggle}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.hamburgerBarOpen1 : ""}`} />
            <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.hamburgerBarOpen2 : ""}`} />
            <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.hamburgerBarOpen3 : ""}`} />
          </button>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            className={styles.mobileNavBackdrop} 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
        <div className={`${styles.mobileNavDrawer} ${mobileMenuOpen ? styles.mobileNavDrawerOpen : ""}`}>
          <div className={styles.mobileNavLinks}>
            <Link 
              href="#services" 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Treatments & Procedures</span>
              <span className={styles.mobileNavArrow}>→</span>
            </Link>
            <Link 
              href="#doctors" 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Our Doctors</span>
              <span className={styles.mobileNavArrow}>→</span>
            </Link>
            <Link 
              href="#process" 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Patient Journey</span>
              <span className={styles.mobileNavArrow}>→</span>
            </Link>
            <Link 
              href="#gallery" 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Clinic Gallery</span>
              <span className={styles.mobileNavArrow}>→</span>
            </Link>
            <Link 
              href="#faqs" 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>FAQs</span>
              <span className={styles.mobileNavArrow}>→</span>
            </Link>
            <Link 
              href="#appointment" 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Request Appointment</span>
              <span className={styles.mobileNavArrow}>→</span>
            </Link>
            <Link 
              href="#contact" 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact & Hours</span>
              <span className={styles.mobileNavArrow}>→</span>
            </Link>
          </div>

          <div className={styles.mobileNavFooter}>
            <div className={styles.mobileNavPhoneInfo}>
              <span className={styles.mobileNavPhoneLabel}>Emergency & Inquiries:</span>
              <a href="tel:+918851032523" className={styles.mobileNavPhoneNumber}>+91 8851032523</a>
            </div>
            <a 
              href="https://wa.me/918851032523?text=Hello%20Trisha%20Dental,%20I%20would%20like%20to%20book%20an%20appointment" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileNavWhatsAppBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Chat on WhatsApp</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with inset rounded frame */}
      <section className={styles.heroOuterWrapper}>
        <div className={styles.heroCardFrame}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85"
              alt="Trisha Dental & Implant Centre - State of the Art Practice"
              fill
              priority
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              The dental practice you didn't know you needed.
            </h1>
            <div className={styles.heroButtons}>
              <a 
                href="#appointment"
                className={styles.heroPeachPillBtn}
              >
                Book an appointment
              </a>
              <a 
                href="#services"
                className={styles.heroHollowPillBtn}
              >
                + Explore treatments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Ticker */}
      <section className={styles.logosSection}>
        <div className="marquee-container">
          <div className="marquee-track">
            {HIGHLIGHTS.concat(HIGHLIGHTS).map((item, index) => (
              <div key={`${item}-${index}`} className={styles.tickerPill}>
                <span className={styles.tickerDot}>✦</span>
                <span className={styles.tickerText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophical Text Break Banner */}
      <section className={styles.textBreakSection}>
        <div className={styles.textBreakContainer}>
          <p className={styles.textBreakSubhead}>
            EXCELLENCE • TRANSPARENCY • GENTLE HANDLING
          </p>
          <h2 className={styles.textBreakStatement}>
            “We combine modern dental surgery with meticulous sterilisation and reassuring care. From preventive cleanings to complex dental implant restorations, our priority is your lasting oral health.”
          </h2>
        </div>
      </section>

      {/* Services & Treatments (The Rituals) */}
      <section id="services" className={styles.ritualsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Specialized Procedures</span>
          <h2 className={styles.sectionTitle}>Treatments & Procedures</h2>
          <p className={styles.sectionSubtitle}>
            Full range of comprehensive dental solutions delivered with advanced diagnostic precision, hospital-grade hygiene, and zero hidden charges.
          </p>
        </div>

        <div className={styles.ritualsGrid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.ritualCard}>
              <div className="aspect-curved">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className={styles.ritualDetails}>
                <div className={styles.ritualMeta}>
                  <span className={styles.ritualDuration}>{service.time}</span>
                </div>
                <h3 className={styles.ritualTitle}>{service.title}</h3>
                <p className={styles.ritualDesc}>{service.shortDesc}</p>
                <div className={styles.ritualFooter}>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="btn-pill btn-pill-hollow"
                    style={{ width: '100%' }}
                  >
                    View Details & Inclusions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ritualsActionRow}>
          <a 
            href="#appointment"
            className="btn-pill btn-pill-hollow"
          >
            Schedule a personalized consultation
          </a>
        </div>
      </section>

      {/* Doctors Section - 100vh Full Viewport Sage Space Editorial Layout */}
      <section id="doctors" className={styles.doctorsSection}>
        <div className={styles.doctorsContainer}>
          <div className={styles.doctorsHeader}>
            <span className={styles.doctorsTag}>Experienced Dental Specialists</span>
            <h2 className={styles.doctorsMainTitle}>Our Doctors</h2>
          </div>

          <div className={styles.doctorsColumns}>
            {DOCTORS.map((doc, idx) => (
              <div key={idx} className={styles.doctorEditorialCard}>
                <div className={styles.doctorImageWrap}>
                  <img src={doc.image} alt={doc.name} className={styles.doctorImg} loading="lazy" />
                </div>
                <div className={styles.doctorMetaWrap}>
                  <h3 className={styles.doctorCardName}>{doc.name}</h3>
                  <p className={styles.doctorCardSubtitle}>{doc.title}</p>
                  <p className={styles.doctorCardQual}>{doc.qualification} • {doc.experience}</p>
                  <p className={styles.doctorCardDesc}>{doc.scope}</p>
                  <div className={styles.doctorCardAction}>
                    <a 
                      href={`https://wa.me/918851032523?text=Hello%20Trisha%20Dental,%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(doc.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.doctorBookBtn}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.doctorsBottomNav}>
            <button 
              type="button" 
              className={styles.doctorsNavCircle} 
              aria-label="Previous doctor"
              onClick={() => {
                const el = document.getElementById('doctors');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <a href="#appointment" className={styles.doctorsExplorePill}>
              Explore all consultations
            </a>

            <button 
              type="button" 
              className={styles.doctorsNavCircle} 
              aria-label="Next doctor"
              onClick={() => {
                const el = document.getElementById('process');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Patient Journey (Sage Space Approach Terracotta Block) */}
      <section id="process" className={styles.approachSection}>
        <div className={styles.approachCard}>
          <div className={styles.approachHeaderBlock}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', opacity: 0.9 }}>HOW WE CARE FOR YOU</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, margin: '10px 0 30px' }}>Your Patient Journey</h2>
          </div>
          <div className={styles.approachColumns}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className={styles.approachCol}>
                <span className={styles.stepNumBadge}>{step.step}</span>
                <h3 className={styles.approachColTitle}>{step.title}</h3>
                <p className={styles.approachColText}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.approachButtonWrapper}>
            <a 
              href="https://wa.me/918851032523?text=Hi%20Trisha%20Dental,%20I%20would%20like%20to%20consult%20with%20a%20doctor."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-hollow"
              style={{ borderColor: 'rgba(255, 255, 255, 0.6)', color: '#ffffff' }}
            >
              Consult with our specialists on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Feature Showcase (Salvus block style) */}
      <section className={styles.salvusSection}>
        <div className={styles.salvusContainer}>
          <div className={styles.salvusImageCol}>
            <div className="aspect-curved" style={{ aspectRatio: '4/4.5' }}>
              <img 
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80" 
                alt="Hospital Grade Sterilisation at Trisha Dental"
              />
            </div>
          </div>
          <div className={styles.salvusTextCol}>
            <span className={styles.sectionTag}>Why Choose Us</span>
            <h2 className={styles.salvusTitle}>World-Class Standards Under One Roof</h2>
            <p className={styles.salvusBody}>
              We eliminate dental anxiety by coupling surgical precision with genuine hospitality. Every patient receives a tailored treatment plan with no surprise add-ons.
            </p>
            <div className={styles.salvusBenefits}>
              <div className={styles.salvusBenefitItem}>
                <span className={styles.benefitIcon}>✦</span>
                <div>
                  <strong>Strict 4-Tier Sterilisation Protocols</strong>
                  <p>Advanced autoclaving systems, pouch-sealed sterile instruments, and operatory fumigation after each patient visit.</p>
                </div>
              </div>
              <div className={styles.salvusBenefitItem}>
                <span className={styles.benefitIcon}>✦</span>
                <div>
                  <strong>Complete Family & Cosmetic Dentistry</strong>
                  <p>From toddler checkups to painless root canals and full ceramic smile redesigns, we care for every generation.</p>
                </div>
              </div>
              <div className={styles.salvusBenefitItem}>
                <span className={styles.benefitIcon}>✦</span>
                <div>
                  <strong>Transparent & Upfront Pricing</strong>
                  <p>Detailed treatment roadmaps and straightforward costs explained before any procedure begins.</p>
                </div>
              </div>
            </div>
            <a 
              href="#appointment"
              className="btn-pill btn-pill-solid-gum"
            >
              Book an In-Person Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section id="gallery" className={styles.gallerySection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>The Clinic Environment</span>
          <h2 className={styles.sectionTitle}>Inside Trisha Dental Centre</h2>
          <p className={styles.sectionSubtitle}>
            A clean, serene, modern clinic in Greater Noida designed to make dental procedures calm, hygienic, and dignified.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {CLINIC_PHOTOS.map((photo, idx) => (
            <div key={idx} className={`${styles.galleryItem} ${idx === 1 ? styles.galleryItemWide : ''}`}>
              <div className="aspect-curved" style={{ height: '100%' }}>
                <img src={photo.src} alt={photo.caption} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Reviews Banner */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialContainer}>
          <span className={styles.testimonialTag}>Verified Patient Testimonials</span>
          <blockquote className={styles.testimonialQuote}>
            “{REVIEWS[activeReview].review}”
          </blockquote>
          <span className={styles.testimonialAuthor}>
            — {REVIEWS[activeReview].name} • {REVIEWS[activeReview].role}
          </span>

          <div className={styles.reviewTabGroup}>
            {REVIEWS.map((r, i) => (
              <button
                key={i}
                className={`${styles.reviewTabBtn} ${activeReview === i ? styles.reviewTabActive : ''}`}
                onClick={() => setActiveReview(i)}
                aria-label={`View review from ${r.name}`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Common Questions</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>Everything you need to know about your visits and our treatments.</p>
        </div>

        <div className={styles.faqAccordionContainer}>
          {FAQS.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                onClick={() => setActiveFaq(isOpen ? null : index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.q}</h3>
                  <span className={styles.faqChevron}>{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Online Appointment Booking Card */}
      <section id="appointment" className={styles.bookingCardSection}>
        <div className={styles.bookingCardContainer}>
          <div className={styles.bookingCardHeader}>
            <span className={styles.sectionTag}>Direct Clinic Booking</span>
            <h2 className={styles.bookingCardTitle}>Request an Appointment</h2>
            <p className={styles.bookingCardSub}>
              Fill out the form below or message us directly on WhatsApp for same-day priority scheduling.
            </p>
          </div>

          {bookingSubmitted ? (
            <div className={styles.bookingSuccessState}>
              <span className={styles.successIcon}>✓</span>
              <h3>Thank You, {bookingName}!</h3>
              <p>Your appointment request for <strong>{bookingService}</strong> has been received. Our clinic team will call you shortly at <strong>{bookingPhone}</strong> to confirm your slot.</p>
              <button 
                onClick={() => setBookingSubmitted(false)}
                className="btn-pill btn-pill-hollow"
                style={{ marginTop: '20px' }}
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className={styles.appointmentForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="patientName">Patient Full Name *</label>
                  <input
                    id="patientName"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="patientPhone">Contact Number (WhatsApp/Call) *</label>
                  <input
                    id="patientPhone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="serviceSelect">Select Treatment / Consultation</label>
                  <select
                    id="serviceSelect"
                    value={bookingService}
                    onChange={(e) => setBookingService(e.target.value)}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Checkup & Consultation">General Dental Checkup & Consultation</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input
                    id="preferredDate"
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formSubmitRow}>
                <button type="submit" className="btn-pill btn-pill-solid-gum" style={{ padding: '0.85rem 2.4rem' }}>
                  Confirm Booking Request
                </button>
                <a 
                  href="https://wa.me/918851032523?text=Hello%20Trisha%20Dental,%20I%20would%20like%20to%20book%20an%20appointment." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-hollow"
                >
                  Or Book via WhatsApp (+91 8851032523)
                </a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Modal for Service Inclusions */}
      {selectedService && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedService(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.modalCloseBtn}
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className={styles.modalBody}>
              <div className={styles.modalImageWrap}>
                <img src={selectedService.image} alt={selectedService.title} />
              </div>
              <div className={styles.modalText}>
                <span className={styles.modalTag}>{selectedService.time}</span>
                <h3 className={styles.modalTitle}>{selectedService.title}</h3>
                <p className={styles.modalDesc}>{selectedService.fullDesc}</p>

                <div className={styles.modalInclusions}>
                  <h4>Clinical Inclusions:</h4>
                  <ul>
                    {selectedService.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modalActions}>
                  <a 
                    href={`https://wa.me/918851032523?text=Hello%20Trisha%20Dental,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-solid-gum"
                    style={{ width: '100%', textAlign: 'center', padding: '0.85rem' }}
                  >
                    Inquire on WhatsApp (+91 8851032523)
                  </a>
                  <a 
                    href="tel:+918851032523"
                    className="btn-pill btn-pill-hollow"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Call Clinic (+91 8851032523)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer with Editorial Cursive Header & Back to Top */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerTopBanner}>
          <div className={styles.footerCursiveWrap}>
            <span className={styles.footerScriptAccent}>Your Smile, Our Priority</span>
            <h2 className={styles.footerBigHeading}>
              Experience the <em>gentle</em> art of modern dental care.
            </h2>
          </div>
          <button 
            type="button" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={styles.backToTopPill}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

        <div className={styles.footerGrid}>
          {/* Emblem Column */}
          <div className={styles.footerEmblemCol}>
            <div className={styles.footerMonogram}>
              <span>TD</span>
            </div>
            <p className={styles.footerBrandDesc}>
              Trisha Dental & Implant Centre delivers hospital-grade sterilisation, painless root canals, and bespoke aesthetic dentistry in Greater Noida.
            </p>
          </div>

          {/* Treatments Navigation */}
          <div className={styles.footerCol}>
            <h4>Specialized Treatments</h4>
            <ul>
              <li><a href="#services">Root Canal Treatment (RCT)</a></li>
              <li><a href="#services">Dental Implants</a></li>
              <li><a href="#services">Dental Crowns & Bridges</a></li>
              <li><a href="#services">Clear Aligners & Braces</a></li>
              <li><a href="#services">Teeth Cleaning & Whitening</a></li>
              <li><a href="#services">Smile Designing & Veneers</a></li>
              <li><a href="#services">Kids Pediatric Dentistry</a></li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div className={styles.footerCol}>
            <h4>Consultation Hours</h4>
            <div className={styles.hoursBlock}>
              <strong>Monday – Saturday:</strong><br />
              09:00 AM – 01:00 PM<br />
              03:00 PM – 08:00 PM
            </div>
            <div className={styles.hoursBlock} style={{ marginTop: '14px' }}>
              <strong>Sunday:</strong><br />
              10:00 AM – 02:00 PM<br />
              04:00 PM – 08:00 PM
            </div>
          </div>

          {/* Location & Contacts */}
          <div className={styles.footerCol}>
            <h4>Clinic & Location</h4>
            <p>
              Sec MU 2 near Shani Dev Mandir,<br />
              Village Ghori Bachhera, Greater Noida,<br />
              Uttar Pradesh – 201310
            </p>
            <p style={{ marginTop: '14px' }}>
              <a href="mailto:Trisha.dntl@gmail.com">Trisha.dntl@gmail.com</a><br />
              <a href="tel:+918851032523">+91 8851032523</a> / <a href="tel:+917011590115">+91 7011590115</a>
            </p>
            <div style={{ marginTop: '16px' }}>
              <a 
                href="https://wa.me/918851032523?text=Hello%20Trisha%20Dental,%20I%20would%20like%20to%20book%20a%20consultation"
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerWaBadge}
              >
                Instant WhatsApp Booking ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className={styles.footerSubBar}>
          <div className={styles.socialLinks}>
            <a href="https://wa.me/918851032523" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
            <a href="https://www.instagram.com/trisha.dentalclinic?igsh=c2lhcmM0ZjdodGpx&utm_source=qr" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            <a href="tel:+918851032523">CALL CLINIC</a>
            <a href="tel:+917011590115">EMERGENCY LINE</a>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Trisha Dental & Implant Centre. Greater Noida, UP. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Floating Bottom Action Bar */}
      <div className={styles.mobileBottomBar}>
        <a 
          href="tel:+918851032523" 
          className={styles.mobileBottomCallBtn}
          aria-label="Call Clinic Now"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>Call Now</span>
        </a>
        <a 
          href="https://wa.me/918851032523?text=Hello%20Trisha%20Dental,%20I%20would%20like%20to%20book%20an%20appointment" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.mobileBottomWhatsAppBtn}
          aria-label="Chat on WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.029-.475-1.579-.652-2.578-2.273-2.656-2.378-.079-.105-.634-.842-.634-1.608 0-.767.4-1.144.543-1.301.143-.157.311-.196.416-.196.105 0 .209.001.301.006.096.005.226-.037.352.268.131.319.444 1.082.483 1.161.039.079.066.171.013.276-.052.105-.078.171-.157.262-.078.092-.165.205-.235.276-.08.081-.162.17-.07.327.092.157.408.673.874 1.089.6.535 1.106.7 1.263.78.157.079.248.066.34-.04.092-.105.393-.458.498-.616.105-.157.209-.131.353-.079.144.053.916.432 1.073.511.157.079.262.118.301.184.04.066.04.38-.104.785z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
        <a 
          href="#appointment" 
          className={styles.mobileBottomBookBtn}
          aria-label="Book Appointment"
        >
          <span>Book Slot</span>
        </a>
      </div>
    </div>
  );
}
