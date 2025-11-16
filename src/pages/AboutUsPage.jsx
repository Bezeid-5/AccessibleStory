/**
 * Page "À propos de nous"
 * Présente l'équipe, la mission et les valeurs d'AccessibleStory
 */
const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1>À propos de nous</h1>
      
      <section aria-labelledby="mission-title">
        <h2 id="mission-title">Notre mission</h2>
        <p>
          AccessibleStory est née d'une conviction simple : l'accessibilité numérique
          est un droit fondamental, pas une option. Nous croyons que chacun devrait
          pouvoir accéder aux informations et services en ligne, quel que soit son
          handicap ou ses besoins particuliers.
        </p>
        <p>
          Notre mission est de développer des solutions numériques inclusives qui
          permettent à tous, y compris les personnes en situation de handicap,
          d'accéder facilement aux contenus et de profiter pleinement de l'expérience
          numérique.
        </p>
      </section>

      <section aria-labelledby="values-title">
        <h2 id="values-title">Nos valeurs</h2>
        
        <article className="value-item">
          <h3>🌍 Inclusion</h3>
          <p>
            Nous croyons en une société numérique inclusive où personne n'est laissé
            de côté. Chaque fonctionnalité que nous développons est pensée pour être
            accessible au plus grand nombre.
          </p>
        </article>

        <article className="value-item">
          <h3>♿ Accessibilité</h3>
          <p>
            L'accessibilité est au cœur de tout ce que nous faisons. Nous respectons
            et dépassons les standards internationaux (WCAG 2.1, RGAA 4.1) pour garantir
            une expérience optimale pour tous les utilisateurs.
          </p>
        </article>

        <article className="value-item">
          <h3>💡 Innovation</h3>
          <p>
            L'accessibilité est une opportunité d'innovation, pas une contrainte.
            Nous développons des solutions créatives qui améliorent l'expérience
            utilisateur pour tous.
          </p>
        </article>

        <article className="value-item">
          <h3>🤝 Responsabilité</h3>
          <p>
            Nous nous engageons pour un numérique responsable au service de l'humain.
            Chaque décision technique est prise en pensant à l'impact sur les utilisateurs
            et sur la société.
          </p>
        </article>
      </section>

      <section aria-labelledby="vision-title">
        <h2 id="vision-title">Notre vision</h2>
        <p>
          Nous rêvons d'un web où l'accessibilité est la norme, pas l'exception.
          Un web où chaque développeur et chaque entreprise intègre naturellement
          l'accessibilité dans ses pratiques, rendant ainsi le numérique véritablement
          universel.
        </p>
        <p>
          AccessibleStory est notre contribution à cette vision. En démontrant qu'il
          est possible de créer des applications à la fois belles, fonctionnelles et
          accessibles, nous espérons inspirer d'autres développeurs et entreprises
          à suivre cette voie.
        </p>
      </section>

      <section aria-labelledby="engagement-title">
        <h2 id="engagement-title">Notre engagement</h2>
        <p>
          AccessibleStory est développée dans le cadre de l'engagement d'ASI pour un
          numérique responsable au service de l'humain. Nous appliquons nos principes
          en créant des applications accessibles qui garantissent une société plus
          équitable et connectée.
        </p>
        <p>
          Nous nous engageons à :
        </p>
        <ul>
          <li>Respecter et dépasser les standards d'accessibilité internationaux</li>
          <li>Écouter et intégrer les retours des utilisateurs</li>
          <li>Améliorer continuellement l'accessibilité de nos solutions</li>
          <li>Partager nos connaissances et bonnes pratiques</li>
          <li>Défendre un numérique inclusif et responsable</li>
        </ul>
      </section>

      <section aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>
          Si vous avez des questions, des suggestions ou souhaitez partager votre
          expérience avec AccessibleStory, n'hésitez pas à nous contacter. Vos retours
          sont essentiels pour améliorer l'accessibilité de l'application.
        </p>
      </section>
    </div>
  )
}

export default AboutUsPage

