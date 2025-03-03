"use client"; // Add this directive at the top of your file

import { Phone, Facebook } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function FloatingContact() {
  useEffect(() => {
    // Function to add Tawk.to script
    const addTawkToScript = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = 'https://embed.tawk.to/67ac9b213a842732607dcf33/1ijt3ruso';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);
    };

    addTawkToScript();
  }, []);

  return (
    <div className="fixed left-4 bottom-4 flex flex-col gap-3 z-50">
    <Link
      href="tel:0333845968"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
    >
      <Phone className="h-6 w-6" />
    </Link>
    <Link
      href="https://www.facebook.com/hohuyhoang308/"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
    >
      <Facebook className="h-6 w-6" />
    </Link>
  </div>
  
  );
}
