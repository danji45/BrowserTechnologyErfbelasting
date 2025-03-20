document.addEventListener('DOMContentLoaded', function() {
    // Hide no-js content and show js content when JavaScript is working
    const noJsContent = document.querySelector('.no-js-content');
    const jsContent = document.querySelector('.js-content');
    
    if (noJsContent && jsContent) {
        noJsContent.style.display = 'none';
        jsContent.style.display = 'block';
    }
    
    console.log('JavaScript is succesvol geladen');
    

    
    
    // Getrouwd toggle
    const welGetrouwdRadio = document.getElementById('welGetrouwd');
    const nietGetrouwdRadio = document.getElementById('nietGetrouwd');
    const hiddenElementGetrouwd = document.getElementById('hiddenElementGetrouwd');

    function toggleHiddenElementGetrouwd() {
        if (welGetrouwdRadio.checked) {
            hiddenElementGetrouwd.style.display = 'block';
            
            // Maak velden binnen deze sectie verplicht als ze data-should-be-required hebben
            const hiddenInputs = hiddenElementGetrouwd.querySelectorAll('input[data-should-be-required]');
            hiddenInputs.forEach(input => {
                input.setAttribute('required', 'true');
            });
        } else {
            hiddenElementGetrouwd.style.display = 'none';
            
            // Maak velden binnen deze sectie niet verplicht
            const hiddenInputs = hiddenElementGetrouwd.querySelectorAll('input');
            hiddenInputs.forEach(input => {
                input.removeAttribute('required');
            });
        }
    }

    // Kinderen toggle
    const welKinderenRadio = document.getElementById('welKinderen');
    const geenKinderenRadio = document.getElementById('geenKinderen');
    const hiddenElementKinderen = document.getElementById('hiddenElementKinderen');

    function toggleHiddenElementKinderen() {
        if (welKinderenRadio.checked) {
            hiddenElementKinderen.style.display = 'block';
            
            // Maak velden binnen deze sectie verplicht als ze data-should-be-required hebben
            const hiddenInputs = hiddenElementKinderen.querySelectorAll('input[data-should-be-required]');
            hiddenInputs.forEach(input => {
                input.setAttribute('required', 'true');
            });
        } else {
            hiddenElementKinderen.style.display = 'none';
            
            // Maak velden binnen deze sectie niet verplicht
            const hiddenInputs = hiddenElementKinderen.querySelectorAll('input');
            hiddenInputs.forEach(input => {
                input.removeAttribute('required');
            });
        }
    }

    // Kind overleden toggle
    const welKindOverledenRadio = document.getElementById('welKindOverleden');
    const geenKindOverledenRadio = document.getElementById('geenKindOverleden');
    const hiddenElementKindOverleden = document.getElementById('hiddenElementKindOverleden');

    function toggleHiddenElementKindOverleden() {
        if (welKindOverledenRadio.checked) {
            hiddenElementKindOverleden.style.display = 'block';
            
            // Maak velden binnen deze sectie verplicht als ze data-should-be-required hebben
            const hiddenInputs = hiddenElementKindOverleden.querySelectorAll('input[data-should-be-required]');
            hiddenInputs.forEach(input => {
                input.setAttribute('required', 'true');
            });
        } else {
            hiddenElementKindOverleden.style.display = 'none';
            
            // Maak velden binnen deze sectie niet verplicht
            const hiddenInputs = hiddenElementKindOverleden.querySelectorAll('input');
            hiddenInputs.forEach(input => {
                input.removeAttribute('required');
            });
        }
    }

    // Testament toggle
    const welTestamentRadio = document.getElementById('welTestament');
    const geenTestamentRadio = document.getElementById('geenTestament');
    const hiddenElementTestament = document.getElementById('hiddenElementTestament');

    function toggleHiddenElementTestament() {
        if (welTestamentRadio.checked) {
            hiddenElementTestament.style.display = 'block';
            
            // Maak velden binnen deze sectie verplicht als ze data-should-be-required hebben
            const hiddenInputs = hiddenElementTestament.querySelectorAll('input[data-should-be-required]');
            hiddenInputs.forEach(input => {
                input.setAttribute('required', 'true');
            });
        } else {
            hiddenElementTestament.style.display = 'none';
            
            // Maak velden binnen deze sectie niet verplicht
            const hiddenInputs = hiddenElementTestament.querySelectorAll('input');
            hiddenInputs.forEach(input => {
                input.removeAttribute('required');
            });
        }
    }

    // Validatie functie
    function validateInput(event) {
        const input = event.target;
        
        // Check if input is required
        if (input.hasAttribute('required')) {
            // Check if input is valid
            if (input.checkValidity() && input.value.trim() !== '') {
                input.classList.add('valid');
                input.classList.remove('invalid');
            } else {
                input.classList.add('invalid');
                input.classList.remove('valid');
            }
        }
    }

    // Voeg event listeners toe voor alle toggles
    welGetrouwdRadio.addEventListener('change', toggleHiddenElementGetrouwd);
    nietGetrouwdRadio.addEventListener('change', toggleHiddenElementGetrouwd);
    
    welKinderenRadio.addEventListener('change', toggleHiddenElementKinderen);
    geenKinderenRadio.addEventListener('change', toggleHiddenElementKinderen);
    
    welKindOverledenRadio.addEventListener('change', toggleHiddenElementKindOverleden);
    geenKindOverledenRadio.addEventListener('change', toggleHiddenElementKindOverleden);
    
    welTestamentRadio.addEventListener('change', toggleHiddenElementTestament);
    geenTestamentRadio.addEventListener('change', toggleHiddenElementTestament);

    // Voeg validatie toe aan alle zichtbare verplichte velden
    const allRequiredInputs = document.querySelectorAll('input[required]');
    allRequiredInputs.forEach(input => {
        input.addEventListener('input', validateInput);
        input.addEventListener('blur', validateInput);
    });

    // Voer de toggle functies uit bij het laden van de pagina
    toggleHiddenElementGetrouwd();
    toggleHiddenElementKinderen();
    toggleHiddenElementKindOverleden();
    toggleHiddenElementTestament();

    // LocalStorage functionaliteit
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

    // Voer de toggle functies opnieuw uit nadat localStorage is toegepast
    // (belangrijk om de juiste secties weer te geven)
    toggleHiddenElementGetrouwd();
    toggleHiddenElementKinderen();
    toggleHiddenElementKindOverleden();
    toggleHiddenElementTestament();
});

document.addEventListener('DOMContentLoaded', function() {
    // Lijst met IDs van alle velden die je wilt valideren
    const fieldIds = [
        'burgerservicenummerGemachtige',
        'beconnummer',
        'protocolnummer',
        'VoorletterGemachtigde',
        'AchternaamGemachtigde',
        'instellingsnaam',
        'straat',
        'huisnummer',
        'postcode',
        'plaats',
        'landcode',
        'telefoonnummer',
        'email'
    ];
    
    // Voeg event listeners toe aan alle velden
    fieldIds.forEach(function(id) {
        const field = document.getElementById(id);
        if (field) {
            field.addEventListener('input', function() {
                validateField(field);
            });
            
            field.addEventListener('blur', function() {
                validateField(field);
            });
        }
    });
    
    function validateField(field) {
        if (field.required || field.hasAttribute('data-should-be-required')) {
            if (field.checkValidity() && field.value.trim() !== '') {
                field.classList.add('valid');
                field.classList.remove('invalid');
            } else {
                field.classList.add('invalid');
                field.classList.remove('valid');
            }
        }
    }
});