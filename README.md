<h1>De opdracht</h1>
Op 6 maart kregen we de opdracht te horen, we moesten de erfbelasting aangifte namaken in een browser, in de huisstijl van de NS. Dit moest gedaan worden met zoveel mogelijk HTML en zo min mogelijk JS en CSS.
We moesten ook een klein onderzoekje doen naar de verschillende functionaliteiten.

<h2>onderzoek</h2>


<h3>1. Inleiding</h3>
Formulieren zijn een belangrijk onderdeel van zowel digitale als papieren communicatie. Ze worden voornamelijk gebruikt om informatie te verzamelen. In dit kleine onderzoekje gaat over hoe formulieren online wordt gebruikt.

<h3>2. Doel van het onderzoek</h3>
Het doel van dit onderzoek is om beter te begrijpen hoe goed formulieren werken, welke problemen mensen ermee hebben en hoe ze verbeterd kunnen worden.

<h3>3. Methode</h3>
Voor dit onderzoek is gekeken naar bestaande informatie over goede formulieren en zijn verschillende formulieren getest op gebruiksgemak.

<h3>4. Resultaten </h3>
Uit eigen analyse blijkt dat goede formulieren de volgende kenmerken hebben:

<li>Duidelijke uitleg: Het moet meteen duidelijk zijn welke informatie ingevuld moet worden, dit word vaak gedaan door een sterretje bij de vraag.

<li>Zo kort mogelijk: Hoe minder velden, hoe beter. Te veel van dezelfde vragen zijn irritant, waardoor ik geen zin had om het in te vullen.

<li>Directe feedback: Als ik iets fout had ingevuld, wilde ik dit graag meteen weten.

<li>Logische opmaak: Een overzichtelijke en goed gestructureerde indeling helpt bij het invullen. Het beste zijn verschillende categorieën.

Handige invulhulp: Automatisch aanvullen en bewaarde gegevens maken het invullen makkelijker.

<h3>5. Conclusie</h3> 
Formulieren zijn belangrijk om informatie duidelijk over te laten komen. Een goed formulier maakt het voor gebruikers makkelijker en sneller om gegevens in te vullen, en de ontvanger haalt hier ook makkelijker informatie uit. een paar van de punten waar ik op ga letten zijn:

<li>Formulieren kort en duidelijk te houden.

<li>Directe foutmeldingen te geven bij verkeerde invoer.

<li>Ze geschikt te maken voor mobiele telefoons.

<li>Regelmatig te testen of verbeteringen nodig zijn.


<h2>Week 1</h2>
Tijdens de eerste week ging ik een beetje bekijken wat ik allemaal moest doen, en beginnen met schetsen maken voor de layout. Ook ging ik alvast wat vragen in een form zetten, dit omdat dat het meeste tijd kost, en je ook kan doen als je nog geen idee heb hoe de website er uit moet zien.<br>
van de docent kregen we een linkje naar een website waar alles stond wat ook in de website gebruikt word, samen met alle kleur codes. Deze codes heb ik in chatGPT gegooid en gevraagd of hij hier een overzichtelijke lijst van kan maken die ik in de :root kan stoppen. Dit kreeg ik er ook uit<br>
ik was uiteindelijk gekomen tot 1c met de vragenlijst<br><br>

<h2>Week 2</h2>
De eerste dag van de 2de week ben ik verder gegaan haan het maken van de vragenlijst, dit heb ik doormiddel van fieldsets gedaan. De eerste dag hield ik me niet bezig met het design maar voornamelijk met de vragenlijst.<br>
de tweede deag ging ik er voor zorgen dat verschillende elementen hidden zijn, totdat ze getoggeld worden. Dit heb ik nu nog door middel van JS gedaan, maar Vivanne heeft me geholpen, en ga in wedek 3 er voor zorgen dat het voornamelijk met HTML kan.<br>
Ook heb ik me een beetje bezig gehouden met de layout, maar ben het hier nog totaal niet mee eens, dus deze mag nog zeker veranderen.

<h2>Week 3</h2>
Tijdens de 3de week ben ik bezig geweest met de validatie van de forms, en heb ik alles taken nog een keertje op een rijtje gezet, en kwam er toen achter dat ik niet veel tijd meer over had. Hierdoor moet ik de lay-out laten voor wat het is en me meer focussen op de functionaliteiten, maar heb ook volgende week nog dus dan kan ik dat ook nog doen.<br>
ik ben best lang bezig geweest met de validatie, dit omdat dit het eerst form is wat ik maak, en ook omdat ik na moet denken over de accessibility. Uiteindelijk is alles gelukt. Het gene wat ik het moeilijkst vond was de validatie van de cijfers, eerst ddeed ik dit met min en max, maar dit kan niet want dan kan het alleen tussen die 2 getallen, en is het niet zo als een woord. Want bij een woord worden de letters als een string gezien, maar bij cijfers is dat niet zo, en dit had ik compleet over het hoofd gezien. Ik heb dit uiteindelijk in chatGPT gezet, chat kwam met 2 antwoorden  pattern = \d{8,9}, en min="10000000" max="999999999". uiteindelijk ben ik voor de eerste keuze gegaan, dit zodat het eerste cijfer ook een 0 kan zijn.


<h2>Week 4</h2>
tijdens de 4de week, die eigenlijk maar uit 1 dag bestond heb ik de meeste progressie gemaakt. Dit omdat ik complexe javascript code gescheven heb. Het idee voor deze code kwam bij Jeremy Keith, hij zei dat je met 2 lines JS code in je HTML kan toevoegen, en dit kan detecteren of javascript gebruikt word. de code is document.documentElement.classList.remove('no-js'); document.documentElement.classList.add('js'); en als je dan de class van je html no-js maakt kan hij daaruit lezen of javascript ondersteunt word of niet. als het niet ondersteunt word dan laat  hij alles zien wat in de class no-js-content staat, en anders alles wat in js-content staat. om dit werkend te krijgen moet er ook een klein beetje css geschreven worden. Om eerlijk te zijn heb ik dit samen met claude ai geschreven, maar dit omdat het een compleet nieuw onderwerp voor mij was, en ik werkelijk geen idee had hoe ik het online goed kon opzoeken. Ook heb ik er nog voor gezorgd dat de website volledig responsive is, wat niet heel moeilijk was, omdat ik niet veel styling gedaan heb. Vandaag heb ik er ook voor gezorgd dat de interactie klopt, en dat als je op een knop klikt er meer vragen zichtbaar zijn. Dit heb ik met js gedaan, en moest ik dus terug draaien als js niet ingeladen kon worden. 


<br><br><br>
Bronnen:<br>
https://www.ns.nl/platform/ voor alle code en opmaak van de NS website <br>
https://www.ns.nl/ om inspiratie op te doen, betreft de huisstijl van de NS
