export function Footer() {
  return (
    <footer className="bg-muted/50 py-6 sm:py-8 mt-12 sm:mt-16">
      <div className="container mx-auto text-center px-4">
        <p className="text-muted-foreground text-xs sm:text-sm">
          © 2025 O.J. Simpson Educational Project. All rights reserved. 
          <br className="sm:hidden" />
          <span className="block sm:inline mt-1 sm:mt-0">
            Created for educational purposes. Hosted and Powered by <span><a href="https://www.sitecraftersz.co/" className="underline hover:text-primary transition-colors">sitecrafters</a></span>
          </span>
        </p>
      </div>
    </footer>
  );
}