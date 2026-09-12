document.addEventListener('DOMContentLoaded', () => {
  // Hero Dynamic Headline Text Rotator (Exact Sims Lifecycle Effect)
  const rotatorSpan = document.getElementById('rotator-text');
  const solutionsList = [
    'Circular Solutions',
    'Green Steel Solutions',
    'HKC Certified Demolition',
    'Sustainable Asset Recovery',
    'Eco-Friendly Industry'
  ];
  let currentIndex = 0;

  if (rotatorSpan) {
    setInterval(() => {
      rotatorSpan.style.opacity = '0';
      rotatorSpan.style.transform = 'translateY(10px)';

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % solutionsList.length;
        rotatorSpan.textContent = solutionsList[currentIndex];
        rotatorSpan.style.opacity = '1';
        rotatorSpan.style.transform = 'translateY(0)';
      }, 400);
    }, 3000);
  }

  // Vertical Tab Solutions Switcher (Sims Matrix Style)
  const vtabs = document.querySelectorAll('.sims-vtab');
  const solTag = document.getElementById('sol-tag');
  const solTitle = document.getElementById('sol-title');
  const solDesc = document.getElementById('sol-desc');
  const solFeature1 = document.getElementById('sol-f1');
  const solFeature2 = document.getElementById('sol-f2');
  const solFeature3 = document.getElementById('sol-f3');

  const solutionData = {
    recycling: {
      tag: "Green Demolition Yard",
      title: "HKC Statement of Compliance Ship Recycling",
      desc: "Operating India's premier certified ship breaking facility at Alang Plot No. 24. End-to-end safe decontamination, hazardous waste containment, and green material dismantling.",
      f1: "100% HKC SOC Certified by RINA & ClassNK",
      f2: "Impermeable concrete flooring & oil spillage protection",
      f3: "Full workforce health monitoring and breathing apparatus safety"
    },
    steel: {
      tag: "Circular Economy Metal",
      title: "High-Grade Re-rollable Steel & Scrap Trading",
      desc: "Recovering premium re-rollable structural steel and heavy scrap for over 100 rolling mills nationwide. Reduces carbon footprint by 68% vs virgin steel production.",
      f1: "2.5 Million+ Tons of steel scrap supplied nationwide",
      f2: "Rigorous quality inspection & chemical composition verification",
      f3: "Direct logistics network supplying major infrastructure projects"
    },
    oxygen: {
      tag: "Captive Utilities",
      title: "Industrial Oxygen & Gas Generation Facilities",
      desc: "Dedicated high-purity industrial oxygen gas plants operating 24/7 to power heavy vessel dismantling, thermal cutting, and industrial steel operations.",
      f1: "High purity 99.5%+ industrial oxygen production",
      f2: "Integrated pipeline supply directly to Alang cutting bays",
      f3: "Zero-downtime automated pressure & distribution controls"
    },
    safety: {
      tag: "Sustainability First",
      title: "Environmental Protection & Workforce Safety",
      desc: "Leading the industry with zero-waste targets, rigorous worker welfare programs, safety training academies, and comprehensive hazardous waste management.",
      f1: "ISO 9001, 14001, and 45001 certified management systems",
      f2: "On-site medical center & 24/7 emergency response team",
      f3: "Strict environmental monitoring for soil, water & air quality"
    }
  };

  vtabs.forEach(tab => {
    tab.addEventListener('click', () => {
      vtabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.getAttribute('data-sol');
      if (solutionData[key]) {
        solTag.textContent = solutionData[key].tag;
        solTitle.textContent = solutionData[key].title;
        solDesc.textContent = solutionData[key].desc;
        solFeature1.textContent = solutionData[key].f1;
        solFeature2.textContent = solutionData[key].f2;
        solFeature3.textContent = solutionData[key].f3;
      }
    });
  });
});
