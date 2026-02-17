import React from 'react';
import { Mail, MessageSquare, Twitter, Youtube } from 'lucide-react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
export function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-text-secondary text-lg font-light">
              Questions about the curriculum? Technical issues? Reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-bg-card p-8 border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-text-secondary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-bg-elevated border border-border text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />

                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-bg-elevated border border-border text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />

                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-secondary mb-2">
                    Subject
                  </label>
                  <select className="w-full bg-bg-elevated border border-border text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm">
                    <option>General Inquiry</option>
                    <option>Course Question</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-bg-elevated border border-border text-text-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm">
                  </textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-background py-4 font-mono text-sm uppercase tracking-widest font-medium hover:bg-gold-bright transition-colors">

                  Send Message
                </button>
              </form>
            </div>

            {/* Side Info */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-text-primary mb-6">
                  Direct Channels
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold mt-1" size={20} />
                    <div>
                      <div className="text-text-primary font-mono text-sm">
                        support@braveheart.trading
                      </div>
                      <div className="text-text-muted text-xs mt-1">
                        Response time: 24-48 hours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Twitter className="text-gold mt-1" size={20} />
                    <div>
                      <div className="text-text-primary font-mono text-sm">
                        @BraveheartTrading
                      </div>
                      <div className="text-text-muted text-xs mt-1">
                        For public updates and charts
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Youtube className="text-gold mt-1" size={20} />
                    <div>
                      <div className="text-text-primary font-mono text-sm">
                        BraveheartTrading
                      </div>
                      <div className="text-text-muted text-xs mt-1">
                        Free educational content and market analysis
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquare className="text-gold mt-1" size={20} />
                    <div>
                      <div className="text-text-primary font-mono text-sm">
                        Discord Community
                      </div>
                      <div className="text-text-muted text-xs mt-1">
                        Members only. Link in Vault.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-bg-elevated border-l-2 border-gold">
                <p className="text-text-secondary text-sm italic font-serif">
                  "The goal of a successful trader is to make the best trades.
                  Money is secondary."
                </p>
                <p className="text-text-muted text-xs mt-2 font-mono uppercase tracking-widest">
                  — Alexander Elder
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>);

}