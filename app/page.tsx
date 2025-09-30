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
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-[#FF6B6B]' : 'bg-transparent'
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
              className="rounded-full border-2 border-[#FF6B6B]"
            />
            <span className="text-2xl font-bold text-[#FF6B6B] tracking-tight">MONDAY COFFEE</span>
          </motion.div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#takingspace" className="hover:text-[#FF6B6B] transition-colors">Our Mission</a>
            <a href="#products" className="hover:text-[#FF6B6B] transition-colors">Products</a>
            <a href="#founders" className="hover:text-[#FF6B6B] transition-colors">The Founders</a>
            <a href="#connect" className="hover:text-[#FF6B6B] transition-colors">Connect</a>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/drinkmondaycoffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B6B] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors"
          >
            Follow Us
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section - Bold Statement */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#FF6B6B]/10 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('/images/MC1.jpg')] bg-cover bg-center opacity-10"
        />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="/images/MClogo.jpg"
              alt="Monday Coffee"
              width={200}
              height={200}
              className="mx-auto mb-8 rounded-full border-4 border-[#FF6B6B] shadow-2xl shadow-[#FF6B6B]/50"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-[#FF6B6B] tracking-tighter"
          >
            MONDAY<br />COFFEE
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-3xl md:text-5xl font-bold mb-4 text-white">
              BOLD. BLACK. UNAPOLOGETIC.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 italic max-w-4xl mx-auto">
              &quot;Mondays can be stale. Your coffee should never be.&quot;
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            We&apos;re not just brewing coffee. We&apos;re building culture, celebrating Black excellence,
            and creating space for dreamers, storytellers, and entrepreneurs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(255, 107, 107, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#takingspace"
              className="bg-[#FF6B6B] text-black px-10 py-5 rounded-full text-xl font-black hover:bg-white transition-all shadow-lg shadow-[#FF6B6B]/30"
            >
              OUR STORY
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#products"
              className="border-3 border-[#FF6B6B] text-[#FF6B6B] px-10 py-5 rounded-full text-xl font-black hover:bg-[#FF6B6B] hover:text-black transition-all"
            >
              SHOP COFFEE
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-10 h-10 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Taking Up Space Section */}
      <motion.section
        id="takingspace"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 px-6 bg-[#FF6B6B] text-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-center mb-8 uppercase"
          >
            Taking Up Space
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-32 h-2 bg-black mx-auto mb-16"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                &quot;Though occupying different sectors of Art, Fashion, and Design; our commitment to taking up space as Black people brought us together.&quot;
              </p>
              <p className="text-xl leading-relaxed">
                As storytellers, dreamers, and entrepreneurs, we wanted to continue sharing bold, inclusive,
                and captivating stories—but through a product we believed in. A product that helped build
                our foundation and uplifts our community.
              </p>
              <p className="text-xl leading-relaxed">
                Monday Coffee is brewed and bottled in small batches in Chicago and roasted in Grand Rapids, MI.
                Every cup is a statement. Every sip is resistance. Every moment is ours.
              </p>
              <div className="pt-6">
                <p className="text-2xl font-black uppercase tracking-wider">
                  Multidisciplinary. Collaborative. Unapologetically Black.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/own.jpg"
                  alt="Taking Up Space"
                  width={600}
                  height={800}
                  className="rounded-3xl shadow-2xl object-cover w-full border-8 border-black"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Showcase */}
      <motion.section
        id="products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-center mb-8 text-white uppercase"
          >
            The Coffee
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-center text-gray-300 mb-4 max-w-3xl mx-auto"
          >
            Small batch. Single origin. Ethically sourced.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="w-32 h-2 bg-[#FF6B6B] mx-auto mb-20"
          />

          {/* Main Product Hero */}
          <motion.div
            variants={scaleIn}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Image
                  src="/images/mainproduct.jpg"
                  alt="Monday Coffee Product"
                  width={600}
                  height={800}
                  className="rounded-3xl shadow-2xl object-cover w-full border-4 border-[#FF6B6B]"
                />
              </motion.div>
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-black text-[#FF6B6B] uppercase">
                  Bold Brew.<br />Bigger Vision.
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our coffee isn&apos;t just a product—it&apos;s a movement. Roasted to perfection in Grand Rapids
                  and brewed with intention in Chicago, every batch tells the story of Black excellence,
                  entrepreneurship, and community.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  From farm to cup, we honor the journey. We support ethical sourcing, celebrate craftsmanship,
                  and deliver flavor that speaks volumes.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/drinkmondaycoffee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF6B6B] text-black px-8 py-4 rounded-full text-lg font-black hover:bg-white transition-all"
                >
                  GET YOURS
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: "/images/product.jpg", label: "SIGNATURE BLEND" },
              { src: "/images/product2.jpg", label: "BOLD ROAST" },
              { src: "/images/product3.jpg", label: "SMOOTH COLD BREW" },
              { src: "/images/product4.jpg", label: "ESPRESSO" },
              { src: "/images/product5.jpg", label: "SPECIALTY" },
              { src: "/images/mainproduct2.jpg", label: "READY TO DRINK" },
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-[#FF6B6B]/30 group-hover:border-[#FF6B6B] transition-all">
                  <Image
                    src={product.src}
                    alt={product.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-black text-white uppercase">{product.label}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* The Founders - Powerful Section */}
      <motion.section
        id="founders"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 px-6 bg-white text-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-center mb-8 uppercase"
          >
            The Visionaries
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-center text-gray-700 mb-4 max-w-3xl mx-auto font-bold"
          >
            Amanda Christine Harth & Felton Edward Kizer
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="w-32 h-2 bg-[#FF6B6B] mx-auto mb-20"
          />

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "/images/owner1.jpg",
              "/images/owner2.jpg",
              "/images/owner3.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-black"
              >
                <Image
                  src={image}
                  alt={`Founder ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Founders Story */}
          <motion.div
            variants={fadeInUp}
            className="max-w-5xl mx-auto bg-black text-white p-12 rounded-3xl shadow-2xl"
          >
            <h3 className="text-3xl md:text-5xl font-black mb-8 text-[#FF6B6B] uppercase text-center">
              Dreamers. Storytellers. Culture Builders.
            </h3>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p>
                Amanda and Felton didn&apos;t just start a coffee company—they ignited a movement.
                United by their commitment to taking up space as Black people, they merged their
                expertise in Art, Fashion, and Design to create something revolutionary.
              </p>
              <p>
                Their vision was clear: use coffee as a vehicle for human connection, multidisciplinary
                collaboration, and cultural celebration. Every cup of Monday Coffee represents their
                journey, their values, and their refusal to play small.
              </p>
              <p className="text-2xl font-black text-[#FF6B6B] uppercase">
                This is Black excellence. This is Monday Coffee.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery - Culture Showcase */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-center mb-8 text-white uppercase"
          >
            The Culture
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-32 h-2 bg-[#FF6B6B] mx-auto mb-20"
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
                variants={scaleIn}
                whileHover={{ scale: 1.1, zIndex: 10, rotate: index % 2 === 0 ? 3 : -3 }}
                className="relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer border-2 border-[#FF6B6B]/30 hover:border-[#FF6B6B] transition-all"
              >
                <Image
                  src={image}
                  alt={`Culture ${index + 1}`}
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
        className="py-24 px-6 bg-[#FF6B6B] text-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-center mb-8 uppercase"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-32 h-2 bg-black mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-3 uppercase">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Us
                </h3>
                <p className="text-xl font-bold">
                  3243 W 16th St<br />
                  Chicago, Illinois 60623
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-3 uppercase">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h3>
                <a href="mailto:drink@mondaycoffee.co" className="text-xl font-bold hover:underline">
                  drink@mondaycoffee.co
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-3 uppercase">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours
                </h3>
                <div className="text-lg font-bold space-y-1">
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
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xl font-black hover:bg-white hover:text-black transition-all shadow-xl"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @drinkmondaycoffee
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden shadow-2xl h-[600px] border-8 border-black"
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
      <footer className="bg-black text-white py-16 px-6 border-t-4 border-[#FF6B6B]">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/MClogo.jpg"
            alt="Monday Coffee"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-full border-4 border-[#FF6B6B]"
          />
          <h3 className="text-4xl font-black mb-4 text-[#FF6B6B] uppercase tracking-tight">MONDAY COFFEE</h3>
          <p className="text-2xl font-bold text-white mb-2">Bold. Black. Unapologetic.</p>
          <p className="text-xl text-gray-400 mb-8 italic">&quot;Mondays can be stale. Your coffee should never be.&quot;</p>
          <div className="border-t border-[#FF6B6B]/30 pt-8 mt-8">
            <p className="text-gray-500">© 2024 Monday Coffee Co. All rights reserved.</p>
            <p className="text-gray-600 mt-2 font-bold">Taking Up Space. Building Culture. Creating Connection.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
