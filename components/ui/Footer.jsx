import Image from 'next/image';
import Link from 'next/link';

const calculatorLinks = [
  { label: 'CGPA Calculator', href: '/' },
  { label: 'UK Grade Calculator', href: '/grade-calculator/uk' },
  { label: 'US Grade Calculator', href: '/grade-calculator/us' },
  { label: 'CGPA to Percentage', href: '/grade-calculator/cgpa-percentage' },
];

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand Section */}
          <div className="flex-1">
            <Link
              href="/"
              className="flex gap-2 items-center text-xl font-bold bg-gradient-to-b from-indigo-500 to-indigo-700 text-transparent bg-clip-text hover:text-indigo-700 transition-colors"
              aria-label="Home"
              prefetch={false}
            >
              <Image
                src="/assets/logo/Gradian-Logo-cropped.svg"
                height={36}
                width={30}
                className="md:h-9 w-auto h-7"
                alt="Gradian Logo"
                priority
                unoptimized
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Your trusted companion for accurate grade calculations. Convert
              grades, calculate GPA, and track your academic progress with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-32 mb-4">
            {/* Calculator Links */}
            <div>
              <h3 className="font-semibold leading-6 text-foreground">
                Calculators
              </h3>
              <ul className="mt-4 space-y-4">
                {calculatorLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      prefetch={false}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className=" font-semibold leading-6 text-foreground">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      prefetch={false}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* <Separator className="my-8" /> */}
        <hr className="my-6" />

        {/* Bottom Section */}
        <div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Gradien. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
