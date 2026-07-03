export default function Footer() {
  return (
    <footer id="site-footer" className="section-dark border-t border-secondary/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="font-serif font-light text-secondary/30 text-xs text-center">
          © {new Date().getFullYear()} C.O.R.C., Dr. Carlos Antônio Moura.
          <br className="sm:hidden" />{" "}
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
