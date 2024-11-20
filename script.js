function navigateTo(page) {
    // Finn alle seksjoner
    const homeSection = document.getElementById('home-section');
    const recipeSection = document.getElementById('recipe-section');
    const shoppingListSection = document.getElementById('shopping-list-section');
    const homeItemsSection = document.getElementById('home-items-section');
  
    // Skjul alle seksjoner først
    homeSection.style.display = 'none';
    recipeSection.style.display = 'none';
    shoppingListSection.style.display = 'none';
    homeItemsSection.style.display = 'none';
  
    // Vis den valgte seksjonen
    if (page === 'home') {
      homeSection.style.display = 'block';
    } else if (page === 'recipes') {
      recipeSection.style.display = 'block';
    } else if (page === 'shoppinglist') {
      shoppingListSection.style.display = 'block';
    } else if (page === 'homeItems') {
      homeItemsSection.style.display = 'block';
    }
  }
  
  function findDeals() {
    const address = document.getElementById('address-input').value;
    const addressMessage = document.getElementById('address-message');
    const offersContent = document.getElementById('offers-content');
    
    if (address) {
      addressMessage.textContent = `Leter etter tilbud nær "${address}"...`;
      
      setTimeout(() => {
        addressMessage.textContent = `Tilbud funnet nær "${address}":`;
        offersContent.innerHTML = `
          <h3>Tilbud:</h3>
          <ul>
            <li>🍅 Tomater - 10 kr/pk</li>
            <li>🥖 Fersk brød - 15 kr</li>
            <li>🧀 Ost - 40% rabatt</li>
            <li>🍗 Kyllingfilet - 30 kr/400g</li>
          </ul>
        `;
      }, 1000); // Simulate delay
    } else {
      addressMessage.textContent = 'Vennligst oppgi en gyldig adresse.';
    }
  }
  