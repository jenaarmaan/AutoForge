export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AutoForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
