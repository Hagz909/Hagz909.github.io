import HeroImage from "/assets/hero-img.webp";
import HagzImage from "/assets/Hagz-imgz.webp";
import HarkatImage from "/assets/HarkatImage.png";

const Image = {
  HagzImage,HarkatImage
};


export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website portfolio",
    desk: "Project ini tentang portfolio saya berdasarkan pengalaman dan data diri saya",
    tools: ["HTML", "Vite", "JS", "ReactJS", "TailwindCSS",],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Aplikasi Kasir Java",
    desk: "Project ini bertujuan untuk membantu kasir dalam recap data & input data",
    tools: ["Javascript"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website vaping e-commerce",
    desk: "Project tentang penjualan & pasaran didunia e-cig atau vape",
    tools: ["HTML", "CSS"],
    dad: "400",
  },
];
