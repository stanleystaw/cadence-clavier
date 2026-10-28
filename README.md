# Cadence

[Ouvrir Cadence](https://cadence-clavier.vercel.app/)

Test de frappe en français, anglais, espagnol, portugais et allemand. Aucun compte ni serveur de scores.

## Utilisation

```sh
python3 -m http.server 4173
```

Ouvrir ensuite `http://localhost:4173`. Le site est statique et ne nécessite aucune dépendance. Le test fonctionne aussi en ouvrant `index.html` directement, mais l’installation et le mode hors ligne nécessitent HTTPS ou localhost.

## Installation et mode hors ligne

Sur Chrome ou Edge, utiliser le bouton « Installer l’application » ou l’option d’installation du navigateur. Sur iPhone et iPad, ouvrir Cadence dans Safari, toucher Partager puis « Sur l’écran d’accueil ». Les autres navigateurs proposent l’installation selon leur compatibilité.

Après une première visite en ligne et la mise en cache de l’application, les tests restent utilisables hors connexion. Les préférences et résultats sont conservés localement dans chaque navigateur. Effacer les données du site les supprime.

## Fonctionnalités

- Tests de 15, 30, 60 ou 120 secondes, démarrant à la première frappe.
- Mots ou phrases, ponctuation et chiffres en option.
- Extraits de code en Python, JavaScript, TypeScript, HTML, CSS, SQL, Java, C++, Go et Rust, avec indentation au clavier.
- Texte ou code personnel à coller (6 000 caractères maximum), conservé uniquement en mémoire dans la page et jamais envoyé par Cadence.
- Vitesse, précision, erreurs et barre de temps en direct.
- Résultats partageables, historique, record, moyenne et graphique.
- Thème clair ou sombre, son facultatif et raccourci Échap pour recommencer.

Dans les modes Code et Texte personnel, Tab insère l’indentation attendue au début d’une ligne ; Maj + Tab permet de naviguer au clavier. Les espaces, tabulations et retours à la ligne sont conservés. Le texte personnalisé disparaît au rechargement.

La vitesse compte cinq caractères corrects par mot, divisés par le temps écoulé. La précision tient compte de toutes les frappes ajoutées, y compris les erreurs corrigées. Le chronomètre suit le temps réel, même si l’onglet est en arrière-plan.

## Déploiement

Vercel publie les fichiers statiques définis dans `vercel.json`. Le service worker `sw.js` met en cache les fichiers nécessaires au fonctionnement hors ligne. Après modification des fichiers ou de la liste précachée, changer le numéro de version de `CACHE_NAME` pour préparer le nouveau cache sur les appareils déjà installés.

Les polices Google Fonts Barlow, Barlow Condensed et IBM Plex Mono sont incluses localement. Leurs licences sont disponibles dans le dossier `fonts`.
