import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Globe, Calendar } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Action Buttons - Only visible on screen */}
        <div className="max-w-5xl mx-auto px-6 py-6 print:hidden">
          <div className="flex gap-4 justify-end">
            <Button onClick={handlePrint} variant="outline" className="gap-2 bg-background border-border hover:bg-card">
              <Download className="h-4 w-4" />
              Print / Save as PDF
            </Button>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Resume Container */}
        <div className="max-w-5xl mx-auto px-6 pb-12 print:p-8">
          <div className="bg-white text-black shadow-lg print:shadow-none">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-32 h-32 rounded-full bg-white/10 border-4 border-white/20 overflow-hidden flex items-center justify-center">
                <img
                  src="/profile.jpeg"
                  alt="Arunkumar M - Senior Android Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="text-6xl hidden">👨‍💻</span>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Arunkumar M</h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-4">Senior Software Engineer - Android</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                  <a href="mailto:arunji12345.ak@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                    arunji12345.ak@gmail.com
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Chennai, India
                  </span>
                  <a href="https://linkedin.com/in/arunm1407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                    linkedin.com/in/arunm1407
                  </a>
                  <a href="https://github.com/arunm1407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Github className="h-4 w-4" />
                    github.com/arunm1407
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 md:p-12">
            {/* Professional Summary */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2">
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Senior Software Engineer with 4+ years of experience in Android development, specializing in building scalable,
                high-performance mobile applications. Proven expertise in Kotlin, MVVM architecture, Clean Architecture, and modern
                Android technologies including Jetpack Compose and Kotlin Multiplatform. Track record of delivering impactful features
                at scale for global companies like PayPal, Walmart, and Zoho.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2">
                Professional Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Senior Software Engineer - Android</h3>
                      <p className="text-lg text-slate-600 font-semibold">PayPal</p>
                    </div>
                    <span className="text-slate-600 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      May 2025 - Present
                    </span>
                  </div>
                  <ul className="list-disc list-outside space-y-1 text-slate-700 ml-6">
                    <li>Building scalable payment solutions for PayPal's Android platform</li>
                    <li>Implementing clean architecture and modern Android development practices</li>
                    <li>Collaborating with cross-functional teams to deliver high-quality features</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Software Engineer III - Android</h3>
                      <p className="text-lg text-slate-600 font-semibold">Walmart Global Tech</p>
                    </div>
                    <span className="text-slate-600 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Jan 2025 - May 2025
                    </span>
                  </div>
                  <ul className="list-disc list-outside space-y-1 text-slate-700 ml-6">
                    <li>Developed and maintained Android applications for Walmart's retail platform</li>
                    <li>Improved app performance and user experience through optimization techniques</li>
                    <li>Worked with Kotlin, MVVM, and Jetpack components</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Member Technical Staff - Android</h3>
                      <p className="text-lg text-slate-600 font-semibold">Zoho Corporation</p>
                    </div>
                    <span className="text-slate-600 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Feb 2022 - Jan 2025
                    </span>
                  </div>
                  <ul className="list-disc list-outside space-y-1 text-slate-700 ml-6">
                    <li>Optimized Zoho CRM Android app with 10M+ downloads</li>
                    <li>Implemented new features and fixed critical bugs</li>
                    <li>Collaborated with product and design teams for feature development</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2">
                Education
              </h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">B.Tech in Electrical and Electronics Engineering</h3>
                  <p className="text-lg text-slate-600 font-semibold">Sri Manakula Vinayagar Engineering College</p>
                  <p className="text-slate-600">Pondicherry, India • CGPA: 8.8/10</p>
                </div>
                <span className="text-slate-600 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  2017 - 2021
                </span>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2">
                Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Languages:</h3>
                  <p className="text-slate-700">Kotlin, Java, XML, SQL</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Android Development:</h3>
                  <p className="text-slate-700">
                    MVVM, Clean Architecture, Jetpack Compose, Kotlin Multiplatform, Coroutines, Flow, LiveData,
                    Room Database, Retrofit, Dagger/Hilt
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Tools & Technologies:</h3>
                  <p className="text-slate-700">
                    Git, Android Studio, Gradle, Firebase, RESTful APIs, CI/CD
                  </p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2">
                Projects
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Notes App</h3>
                  <p className="text-slate-700 mb-2">
                    Built an Android app with Clean Architecture, MVVM, LiveData, and Coroutines, featuring priority-based notes,
                    search functionality, attachments, and voice-to-text capabilities.
                  </p>
                  <p className="text-sm text-slate-600 italic">
                    Technologies: Kotlin, MVVM, Clean Architecture, Coroutines
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Easy Copy</h3>
                  <p className="text-slate-700 mb-2">
                    Created an Android app with Finite State Machine (FSM) and Jetpack Compose, integrating Google ML Kit for
                    OCR-based text extraction from images with seamless UX.
                  </p>
                  <p className="text-sm text-slate-600 italic">
                    Technologies: Kotlin, Jetpack Compose, FSM, ML Kit
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Online Shopping Application</h3>
                  <p className="text-slate-700 mb-2">
                    Developed a CLI shopping app in Java using SOLID principles and Clean Architecture, emphasizing scalability
                    and loose coupling for maintainable enterprise-level code.
                  </p>
                  <p className="text-sm text-slate-600 italic">
                    Technologies: Java, SOLID Principles, Clean Architecture
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Resume;