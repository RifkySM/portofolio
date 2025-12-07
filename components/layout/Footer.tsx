import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 lg:px-16 py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-foreground-muted text-sm">
        © {currentYear} Rifky Saputra Maylandra. Built with ☕ and code.
      </p>
      <div className="flex gap-6">
        <Link
          href="/privacy"
          className="text-foreground-secondary hover:text-foreground-primary text-sm transition-colors"
        >
          Privacy
        </Link>
        <Link
          href="/terms"
          className="text-foreground-secondary hover:text-foreground-primary text-sm transition-colors"
        >
          Terms
        </Link>
      </div>
    </footer>
  );
}
