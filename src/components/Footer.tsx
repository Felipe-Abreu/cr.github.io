export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-serif font-semibold">
            Esperança: O Caminho para a Transformação
          </h3>
          <p className="text-primary-foreground/80">
            Carlos Roberto de Miranda
          </p>
          <div className="pt-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
