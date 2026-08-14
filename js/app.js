/**
 * Carkhol Tenis Class - Application Logic
 * Menangani render dinamis, interaksi UI, form pendaftaran, WhatsApp redirect, Lightbox, dan Admin Panel.
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.TENNIS_DATA;
  if (!data) {
    console.error("Data Carkhol Tenis Class tidak ditemukan!");
    return;
  }

  // 1. Render Dynamic Elements
  renderAcademyInfo(data.academy);
  renderCoachInfo(data.coach);
  renderPackages(data.packages);
  renderSchedule(data.schedules);
  renderGallery(data.gallery);
  renderRules(data.rules);
  renderFAQs(data.faqs);
  renderTestimonials(data.testimonials);
  populatePackageSelect(data.packages);
  populateScheduleSelect(data.schedules);

  // 2. Setup Interactivity & Events
  setupMobileMenu();
  setupGalleryFilters(data.gallery);
  setupLightbox();
  setupRegistrationForm(data.academy.phone);
  setupAdminModal();
  setupScrollEffects();

  console.log("Carkhol Tenis Class Web App Loaded Successfully.");
});

// --- RENDER FUNCTIONS ---

function renderAcademyInfo(academy) {
  if (!academy) return;

  const heroTitleEl = document.getElementById("hero-title");
  if (heroTitleEl && academy.tagline) {
    const taglineText = academy.tagline;
    // Format taglines with highlight spans if matching words or split cleanly
    const words = taglineText.split(" ");
    if (words.length >= 4) {
      const p1 = words.slice(0, 2).join(" ");
      const p2 = words[2];
      const p3 = words.slice(3, words.length - 1).join(" ");
      const p4 = words[words.length - 1];
      heroTitleEl.innerHTML = `${p1} <span class="highlight-green">${p2}</span> ${p3} <span class="highlight-orange">${p4}</span>`;
    } else {
      heroTitleEl.textContent = taglineText;
    }
  }

  const heroSubEl = document.getElementById("hero-sub");
  if (heroSubEl && academy.subtagline) {
    heroSubEl.textContent = academy.subtagline;
  }

  // Synchronize all WhatsApp Links dynamically
  if (academy.phone) {
    const floatBtn = document.getElementById("floating-wa-btn");
    if (floatBtn) {
      const msg = `Halo Admin ${academy.name || 'Carkhol Tenis Class'}, saya ingin tanya mengenai pendaftaran kelas tenis.`;
      floatBtn.href = `https://api.whatsapp.com/send?phone=${academy.phone}&text=${encodeURIComponent(msg)}`;
    }

    const heroBtn = document.getElementById("hero-wa-btn");
    if (heroBtn) {
      const msg = `Halo Admin ${academy.name || 'Carkhol Tenis Class'}, saya ingin tanya-tanya mengenai kelas tenis.`;
      heroBtn.href = `https://api.whatsapp.com/send?phone=${academy.phone}&text=${encodeURIComponent(msg)}`;
    }

    const contactBtn = document.getElementById("contact-wa-btn");
    if (contactBtn) {
      contactBtn.href = `https://api.whatsapp.com/send?phone=${academy.phone}`;
      contactBtn.innerHTML = `💬 Chat via WhatsApp (${academy.phoneDisplay || academy.phone})`;
    }
  }

  // Synchronize Instagram & TikTok Floating Links
  const floatIgBtn = document.getElementById("floating-ig-btn");
  if (floatIgBtn && (academy.instagram2Url || academy.instagramUrl || academy.instagram)) {
    floatIgBtn.href = academy.instagram2Url || academy.instagramUrl || `https://instagram.com/${(academy.instagram2 || academy.instagram).replace('@', '')}`;
  }

  const floatTiktokBtn = document.getElementById("floating-tiktok-btn");
  if (floatTiktokBtn && academy.tiktokUrl) {
    floatTiktokBtn.href = academy.tiktokUrl;
  }
}

function renderCoachInfo(coach) {
  if (!coach) return;

  const imgEl = document.getElementById("coach-img");
  if (imgEl && coach.image) {
    imgEl.src = coach.image;
    imgEl.onerror = () => {
      imgEl.onerror = null;
      imgEl.src = "assets/images/Profil Coach.png";
    };
  }

  const nameEl = document.getElementById("coach-name");
  if (nameEl && coach.name) nameEl.textContent = coach.name;

  const titleEl = document.getElementById("coach-title");
  if (titleEl && coach.certification) titleEl.textContent = coach.certification;

  const bioEl = document.getElementById("coach-bio");
  if (bioEl && coach.bio) bioEl.textContent = coach.bio;

  const quoteEl = document.getElementById("coach-quote");
  if (quoteEl && coach.philosophy) quoteEl.textContent = `"${coach.philosophy}"`;

  const achContainer = document.getElementById("coach-achievements");
  if (achContainer && coach.achievements) {
    achContainer.innerHTML = coach.achievements
      .map(
        (ach) => `
        <li>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ${ach}
        </li>`
      )
      .join("");
  }
}

function renderTeam(coaches) {
  if (!coaches || !coaches.length) return;
  const container = document.getElementById("team-container");
  if (!container) return;

  container.innerHTML = coaches
    .map(
      (coach) => `
      <div class="team-card reveal-scale">
        <div class="team-img-wrap">
          <img src="${coach.image}" alt="${coach.name}" loading="lazy" />
        </div>
        <div class="team-info">
          <h4>${coach.name}</h4>
          <p class="team-role">${coach.title}</p>
          <p class="team-badge">${coach.certification}</p>
          <p class="team-bio">${coach.shortBio}</p>
        </div>
      </div>`
    )
    .join("");
}

function renderPackages(packages) {
  const container = document.getElementById("packages-container");
  if (!container) return;

  container.innerHTML = packages
    .map(
      (pkg) => `
      <div class="pkg-card reveal-scale ${pkg.isPopular ? "popular" : ""}">
        ${pkg.isPopular ? `<span class="pop-badge">Paling Diminati</span>` : ""}
        <div>
          <div class="pkg-header">
            <span class="pkg-badge">${pkg.badge}</span>
            <h3 class="pkg-name">${pkg.name}</h3>
            <div class="pkg-price-box">
              <span class="pkg-price">${pkg.priceFormatted}</span>
              <span class="pkg-period">/ ${pkg.period}</span>
            </div>
            <p class="pkg-meta">📍 ${pkg.level} • ⏱️ ${pkg.duration} (${pkg.sessions})</p>
          </div>
          <ul class="pkg-features">
            ${pkg.features
          .map(
            (f) => `
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                ${f}
              </li>`
          )
          .join("")}
          </ul>
        </div>
        <div class="pkg-action">
          <button class="btn ${pkg.isPopular ? "btn-orange" : "btn-green"}" onclick="selectPackageForRegistration('${pkg.name}')">
            Daftar Paket Ini
          </button>
        </div>
      </div>`
    )
    .join("");
}

function populatePackageSelect(packages) {
  const select = document.getElementById("reg-package");
  if (!select) return;
  select.innerHTML = `<option value="" disabled selected>-- Pilih Paket Latihan --</option>` +
    packages.map((pkg) => `<option value="${pkg.name}">${pkg.name} (${pkg.priceFormatted})</option>`).join("");
}

function renderSchedule(schedules) {
  const container = document.getElementById("schedule-cards-container");
  if (!container) return;

  container.innerHTML = schedules
    .map(
      (sch) => `
      <div class="tennis-card reveal-scale">
        <div class="tennis-card-lines"></div>
        <div class="tennis-card-header">
          <span class="court-badge">🎾 Sesi Hari ${sch.day}</span>
          <span class="status-pill status-available">● ${sch.status || "TERSEDIA"}</span>
        </div>
        <div class="tennis-card-body">
          <h3 class="day-title">Hari ${sch.day}</h3>
          <div class="time-box">
            <span class="time-icon">⏰</span>
            <span class="time-text">${sch.time}</span>
          </div>
          <div class="court-info">
            <span>🏟️ Lapangan Utama Carkhol Tennis Stadium</span>
            <span>💡 Sesi Malam Floodlight (Lampu Lapangan)</span>
          </div>
        </div>
        <div class="tennis-card-footer">
          <a href="#register" class="btn btn-orange btn-block" onclick="preselectScheduleChoice('${sch.day} (${sch.time})')">
            🎾 Pilih Sesi ${sch.day}
          </a>
        </div>
      </div>`
    )
    .join("");
}

function preselectScheduleChoice(scheduleText) {
  const scheduleInput = document.getElementById("reg-schedule");
  if (scheduleInput) {
    scheduleInput.value = scheduleText;
  }
}

function populateScheduleSelect(schedules) {
  const select = document.getElementById("reg-schedule");
  if (!select || !schedules) return;
  select.innerHTML = `<option value="" disabled selected>-- Pilih Jadwal & Hari Latihan --</option>` +
    schedules.map((sch) => `<option value="${sch.day} (${sch.time})">${sch.day} (${sch.time})</option>`).join("") +
    `<option value="Sabtu & Minggu (18.00 - 21.00 WIB)">Sabtu & Minggu (18.00 - 21.00 WIB)</option>`;
}

function renderGallery(gallery) {
  const container = document.getElementById("gallery-container");
  if (!container) return;

  container.innerHTML = gallery
    .map(
      (item) => `
      <div class="gallery-item reveal-scale" data-category="${item.category}" onclick="openLightbox('${item.src}', '${item.title}')">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <h4>${item.title}</h4>
          <span style="font-size:0.8rem; opacity:0.8;">Klik untuk memperbesar</span>
        </div>
      </div>`
    )
    .join("");
}

function renderRules(rules) {
  const container = document.getElementById("rules-accordion");
  if (!container) return;

  container.innerHTML = rules
    .map(
      (rule, index) => `
      <div class="accordion-item ${index === 0 ? "active" : ""}">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>${rule.title}</span>
          <span class="accordion-icon">▼</span>
        </button>
        <div class="accordion-body">
          <p>${rule.content}</p>
        </div>
      </div>`
    )
    .join("");
}

function renderFAQs(faqs) {
  const container = document.getElementById("faqs-accordion");
  if (!container) return;

  container.innerHTML = faqs
    .map(
      (faq) => `
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>❓ ${faq.q}</span>
          <span class="accordion-icon">▼</span>
        </button>
        <div class="accordion-body">
          <p>${faq.a}</p>
        </div>
      </div>`
    )
    .join("");
}

function renderTestimonials(testimonials) {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (t) => `
      <div class="testimonial-card reveal-scale">
        <div>
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">"${t.text}"</p>
        </div>
        <div class="user-info">
          <img src="${t.avatar}" alt="${t.name}" class="user-avatar" />
          <div class="user-details">
            <h4>${t.name}</h4>
            <p>${t.role}</p>
          </div>
        </div>
      </div>`
    )
    .join("");
}

function renderArticles(articles) {
  const container = document.getElementById("articles-container");
  if (!container) return;

  container.innerHTML = articles
    .map(
      (art) => `
      <div class="article-card reveal-scale">
        <img src="${art.image}" alt="${art.title}" class="article-img" />
        <div class="article-body">
          <div class="article-meta">
            <span>📅 ${art.date}</span>
            <span>⏱️ ${art.readTime}</span>
          </div>
          <h3 class="article-title">${art.title}</h3>
          <p class="article-summary">${art.summary}</p>
          <a href="#contact" class="btn btn-sm btn-outline" style="margin-top:0.5rem;">Baca Selengkapnya</a>
        </div>
      </div>`
    )
    .join("");
}

// --- INTERACTION LOGIC ---

function toggleAccordion(btnElement) {
  const item = btnElement.closest(".accordion-item");
  const isActive = item.classList.contains("active");

  // Optional: close siblings
  const parent = item.parentElement;
  if (parent) {
    parent.querySelectorAll(".accordion-item").forEach((el) => el.classList.remove("active"));
  }

  if (!isActive) {
    item.classList.add("active");
  }
}

function selectPackageForRegistration(packageName) {
  const select = document.getElementById("reg-package");
  if (select) {
    select.value = packageName;
  }
  const formSection = document.getElementById("register");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
}

function selectScheduleForRegistration(day, time, classType) {
  const notesField = document.getElementById("reg-notes");
  if (notesField) {
    notesField.value = `Booking dari Jadwal Website: ${day} (${time}) - ${classType}`;
  }
  const formSection = document.getElementById("register");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

function setupGalleryFilters(galleryData) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      const items = document.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

function setupLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
}

function openLightbox(src, title) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  if (modal && img) {
    img.src = src;
    modal.classList.add("active");
  }
}

function setupRegistrationForm(adminPhone) {
  const form = document.getElementById("tennis-registration-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("reg-name").value.trim();
    const phone = document.getElementById("reg-phone").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const age = document.getElementById("reg-age").value.trim();
    const level = document.getElementById("reg-level").value;
    const pkg = document.getElementById("reg-package").value;
    const schedule = document.getElementById("reg-schedule").value;
    const notes = document.getElementById("reg-notes").value.trim();

    // Validasi No HP (hanya angka min 9 digit)
    const phoneClean = phone.replace(/[^0-9]/g, "");
    if (phoneClean.length < 9) {
      alert("⚠️ Silakan masukkan Nomor WhatsApp/HP yang valid (minimal 9 digit angka).");
      return;
    }

    // Validasi Email
    if (!email.includes("@") || !email.includes(".")) {
      alert("⚠️ Silakan masukkan alamat email yang valid.");
      return;
    }

    const regData = {
      id: "REG-" + Date.now(),
      timestamp: new Date().toLocaleString("id-ID"),
      name,
      phone: phoneClean,
      email,
      age,
      level,
      pkg,
      schedule,
      notes
    };

    // Save to LocalStorage
    saveRegistrationToLocalStorage(regData);

    // Format WhatsApp Message
    const rawTextMessage = `Halo Admin Carkhol Tenis Class! 👋\n\nSaya ingin mendaftar kelas pelatihan tenis dengan rincian berikut:\n\n👤 Nama: ${name}\n📱 No. WA: ${phoneClean}\n✉️ Email: ${email}\n🎂 Usia: ${age} Tahun\n🎾 Level Main: ${level}\n🏆 Paket Diinginkan: ${pkg}\n📅 Jadwal Pilihan: ${schedule}\n📝 Catatan: ${notes || "-"}\n\nMohon konfirmasi ketersediaan slot dan instruksi pembayaran selengkapnya. Terima kasih!`;

    const waUrl = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${encodeURIComponent(rawTextMessage)}`;

    alert("✅ Pendaftaran berhasil disimpan! Anda akan diarahkan ke WhatsApp Admin untuk mengonfirmasi pendaftaran.");
    window.open(waUrl, "_blank");

    form.reset();
  });
}

function saveRegistrationToLocalStorage(data) {
  let regs = JSON.parse(localStorage.getItem("carkhol_class_registrations") || localStorage.getItem("ace_academy_registrations") || "[]");
  regs.unshift(data);
  localStorage.setItem("carkhol_class_registrations", JSON.stringify(regs));
}

function setupAdminModal() {
  const trigger = document.getElementById("admin-panel-trigger");
  const modal = document.getElementById("admin-modal");
  const closeBtn = document.getElementById("admin-close-btn");

  if (trigger && modal) {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      loadAdminData();
      modal.classList.add("active");
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

function loadAdminData() {
  const container = document.getElementById("admin-regs-table-body");
  if (!container) return;

  const regs = JSON.parse(localStorage.getItem("carkhol_class_registrations") || localStorage.getItem("ace_academy_registrations") || "[]");
  if (regs.length === 0) {
    container.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:2rem; color:#94A3B8;">Belum ada pendaftaran yang masuk. Selesaikan form pendaftaran untuk mencoba!</td></tr>`;
    return;
  }

  container.innerHTML = regs
    .map(
      (r) => `
      <tr>
        <td><small>${r.timestamp}</small></td>
        <td><strong>${r.name}</strong></td>
        <td><a href="https://wa.me/${r.phone}" target="_blank" style="color:#10B981; font-weight:700;">${r.phone}</a></td>
        <td>${r.email}</td>
        <td><span class="badge-slot badge-slot-green">${r.pkg}</span></td>
        <td>${r.level} (${r.age} thn)</td>
        <td>${r.schedule}</td>
      </tr>`
    )
    .join("");
}

function exportRegistrationsCSV() {
  const regs = JSON.parse(localStorage.getItem("carkhol_class_registrations") || localStorage.getItem("ace_academy_registrations") || "[]");
  if (regs.length === 0) {
    alert("Belum ada data pendaftar untuk di-export.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,Waktu,Nama,No WA,Email,Usia,Level,Paket,Jadwal,Catatan\n";
  regs.forEach((r) => {
    csvContent += `"${r.timestamp}","${r.name}","${r.phone}","${r.email}","${r.age}","${r.level}","${r.pkg}","${r.schedule}","${r.notes || ""}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `pendaftar_carkhol_class_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- SCROLL & REVEAL EFFECTS ---
function setupScrollEffects() {
  const progressBar = document.getElementById("scroll-progress-bar");
  const backToTopBtn = document.getElementById("back-to-top");
  const navbar = document.querySelector(".navbar");

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = scrollPercent + "%";
    }

    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    updateActiveNavSpy();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  setupIntersectionObserver();
  handleScroll();
}

function setupIntersectionObserver() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 50px 0px",
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      // Immediate check for elements already near viewport
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 50) {
        el.classList.add("revealed");
      } else {
        observer.observe(el);
      }
    });
  } else {
    revealElements.forEach((el) => el.classList.add("revealed"));
  }
}

function updateActiveNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
}
