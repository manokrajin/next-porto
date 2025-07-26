"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code2,
  Smartphone,
  Palette,
  Database,
  Globe,
  ExternalLink,
  Download,
} from "lucide-react";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set initial dark mode class on component mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const skills = [
    {
      name: "Flutter",
      level: "Expert",
      icon: <Smartphone className="w-5 h-5" />,
    },
    { name: "Dart", level: "Expert", icon: <Code2 className="w-5 h-5" /> },
    {
      name: "Firebase",
      level: "Advanced",
      icon: <Database className="w-5 h-5" />,
    },
    {
      name: "UI/UX Design",
      level: "Advanced",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      name: "REST APIs",
      level: "Advanced",
      icon: <Globe className="w-5 h-5" />,
    },
    { name: "Git", level: "Advanced", icon: <Code2 className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: "myRPK",
      description:
        "Full-featured shopping app with payment integration and real-time inventory for Perum Bulog",
      tech: ["Flutter", "Firebase", "Datadog", "Provider"],
      status: "Live",
      link: "https://play.google.com/store/apps/details?id=com.bulog.myRPK&hl=id",
    },

    {
      title: "POS myRPK",
      description:
        "Point of Sale system for myRPK with inventory management and sales tracking",
      tech: ["Flutter", "Hive DB", "Receipt Printer", "Provider"],
      status: "Live",
      link: "https://play.google.com/store/apps/details?id=com.bulog.rpk_pos&hl=id",
    },
    {
      title: "Banpang Mobile",
      description:
        "An application for Drivers and Field Officers for the documentation and reporting of the Indonesian government's food aid distribution activities.",
      tech: ["Flutter", "Drift DB", "Geolocator", "Firebase", "Datadog", "Crashlytics"],
      status: "Live",
      link: "https://play.google.com/store/apps/details?id=com.bulog.banpang&hl=id",
    },
    {
      title: "Klik SPHP",
      description:
        "E-commerce platform for Perum Bulog's SPHP program, integrated with inventory management and sales tracking",
      tech: ["Flutter","Datadog", "Riverpod", "Firebase", "Crashlytics"],
      status: "Live",
      link: "https://play.google.com/store/apps/details?id=com.bulog.rpk_pos&hl=id",
    },
  ];

  const experience = [
    {
      role: "IT Specialist Developer",
      company: "Perum Bulog",
      period: "2023 - Present",
      description:
        "Responsible for developing multi-platform applications using Flutter.",
    },
    {
      role: "Project Manager",
      company: "Pakthani",
      period: "2022",
      description:
        "Leading a team of developers to deliver high-quality PWA on time.",
    },
   
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute top-3/4 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-3/4 w-64 h-64 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-pink-500" : "bg-pink-300"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12 ring-2 ring-white/20 backdrop-blur-sm">
              <AvatarImage
                src="/manok.png"
                alt="Profile"
              />
              <AvatarFallback className="bg-white/10 backdrop-blur-md text-gray-900 dark:text-white">
                manok
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-sm">
                Mahran Radifan Zhafir (Manokrajin)
              </h1>
              <p className="text-gray-700 dark:text-gray-200 drop-shadow-sm">
                Flutter Developer
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-gray-900 dark:text-white transition-all duration-300"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {/* Hero Card - Large */}
          <Card className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white drop-shadow-sm">
                About Me
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-200 drop-shadow-sm">
                My Journey as a Flutter Developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, ID</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                <Calendar className="w-4 h-4" />
                <span>2+ years experience</span>
              </div>
              <p className="text-gray-800 dark:text-gray-100 leading-relaxed drop-shadow-sm">
                Passionate Flutter developer with a love for creating beautiful,
                performant mobile applications. I specialize in cross-platform
                development and have successfully delivered 4+ apps to
                production. My journey started with native Android development,
                but I found my true calling in Flutter&apos;s elegant framework and
                Dart&apos;s powerful language features.
              </p>
              <p className="text-gray-800 dark:text-gray-100 leading-relaxed drop-shadow-sm">
                When I&apos;m not coding, you&apos;ll find me contributing to open-source
                projects, writing technical blogs, or exploring the latest
                mobile development trends.
              </p>
              <div className="flex space-x-3 pt-4">
                <Button
                onClick={
                  () => window.open(
                    "https://github.com/manokrajin"
                  )
                }
                  variant="outline"
                  size="sm"
                  className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-gray-900 dark:text-white transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  onClick={
                    () => window.open("https://www.linkedin.com/in/mahranradifanz/", "_blank")
                  }
                  variant="outline"
                  size="sm"
                  className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-gray-900 dark:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                 onClick={
                    () => window.open("mailto:mahran.raja@gmail.com")
                 }
                  variant="outline"
                  size="sm"
                  className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-gray-900 dark:text-white transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="md:col-span-1 lg:col-span-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white drop-shadow-sm">
                Skills & Technologies
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-200 drop-shadow-sm">
                My technical expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-blue-600 dark:text-blue-400 drop-shadow-sm">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white drop-shadow-sm">
                        {skill.name}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-200 drop-shadow-sm">
                        {skill.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 drop-shadow-sm">
                  4+
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-200 drop-shadow-sm">
                  Apps Published
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 drop-shadow-sm">
                  2+
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-200 drop-shadow-sm">
                  Years Experience
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Projects */}
          <Card className="md:col-span-2 lg:col-span-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white drop-shadow-sm">
                Featured Projects
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-200 drop-shadow-sm">
                Recent work and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white drop-shadow-sm">
                        {project.title}
                      </h4>
                      <Badge
                        variant={
                          project.status === "Live" ? "default" : "secondary"
                        }
                        className={`text-xs backdrop-blur-sm ${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-200 mb-3 drop-shadow-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs bg-white/10 backdrop-blur-sm border-white/30 text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.link, "_blank")}
                      className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 drop-shadow-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Project
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resume Download */}
          <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 mx-auto mb-3 text-purple-600 dark:text-purple-400 drop-shadow-sm" />
              <Button className="w-full bg-purple-600/80 hover:bg-purple-700/80 text-white backdrop-blur-sm border border-purple-500/30 transition-all duration-300
              " onClick={() => window.open("/resume.pdf", "_blank")}>
                Download Resume
              </Button>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="md:col-span-2 lg:col-span-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white drop-shadow-sm">
                Work Experience
              </CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-200 drop-shadow-sm">
                Professional journey and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 shadow-lg"></div>
                      {index < experience.length - 1 && (
                        <div className="w-0.5 h-16 bg-white/30 dark:bg-white/20 ml-1 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white drop-shadow-sm">
                            {exp.role}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium drop-shadow-sm">
                            {exp.company}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="mt-1 sm:mt-0 bg-white/10 backdrop-blur-sm border-white/30 text-gray-800 dark:text-gray-200"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 drop-shadow-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-700 dark:text-gray-300 drop-shadow-sm">
          <p>
            &copy; 2025 Mahran Radifan Zhafir. Built with Next.js and Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}
