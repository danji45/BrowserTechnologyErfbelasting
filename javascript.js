document.addEventListener('DOMContentLoaded', function() {
  const welGetrouwdRadio = document.getElementById('welGetrouwd');
  const nietGetrouwdRadio = document.getElementById('nietGetrouwd');
  const hiddenElementGetrouwd = document.getElementById('hiddenElementGetrouwd');

  function toggleHiddenElementGetrouwd() {
      if (welGetrouwdRadio.checked) {
          hiddenElementGetrouwd.style.display = 'block';
      } else {
          hiddenElementGetrouwd.style.display = 'none';
      }
  }

  welGetrouwdRadio.addEventListener('change', toggleHiddenElementGetrouwd);
  nietGetrouwdRadio.addEventListener('change', toggleHiddenElementGetrouwd);
});

document.addEventListener('DOMContentLoaded', function() {
  const welKinderenRadio = document.getElementById('welKinderen');
  const geenKinderenRadio = document.getElementById('geenKinderen');
  const hiddenElementKinderen = document.getElementById('hiddenElementKinderen');

  function toggleHiddenElementKinderen() {
      if (welKinderenRadio.checked) {
          hiddenElementKinderen.style.display = 'block';
      } else {
          hiddenElementKinderen.style.display = 'none';
      }
  }

  welKinderenRadio.addEventListener('change', toggleHiddenElementKinderen);
  geenKinderenRadio.addEventListener('change', toggleHiddenElementKinderen);
});

document.addEventListener('DOMContentLoaded', function() {
  const welKindOverledenRadio = document.getElementById('welKindOverleden');
  const geenKindOverledenRadio = document.getElementById('geenKindOverleden');
  const hiddenElementKindOverleden = document.getElementById('hiddenElementKindOverleden');

  function toggleHiddenElementKindOverleden() {
      if (welKindOverledenRadio.checked) {
          hiddenElementKindOverleden.style.display = 'block';
      } else {
          hiddenElementKindOverleden.style.display = 'none';
      }
  }

  welKindOverledenRadio.addEventListener('change', toggleHiddenElementKindOverleden);
  geenKindOverledenRadio.addEventListener('change', toggleHiddenElementKindOverleden);
});

document.addEventListener('DOMContentLoaded', function() {
  const welTestamentRadio = document.getElementById('welTestament');
  const geenTestamentRadio = document.getElementById('geenTestament');
  const hiddenElementTestament = document.getElementById('hiddenElementTestament');

  function toggleHiddenElementTestament() {
      if (welTestamentRadio.checked) {
          hiddenElementTestament.style.display = 'block';
      } else {
          hiddenElementTestament.style.display = 'none';
      }
  }

  welTestamentRadio.addEventListener('change', toggleHiddenElementTestament);
  geenTestamentRadio.addEventListener('change', toggleHiddenElementTestament);
});


document.addEventListener("DOMContentLoaded", () => {
  const inputFields = document.querySelectorAll("input");

  inputFields.forEach((inputField) => {
      if (localStorage.getItem(inputField.id)) {
          inputField.value = localStorage.getItem(inputField.id);
      }
      inputField.addEventListener("input", () => {
          localStorage.setItem(inputField.id, inputField.value);
      });
  });
});

