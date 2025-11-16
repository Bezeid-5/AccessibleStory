/**
 * Page expliquant les choix d'accessibilité de l'application
 */
const AboutAccessibilityPage = () => {
  return (
    <div className="about-accessibility-page">
      <h1>Accessibilité</h1>
      
      <section aria-labelledby="intro-title">
        <h2 id="intro-title">Notre engagement pour l'accessibilité</h2>
        <p>
          AccessibleStory a été conçue avec un objectif : rendre la lecture d'histoires
          accessible à tous, y compris les personnes en situation de handicap. Nous avons
          appliqué les standards WCAG 2.1 niveau AA et au-delà pour garantir une expérience
          optimale pour tous les utilisateurs.
        </p>
      </section>

      <section aria-labelledby="features-title">
        <h2 id="features-title">Fonctionnalités d'accessibilité</h2>

        <article className="feature-item">
          <h3>🎹 Navigation au clavier</h3>
          <p>
            Toute l'application est navigable au clavier. Vous pouvez utiliser la touche Tab
            pour naviguer entre les éléments interactifs, et les flèches ← et → pour naviguer
            entre les scènes. Le lien "Aller au contenu principal" en haut de page permet de
            sauter la navigation pour accéder directement au contenu.
          </p>
        </article>

        <article className="feature-item">
          <h3>🔤 Réglage de taille de texte</h3>
          <p>
            Utilisez les boutons A− et A+ dans la barre d'accessibilité pour ajuster la taille
            de police selon vos besoins. La taille peut varier de 12px à 32px. Votre préférence
            est sauvegardée automatiquement dans votre navigateur.
          </p>
        </article>

        <article className="feature-item">
          <h3>⚫ Mode contraste élevé</h3>
          <p>
            Activez le mode contraste élevé pour améliorer la lisibilité du texte. Ce mode
            applique des couleurs à fort contraste conformes aux standards WCAG, facilitant
            la lecture pour les personnes ayant des difficultés visuelles ou travaillant dans
            des conditions de luminosité difficiles.
          </p>
        </article>

        <article className="feature-item">
          <h3>📖 Police lisible</h3>
          <p>
            Le mode "Police lisible" active une police de caractères spécialement conçue pour
            faciliter la lecture, notamment pour les personnes atteintes de dyslexie. Cette
            fonctionnalité améliore la distinction entre les lettres similaires et réduit la
            fatigue visuelle.
          </p>
        </article>

        <article className="feature-item">
          <h3>🔊 Lecture audio</h3>
          <p>
            Chaque scène peut être lue à voix haute grâce à la synthèse vocale de votre navigateur.
            Utilisez le bouton "Lire cette scène" pour activer la lecture audio, et "Arrêter la
            lecture" pour l'arrêter. La lecture utilise une voix française si disponible, avec
            une vitesse et une hauteur normales.
          </p>
        </article>

        <article className="feature-item">
          <h3>📱 Structure sémantique</h3>
          <p>
            L'application utilise des balises HTML5 sémantiques (header, nav, main, section, article, footer)
            et des attributs ARIA appropriés pour que les lecteurs d'écran puissent correctement
            interpréter et présenter le contenu aux utilisateurs malvoyants ou non-voyants.
          </p>
        </article>

        <article className="feature-item">
          <h3>✨ Focus visible</h3>
          <p>
            Tous les éléments interactifs (liens, boutons, champs de formulaire) ont un indicateur
            de focus visible, permettant aux utilisateurs de clavier de savoir où ils se trouvent
            à tout moment. Les états de focus sont clairement visibles avec un contour distinct.
          </p>
        </article>

        <article className="feature-item">
          <h3>📝 Labels et descriptions</h3>
          <p>
            Tous les éléments de formulaire sont correctement étiquetés avec des éléments label
            associés. Les boutons et liens ont des labels descriptifs (aria-label) pour une
            meilleure compréhension, notamment pour les utilisateurs de lecteurs d'écran.
          </p>
        </article>
      </section>

      <section aria-labelledby="standards-title">
        <h2 id="standards-title">Standards respectés</h2>
        <ul>
          <li>
            <strong>WCAG 2.1 niveau AA :</strong> L'application respecte les critères de succès
            du niveau AA des Web Content Accessibility Guidelines 2.1.
          </li>
          <li>
            <strong>RGAA 4.1 :</strong> Compatibilité avec le Référentiel Général d'Amélioration
            de l'Accessibilité français.
          </li>
          <li>
            <strong>Section 508 :</strong> Conforme aux exigences d'accessibilité américaines.
          </li>
        </ul>
      </section>

      <section aria-labelledby="feedback-title">
        <h2 id="feedback-title">Retours et améliorations</h2>
        <p>
          Si vous rencontrez des difficultés d'accessibilité ou avez des suggestions
          d'amélioration, n'hésitez pas à nous faire part de vos retours. Nous nous
          engageons à améliorer continuellement l'accessibilité de l'application.
        </p>
      </section>
    </div>
  )
}

export default AboutAccessibilityPage

