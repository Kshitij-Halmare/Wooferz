import React from 'react';
import teamPhoto from '../assets/team1.jpg'; // Add a real photo in assets and update path if needed

const founders = [
  {
    name: 'Aniruddh Lakha',
    title: 'Founder',
    image: '/assets/founder1.jpg', // Add real images in assets
    bio: 'I’m Anirudh Lakha, founder of Nagpur Street Dogs (NSD). What began in 2020 as a solo mission to feed starving street dogs during the COVID lockdown has now grown into a movement of 100+ volunteers. From rescue ops to vaccination camps, water pot drives to our Radium Belt Project, we’re creating a safer, kinder world for street animals—one step at a time.'
  },
  {
    name: 'Mayuresh Gangthade',
    title: 'Co-Founder',
    image: '/assets/founder2.jpg',
    bio: 'Mayuresh brings years of animal welfare experience and a passion for community building.'
  }
];

const values = [
  'Compassion for all animals',
  'Transparency in our work',
  'Community-driven initiatives',
  'Sustainable impact',
];

const journey = [
  { year: '2020', event: 'Wooferz founded with a small team and big dreams.' },
  { year: '2021', event: 'First 100 dogs rescued and rehomed.' },
  { year: '2022', event: 'Launched volunteer and adoption programs.' },
  { year: '2023', event: 'Expanded to new cities and grew our team.' },
  { year: '2024', event: 'Recognized as a leading animal welfare NGO.' },
];

export default function Founder() {
  return (
    <div className="bg-orange-50 min-h-screen py-10 px-4 md:px-16">
      {/* Our Story */}
      <section className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Our Story</h1>
        <p className="text-lg text-gray-700">Wooferz began as a dream to make the world a kinder place for stray dogs. Our founders, driven by compassion and a love for animals, started with a handful of volunteers and a single shelter. Today, we are a thriving community dedicated to rescue, rehabilitation, and rehoming of dogs in need.</p>
      </section>

      {/* Team Photo */}
      <section className="max-w-3xl mx-auto mb-12 flex flex-col items-center">
        <img src={teamPhoto} alt="Team" className="rounded-xl shadow-lg w-full max-w-md mb-4" />
        <span className="text-orange-400 font-semibold">Our Amazing Team</span>
      </section>

      {/* Founders Team */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Founders Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map(f => (
            <div key={f.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img src={f.image} alt={f.name} className="w-32 h-32 object-cover rounded-full border-4 border-orange-200 mb-4" />
              <h3 className="text-xl font-bold text-orange-600">{f.name}</h3>
              <p className="text-orange-400 font-semibold mb-2">{f.title}</p>
              <p className="text-gray-600 text-center">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map(v => (
            <li key={v} className="bg-white rounded-lg shadow p-4 text-orange-700 font-medium">{v}</li>
          ))}
        </ul>
      </section>

      {/* Our Journey Timeline */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-8">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 z-0" />
          <div className="space-y-12 relative z-10">
            {journey.map((j, i) => (
              <div key={j.year} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} items-center w-full`}> 
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-8 border-orange-400">
                    <span className="text-orange-400 font-bold text-lg">{j.year}</span>
                    <p className="text-gray-700 mt-2">{j.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
