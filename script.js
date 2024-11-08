// Search Bar Recommendations Interaction
const searchInput = document.getElementById('search-input');
const recommendations = document.getElementById('recommendations');

// Filter recommendations based on search input
searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  const items = recommendations.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.textContent || item.innerText;

    if (text.toLowerCase().includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
});
