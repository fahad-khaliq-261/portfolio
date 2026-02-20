"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-[#a1a1aa]">Last updated: February 19, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-[#a1a1aa]">DataMills (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <ul className="list-disc list-inside text-[#a1a1aa] space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Company or organization information</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                  <li>Usage data (pages visited, time spent on site)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-[#a1a1aa] space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send newsletters and marketing materials (with your consent)</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <ul className="list-disc list-inside text-[#a1a1aa] space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-[#a1a1aa]">If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@datamills.io" className="text-[#6366f1] hover:underline">privacy@datamills.io</a>.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
