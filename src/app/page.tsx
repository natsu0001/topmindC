"use client";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";
import { Button } from "../components/ui/button";
import ScrollReset from '../components/ScrollReset';
import FreeTrialModal from "@/components/FreeTrialModal";

export default function Home() {
  

  return (
     <ScrollReset>
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      
      <section id="hero" className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        
        <div>
          <ScrollReveal>
          <h2 className="inline-block bg-purple-100 text-sm font-semibold text-purple-900 px-4 py-1 rounded-xl">🌈 Calm Minds, Happy Hearts</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
            Mindfulness & Meditation for Kids (4–14)
          </h1>
          </ScrollReveal>
          <p className="text-gray-600 mt-4">
            Fun, story-based meditation that builds focus, kindness, and confidence. Safe, ad-free, and crafted with child development experts.
          </p>
          <div className="flex gap-4 mt-6">
            <FreeTrialModal />
            <Button variant="green" className="font-semibold">Explore Programs</Button>
          </div>
          <div className="flex gap-1 mt-5 flex-wrap">
             {[
                { note: "Improves", label: "Focus", emoji: "🧠" },
                { note: "Reduces", label: "Stress", emoji: "😌" },
                { note: "Better", label: "Sleep", emoji: "🌙" },
                { note: "Builds", label: "Empathy", emoji: "💜" },
              ].map((tag) => (
               <div
                          key={tag.label}
                          className="flex flex-col items-start px-3 py-2 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition w-30"
              >
                  <span className="text-xs text-gray-500 px-9">{tag.note}</span>
                  <div className="flex items-center gap-2 mt-1">
                  <span className="text-md ">{tag.emoji}</span>
                  <span className="text-md font-bold text-gray-800">{tag.label}</span>
                  </div>
                </div>
               ))}
           </div>

        </div>
       <ScrollReveal>
         <div className=" rounded-xl ml-20 h-100 flex items-center justify-center relative">
          <Image src="/kids.jpg" alt="Mindery Kids Illustration" fill className="rounded-2xl object-cover" />
         
           <div className="absolute bottom-4 left-4 md:bottom-16 md:-left-6 bg-white rounded-xl shadow-2xl p-4 w-56 sm:w-60 hidden sm:block transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-sm font-semibold font-primary mb-2">Todays Journey</h3>
                <ul className=" text-sm text-gray-600">
                  <li>🐉 Dragon Breath (3 min)</li>
                  <li>🦋 Butterfly Body Scan (5 min)</li>
                  <li>🌙 Sleep Story: Star Boat (7 min)</li>
                </ul>
            </div>
          </div>
       </ScrollReveal>

      </section>
      

      {/* Why Section */}
<ScrollReveal>
      <section id="why" className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-[50vw] text-left pr-3 ">
        <h2 className="text-3xl font-bold text-left">Why Mindery Kids?</h2>
        <p className=" text-gray-600 mt-4">Children learn best through play and stories. Our sessions blend gentle breathing, guided imagery, and music to make mindfulness enjoyable and effective.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {note:"Story Meditations", title: "Guided Adventures", desc: "Stories and activities that teach belly breathing, kindness, and gratitude." },
            {note:"Anytime Calm", title: "Tools for Big Feelings", desc: "Quick resets kids can use when upset, nervous, or restless." },
            {note:"Parent Hub", title: "Guides & Routines", desc: "Weekly tips, printable sheets, and simple practices for parents & teachers." },
          ].map((item, idx) => (
            <div key={idx} className="p-6  rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="inline-block bg-green-100 font-semibold text-sm text-green-800 rounded-xl px-2 py-1">{item.note}</h4>
              <h3 className="font-semibold text-lg text-black-600">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>

      {/* Programs Section */}
     <ScrollReveal>  
      <section id="programs" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-left">Programs for Every Age</h2>
        <p className="text-gray-600 mt-5">Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle sketching.</p>
        <div className="grid md:grid-cols-1 gap-8 mt-6">
          <div className="space-y-3 md:flex md:gap-6 md:items-center">
            <Image src="/kids1.jpg" alt="Kids" width={500} height={400} className="rounded-xl object-cover" />
            <div>
            <h3 className="font-semibold text-xl">Little Explorers (4–6)</h3>
            <p className="text-gray-600 mt-4">Short fun stories with breathing, relaxation games, and gentle practices.</p>
              <div className="flex gap-3 mt-3 flex-wrap">
               {[
                 { label: "Cozy Corner", emoji: "🐱" },
                 { label: "Calm Music", emoji: "🎵" },
                 { label: "Sticker Badges", emoji: "🎖️" },
                ].map((tag) => (
                 <div
                     key={tag.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-gray-50 text-black-700 shadow-sm border border-purple-200 hover:shadow-md transition"
                   >
                      <span className="text-sm">{tag.emoji}</span>
                      <span className="text-md font-semibold">{tag.label}</span>
                  </div>
                 ))}
               </div>
        
            </div>
          </div>
          <br />
          <div className="space-y-3 md:flex md:gap-6 md:items-center">
            <div>
            <h3 className="font-semibold text-xl">Brave Thinkers (7–10)</h3>
            <p className="text-gray-600 mt-4">Mindset tools, focus timers, and kindness practices that build confidence and classroom readiness.</p>
              <div className="flex gap-3 mt-3 flex-wrap">
               {[
                 { label: "Focus Timer", emoji: "⏱️" },
                 { label: "Gratitude Notes", emoji: "📓" },
                 { label: "Streak Rewards", emoji: "🏆" },
                ].map((tag) => (
                 <div
                     key={tag.label}
                     className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-gray-50 text-black-700 shadow-sm border border-purple-200 hover:shadow-md transition"
                   >
                      <span className="text-sm">{tag.emoji}</span>
                      <span className="text-md font-semibold">{tag.label}</span>
                  </div>
                 ))}
               </div>

            </div>
             <Image src="/kids2.jpg" alt="Kids" width={500} height={400} className="rounded-xl object-cover" />
          </div>
          <br />
          <div className="space-y-3 md:flex md:gap-6 md:items-center">
            <Image src="/kids3.jpg" alt="Kids" width={500} height={400} className="rounded-xl object-cover" />
            <div>
            <h3 className="font-semibold text-xl">Calm & Curious (11–14)</h3>
            <p className="text-gray-600 mt-4">Longer meditations, reframing thoughts, and sleep stpries for deeper rest and emotional balance.</p>
              <div className="flex gap-3 mt-3 flex-wrap">
               {[
                 { label: "Mindset Minus", emoji: "🧠" },
                 { label: "Sleep Stories", emoji: "🌙" },
                 { label: "Goal Cards", emoji: "🎯" },
               ].map((tag) => (
                 <div
                   key={tag.label}
                   className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-gray-50 text-black-700 shadow-sm border border-purple-200 hover:shadow-md transition"
                 >
                   <span className="text-sm">{tag.emoji}</span>
                   <span className="text-md font-semibold">{tag.label}</span>
                 </div>
               ))}
               </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
      <section id="features" className="max-w-6xl mx-auto px-6 py-12  rounded-xl">
        <div className="max-w-[50vw] text-left pr-3 ">
        <h2 className="text-3xl font-bold text-left">Build For Kids, Loved by Parents</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title: "Ad-Free & Safe", desc: "Child-first design with privacy controls and no external ads." },
            {title: "Rewards that Motivate", desc: "Stars,badges,and gentle streaks encourages healthy habits-no pressure." },
            {title: "Offline Access", desc: "Download favourite sessions for claim on the go." },
            {title: "Sleep Mode", desc: "Fade-out music and dim visuals help kids drift of peacefully." },
            {title: "Classroom Friendly", desc: "Teacher packs with 5-minute start-of-class resets and posters." },
            {title: "Multi-Child Profiles", desc: "Personalized tracks for each child in the family." },
          ].map((item, idx) => (
            <div key={idx} className="p-6  rounded-xl shadow-sm hover:shadow-md transition">
              
              <h3 className="font-semibold text-lg text-black-600">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* For Parents Section */}
      <section id="parents" className="max-w-6xl mx-auto px-6 py-16 ">
        <div className="max-w-[50vw] text-left pr-3 ">
        <h2 className="text-3xl font-bold text-left">Why Choose Mindery Kids Over Other</h2>
        </div>
        <div>
          <table className="table-auto border border-gray-200 w-full mt-8 rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr  >
                <th className="text-center font-bold text-purple-800 p-4">Features</th>
                <th className="text-center font-bold text-purple-800 p-4">Mindery Kids</th>
                <th className="text-center font-bold text-purple-800 p-4">Other Apps</th>
              </tr>
            </thead>
          <tbody>
          <tr>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">Child-Friendly Guided Meditations</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">✅ Story-based, fun & short</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">❌ Generic adult content</td>
          </tr>
          <tr>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">Safe &amp; Ad-Free Environment</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">✅ 100% secure for kids</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">❌ Ads &amp; distractions</td>
          </tr>
            <tr>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">Age-Specific Programs</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">✅ Tailored for 4-14</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">❌ One-size-fits-all</td>
          </tr>
          <tr>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">Parents &amp; Teachers Support</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">✅ Guides, printables, progress insights</td>
            <td className="text-sm text-center align-middle border border-gray-100 px-4 py-3">❌ Limited or none </td>
          </tr>
        </tbody>
          </table>
        </div>
        
      </section>
      

      {/* Pricing Section */}
      <ScrollReveal>
      <section id="features" className="max-w-6xl mx-auto bg-gray-100 py-12 rounded-xl mb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">Choose Your Plan</h2>
          <p className="text-gray-700 text-sm mt-3">Start free, cancel anytime, No hidden charges.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-7">
            {[
              { title: "Starter",
                tag:"Perfect for new employers", 
                price: "Free", 
                desc1: "✅5 guided meditations",
                desc2: "✅2 sleep stories",
                desc3: "✅Parents starter kit",
                btn: "Get Started" },
              { title: "Premium",
                 tag:"Unlock full potential", 
                 price: "₹299/mo", 
                 desc1: "✅Unlock meditations",
                 desc2: "✅Sleep stories &amp; calming music",
                 desc3: "✅Printable guides for parent",
                 btn: "Upgrade Now" },
              { title: "Family", 
                tag:"For multiple kids", 
                price: "₹499/mo", 
                desc1: "✅For 4 child profiles",
                desc2: "✅Rewards &amp; Streaks",
                desc3: "✅Classroom meditations pack",
                btn: "Get Family Plan" },
            ].map((plan, idx) => (
              <div key={idx} className="p-6  rounded-xl shadow-md hover:shadow-lg bg-white">
                <h3 className="font-semibold text-lg">{plan.title}</h3>
                <h6 className="text-gray-700 text-xs">{plan.tag}</h6>
                <p className="text-2xl text-purple-700 font-bold mt-3">{plan.price}</p>
                <p className="text-gray-600 text-xs font-semibold mt-3 text-left">{plan.desc1}</p>
                <p className="text-gray-600 text-xs font-semibold mt-2 text-left">{plan.desc2}</p>
                <p className="text-gray-600 text-xs font-semibold mt-2 text-left">{plan.desc3}</p>
                <Button className="mt-6 w-full text-xl font-semibold">{plan.btn}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>
 
       {/* What Section */}
       <ScrollReveal>
       <section id="what" className="max-w-6xl mx-auto mt-12">
       <div className=" px-6 py-12 border border-gray-100 rounded-xl shadow-md hover:shadow-lg bg-gray-50">
        <div>
            <h3 className="font-semibold text-3xl">Parents &amp; Teacher Hub</h3>
            <p className="text-gray-600 mt-4 max-w-[35vw] ">Practical guides, printable routine, progress insights so you can support mindfulness at home and and school.</p>
              <div className="flex gap-3 mt-3 flex-wrap">
               {[
                 { label: "Download Starter Kit", emoji: "📥" },
                 { label: "7-Day Calm Plan ", emoji: "🗓️" },
                 { label: "Classroom Pack", emoji: "🏫" },
               ].map((tag) => (
                 <div
                   key={tag.label}
                   className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-gray-50 text-black-700 shadow-sm border border-gray-100 hover:shadow-md transition"
                 >
                   <span className="text-sm">{tag.emoji}</span>
                   <span className="text-sm font-bold text-purple-700">{tag.label}</span>
                 </div>
               ))}
               </div>
            </div>
        </div>
       </section>
       </ScrollReveal>

      {/* Says Section */}
      <ScrollReveal>
      <section id="says" className="max-w-6xl mx-auto mt-12 px-6 py-12">
        <div className="max-w-[50vw] text-left pr-3 ">
        <h2 className="text-3xl font-bold text-left">What Families Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title: "★★★★★", desc: `Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.`, tag: "— Priya, Mom of 6-year old."},
            {title: "★★★★★", desc: "The 5-minute rest before homework has been a game changer for focus.", tag: "— Ravi, Dad of 10-year old."},
            {title: "★★★★★", desc: "Our class uses the breathing game after lunch. Kids come back calm and ready.", tag: "— Anika, Grade 4 Teacher."},
          ].map((item, idx) => (
            <div key={idx} className="p-6  rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-black-600">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
              <p className="mt-1 text-gray-600 text-sm">{item.tag}</p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* FAQ */}

      <section id="faq" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          {[
            {
              question: "What ages is this for?",
              
            },
            {
              question: "How long are the sessions?",

            },
            {
              question: "Is it safe and ad-free?",
              answer: "Yes, We designed this for children. No external ads, clear privacy options, and parent controls."
            },
            {
              question: "can school use it?",
              
            }
          ].map((item, idx) => (
            <div key={idx} className="mt-1 p-4 border border-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>


      {/* start */}
      <ScrollReveal>
      <section id="start" className="max-w-6xl mx-auto mt-12 px-6 py-12 rounded-xl border border-gray-100 shadow-md text-center">
        <div className="max-w-[50vw] text-left pr-3 ">
        <h2 className="text-3xl font-bold text-left">Start Your Child Mindfulness Journey</h2>
        <p className="mt-2 text-gray-600">Try it free. Build calm, focus, and kindness—one small practice a day.</p>
         <div className="flex gap-4 mt-6">
            <Button className="font-semibold">Create Account</Button>
            <Button variant="green" className="font-semibold">Download App</Button>
          </div>
        </div>
        
      </section>
      </ScrollReveal>


      {/* Footer */}
      <footer className=" py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
                  <Image src="/logo.png" alt="Topmind Care Logo" width={32} height={32} />
                  <h1 className="text-2xl font-bold text-violet-900">Topmind Care</h1>
                  
                  
                </div>
                

        <div className="flex flex-col  md:mt-0 items-left">
          <p>Contact</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-purple-500 hover:text-purple-600">Instagram</a>
            <a href="#" className="text-purple-500 hover:text-purple-600">YouTube</a>
            <a href="#" className="text-purple-500 hover:text-purple-600">X</a>
          </div>
          </div>
          <div className="flex flex-col md:mt-0 items-left">
            <p>Legal</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-purple-500 hover:text-purple-600">Privacy</a>
            <a href="#" className="text-purple-500 hover:text-purple-600">Terms</a>
          </div>
          </div>
        </div>
        <p className="max-w-6xl mx-auto pl-6 text-gray-500">Mindfulness for growing minds.@2025 Mindery kids</p>
      </footer>
    </main>

    </ScrollReset>
  );
}
