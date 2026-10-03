<p align="center"><img src="icon.png" width="120" alt="Fonte"></p>

<h1 align="center">Fonte</h1>

<p align="center">Suivi de musculation pour Android. Gratuit, sans compte, sans pub, hors ligne.<br>
<i>Workout tracker for Android. Free, no account, no ads, works offline.</i></p>

<p align="center"><a href="https://github.com/Fram-sudo/fonte-releases/releases/latest"><b>Android : télécharger / download</b></a> · <a href="https://fram-sudo.github.io/fonte-releases/"><b>iPhone : web app</b></a></p>

[Français](#français) · [English](#english)

---

## Français

Ce dépôt sert uniquement à télécharger l'application : chaque version de Fonte y est publiée automatiquement.

### En vidéo

**Bande-annonce** (37 s)

https://github.com/user-attachments/assets/4ce30139-c778-41d4-b238-d02ff68e57fe

**Présentation complète** (1 min 29)

https://github.com/user-attachments/assets/2ce205f0-ce30-40e0-8aca-b01c09c481b3

### Ce que fait Fonte

- Séances et routines (dossiers, supersets), saisie rapide des séries, minuteur de repos qui continue dans les notifications.
- 931 exercices en français et en anglais, ou les tiens, avec ta photo.
- Stats : progression semaine après semaine, 1RM estimé, records, poids du corps, et un bilan chaque mois.
- Niveaux et rangs, quêtes, boss et hauts faits : chaque série rapporte de l'XP.
- Cartes d'amis : partage tes performances et ton programme, compare-toi, sans compte ni serveur.
- Sauvegarde automatique, import depuis Hevy, export CSV et Obsidian. Thème clair ou sombre.

### Installer

1. Sur ton téléphone Android (8.0 ou plus récent), ouvre la page de la [dernière version](https://github.com/Fram-sudo/fonte-releases/releases/latest).
2. Dans **Assets**, touche le fichier `Fonte-1.0.X.apk` pour le télécharger, puis ouvre-le.
3. Android demande d'autoriser ton navigateur (ou ton gestionnaire de fichiers) à installer des applications inconnues : active l'autorisation, reviens en arrière, puis touche **Installer**.
4. Si Google Play Protect affiche un avertissement, choisis **Installer quand même** (parfois après **Plus de détails**). C'est normal pour une application qui n'est pas sur le Play Store.

### Mettre à jour

Fonte vérifie elle-même s'il existe une nouvelle version (à l'ouverture, au plus une fois par jour, avec internet) et te la propose, avec ses nouveautés : touche **Mettre à jour**, l'app la télécharge puis Android demande de confirmer l'installation. La première fois, Android demande aussi d'autoriser Fonte à installer des applications. Tes séances, routines et réglages sont conservés.

Tu peux aussi vérifier à la main (Réglages > À propos > Mises à jour), désactiver la vérification automatique, ou télécharger la nouvelle version ici et l'installer par-dessus l'ancienne. Ne désinstalle pas l'application avant, cela effacerait tes données (sauf si tu as une sauvegarde automatique, dans Réglages > Données).

### Si l'installation ne marche pas

- **« Application non installée »** : une autre version de Fonte signée différemment est peut-être déjà sur le téléphone. Fais une sauvegarde, désinstalle-la, puis installe celle-ci.
- **Le fichier reçu par message ne s'ouvre pas** : certaines messageries bloquent ou renomment les fichiers `.apk`. Télécharge-le plutôt depuis la page des versions.
- **Tu as un fichier `.zip`** : ce n'est pas le bon fichier. Prends le `.apk` dans **Assets**.

### Confidentialité

Fonte ne collecte rien et n'envoie rien : pas de compte, pas de serveur, pas de publicité, pas de traceur. Tes données restent sur ton téléphone et dans le dossier de sauvegarde que tu choisis. Internet ne sert qu'à deux choses : afficher les images des exercices (que tu peux aussi télécharger une fois pour toutes) et vérifier s'il existe une nouvelle version, en lisant la page des versions de ce dépôt. Cette vérification peut être désactivée dans Réglages > À propos.

### iPhone

Fonte existe aussi en **web app** pour iPhone : même DA, mêmes écrans, et tes données restent dans le téléphone (pas de compte, pas de serveur). Adresse : **https://fram-sudo.github.io/fonte-releases/**

**Installer** (iPhone avec iOS 16.4 ou plus récent) :

1. Ouvre l'adresse dans **Safari**.
2. Touche **Partager** (le carré avec une flèche, parfois sous **···**), puis **Sur l'écran d'accueil**, puis **Ajouter**.
3. Ouvre ensuite Fonte **toujours depuis son icône** : elle s'affiche en plein écran et marche hors ligne. Un tuto se lance au premier démarrage.

**Important** :

- Tes données sont dans l'app, sur ton téléphone. **Supprimer l'icône efface tes données** : exporte une sauvegarde de temps en temps (Réglages > Sauvegarde, import et export > Sauvegarder maintenant, puis Enregistrer dans Fichiers ou iCloud Drive). L'app te le rappelle chaque semaine.
- Dans un simple onglet de Safari (sans l'installer), iOS peut effacer les données au bout de quelques jours sans visite : installe-la.
- Les mises à jour arrivent toutes seules à l'ouverture (jamais pendant une séance).
- Une sauvegarde passe de l'app Android à la web app et inversement : changer de téléphone ne fait rien perdre.

**Ce qui change par rapport à l'app Android, et pourquoi** : Apple limite ce qu'une web app peut faire sur iPhone.

| Sur Android | Sur iPhone (web app) | Pourquoi |
|---|---|---|
| Fin de repos : son et vibration, même app fermée | Le son se joue seulement si Fonte est à l'écran (l'écran reste allumé pendant la séance), sans vibration | iOS ne laisse pas une web app faire vibrer le téléphone, ni sonner ou tourner en arrière-plan |
| Notification de séance et minuteur sur l'écran verrouillé | Pas de notification ; au retour dans l'app, le temps restant est à jour | Une notification programmée demanderait un serveur, et Fonte n'en a pas |
| Notification du bilan mensuel | La carte du bilan sur l'Accueil seulement | Même raison |
| Sauvegarde automatique dans un dossier | Export manuel vers Fichiers ou iCloud, avec un rappel chaque semaine | Une web app ne peut pas écrire dans un dossier du téléphone |
| Export Obsidian dans un dossier | Fichiers Markdown à enregistrer où tu veux | Même raison |

Le détail est aussi dans l'app : Réglages > À propos > Version web : différences.

**Pour l'instant** : séances, routines et dossiers, exercices et photos, historique, sauvegarde et import (Hevy, Fonte). Les stats, le niveau et les rangs, les quêtes, les boss, les bilans mensuels et les cartes d'amis arrivent dans une prochaine version.

### Développeur

Framana.

---

## English

This repository is only for downloading the app: every Fonte version is published here automatically.

### Watch

**Trailer** (37 s)

https://github.com/user-attachments/assets/e3c287ea-5432-4901-a3e6-24cbe677bf81

**Full walkthrough** (1 min 29)

https://github.com/user-attachments/assets/15d94cd5-b75b-4f93-9420-5d8db5de2cb3

### What Fonte does

- Workouts and routines (folders, supersets), quick set logging, a rest timer that keeps running in your notifications.
- 931 exercises in English and French, or your own, with your photo.
- Stats: week-by-week progress, estimated 1RM, records, body weight, and a report every month.
- Levels and ranks, quests, bosses and achievements: every set earns XP.
- Friend cards: share your performance and your program, compare yourself, no account and no server.
- Automatic backup, Hevy import, CSV and Obsidian export. Light or dark theme.

### Install

1. On your Android phone (8.0 or newer), open the [latest version](https://github.com/Fram-sudo/fonte-releases/releases/latest) page.
2. Under **Assets**, tap `Fonte-1.0.X.apk` to download it, then open it.
3. Android asks you to allow your browser (or file manager) to install unknown apps: turn it on, go back, then tap **Install**.
4. If Google Play Protect shows a warning, choose **Install anyway** (sometimes after **More details**). This is normal for an app that is not on the Play Store.

### Update

Fonte checks for a new version by itself (when it opens, at most once a day, when online) and offers it to you with what's new: tap **Update**, the app downloads it, then Android asks you to confirm the install. The first time, Android also asks you to allow Fonte to install apps. Your workouts, routines and settings are kept.

You can also check by hand (Settings > About > Updates), turn off the automatic check, or download the new version here and install it over the old one. Do not uninstall the app first, that would erase your data (unless you have an automatic backup, in Settings > Data).

### If the install fails

- **"App not installed"**: another Fonte version signed differently may already be on the phone. Make a backup, uninstall it, then install this one.
- **The file you got in a message does not open**: some messaging apps block or rename `.apk` files. Download it from the releases page instead.
- **You have a `.zip` file**: that is not the right file. Take the `.apk` under **Assets**.

### Privacy

Fonte collects nothing and sends nothing: no account, no server, no ads, no trackers. Your data stays on your phone and in the backup folder you choose. The internet is only used for two things: showing exercise images (which you can also download once and for all) and checking for a new version, by reading this repository's releases page. This check can be turned off in Settings > About.

### iPhone

Fonte also exists as a **web app** for iPhone: same look, same screens, and your data stays on your phone (no account, no server). Address: **https://fram-sudo.github.io/fonte-releases/**

**Install** (iPhone with iOS 16.4 or newer):

1. Open the address in **Safari**.
2. Tap **Share** (the square with an arrow, sometimes under **···**), then **Add to Home Screen**, then **Add**.
3. Then **always open Fonte from its icon**: it runs full screen and works offline. A tutorial starts on first launch.

**Important**:

- Your data lives in the app, on your phone. **Deleting the icon erases your data**: export a backup now and then (Settings > Backup, import and export > Back up now, then Save to Files or iCloud Drive). The app reminds you every week.
- In a plain Safari tab (not installed), iOS may erase the data after a few days without a visit: install it.
- Updates arrive by themselves when you open the app (never during a workout).
- A backup moves from the Android app to the web app and back: switching phones loses nothing.

**What differs from the Android app, and why**: Apple limits what a web app can do on iPhone.

| On Android | On iPhone (web app) | Why |
|---|---|---|
| End of rest: sound and vibration, even with the app closed | The sound only plays while Fonte is on screen (the screen stays on during a workout), no vibration | iOS does not let a web app vibrate the phone, nor ring or run in the background |
| Workout notification and timer on the lock screen | No notification; back in the app, the remaining time is correct | A scheduled notification would need a server, and Fonte has none |
| Monthly report notification | Only the report card on Home | Same reason |
| Automatic backup to a folder | Manual export to Files or iCloud, with a weekly reminder | A web app cannot write to a folder on the phone |
| Obsidian export to a folder | Markdown files to save wherever you want | Same reason |

The details are also in the app: Settings > About > Web version: differences.

**For now**: workouts, routines and folders, exercises and photos, history, backup and import (Hevy, Fonte). Stats, level and ranks, quests, bosses, monthly reports and friend cards arrive in a coming version.

### Developer

Framana.
