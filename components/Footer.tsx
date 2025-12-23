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
                <li>Mobile Development</li>
                <li>Web Applications</li>
                <li>Cloud Solutions</li>
                <li>UX/UI Design</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © 2025 itSquare. All rights reserved.
          </div>
        </div>
      </footer>);
}