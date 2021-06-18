const typesListElem = document.querySelector('.types-list');
const typeElements = document.querySelectorAll('.type');

typesListElem.addEventListener('click', (e) => {
  const targetElem = e.target.closest('.type');
  if (targetElem === null) {
    return;
  }
  for (const typeElem of typeElements) {
    typeElem.classList.remove('type_active');
  }

  targetElem.classList.add('type_active');
  
});
