/**
 * PT Garuda Mitra Equipment - Main Interactive JavaScript Application
 * Zinc Dark Theme & AOS Animation Support
 * All WhatsApp routing to +62 851-6817-4679 with message:
 * "kak aku udah  liat porto web nya aku mau order web disini dong"
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initEquipmentCatalog();
  initEquipmentModal();
  initRentalCalculator();
  initProjectsPortfolio();
  initTimeline();
  initFAQ();
  initCounters();
  initConsultationForm();
  initBackToTop();
  initAOS();
});

function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 750,
      once: true,
      offset: 40,
      easing: "ease-out-cubic"
    });
  }
}

/* ==========================================================================
   1. NAVBAR & NAVIGATION
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById("main-navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky navbar shadow and background elevation on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("glass-nav-scrolled");
      navbar.classList.remove("glass-nav");
    } else {
      navbar.classList.add("glass-nav");
      navbar.classList.remove("glass-nav-scrolled");
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Close mobile menu on clicking any link
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active link indicator on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("text-amber-500", "font-bold");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("text-amber-500", "font-bold");
          }
        });
      }
    });
  });
}

/* ==========================================================================
   2. EQUIPMENT CATALOG RENDERING
   ========================================================================== */
function initEquipmentCatalog() {
  const container = document.getElementById("equipment-catalog-grid");
  if (!container) return;

  container.innerHTML = EQUIPMENT_CATALOG.map((item, idx) => `
    <article class="equipment-card bg-white rounded-2xl border ${item.isBestSeller ? 'border-amber-400 shadow-md ring-1 ring-amber-400/30' : 'border-zinc-200 shadow-sm'} overflow-hidden card-hover-effect flex flex-col justify-between" data-id="${item.id}" data-aos="fade-up" data-aos-delay="${idx * 80}">
      <div>
        <!-- Card Image Header -->
        <div class="relative equipment-image-container aspect-[4/3] overflow-hidden bg-zinc-100">
          <img src="${item.image}" alt="${item.name} - Garuda Mitra Equipment" class="w-full h-full object-cover" loading="lazy">
          
          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none"></div>

          <!-- Best Seller Badge -->
          ${item.isBestSeller ? `
            <div class="absolute top-3.5 right-3.5 z-10">
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-zinc-950 shadow-md">
                 BEST SELLER
              </span>
            </div>
          ` : ''}

          <!-- Category Badge -->
          <div class="absolute top-3.5 left-3.5 z-10">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-900/80 backdrop-blur-sm text-white shadow-sm border border-white/10">
              ${item.category}
            </span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-6">
          <div class="flex items-start justify-between gap-2 mb-2">
            <h3 class="text-xl font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
              ${item.name}
            </h3>
          </div>

        

          <!-- Specifications Mini Grid -->
          <div class="grid grid-cols-2 gap-2 p-3 bg-zinc-50 rounded-xl mb-5 border border-zinc-100 text-xs">
            <div>
              <span class="text-zinc-500 block">Kategori</span>
              <span class="font-semibold text-zinc-800">${item.category}</span>
            </div>
            <div>
              <span class="text-zinc-500 block">Kapasitas</span>
              <span class="font-semibold text-zinc-800">${item.capacity}</span>
            </div>
          </div>

          <!-- Pricing Block -->
          <div class="pt-2 border-t border-zinc-100">
            <div class="flex items-baseline justify-between mb-1">
              <span class="text-xs text-zinc-500">Sewa Harian</span>
              <div class="text-right">
                <span class="text-lg font-black text-amber-600">${item.dailyPriceFormatted}</span>
                <span class="text-xs text-zinc-500">/ hari</span>
              </div>
            </div>
            <div class="flex items-baseline justify-between">
              <span class="text-xs text-zinc-500">Sewa Bulanan</span>
              <div class="text-right">
                <span class="text-sm font-bold text-zinc-700">${item.monthlyPriceFormatted}</span>
                <span class="text-xs text-zinc-500">/ bln</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Actions -->
      <div class="p-6 pt-0 grid grid-cols-2 gap-2.5">
        <button type="button" class="btn-detail-modal w-full py-2.5 px-3 rounded-xl border border-zinc-300 hover:border-zinc-800 text-zinc-700 hover:text-zinc-900 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5" data-id="${item.id}">
          <svg class="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Detail Alat
        </button>
        <button type="button" class="btn-quick-consult w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm" data-id="${item.id}" data-name="${item.name}">
          Konsultasi
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    </article>
  `).join("");

  // Attach event listeners for details and quick consult
  document.querySelectorAll(".btn-detail-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      openEquipmentModal(id);
    });
  });

  document.querySelectorAll(".btn-quick-consult").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const name = e.currentTarget.getAttribute("data-name");
      selectEquipmentInForm(name);
    });
  });
}

