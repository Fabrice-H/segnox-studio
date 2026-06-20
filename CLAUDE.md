## Stack technique

- **Framework :** Next.js (App Router) — fullstack, SSR/ISR, SEO
- **Langage :** TypeScript (strict, pas de `any`)
- **Routing :** App Router de Next.js (routes dans `app/`) — file-based
- **Rendu :** SSR + ISR + Server Components (pour le SEO)
- **Données serveur→client :** Server Components / Server Actions pour le SSR ;
  TanStack Query (v5) pour l'interactif côté admin/client
- **État client :** minimal — Zustand (ou TanStack Store), privilégier l'URL state
- **Validation :** Zod (formulaires, API, DB)
- **Base de données :** PostgreSQL (Supabase) + Prisma (ORM)
- **Auth :** Supabase Auth (ou Auth.js)
- **Stockage fichiers :** Supabase Storage
- **Styling :** Tailwind CSS
- **UI :** Radix UI (primitives accessibles non stylées) + Tailwind CSS — couche de composants maison dans `shared/components/ui`
- **Icônes :** Lucide
- **Animations :** Framer Motion
- **Paiement :** CinetPay (Afrique francophone) — activé sur demande client (V2),
  pas en V1
- **Hébergement :** Vercel (app) + Supabase (DB/Storage)
- **Backend séparé :** uniquement quand le SaaS devient gros (sinon Next.js fullstack)

## Standards de développement
- Typage strict, interfaces pour toutes les structures de données, éviter `any`
- Code explicite plutôt qu'implicite
- Routing type-safe via l'App Router (`app/`)
- TanStack Query pour le server-state interactif ; minimiser l'état global client
- Composants maison basés sur les primitives Radix UI, stylés avec Tailwind ; primitives dans `shared/components/ui`
- Zod pour toute validation

## SEO & Référencement
- SSR/ISR par défaut (Server Components) : toutes les pages publiques sont rendues
  côté serveur et indexables. Aucun contenu critique rendu uniquement côté client.
- `generateMetadata` sur CHAQUE page : title, description, URL canonique, Open Graph
  (og:title, og:description, og:image) et Twitter Card. Définir `metadataBase` et
  `lang="fr"` dans le layout racine.
- `app/sitemap.ts` (génère sitemap.xml dynamiquement depuis les contenus publiés)
  + `app/robots.ts`.
- Données structurées JSON-LD (Product / LocalBusiness / Organization selon le site).
- HTML sémantique : un seul `<h1>` par page, hiérarchie des titres respectée,
  attribut `alt` sur toutes les images.
- Images via `next/image` (formats modernes, tailles responsives) ; slugs lisibles ;
  URL canonique par page.
- Performance = SEO : viser le vert sur les Core Web Vitals (LCP, CLS, INP).

## Analytics & Tag Manager
- Intégrer Google Tag Manager + GA4 via `@next/third-parties/google`
  (`<GoogleTagManager gtmId={...} />` et `<GoogleAnalytics gaId={...} />` dans le
  layout racine). GA4 peut être configuré à l'intérieur de GTM pour tout centraliser.
- IDs en variables d'environnement : `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_ID`.
- Scripts chargés en `afterInteractive` (ne jamais bloquer le rendu).
- Suivre les conversions clés via le dataLayer : clic « Commander / Demander sur
  WhatsApp », formulaire de projet envoyé, etc.

## Architecture & Clean Code (règles strictes)
- **Séparation des responsabilités :** les vues (pages, composants) ne font QUE
  l'affichage. Aucune logique métier dans une vue.
- **Logique métier** → dans `features/*/api`, services, ou hooks (`useXxx`). La vue
  appelle ces fonctions, elle ne les contient pas.
- **Types :** jamais de types inline dans une vue ou une fonction. On définit les
  types/interfaces dans des fichiers dédiés (`*.types.ts`, ou via `z.infer` dans
  `schemas/`) et on les IMPORTE.
- **Composants :** un composant = un fichier. On extrait chaque sous-composant dans
  son propre fichier pour garder les vues légères. Une page se contente de COMPOSER
  des composants importés (pas de page « fourre-tout »).
- **Fonctions :** la logique va dans `lib/` ou `utils/` et s'importe — pas de grosses
  fonctions définies à l'intérieur d'un composant.
- Un fichier = une responsabilité ; fichiers courts et lisibles.
- Données serveur via Server Components / Server Actions ; TanStack Query uniquement
  pour l'interactif côté client. Validation Zod partout.

## Dépendances SEO/Analytics à installer
- `@next/third-parties` (GTM + GA4 optimisés pour Next.js)
- Variables d'env requises : `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GTM_ID`,
  `NEXT_PUBLIC_GA_ID`

