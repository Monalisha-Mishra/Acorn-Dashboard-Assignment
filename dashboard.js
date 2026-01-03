document.addEventListener('DOMContentLoaded', () => {
  const sidebarHeader = document.getElementById('sidebarHeader');
  const sidebarMenu = document.getElementById('sidebarMenu');

  if (sidebarHeader && sidebarMenu) {
    sidebarHeader.addEventListener('click', (e) => {
      e.stopPropagation();
      const hidden = window.getComputedStyle(sidebarMenu).display === 'none';
      sidebarMenu.style.display = hidden ? 'block' : 'none';

      const icon = sidebarHeader.querySelector('i');
      if (icon) icon.style.transform = hidden ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  }
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = document.getElementById(toggle.dataset.target);
      if (!target) return;

      const hidden = window.getComputedStyle(target).display === 'none';
      target.style.display = hidden ? 'block' : 'none';

      const icon = toggle.querySelector('i');
      if (icon) icon.style.transform = hidden ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
  const iconButtons = document.querySelectorAll('.icon-btn');

  iconButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const wasActive = btn.classList.contains('active');
      iconButtons.forEach(b => b.classList.remove('active'));
      if (!wasActive) {
        btn.classList.add('active');
      }
    });
  });
  const headerPlus = document.getElementById('headerPlus');
  if (headerPlus) {
    headerPlus.addEventListener('click', () => {
      headerPlus.classList.toggle('active');
    });
  }
});
document.querySelectorAll('.date-dropdown').forEach(drop => {
  drop.addEventListener('click', () => {
    const icon = drop.querySelector('i');
    icon.classList.toggle('bi-chevron-down');
    icon.classList.toggle('bi-chevron-up');
  });
});
const timeframeToggle = document.getElementById("timeframeToggle");
const datePill = document.querySelector(".date-pill");
if (timeframeToggle && datePill) {
  timeframeToggle.addEventListener("change", () => {
    datePill.style.opacity = timeframeToggle.checked ? "1" : "0.4";
    datePill.style.pointerEvents = timeframeToggle.checked ? "auto" : "none";
  });
}
const dateTrigger = document.getElementById("dateTrigger");
const dateMenu = document.getElementById("dateMenu");
if (dateTrigger && dateMenu) {
  dateTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    dateMenu.classList.toggle("hidden");
  });
  document.querySelectorAll(".date-option").forEach(option => {
    option.addEventListener("click", () => {
      dateTrigger.firstChild.textContent = option.textContent;
      dateMenu.classList.add("hidden");
    });
  });

  document.addEventListener("click", () => {
    dateMenu.classList.add("hidden");
  });
}
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-menu]");
  if (!trigger) return;
  const menuType = trigger.dataset.menu;
  document.querySelectorAll(`[data-menu="${menuType}"]`).forEach(btn => {
    if (btn !== trigger) {
      btn.classList.remove("open");
    }
  });
  trigger.classList.toggle("open");
  console.log(`${menuType} clicked`);
});

  document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const block = btn.closest('.right-row-block');

      document.querySelectorAll('.right-row-block.expanded')
        .forEach(b => b !== block && b.classList.remove('expanded'));

      block.classList.toggle('expanded');
    });
  });
const expandBtn = document.querySelector('.expand-btn');
const bigCard = document.querySelector('.right-big-card');

expandBtn.addEventListener('click', () => {
  bigCard.classList.toggle('expanded');
  expandBtn.textContent = bigCard.classList.contains('expanded') ? '▼' : '▲';
});

  document.querySelectorAll('.marker').forEach(marker => {
    marker.addEventListener('click', () => {
      const type = marker.dataset.type;

      if (type === 'up') {
        alert('Growth detected 📈');
      }
      if (type === 'down') {
        alert('Drop detected 📉');
      }
      if (type === 'star') {
        alert('Top performance ⭐');
      }
    });
  });

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileOverlay = document.getElementById("mobileOverlay");
function openSidebar() {
  document.body.classList.add("sidebar-open");
}
function closeSidebar() {
  document.body.classList.remove("sidebar-open");
}
mobileMenuBtn?.addEventListener("click", openSidebar);
mobileOverlay?.addEventListener("click", closeSidebar);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSidebar();
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeSidebar();
  }
});
