# Cadence

Un petit espace de frappe, sans compte ni serveur. Interface et exercices en français, anglais, espagnol, portugais et allemand.

## Utilisation

Ouvrir `index.html` dans un navigateur récent, ou lancer un serveur local depuis ce dossier :

```sh
python3 -m http.server 4173
```

Le site est statique : aucun paquet, clé ou variable d’environnement n’est nécessaire. Il peut être déployé directement sur Vercel avec le réglage « Other » / site statique. Les polices Barlow, Barlow Condensed et IBM Plex Mono sont fournies par Google Fonts ; des polices système sont utilisées si elles ne sont pas accessibles.

## Fonctionnalités

- Tests de 15, 30, 60 ou 120 secondes, démarrant à la première frappe.
- Exercices de mots ou de phrases, avec ponctuation et chiffres en option.
- Vitesse, précision, erreurs et barre de temps en direct ; les corrections restent prises en compte dans la précision.
- Résultat partageable, historique local, record, moyenne et graphique des derniers tests.
- Thème clair ou sombre, retour sonore facultatif et raccourci Échap pour recommencer.
- Préférences et résultats enregistrés uniquement dans le stockage local du navigateur. Les effacer, changer de navigateur ou d’appareil les supprime ou les rend indisponibles ailleurs.

La vitesse utilise la convention de 5 caractères corrects pour un mot, divisés par le temps écoulé. La précision compare les frappes correctes au total des frappes ajoutées, y compris les frappes corrigées. Le chronomètre suit le temps réel, même si l’onglet est mis en arrière-plan.

## Confidentialité

Il n’y a pas de compte, d’outil d’analyse ni de transmission des scores à un serveur. La feuille de style Google Fonts peut toutefois entraîner une requête vers Google lorsque la police est chargée.