/* ==========================================================================
   3. EQUIPMENT DETAIL MODAL
   ========================================================================== */
function initEquipmentModal() {
  const modal = document.getElementById("equipment-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openEquipmentModal(id) {
  const modal = document.getElementById("equipment-modal");
  const item = EQUIPMENT_CATALOG.find(x => x.id === id);
  if (!modal || !item) return;

  document.getElementById("modal-title").textContent = item.name;
  document.getElementById("modal-category").textContent = item.category;
  document.getElementById("modal-image").src = item.image;
  document.getElementById("modal-image").alt = item.name;
  document.getElementById("modal-desc").textContent = item.description;
  document.getElementById("modal-daily-price").textContent = item.dailyPriceFormatted;
  document.getElementById("modal-monthly-price").textContent = item.monthlyPriceFormatted;

  // Render specifications table
  const specsContainer = document.getElementById("modal-specs-list");
  if (specsContainer && item.specifications) {
    specsContainer.innerHTML = Object.entries(item.specifications).map(([key, value]) => {
      const label = formatSpecKey(key);
      return `
        <div class="flex justify-between py-2 border-b border-zinc-100 text-sm">
          <span class="text-zinc-500 font-medium">${label}</span>
          <span class="font-semibold text-zinc-800 text-right">${value}</span>
        </div>
      `;
    }).join("");
  }

  // Render features
  const featuresContainer = document.getElementById("modal-features-list");
  if (featuresContainer && item.features) {
    featuresContainer.innerHTML = item.features.map(f => `
      <li class="flex items-start gap-2.5 text-sm text-zinc-700">
        <svg class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
        <span>${f}</span>
      </li>
    `).join("");
  }

  // Set action button to direct WhatsApp with requested text
  const orderBtn = document.getElementById("modal-order-btn");
  if (orderBtn) {
    orderBtn.onclick = () => {
      const waUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWaMessage)}`;
      window.open(waUrl, "_blank");
    };
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function formatSpecKey(key) {
  const labels = {
    operatingWeight: "Bobot Kerja",
    bucketCapacity: "Kapasitas Bucket",
    enginePower: "Daya Mesin",
    maxDiggingDepth: "Kedalaman Galian Maksimal",
    maxReach: "Jangkauan Maksimal",
    fuelTank: "Kapasitas Tangki BBM",
    condition: "Kondisi Perawatan",
    bladeCapacity: "Kapasitas Blade",
    groundPressure: "Tekanan ke Tanah",
    ripper: "Sistem Ripper",
    dumpClearance: "Tinggi Buang (Clearance)",
    speed: "Kecepatan Maksimal",
    configuration: "Konfigurasi Roda",
    grossVehicleWeight: "Gross Vehicle Weight (GVW)",
    payloadCapacity: "Kapasitas Muatan",
    dumpMechanism: "Mekanisme Hidrolik",
    liftingCapacity: "Kapasitas Angkat",
    liftingHeight: "Tinggi Angkat Maksimal",
    forkLength: "Panjang Fork",
    turningRadius: "Radius Putar"
  };
  return labels[key] || key;
}

/* ==========================================================================
   4. INTERACTIVE RENTAL CALCULATOR & ESTIMATOR
   ========================================================================== */
function initRentalCalculator() {
  const unitSelect = document.getElementById("calc-equipment");
  const durationBtns = document.querySelectorAll(".calc-duration-btn");
  const operatorCheckbox = document.getElementById("calc-with-operator");
  const deliveryCheckbox = document.getElementById("calc-with-delivery");
  const totalDisplay = document.getElementById("calc-total-display");
  const unitThumb = document.getElementById("calc-unit-thumb");
  const unitNameDisplay = document.getElementById("calc-unit-name");
  const unitSpecsDisplay = document.getElementById("calc-unit-specs");
  const breakdownDisplay = document.getElementById("calc-breakdown");
  const submitCalcBtn = document.getElementById("calc-submit-wa");

  if (!unitSelect || !totalDisplay) return;

  // Populate equipment dropdown
  unitSelect.innerHTML = EQUIPMENT_CATALOG.map(item => `
    <option value="${item.id}">${item.name} (${item.capacity})</option>
  `).join("");

  let currentDurationDays = 1;

  function recalculate() {
    const selectedId = unitSelect.value;
    const item = EQUIPMENT_CATALOG.find(x => x.id === selectedId) || EQUIPMENT_CATALOG[0];

    // Update thumbnail & info
    if (unitThumb) unitThumb.src = item.image;
    if (unitNameDisplay) unitNameDisplay.textContent = item.name;
    if (unitSpecsDisplay) unitSpecsDisplay.textContent = `Kapasitas: ${item.capacity} • ${item.category}`;

    let baseRate = 0;
    let rateExplanation = "";

    if (currentDurationDays === 30) {
      baseRate = item.monthlyPrice;
      rateExplanation = `Paket Bulanan (${item.monthlyPriceFormatted})`;
    } else {
      baseRate = item.dailyPrice * currentDurationDays;
      rateExplanation = `${currentDurationDays} hari × ${item.dailyPriceFormatted}`;
    }

    // Addons
    const withOperator = operatorCheckbox ? operatorCheckbox.checked : false;
    const operatorFeePerDay = 350000;
    const operatorTotal = withOperator ? (operatorFeePerDay * currentDurationDays) : 0;

    const withDelivery = deliveryCheckbox ? deliveryCheckbox.checked : false;
    const deliveryEstimated = withDelivery ? 2500000 : 0; // Flat dummy mobilization estimate in Central Java

    const grandTotal = baseRate + operatorTotal + deliveryEstimated;

    // Format IDR
    totalDisplay.textContent = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(grandTotal);

    if (breakdownDisplay) {
      breakdownDisplay.innerHTML = `
        <div class="flex justify-between text-xs text-zinc-500 py-1 border-b border-zinc-100">
          <span>Sewa Unit (${rateExplanation})</span>
          <span class="font-medium text-zinc-700">Rp${baseRate.toLocaleString("id-ID")}</span>
        </div>
        ${withOperator ? `
          <div class="flex justify-between text-xs text-zinc-500 py-1 border-b border-zinc-100">
            <span>Operator Berpengalaman (${currentDurationDays} hari)</span>
            <span class="font-medium text-zinc-700">Rp${operatorTotal.toLocaleString("id-ID")}</span>
          </div>
        ` : ''}
        ${withDelivery ? `
          <div class="flex justify-between text-xs text-zinc-500 py-1 border-b border-zinc-100">
            <span>Estimasi Mobilisasi / Demobilisasi</span>
            <span class="font-medium text-zinc-700">Rp${deliveryEstimated.toLocaleString("id-ID")}</span>
          </div>
        ` : ''}
      `;
    }
  }

  unitSelect.addEventListener("change", recalculate);
  if (operatorCheckbox) operatorCheckbox.addEventListener("change", recalculate);
  if (deliveryCheckbox) deliveryCheckbox.addEventListener("change", recalculate);

  durationBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      durationBtns.forEach(b => {
        b.classList.remove("bg-zinc-900", "text-white", "font-bold");
        b.classList.add("bg-zinc-100", "text-zinc-700");
      });
      btn.classList.add("bg-zinc-900", "text-white", "font-bold");
      btn.classList.remove("bg-zinc-100", "text-zinc-700");
      currentDurationDays = parseInt(btn.getAttribute("data-days"), 10) || 1;
      recalculate();
    });
  });

  // Direct WhatsApp dispatch from calculator using requested text
  if (submitCalcBtn) {
    submitCalcBtn.addEventListener("click", () => {
      const waUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWaMessage)}`;
      window.open(waUrl, "_blank");
    });
  }

  // Run initial calculation
  recalculate();
}

