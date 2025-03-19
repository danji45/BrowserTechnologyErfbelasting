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
    // Selecteer alle inputvelden
    const inputFields = document.querySelectorAll("input");

    inputFields.forEach((inputField) => {
        // Verschillende behandeling op basis van het type inputveld
        const fieldId = inputField.id;
        
        // Eerst de waarden uit localStorage halen en toewijzen
        if (localStorage.getItem(fieldId) !== null) {
            if (inputField.type === "radio") {
                // Voor radiobuttons, controleer of de waarde overeenkomt
                inputField.checked = (localStorage.getItem(fieldId) === inputField.value);
            } else if (inputField.type === "date") {
                // Voor datumvelden gewoon de waarde toewijzen
                inputField.value = localStorage.getItem(fieldId);
            } else {
                // Voor normale tekstvelden, e-mail, enz.
                inputField.value = localStorage.getItem(fieldId);
            }
        }
        
        // Event listeners toevoegen voor het opslaan van waarden
        if (inputField.type === "radio") {
            // Voor radiobuttons luisteren naar het change event
            inputField.addEventListener("change", () => {
                if (inputField.checked) {
                    localStorage.setItem(fieldId, inputField.value);
                }
            });
        } else {
            // Voor andere velden luisteren naar het input event
            inputField.addEventListener("input", () => {
                localStorage.setItem(fieldId, inputField.value);
            });
        }
    });
});
