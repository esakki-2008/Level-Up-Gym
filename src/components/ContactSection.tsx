import React, { useState } from 'react';
import { GYM_INFO, OPENING_HOURS } from '../data';
import { MapPin, Phone, Clock, Send, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  initialGoal?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialGoal = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: initialGoal || 'General Fitness',
    contactTime: 'Morning (6 AM - 10 AM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Or Enquire</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Connect With <span className="text-amber-400">Level Up Gym</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Drop by our Dombivli East facility or send us an enquiry to kickstart your fitness journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info, Address, Hours, Google Maps link */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white">{GYM_INFO.name}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    Ground Floor, Samruddhi Building,<br />
                    beside Renuka Mata Mandir, Pandurangwadi,<br />
                    SBI Colony, Dombivli East, Kalyan,<br />
                    Maharashtra 421201, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Direct Phone Line</div>
                  <a href={`tel:${GYM_INFO.phoneClean}`} className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
                    {GYM_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <a
                  href={`tel:${GYM_INFO.phoneClean}`}
                  className="px-4 py-3.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Opening Hours</h3>
                  <p className="text-xs text-zinc-400">Monday – Sunday Schedule</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {OPENING_HOURS.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60 last:border-0">
                    <span className="font-semibold text-zinc-300">{item.day}</span>
                    <span className="font-mono text-amber-400 text-xs">{item.timing}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-zinc-500 italic">
                * Call to confirm today's hours on holidays or festivals.
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form & Google Maps Embedded View */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Quick Enquiry Form</h3>
                  <p className="text-xs text-zinc-400">Send us a message and our team will get back to you promptly.</p>
                </div>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white">Enquiry Received!</h4>
                    <p className="text-zinc-300 max-w-md mx-auto text-sm">
                      “Thanks! Your enquiry has been received. The gym team will contact you soon.”
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', goal: 'General Fitness', contactTime: 'Morning (6 AM - 10 AM)', message: '' });
                    }}
                    className="px-6 py-3 rounded-xl bg-zinc-800 text-white font-semibold text-sm hover:bg-zinc-700 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rohan Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Fitness Goal</label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      >
                        <option value="Strength Training">Strength Training</option>
                        <option value="Weight Training">Weight Training</option>
                        <option value="Cardio Fitness">Cardio Fitness</option>
                        <option value="Beginner Program">Beginner Program</option>
                        <option value="Personal Training">Personal Training</option>
                        <option value="General Fitness">General Fitness</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Preferred Contact Time</label>
                      <select
                        value={formData.contactTime}
                        onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                      >
                        <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                        <option value="Afternoon (10 AM - 4 PM)">Afternoon (10 AM - 4 PM)</option>
                        <option value="Evening (4 PM - 10 PM)">Evening (4 PM - 10 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Message / Questions (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Mention any specific questions regarding membership or training..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-black uppercase tracking-wider text-sm shadow-xl shadow-orange-500/20 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Embed Simulation / Card */}
            <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl relative h-72">
              <iframe
                title="Level Up Gym Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.424363234!2d73.090!3d19.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzEyLjAiTiA3M8KwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4">
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:bg-zinc-900 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