/* ==========================================================================
   5. PROJECTS PORTFOLIO RENDERING
   ========================================================================== */
function initProjectsPortfolio() {
  const container = document.getElementById("projects-portfolio-grid");
  if (!container) return;

  container.innerHTML = PROJECTS_PORTFOLIO.map((p, idx) => `
    <article class="group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between" data-aos="fade-up" data-aos-delay="${idx * 100}">
      <div>
        <div class="relative aspect-[16/10] overflow-hidden bg-zinc-100">
          <img src="${p.image}" alt="${p.name} - Garuda Mitra Equipment" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
          
          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
          
          <div class="absolute top-3 left-3">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-zinc-950 shadow-sm">
              ${p.category}
            </span>
          </div>
          
          <div class="absolute bottom-3 left-3 right-3 text-white">
            <span class="text-xs font-medium text-amber-300 block mb-0.5">${p.location} • ${p.year}</span>
            <h3 class="text-base font-bold leading-snug drop-shadow-sm">${p.name}</h3>
          </div>
        </div>

        <div class="p-5">
          <p class="text-zinc-600 text-xs leading-relaxed mb-4">
            ${p.desc}
          </p>

          <div class="space-y-2 pt-3 border-t border-zinc-100 text-xs">
            <div class="flex items-center justify-between">
              <span class="text-zinc-500">Unit Dikerahkan:</span>
              <span class="font-semibold text-zinc-800 text-right">${p.unit}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-zinc-500">Durasi Pekerjaan:</span>
              <span class="font-semibold text-amber-600">${p.duration}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="px-5 pb-5 pt-0">
        <a href="#contact" class="w-full py-2 px-3 rounded-xl bg-zinc-50 hover:bg-amber-50 border border-zinc-200 hover:border-amber-300 text-zinc-700 hover:text-amber-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5">
          Konsultasi Proyek Serupa
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
  `).join("");
}

