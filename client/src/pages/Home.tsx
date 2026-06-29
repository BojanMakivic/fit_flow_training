import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, Heart, Zap, Activity, Target, Dumbbell, Wind, Puzzle } from "lucide-react";

/**
 * F.I.T. Flow in Training - Cyberpunk Interactive Blog
 * Design: Neon futurism with interactive modular sections
 * Color Palette: Neon Cyan (#00D9FF), Magenta (#FF006E), Deep Dark (#0A0E27)
 */

export default function Home() {
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [selectedBodyState, setSelectedBodyState] = useState<string | null>(null);
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);
  const [comments, setComments] = useState<Array<{ name: string; text: string }>>([
    { name: "Alex", text: "This philosophy changed my perspective on fitness. It's not about perfection, it's about consistency." },
    { name: "Jordan", text: "Love the 80/20 principle. Finally a framework that makes sense for real life." },
  ]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() && newName.trim()) {
      setComments([...comments, { name: newName, text: newComment }]);
      setNewComment("");
      setNewName("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: "url('/manus-storage/fit_hero_background_617d39fa.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <img
              src="/manus-storage/fit_logo_222f03bb.png"
              alt="F.I.T. Logo"
              className="w-20 h-20 drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-cyan">
            F.I.T. FLOW
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-magenta">
            IN TRAINING
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Your Body Is Your Only Lifelong Home.
          </p>
          <p className="text-lg md:text-xl mb-8 neon-cyan font-semibold">
            Let's make it fit.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold uppercase tracking-wider border-2 border-cyan-400 glow-cyan hover-glow-cyan text-lg px-8 py-6 rounded-lg transition-all duration-200"
          >
            I'm Ready When U Are!
          </Button>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-cyan">
            The Core Concept
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "movement",
                title: "Movement",
                subtitle: "Biological Necessity",
                icon: Activity,
                description:
                  "Our bodies are built to move. Movement fuels function, longevity, and life. It's not optional—it's essential.",
              },
              {
                id: "fit",
                title: "F.I.T.",
                subtitle: "Finding the Right Movement",
                icon: Target,
                description:
                  "Fitness isn't one-size-fits-all. It's about alignment with your goals, your body, and your lifestyle.",
              },
              {
                id: "flow",
                title: "Flow",
                subtitle: "Continuous Growth",
                icon: Zap,
                description:
                  "Progress is not a destination. It's the rhythm of becoming better, stronger, and more resilient every day.",
              },
            ].map((concept) => {
              const Icon = concept.icon;
              return (
                <div
                  key={concept.id}
                  className="border-2 border-neon-cyan rounded-lg p-6 glow-cyan hover-glow-cyan cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur-sm"
                  onClick={() =>
                    setExpandedConcept(
                      expandedConcept === concept.id ? null : concept.id
                    )
                  }
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 neon-cyan" />
                    <div>
                      <h3 className="text-2xl font-bold neon-cyan">
                        {concept.title}
                      </h3>
                      <p className="text-sm neon-magenta">{concept.subtitle}</p>
                    </div>
                  </div>
                  {expandedConcept === concept.id && (
                    <p className="text-gray-300 mt-4 animate-in fade-in duration-300">
                      {concept.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mind & Body Unity */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-magenta">
            Your Mind and Body Are One System
          </h2>
          <div className="border-2 border-neon-magenta rounded-lg p-8 glow-magenta bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-neon-magenta flex items-center justify-center flex-shrink-0 neon-magenta font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-cyan">
                    Emotions and Thoughts Are Connected to Movement
                  </h3>
                  <p className="text-gray-300">
                    Your mental state directly influences your physical performance. Respect this connection.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-neon-magenta flex items-center justify-center flex-shrink-0 neon-magenta font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-cyan">
                    Respecting Your Body Means Moving It Regularly
                  </h3>
                  <p className="text-gray-300">
                    Your body is your lifelong home. Treat it with the care and attention it deserves.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-neon-magenta flex items-center justify-center flex-shrink-0 neon-magenta font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-cyan">
                    Transformation Starts with Love
                  </h3>
                  <p className="text-gray-300">
                    Real change begins with the decision to love your body and commit to its well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 80/20 Balance Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-cyan">
            The Reverse Pareto Principle
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-neon-cyan rounded-lg p-8 glow-cyan bg-card/50 backdrop-blur-sm">
              <div className="text-5xl font-bold neon-cyan mb-4">80%</div>
              <h3 className="text-2xl font-bold mb-6 neon-cyan">
                Healthy Lifestyle & Movement
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="neon-cyan font-bold">→</span>
                  <div>
                    <p className="font-bold">Consistency</p>
                    <p className="text-sm text-gray-400">
                      Daily habits build lifelong results.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="neon-cyan font-bold">→</span>
                  <div>
                    <p className="font-bold">Long-term Health</p>
                    <p className="text-sm text-gray-400">
                      Strong body. Sharp mind. Better life.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="neon-cyan font-bold">→</span>
                  <div>
                    <p className="font-bold">Move More, Live More</p>
                    <p className="text-sm text-gray-400">
                      Movement throughout your day matters most.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="border-2 border-neon-magenta rounded-lg p-8 glow-magenta bg-card/50 backdrop-blur-sm">
              <div className="text-5xl font-bold neon-magenta mb-4">20%</div>
              <h3 className="text-2xl font-bold mb-6 neon-magenta">
                Flexibility & Exceptions
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="neon-magenta font-bold">→</span>
                  <div>
                    <p className="font-bold">Be Flexible</p>
                    <p className="text-sm text-gray-400">
                      Life happens. Adapt without guilt.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="neon-magenta font-bold">→</span>
                  <div>
                    <p className="font-bold">Enjoy Without Stress</p>
                    <p className="text-sm text-gray-400">
                      Make room for the things you love.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="neon-magenta font-bold">→</span>
                  <div>
                    <p className="font-bold">Balance Is Power</p>
                    <p className="text-sm text-gray-400">
                      Sustainable progress comes from balance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-neon-cyan pt-6">
            <p className="text-lg neon-cyan font-semibold">
              Focus on 80%, be free with 20%. That's the ultimate formula for a stronger, happier you.
            </p>
          </div>
        </div>
      </section>

      {/* Body State Selector */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-magenta">
            Listen to Your Body
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Intuitive Movement Selection
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                id: "tired",
                state: "Tired?",
                movement: "Endurance",
                type: "(Run/Swim)",
                icon: Activity,
              },
              {
                id: "pain",
                state: "Back Pain?",
                movement: "Strength",
                type: "(Weights)",
                icon: Dumbbell,
              },
              {
                id: "overthinking",
                state: "Overthinking?",
                movement: "Coordination",
                type: "(Balance Work)",
                icon: Puzzle,
              },
              {
                id: "angry",
                state: "Angry?",
                movement: "Speed",
                type: "(Reaction)",
                icon: Zap,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() =>
                    setSelectedBodyState(
                      selectedBodyState === item.id ? null : item.id
                    )
                  }
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                    selectedBodyState === item.id
                      ? "border-neon-cyan glow-cyan bg-card/80"
                      : "border-neon-magenta hover-glow-magenta bg-card/50"
                  } backdrop-blur-sm`}
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      className={`w-8 h-8 flex-shrink-0 ${
                        selectedBodyState === item.id
                          ? "neon-cyan"
                          : "neon-magenta"
                      }`}
                    />
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          selectedBodyState === item.id
                            ? "neon-cyan"
                            : "neon-magenta"
                        }`}
                      >
                        {item.state}
                      </h3>
                      <p
                        className={`text-lg font-semibold ${
                          selectedBodyState === item.id
                            ? "neon-cyan"
                            : "text-gray-300"
                        }`}
                      >
                        {item.movement}
                      </p>
                      <p className="text-sm text-gray-400">{item.type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center border-t border-neon-magenta pt-6">
            <p className="text-lg neon-cyan font-semibold">
              Your Body. Your Guide. Move with Purpose.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Pillars of Vitality */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center neon-cyan">
            The 5 Pillars of Vitality
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                id: "endurance",
                number: "01",
                title: "Endurance",
                subtitle: "Your long-term engine",
                icon: Activity,
              },
              {
                id: "strength",
                number: "02",
                title: "Strength",
                subtitle: "Your life's structure",
                icon: Dumbbell,
              },
              {
                id: "speed",
                number: "03",
                title: "Speed",
                subtitle: "Quickness in mind & body",
                icon: Zap,
              },
              {
                id: "flexibility",
                number: "04",
                title: "Flexibility",
                subtitle: "Moving with ease",
                icon: Wind,
              },
              {
                id: "coordination",
                number: "05",
                title: "Coordination",
                subtitle: "Harmony in action",
                icon: Puzzle,
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  onClick={() =>
                    setExpandedPillar(
                      expandedPillar === pillar.id ? null : pillar.id
                    )
                  }
                  className="border-2 border-neon-magenta rounded-lg p-6 glow-magenta hover-glow-magenta cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur-sm text-center"
                >
                  <div className="neon-magenta text-3xl font-bold mb-3">
                    {pillar.number}
                  </div>
                  <Icon className="w-8 h-8 neon-cyan mx-auto mb-3" />
                  <h3 className="text-xl font-bold neon-cyan mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-400">{pillar.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Path to Change */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center neon-cyan">
            The Path to Change
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Transformation Requires Action, Not Magic
          </p>
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "No Instant Fixes",
                description: "Real change takes time and effort. There are no shortcuts.",
              },
              {
                number: "02",
                title: "Honest Work and Commitment",
                description: "Stay persistent. Show up every day.",
              },
              {
                number: "03",
                title: "Every Step Is a Victory",
                description: "Small progress leads to big results.",
              },
              {
                number: "04",
                title: "Your Journey Is Unique",
                description: "Focus on you. Your path, your pace.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="border-l-4 border-neon-cyan pl-6 py-4 hover:border-neon-magenta transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold neon-magenta flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold neon-cyan mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Discussion Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-magenta">
            Join the Conversation
          </h2>

          {/* Existing Comments */}
          <div className="space-y-6 mb-12">
            {comments.map((comment, idx) => (
              <div
                key={idx}
                className="border-2 border-neon-cyan rounded-lg p-6 glow-cyan bg-card/50 backdrop-blur-sm"
              >
                <h4 className="font-bold neon-cyan mb-2">{comment.name}</h4>
                <p className="text-gray-300">{comment.text}</p>
              </div>
            ))}
          </div>

          {/* Add Comment Form */}
          <div className="border-2 border-neon-magenta rounded-lg p-8 glow-magenta bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold neon-magenta mb-6">
              Share Your Thoughts
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-background border-2 border-neon-cyan rounded-lg px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-neon-magenta focus:glow-magenta transition-all"
              />
              <textarea
                placeholder="Your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                className="w-full bg-background border-2 border-neon-cyan rounded-lg px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-neon-magenta focus:glow-magenta transition-all resize-none"
              />
              <Button
                onClick={handleAddComment}
                className="w-full bg-gradient-to-r from-magenta-500 to-pink-500 hover:from-magenta-400 hover:to-pink-400 text-black font-bold uppercase tracking-wider border-2 border-magenta-400 glow-magenta hover-glow-magenta transition-all duration-200"
              >
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-4 bg-card/50 border-t-2 border-neon-cyan">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-magenta">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Your Transformation Begins Now
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <div className="border-2 border-neon-cyan rounded-lg p-6 glow-cyan">
              <p className="text-sm text-gray-400 mb-2">WEBSITE</p>
              <p className="text-lg font-bold neon-cyan">
                www.fit-flow-training.de
              </p>
            </div>
            <div className="border-2 border-neon-magenta rounded-lg p-6 glow-magenta">
              <p className="text-sm text-gray-400 mb-2">EMAIL</p>
              <p className="text-lg font-bold neon-magenta">
                info@fit-flow-training.de
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold uppercase tracking-wider border-2 border-cyan-400 glow-cyan hover-glow-cyan text-lg px-8 py-6 rounded-lg transition-all duration-200"
          >
            I'm Ready When U Are!
          </Button>
          <p className="mt-12 text-sm text-gray-500">
            © 2026 F.I.T. Flow in Training. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
