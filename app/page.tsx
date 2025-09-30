'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-[#FF6B6B]/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/MClogo.jpg"
              alt="Monday Coffee"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-[#FF6B6B]">MONDAY COFFEE</span>
          </motion.div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#story" className="hover:text-[#FF6B6B] transition-colors">Our Story</a>
            <a href="#coffee" className="hover:text-[#FF6B6B] transition-colors">Our Coffee</a>
            <a href="#founders" className="hover:text-[#FF6B6B] transition-colors">Founders</a>
            <a href="#gallery" className="hover:text-[#FF6B6B] transition-colors">Gallery</a>
            <a href="#connect" className="hover:text-[#FF6B6B] transition-colors">Connect</a>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/drinkmondaycoffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B6B] text-black px-6 py-2 rounded-full font-medium hover:bg-[#ff5252] transition-colors"
          >
            Follow Us
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/10 to-black" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="/images/MClogo.jpg"
              alt="Monday Coffee"
              width={280}
              height={280}
              className="mx-auto mb-8 rounded-full shadow-2xl border-4 border-[#FF6B6B]/30"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-[#FF6B6B]"
          >
            MONDAY COFFEE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-2xl md:text-4xl mb-4 font-light"
          >
            Mondays can be stale.<br />Your coffee should never be.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Bold, ethically sourced coffee roasted in Michigan. Small batches brewed in Chicago.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 107, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#story"
              className="bg-[#FF6B6B] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5252] transition-all"
            >
              Our Story
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#connect"
              className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF6B6B] hover:text-black transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Story Section */}
      <motion.section
        id="story"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            Coffee as Connection
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <Image
                src="/images/MC1.jpg"
                alt="Monday Coffee Space"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Monday Coffee was born from the simple belief that coffee is more than a beverage—
                it's a catalyst for meaningful connections and networking.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                After years of working retail and using coffee shops as gathering spaces, our founders
                saw an opportunity to create something special: a coffee brand that celebrates storytelling,
                brings people together, and fuels conversations.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We produce bold coffee, ethically sourced and roasted without all the pretentiousness.
                Just authentic, refreshing coffee that makes every moment—even Monday mornings—a little better.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Coffee Philosophy Section */}
      <motion.section
        id="coffee"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            Bold. Ethical. Unpretentious.
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Our coffee is roasted in small batches in Grand Rapids, Michigan, and brewed fresh
                in Chicago. We source single-origin beans ethically, working directly with farmers
                who share our commitment to quality and sustainability.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Every batch tells a story. Every cup is an experience. We believe great coffee should
                be accessible, inclusive, and never pretentious—just bold, refreshing, and memorable.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Whether you're starting your week or powering through a tough day, Monday Coffee is
                here to fuel your hustle, spark your creativity, and connect you with your community.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Image
                src="/images/MC2.jpg"
                alt="Coffee Roasting"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Founders Section */}
      <motion.section
        id="founders"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-[#FF6B6B] text-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            Meet The Founders
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-black mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <Image
                src="/images/MC3.jpg"
                alt="Amanda & Felton"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Amanda Christine Harth</h3>
                <p className="text-lg opacity-90">Co-Founder</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Felton Edward Kizer</h3>
                <p className="text-lg opacity-90">Co-Founder</p>
              </div>
              <p className="text-xl leading-relaxed">
                Amanda and Felton didn't just start a coffee company—they built a movement.
                Driven by their experiences in retail and their love for networking over coffee,
                they created Monday Coffee to transform how people connect.
              </p>
              <p className="text-xl leading-relaxed">
                Their vision: coffee that brings people together, celebrates diverse stories,
                and creates a more inclusive community—one cup at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            The Monday Vibe
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-16"
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/MC4.jpg",
              "/images/MC5.jpg",
              "/images/MC6.jpg",
              "/images/MC7.jpg",
              "/images/MC8.jpg",
              "/images/MC9.jpg",
              "/images/MC10.jpg",
              "/images/MC11.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer border-2 border-[#FF6B6B]/20"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Connect Section */}
      <motion.section
        id="connect"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            Let's Connect
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Us
                </h3>
                <p className="text-xl text-gray-700">
                  3243 W 16th St<br />
                  Chicago, Illinois 60623
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h3>
                <a href="mailto:drink@mondaycoffee.co" className="text-xl text-gray-700 hover:text-[#FF6B6B] transition-colors">
                  drink@mondaycoffee.co
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours
                </h3>
                <div className="text-lg text-gray-700 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 3:00 PM</p>
                  <p>Saturday - Sunday: 9:00 AM - 3:00 PM</p>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/drinkmondaycoffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @drinkmondaycoffee
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden shadow-2xl h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.3!2d-87.7054!3d41.8586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e33d1234567%3A0xabcdef1234567890!2s3243%20W%2016th%20St%2C%20Chicago%2C%20IL%2060623!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t border-[#FF6B6B]/20">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/MClogo.jpg"
            alt="Monday Coffee"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-full"
          />
          <h3 className="text-3xl font-bold mb-2 text-[#FF6B6B]">MONDAY COFFEE</h3>
          <p className="text-xl text-gray-400 mb-6">Mondays can be stale. Your coffee should never be.</p>
          <div className="border-t border-[#FF6B6B]/20 pt-6 mt-6">
            <p className="text-gray-500">© 2024 Monday Coffee Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}