import HeroImage from "/assets/hero-img.webp";
import HagzImage from "/assets/Hagz-imgz.webp";

const Image = {
  HagzImage,
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

// data import
import Hobi1 from "/assets/hobi/bultang_hobi.webp";
import Hobi2 from "/assets/hobi/mole.webp";
import Hobi3 from "/assets/hobi/senja.webp";
import Hobi4 from "/assets/hobi/vape_my.webp";
//DATA HOBI

export const listHobi = [
  {
    id: 1,
    gambar: Hobi1,
    nama: "Bulu Tangkis",
    desk: "Saya mempunyai bakat dan hobi bermain bulutangkis, saya telah mengikuti beberapa lomba tarkam dan kejuaraan dies natalis kampus",
    tools: ["HTML"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Hobi2,
    nama: "bermain game",
    desk: "Saya suka bermain game moba seperti mobile legend,~ga imo ga bisa tidur~",
    tools: ["HTML"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Hobi3,
    nama: "Melihat Senja",
    desk: "Senja tau cara untuk pulang, meski tidak buru buru",
    dad: "400",
  },
  {
    id: 4,
    gambar: Hobi4,
    nama: "Mengoleksi Vape",
    desk: "Saya sudah mengenal dunia vape sejak smp yaitu tahun 2017 hingga saat ini",
    tools: ["Vite"],
    dad: "500",
  },
];

import Proyek1 from "/assets/proyek/portfolio.webp";
import Proyek2 from "/assets/proyek/project_java.webp";
import Proyek3 from "/assets/proyek/web_vape.webp";
//data proyek
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "portfolio project",
    desk: "Project ini tentang portfolio saya berdasarkan pengalaman dan data diri saya",
    tools: ["HTML", "Vite", "Javascript", "ReactJS", "TailwindCSS", "AOS"],
    dad: "200",
  },
  {
    id: 1,
    gambar: Proyek1,
    nama: "Project Aplikasi kasir Java",
    desk: "Project ini bertujuan untuk membantu kasir dalam recap data & input data",
    tools: ["Javascript"],
    dad: "300",
  },
  {
    id: 7,
    gambar: Proyek3,
    nama: "Web e-commerce vaping",
    desk: "Project tentang penjualan & pasaran didunia e-cig atau vape",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
];
//DATA PRESTASI
import Prestasi1 from "/assets/prestasi/bultang.webp";
import Prestasi2 from "/assets/prestasi/sertifikat_daikin.webp";
import Prestasi3 from "/assets/prestasi/sertifikat_horison.webp";

export const listPrestasi = [
  {
    id: 1,
    gambar: Prestasi1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    dad: "200",
  },
  {
    id: 9,
    gambar: Prestasi2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    dad: "300",
  },
  {
    id: 10,
    gambar: Prestasi3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    dad: "400",
  },
];


//DTA PENGALAMAN
import Pengalaman1 from "/assets/pengalaman/angkringan.webp";
import Pengalaman2 from "/assets/pengalaman/cv_putera.webp";
import Pengalaman3 from "/assets/pengalaman/plaza.webp";

export const listPengalaman = [
  {
    id: 1,
    gambar: Pengalaman1,
    nama: "Bisnis Angkringan",
    desk: "Saya memberanikan membuka bisnis foodcourt konsep angkringan dari 0 hingga berjalan sampai sekarang sebagai pasif income. ",
    dad: "200",
  },
  {
    id: 2,
    gambar: Pengalaman2,
    nama: "Bekerja di HvAc",
    desk: "Saya sempat bekerja diperusahaan pendingin CV.TigaPuteraAcCentre sebagai teknisi maintenance selama 1 tahun",
    dad: "300",
  },
  {
    id: 3,
    gambar: Pengalaman3,
    nama: "Bekerja Di Hotel Plaza Tegal",
    desk: "Saya sempat bekerja di perusahaan Hotel Plaza Tegal by Horison sebagai Engginer di devisi Engginering selama 5 bulan dan sempat training 6 bulan",
    dad: "400",
  },
];