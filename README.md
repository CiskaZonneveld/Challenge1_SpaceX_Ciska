# Challenge1_SpaceX_Ciska
Deze display laat zien hoever het ruimteschip al onderweg is, laat zien hoe snel het ruimteschip gaat en laat zien hoeveel brandstof er gebruikt is. Door deze drie gegevens kan er berekent worden hoeveel km er nog afgelegd moet worden en of er nog voldoende brandstof is.
Hieronder staan de ontwerpbeslissingen die ik gemaakt heb:

Breakpoints:
Er zijn drie breakpoints te zien in het ontwerp, dus vier verschillende schermgroottes. Bij het bepalen van de breakpoints heb ik gelet op dat de regellengte niet te lang wordt (wat vervelend leest) en heb ik gekeken dat er niet te veel lege ruimte ontstaat.  

Grid:
Voor het ontwerp voor de verschillende schermgroottes heb ik CSS grid gebruikt. Bij de kleinste versie, heb ik één kolom gebruikt, bij de een na kleinste heb ik twee kolommen naast elkaar gebruikt, bij de een na grootste versie heb ik drie kolommen gebruikt en bij de grootste versie heb ik vijf kolommen gebruikt.  
Ook heb ik een grid-gap gebruikt, om zo duidelijk een scheiding te maken tussen de verschillende data. 

Data visualisatie:
Voor de data visualisatie heb ik gebruik gemaakt van Google Charts. Ik heb een gedeelte de code van internet overgenomen, maar heb het aangepast om de gegevens realistischer te maken en dat het hoort bij de data die ik wil laten zien voor het ruimteschip.
Ook heb ik ervoor gezorgd dat je snel kan zien hoever het ruimte al is en hoever het nog is tot Mars. Dit heb ik onder de grafiek gezet. 
Omdat de grafieken niet automatisch meeschalen als je je scherm vergroot of verkleind, heb ik een extra function in javascript toegevoegd. Deze function laad automatisch de pagina als jet hem vergroot of verkleind. Zo staat de data dus altijd goed in beeld. 

Kleuren en lettertypes:
Ik heb een sterrenhemel als achtergrond gekozen voor het ontwerp. Dit heb ik gedaan omdat het dan minder saai eruit ziet en je dan meer het gevoel krijgt dat je in de ruimte bent.
Omdat het een donkere achtergrond is heb ik witte letters gebruikt. Ook heb ik lettertypes gebruikt die ik bij een ruimtelijke sfeer vind passen. 
Om de data visualisaties extra overzichtelijk te maken heb ik ze allemaal een grijze achtergrondkleur gegeven. Zo zie je snel dat het om drie data visualisaties gaat. 

Extra elementen bij grotere versie(s):
Omdat je bij de grotere versies meer ruimte hebt, heb ik er extra afbeeldingen ingezet. Dit heb ik gedaan omdat je dan een mooier ontwerp hebt en je geen hele lege ruimtes krijgt. 