/* ==========================================================================
   6. COMPANY TIMELINE
   ========================================================================== */
function initTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = COMPANY_TIMELINE.map((item, index) => `
    <div class="relative flex items-start gap-4 pb-8 last:pb-0" data-aos="fade-up" data-aos-delay="${index * 70}">
      <!-- Vertical line connector -->
      ${index !== COMPANY_TIMELINE.length - 1 ? '<div class="absolute top-7 left-4 w-0.5 h-full -ml-[1px] bg-zinc-200"></div>' : ''}
      
      <!-- Year Circle -->
      <div class="timeline-dot relative z-10 w-8 h-8 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center font-black text-xs shadow-sm flex-shrink-0">
        ${item.year.slice(-2)}
      </div>

      <!-- Content -->
      <div class="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex-1 hover:border-amber-300 transition-colors">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-black text-amber-600">${item.year}</span>
          <span class="text-zinc-300">•</span>
          <h4 class="font-bold text-zinc-900 text-sm">${item.title}</h4>
        </div>
        <p class="text-zinc-600 text-xs leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   7. FAQ ACCORDION
   ========================================================================== */
function initFAQ() {
  const container = document.getElementById("faq-accordion-container");
  if (!container) return;

  container.innerHTML = FAQ_LIST.map((faq, index) => `
    <div class="faq-item border border-zinc-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-zinc-300" data-aos="fade-up" data-aos-delay="${index * 60}">
      <button type="button" class="faq-toggle w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 text-base" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${faq.q}</span>
        <span class="faq-icon w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-600 transition-transform duration-300 ${index === 0 ? 'rotate-180 bg-amber-100 text-amber-700' : ''}">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </button>
      <div class="accordion-content ${index === 0 ? 'open' : ''}">
        <div class="px-6 pb-5 pt-1 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100">
          ${faq.a}
        </div>
      </div>
    </div>
  `).join("");

  // Attach toggle listeners
  container.querySelectorAll(".faq-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".faq-item");
      const content = parent.querySelector(".accordion-content");
      const icon = btn.querySelector(".faq-icon");
      const isAlreadyOpen = content.classList.contains("open");

      container.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));
      container.querySelectorAll(".faq-icon").forEach(i => {
        i.classList.remove("rotate-180", "bg-amber-100", "text-amber-700");
        i.classList.add("bg-zinc-100", "text-zinc-600");
      });
      container.querySelectorAll(".faq-toggle").forEach(t => t.setAttribute("aria-expanded", "false"));

      if (!isAlreadyOpen) {
        content.classList.add("open");
        icon.classList.add("rotate-180", "bg-amber-100", "text-amber-700");
        icon.classList.remove("bg-zinc-100", "text-zinc-600");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ==========================================================================
   8. NUMERICAL COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll(".counter-value");
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNumber = parseInt(target.getAttribute("data-target"), 10);
        const duration = 1400;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.floor(easeProgress * targetNumber);
          target.textContent = currentVal;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = targetNumber;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   9. CONSULTATION FORM & WHATSAPP DISPATCH
   ========================================================================== */
function initConsultationForm() {
  const form = document.getElementById("consultation-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    showNotificationToast("Mengarahkan ke WhatsApp...");

    setTimeout(() => {
      const waUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWaMessage)}`;
      window.open(waUrl, "_blank");
    }, 400);
  });
}

function selectEquipmentInForm(equipmentName) {
  const formSelect = document.getElementById("form-equipment");
  const contactSection = document.getElementById("contact");

  if (formSelect) {
    for (let i = 0; i < formSelect.options.length; i++) {
      if (formSelect.options[i].text.includes(equipmentName) || formSelect.options[i].value.includes(equipmentName)) {
        formSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function showNotificationToast(msg) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 text-white px-5 py-3 rounded-full text-xs font-semibold shadow-xl border border-zinc-700 flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-amber-500 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
    <span>${msg}</span>
  `;

  toast.classList.remove("opacity-0", "pointer-events-none");
  setTimeout(() => {
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 3500);
}

/* ==========================================================================
   10. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
      backToTopBtn.classList.add("opacity-100");
    } else {
      backToTopBtn.classList.add("opacity-0", "pointer-events-none");
      backToTopBtn.classList.remove("opacity-100");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
