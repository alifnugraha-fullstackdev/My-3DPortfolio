import { motion } from "framer-motion";
import SEO from "../components/SEO";
import cert1 from "../assets/images/cert-1.png";
import cert2 from "../assets/images/cert-2.png";
// Certificate images
const certificate1 = "https://i.postimg.cc/BZFGTnjf/certificate-1.webp";
const certificate2 = "https://i.postimg.cc/7YyrmrzG/certificate-2.webp";
const certificate3 = "https://i.postimg.cc/5NqdrK5P/certificate-3.webp";
const certificate4 = "https://i.postimg.cc/DzNtG9Fz/certificate-4.webp";
const certificate5 = "https://i.postimg.cc/1zXkf9kT/certificate-5.webp";
const certificate6 = "https://i.postimg.cc/W3Jxw5bw/certificate-6.webp";
const certificate7 = "https://i.postimg.cc/gjFQS3xF/certificate-7.webp";
const certificate8 = "https://i.postimg.cc/5yBGZjzH/certificate-8.webp";
const certificate9 = "https://i.postimg.cc/QN1RBYzX/certificate-9.webp";
const certificate10 = "https://i.postimg.cc/fTKb0Wmx/157789995.jpg";
const certificate11 = "https://i.postimg.cc/jqkL35BY/157918431.jpg";
const certificate12 = "https://i.postimg.cc/j58Kb64n/158527861.jpg";
const certificate13 =
  "https://i.postimg.cc/wjxnbXHC/Coursera-V91494-RUZT2-G-page-0001.jpg";
const certificate14 = "https://i.postimg.cc/Z5fDHVcg/certificate-page-0001.jpg";
const certificate15 = "https://i.postimg.cc/nr8nP7HN/certificate-page-0001.jpg";
const certificate16 = "https://i.postimg.cc/8kZKrJbB/158935261.jpg";
const certificate17 =
  "https://i.postimg.cc/qvMSsDY1/UC-5bf9a3a8-bbd4-45d9-a632-51204a6073ca.jpg";
const certificate18 =
  "https://udemy-certificate.s3.amazonaws.com/image/UC-fd60d87e-053a-4a61-a904-c1e3c23808c6.jpg";
const certificate19 = 
  "https://i.postimg.cc/DyDFBX2X/166352363.jpg";
const certificate20 =
  "https://i.postimg.cc/rwMmg2VG/software-engineer-intern-certificate-page-0001-(1).jpg";
const certificate21 =
  "https://i.postimg.cc/PrQj4fPn/UC-de10d064-a219-4952-9259-14f73523bbc4.jpg";
const certificate22 = 
  "https://i.postimg.cc/3wrC8M5F/software-engineer-certificate-page-0001.jpg";
const certificate23 =
  "https://i.postimg.cc/xjBkgjLr/cs50x.png"


const Certifications = () => {
  const certifications = [
    {
      title: "Sertifikat Keahlian 1",
      image: cert1,
      date: "Recent",
      org: "Organization",
      description: "Professional certification achieved.",
      verificationLink: "https://drive.google.com/file/d/15Dnzimgkl3JsHJwGjbpjj2IKiNOfPxSh/view?usp=sharing",
    },
    {
      title: "Sertifikat Keahlian 2",
      image: cert2,
      date: "Recent",
      org: "Organization",
      description: "Professional certification achieved.",
      verificationLink: "https://drive.google.com/file/d/1dN_57i5ZtooHx2v23qpMWVMV05eVGD-I/view?usp=sharing",
    }
  ];

  return (
    <motion.section
      className="max-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO title="Certifications | Alif Nugraha" />

      <motion.h1
        className="head-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My{" "}
        <motion.span
          className="blue-gradient_text font-semibold drop-shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Certifications
        </motion.span>
      </motion.h1>

      <motion.div
        className="mt-5 flex flex-col gap-3 text-slate-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          These certifications represent my commitment to continuous learning
          and professional development in the field of web development and
          software engineering.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="w-full p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow flex flex-col"
          >
            <motion.div
              className="relative w-full h-48 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
              />
              <motion.div
                className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.2 }}
              >
                {cert.date}
              </motion.div>
            </motion.div>

            <motion.h3
              className="text-xl font-bold mb-2 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.2 }}
            >
              {cert.title}
            </motion.h3>

            <motion.h4
              className="w-fit bg-gray-400 text-white text-xs px-2 py-1 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.2 }}
            >
              Issued by: {cert.org}
            </motion.h4>

            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.6 + index * 0.2 }}
            >
              {cert.description}
            </motion.p>

            <motion.a
              href={cert.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-auto w-fit self-start text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.8 + index * 0.2 }}
            >
              View Certificate
              <span> </span>
              <i className="fas fa-external-link"></i>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
