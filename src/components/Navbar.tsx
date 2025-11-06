"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b" style={{ 
      backgroundColor: 'var(--harvest-cream)', 
      borderColor: 'var(--harvest-border)' 
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="/" className="flex items-center gap-2" style={{ 
              textDecoration: 'none'
            }}>
              <img 
                src="/logo.svg" 
                alt="Harvestly Logo" 
                className="w-8 h-8"
              />
              <span style={{ 
                fontFamily: 'var(--font-lora), Lora, serif',
                color: 'var(--harvest-green)',
                fontSize: '1.25rem',
                fontWeight: '600'
              }}>
                Harvestly
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <a
              href="#how-it-works"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="transition-colors hover:opacity-70"
            >
              How It Works
            </a>
            <a
              href="#communities"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="transition-colors hover:opacity-70"
            >
              For Communities
            </a>
            <a
              href="#farmers"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="transition-colors hover:opacity-70"
            >
              For Farmers
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <button
              style={{ 
                backgroundColor: 'var(--harvest-green)',
                fontFamily: 'Manrope, sans-serif',
                color: '#ffffff'
              }}
              className="px-6 py-2 rounded-lg transition-colors hover:opacity-90"
            >
              Join Our Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              style={{ color: 'var(--harvest-green)' }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t" style={{ 
          backgroundColor: 'var(--harvest-cream)',
          borderColor: 'var(--harvest-border)'
        }}>
          <div className="px-4 py-4 space-y-3">
            <a
              href="#how-it-works"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#communities"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Communities
            </a>
            <a
              href="#farmers"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                color: '#1A3A2A',
                textDecoration: 'none'
              }}
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Farmers
            </a>
            <button
              style={{ 
                backgroundColor: 'var(--harvest-green)',
                fontFamily: 'Manrope, sans-serif',
                color: '#ffffff'
              }}
              className="w-full px-6 py-2 rounded-lg transition-colors hover:opacity-90 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Our Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
