import bannerImage from "../../assets/asset/Banner/Banner.jpg";
import teamImage from "../../assets/asset/Category Card/team.jpg";
import { Target, Eye, Heart, Zap, Users, Mail } from "lucide-react";

const AboutUsPage = () => {
  const teamMembers = [
    { name: "MD. Abdullahil Baki", role: "Team Lead & Frontend Developer" },
    { name: "Naimur Reza", role: "Full Stack Developer" },
    { name: "Safi Islam", role: "Backend Developer" },
    { name: "MD Sakib", role: "Frontend Developer" },
    { name: "Imran Sarker", role: "Backend Developer" },
    { name: "Reaxul Alavhi", role: "Frontend Developer" },
  ];

  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Integrity",
      description:
        "We always do the right thing for our customers and partners.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Innovation",
      description:
        "We constantly improve and embrace new ideas for better experiences.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Customer First",
      description: "Our customers are at the center of everything we do.",
    },
  ];

  return (
    <div className="about-us-container bg-gradient-to-b from-white to-orange-50/30">
      {/* Banner Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center px-4 animate-fadeIn">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
            About Us
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Connecting food lovers with their favorite restaurants
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
            Our Mission & Vision
          </h2>
          <p className="text-slate-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We aim to provide the best service to connect restaurants and
            customers seamlessly, ensuring everyone enjoys a delightful dining
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To simplify food ordering, promote local restaurants, and
                deliver happiness to every doorstep.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 hover:-translate-y-2">
        
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted platform for food lovers and restaurants,
                making every meal memorable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            The talented people behind Tasty Drop
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden hover:-translate-y-2"
              >
                <div className="relative z-10">
                  {/* Image with ring */}
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <img
                      src={teamImage}
                      alt={member.name}
                      className="relative w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden hover:-translate-y-2 border border-orange-100"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-rose-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-orange-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 py-20 mt-16 mb-28 mx-4 md:mx-20 rounded-3xl shadow-2xl overflow-hidden">
      

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Be a part of our story and help us make dining experiences
            delightful for everyone.
          </p>
          <button className="group relative bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