## Commandes
- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run lint` — ESLint
- `npm run typecheck` — vérification TypeScript

# Cahier des charges — SEGNOX STUDIO

> Document de référence du projet. Définit qui nous sommes, le but, la cible, la proposition de valeur, la méthode de vente (psychologie Godwin Soola [Godwin Tunnel](https://godwinsoola.com/tunnels/tunnel1/offre/a) , [Godwin boutique](https://boutique.godwinsoola.com/)) et le socle technique. À compléter par le fichier `CLAUDE.md` pour le détail développement.

---

## 1. Présentation du projet

**SEGNOX STUDIO** est un studio digital indépendant, fondé et opéré par **Fabrice Segnon**, développeur web à **Abidjan (Côte d'Ivoire)**.

Nous ne sommes **pas une agence**. SEGNOX, c'est **un développeur qui fait le travail bien** — le client parle directement à la personne qui conçoit son système, pas à un commercial. Ce positionnement "solo qui aide" est une **force** : proximité, honnêteté, rapidité, prix justes.

**Contact :** WhatsApp +225 07 78 67 17 17 · Paiement Mobile Money (Wave, Orange Money, CinetPay), possible en plusieurs fois.

---

## 2. Le but du projet

**Permettre aux PME et prestataires d'Afrique francophone de transformer leurs visiteurs Facebook, Instagram et WhatsApp en prospects qualifiés.**

Concrètement, SEGNOX aide ses clients à atteindre trois résultats :
1. **Être crédible et visible** en ligne (présence pro + visibilité Google), au lieu de paraître amateur ou d'être introuvable.
2. **Gagner de vrais clients** (des demandes qualifiées, pas des curieux), au lieu de courir après chaque message.
3. **Gagner du temps** (tri et automatisation), au lieu de répéter les mêmes réponses toute la journée.

> SEGNOX ne vend pas des sites. SEGNOX installe des **systèmes** qui attirent, trient, automatisent et encaissent.

---

## 3. Le problème que nous résolvons (la douleur)

Nos clients sont bons dans leur métier, mais en ligne, rien ne le montre. Ils vivent quatre douleurs :
- **Pas d'image pro :** on les cherche sur Google et on ne trouve rien — ou quelque chose qui fait amateur. Le client doute avant même de parler.
- **Invisibilité :** présents sur WhatsApp/Insta/Facebook, mais invisibles ou négligés sur Google. Les meilleurs prospects trouvent mieux ailleurs.
- **Temps perdu :** des journées entières à répondre aux mêmes questions (« c'est combien ? », « vous êtes dispo ? ») qui ne mènent à rien.
- **Clients perdus :** les bonnes demandes se noient dans le désordre, les relances s'oublient, un concurrent mieux présenté rafle la vente.

---

## 4. La cible

PME, commerçants **et prestataires de services de tous types** en Afrique francophone (Côte d'Ivoire en priorité) qui ont des clients à convaincre et communiquent déjà via les réseaux et WhatsApp.

Exemples : boutiques, mode, déco, auto, immobilier, artisans, coachs, photographes, salons, cliniques, garagistes, traiteurs, consultants, écoles, restaurants, cabinets, prestataires de services.

**Critère unique :** si on les cherche ou si on leur écrit, SEGNOX est pour eux. Pas besoin de "vendre des produits" — il suffit de vouloir arrêter de perdre des clients et du temps.

---

## 5. La proposition de valeur

**Nous vendons des systèmes qui transforment les visiteurs Facebook, Instagram et WhatsApp en prospects qualifiés.**

Un site SEGNOX ne reste pas "posé sur Google sans rien faire". Il remplit plusieurs rôles :
- **Attirer** — site clair, présence soignée, visibilité Google et réseaux.
- **Trier** — formulaire intelligent qui qualifie la demande avant WhatsApp (besoin, budget, ville, détails).
- **Automatiser** — assistant qui répond 24/7, relances automatiques, aucune demande oubliée.
- **Encaisser** — paiement Wave / Orange Money / CinetPay intégré (V2).
- **Rassurer** — image pro, réalisations, avis, qui inspirent confiance.
- **Mesurer** — suivi des visites, des demandes et des produits/services demandés.

---

## 6. La méthode de vente (psychologie Godwin Soola)

Toute la communication SEGNOX (site, tunnel, échanges) suit la séquence :

**Douleur → Frustration → Besoin → Solution → Démonstration**

| Étape | Ce qu'on fait | Exemple |
|---|---|---|
| **1. Douleur** | Nommer le problème réel du client, sans détour. | « Quand on vous cherche sur Google, on ne trouve rien — ou pire, quelque chose qui fait amateur. » |
| **2. Frustration** | Agiter la douleur : le coût du statu quo (temps, clients, image, concurrents). Puis **déculpabiliser** (« ce n'est pas votre faute »). | « Pendant que vous répondez aux curieux, un concurrent plus pro encaisse la vente. » |
| **3. Besoin** | Faire émerger l'envie d'une présence pro et d'un système qui travaille. | « Et si chaque demande arrivait déjà triée, prête à traiter ? » |
| **4. Solution** | Présenter le système SEGNOX, simplement, par le résultat (pas le jargon). | « J'installe un site qui trie vos clients et répond à votre place. » |
| **5. Démonstration** | Prouver et faire passer à l'action via deux leviers gratuits, sans engagement. | **Diagnostic gratuit** sur WhatsApp + **Aperçu/maquette gratuit** du futur site. |

**Garde-fous (ton SEGNOX) :** émotionnel mais **honnête et sobre** (vouvoiement, voix « je »), pas de ton agence/premium, pas de promesse de miracle, pas de faux compte à rebours. L'urgence se crée par la **vérité** (« chaque semaine sans présence pro = des clients perdus que vous ne récupérerez pas »), jamais par une fausse rareté.

**Leviers de capture (à présenter partout) :**
- **A — Diagnostic gratuit sur WhatsApp** : friction nulle, conversation honnête de 10 min.
- **B — Aperçu/maquette gratuit** : levier de curiosité fort ("voyez votre futur site avant de décider"), effet de quasi-propriété.

---

## 7. L'offre

Trois formules, décrites par leur **résultat**, **sans prix affiché** (« on fixe le prix ensemble »).

- **Essentiel** — *Pour exister proprement et avoir l'air pro.* Site clair + infos qui rassurent + visible sur Google + lien WhatsApp.
- **Business (recommandé)** — *Pour ne recevoir que des demandes sérieuses.* Tout l'Essentiel + formulaire de qualification + assistant 24/7 + présence réseaux + paiement Mobile Money.
- **Complet** — *Pour un système qui attire, trie, relance et encaisse.* Tout le Business + relances automatiques + présence renforcée + suivi des demandes.

**Abonnement « Le site qui travaille »** — suivi mensuel léger : entretien, optimisation, relances, petites mises à jour. Revenu récurrent + valeur continue pour le client.

---

## 8. Positionnement & ton de marque

- **Voix :** première personne (« je », Fabrice). Client vouvoyé (« vous »).
- **Ton :** simple, direct, chaleureux, honnête. Mots de tous les jours, phrases courtes. Émotionnel mais crédible.
- **Identité :** dev solo accessible. **Jamais** "grosse agence", "premium", "SaaS", ni jargon corporate.
- **Design :** épuré, clair dominant + quelques sections sombres pour le rythme, accent par touches, mobile-first. « C'est carré, c'est pro, et il y a une vraie personne derrière. »

---

## 9. Socle technique (réf. `CLAUDE.md`)

- **Framework :** Next.js (App Router), TypeScript strict (pas de `any`), Server Components (SSR/ISR pour le SEO).
- **Données :** PostgreSQL (Supabase) + Prisma · Auth Supabase · Stockage Supabase · Validation Zod partout.
- **Front :** Tailwind CSS · primitives Radix UI (composants maison dans `shared/components/ui`) · Lucide · Framer Motion.
- **État :** TanStack Query (server-state interactif), Zustand minimal, privilégier l'URL state.
- **Paiement :** CinetPay (activé en V2 sur demande client, pas en V1).
- **Hébergement :** Vercel (app) + Supabase (DB/Storage).
- **Architecture :** séparation stricte vue / logique métier (`features/*/api`, hooks, `lib/`) · un fichier = une responsabilité · types dédiés (jamais inline) · pages = composition de composants importés.

**SEO (par défaut) :** SSR/ISR, `generateMetadata` sur chaque page (title, description, canonical, OG, Twitter), `sitemap.ts` + `robots.ts`, JSON-LD (LocalBusiness / Organization), HTML sémantique (un seul `<h1>`, `alt` partout), `next/image`, Core Web Vitals au vert.

**Analytics :** Google Tag Manager + GA4 via `@next/third-parties/google`, chargés en `afterInteractive`. Suivi des conversions clés via dataLayer : clic « Demander / Discuter sur WhatsApp », demande d'aperçu gratuit, formulaire de projet envoyé.

---

## 10. Indicateurs de succès (KPIs)

- **Nombre de demandes par semaine** (diagnostic + aperçu gratuit) — indicateur prioritaire.
- **Part de demandes qualifiées** (vs curieux) reçues par le client.
- **Taux de clic** sur les CTA WhatsApp / aperçu gratuit.
- **Délai de mise en ligne** : 3 à 7 jours pour une première version.
- **Rétention abonnement** (« Le site qui travaille »).

---

## 11. Périmètre & évolutions

- **V1 (cœur) :** site + système de qualification + lien WhatsApp pré-rempli + présence/SEO de base + visibilité Google.
- **V2 (évolutions) :** paiement CinetPay/Mobile Money, assistant IA 24/7, automatisations & relances, synchronisation catalogue réseaux, tableau de bord, campagnes pub.

---

*SEGNOX STUDIO — Fabrice Segnon · Abidjan, Côte d'Ivoire. Des systèmes qui transforment vos visiteurs en clients.*