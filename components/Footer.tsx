"use client";
export default function Footer() {
    return (
    <footer className="border-t px-4 py-12 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-foreground">itSquare</h3>
              <p className="text-sm text-muted-foreground">
                Le partenaire de confiance pour le développement d'applications innovantes.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Développement mobile</li>
                <li>Applications Web</li>
                <li>Solutions Cloud</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Entreprise</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">A propos</a></li>
                <li><a href="/solution" className="hover:text-foreground transition-colors">Solution</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Nous contacter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: team.itsquare@outlook.com</li>
                <li>Téléphone: +33 6 45 98 66 18</li>
                <li>Adresse: 80 rue saint Georges, 54000 Nancy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © 2026 itSquare. Tous droits réservés.
          </div>
        </div>
      </footer>);
}