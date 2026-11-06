/**
 * Bilikids Category Context & Back-Button Navigation Controller
 * Manages category return links and single-entry main home navigation.
 */
(function() {
  const path = window.location.pathname.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  const catParam = searchParams.get('cat');

  // 1. Detect and persist active category when visiting category homepages
  if (path.includes('babies.html') || path.endsWith('/babies')) {
    sessionStorage.setItem('bilikids_active_category', 'babies');
  } else if (path.includes('toddlers.html') || path.endsWith('/toddlers')) {
    sessionStorage.setItem('bilikids_active_category', 'toddlers');
  } else if (path.includes('kids.html') || path.endsWith('/kids')) {
    sessionStorage.setItem('bilikids_active_category', 'kids');
  } else if (path.includes('teens.html') || path.endsWith('/teens')) {
    sessionStorage.setItem('bilikids_active_category', 'teens');
  } else if (catParam) {
    sessionStorage.setItem('bilikids_active_category', catParam);
  }

  // 2. Resolve active category for activity / resource pages
  const activeCat = catParam || sessionStorage.getItem('bilikids_active_category') || '';
  
  const categoryRoutes = {
    babies: { url: 'babies.html', label: 'Babies', name: 'Babies (3 - 5)' },
    toddlers: { url: 'toddlers.html', label: 'Toddlers', name: 'Toddlers (6 - 8)' },
    kids: { url: 'kids.html', label: 'Kids', name: 'Kids (9 - 11)' },
    teens: { url: 'teens.html', label: 'Teens', name: 'Teens (12 - 16)' }
  };

  const target = categoryRoutes[activeCat];

  function updateBackButtons() {
    const catBackButtons = document.querySelectorAll('.btn-category-back, #btnCategoryBack');
    catBackButtons.forEach(btn => {
      if (target) {
        btn.href = target.url;
        const textSpan = btn.querySelector('.cat-back-label') || btn.querySelector('.btn-label');
        if (textSpan) {
          textSpan.textContent = `Volver a ${target.label}`;
        } else if (btn.dataset.hasIcon) {
          btn.innerHTML = `<span class="btn-icon">←</span> <span class="btn-label">Volver a ${target.label}</span>`;
        }
        btn.title = `Regresar a la categoría ${target.name}`;
      } else {
        // Fallback for Babies units (house, bili, farm) defaults directly to Babies
        if (path.includes('house') || path.includes('bili') || path.includes('farm')) {
          btn.href = 'babies.html';
          const textSpan = btn.querySelector('.cat-back-label') || btn.querySelector('.btn-label');
          if (textSpan) textSpan.textContent = 'Volver a Babies';
          btn.title = 'Regresar a Babies';
        } else {
          btn.href = 'index.html';
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateBackButtons);
  } else {
    updateBackButtons();
  }
})();
