import React from "react";
import Email from "./Email";

const Emails = () => {
  const emails = [
    {
      expeditor: "Dicoding Team",
      messageTitle: "Anda telah dinyatakan hadir di Event Dicoding Developer Coaching #79 : DevOps",
      message: "Salam VICKY PRATAMA SETIA MAHARDIKA, Selamat, Anda telah dinyatakan hadir pada Event Dicoding Developer Coaching #79.",
      timestamp: "11:45 AM",
    },
    {
      expeditor: "Harisenin Team",
      messageTitle: "Kamu bisa mulai jadi Web Developer di awal ahun 2023 lho",
      message: "Persaingan kerja makin ketat aja nih! Kamu mau berkarir jadi Web Developer?",
      timestamp: "10:40 AM",
    },
    {
      expeditor: "Meysa Mahfudhoh via.",
      messageTitle: "Vicky Pratama, start a conversation with your new connection, Meysa",
      message: "Meysa Mahfudhoh has accepted your invitation. Let's start a conversation.",
      timestamp: "9:30 AM",
    },
    {
      expeditor: "Amazon Web Services",
      messageTitle: "Registration Complete | AWS Builders Online Series",
      message: "You are already registered for AWS Builders Online Series. Mark your calendar now so you do not miss it.",
      timestamp: "4:15 AM",
    },
    {
      expeditor: "Google Forms",
      messageTitle: "SIB Dicoding Cycle 4 - Form Pendaftaran Ulang",
      message: "Thanks for filling out SIB Dicoding Cycle 4 - Form Pendaftaran Ulang",
      timestamp: "9:30 PM",
    },
    {
      expeditor: "Nila Mirnawati",
      messageTitle: "I want to connect",
      message: "Nila Mirnawati Student at Universitas Negeri Surabaya.",
      timestamp: "Jan 10",
    },
    {
      expeditor: "Citra, Course-Net",
      messageTitle: "Nggak Semua Cyber Security Kerjanya Ngoding!Holiday Special !",
      message: "Kerja di bidang Cyber Security tanpa harus jago ngoding?. Emang iya ya?",
      timestamp: "Jan 7",
    },
    {
      expeditor: "Testportal",
      messageTitle: "Invitation to take a test: Kampus Merdeka Batch 4",
      message: "Hello! Below is a link to your test result page. Remember to keep your link.",
      timestamp: "Jan 5",
    },
    {
      expeditor: "ResumeNerd",
      messageTitle: "You're on the right track",
      message: "Hi Vicky Pratama Setia, We’ve noticed that you saved your resume but haven’t finished it yet.",
      timestamp: "Jan 3",
    },
    {
      expeditor: "Skilvul",
      messageTitle: "BESOK! TerraTalks Eps.17",
      message: "Kamu salah satu orang yang tertarik berkarir sebagai Product Manager dan penasaran tentang apa itu Market Analysis?",
      timestamp: "Jan 1",
    },
    {
      expeditor: "Discord",
      messageTitle: "Revin - Admission Team mentioned you",
      message: "#diskusi-kelas-icp (IT Career Preparation by Alterra Academy)",
      timestamp: "12/30/22",
    },
    {
      expeditor: "Niagahoster",
      messageTitle: "Masih Kesulitan Membuat Website? sini-sini",
      message: "Hai Vicky Pratama Setia Mahardika‍ ! Anda mengalami kesulitan dalam membuat website?",
      timestamp: "12/30/22",
    },
    {
      expeditor: "Lintang From Dewaweb",
      messageTitle: "[Dewatalks Invitation] Growing Opportunities in the Internet of Things",
      message: "Pernah menggunakan asisten virtual untuk memainkan lagu, menyalakan AC, atau menyalakan lampu jarak jauh?",
      timestamp: "12/17/22",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Snowball Loading, a SelectMenu Appetizer, and Warm Design Aesthetics",
      message: "This week, we wrap up the year with a spectacular snowball from preloader pro Jon Kantner.",
      timestamp: "12/15/22",
    },
    {
      expeditor: "LinkedIn",
      messageTitle: "Appen is hiring: Work from Home Opportunities in Indonesia",
      message: "Top job picks for you Appen	Work from Home Opportunities in Indonesia Social Media Evaluator (Indonesian Fluency).",
      timestamp: "12/12/22",
    },
    {
      expeditor: "Coursera",
      messageTitle: "Special offer: free courses to get you started",
      message: "Get started on Coursera with your exclusive offer! There’s something for everyone.",
      timestamp: "12/10/22",
    },
    {
      expeditor: "Bangkit Academy",
      messageTitle: "Skill untuk memulai karier di bidang Cloud Computing",
      message: "Dear Future Indonesia, Ingin tahu tentang apa itu Cloud Computing dan bagaimana peluang karir di bidang Cloud Computing?",
      timestamp: "12/01/22",
    },
    {
      expeditor: "Discord",
      messageTitle: "vips mentioned you in WPU",
      message: "diskusi-kelas-icp (IT Career Preparation by Alterra Academy).",
      timestamp: "11/30/22",
    },
    {
      expeditor: "Niagahoster",
      messageTitle: "10 Inspirasi Usaha yang Menjanjikan untuk Dicoba di 2023",
      message: "Hai Vicky Pratama Setia Mahardika Tahun baru didepan mata dan Anda masih merasa begini-begini saja.",
      timestamp: "11/27/22",
    },
    {
      expeditor: "OY! Indonesia",
      messageTitle: "Buat & kirim invoice penagihan dengan mudah!",
      message: "Buat dan kirim invoice penagihan ke pelanggan via email/chat di satu dashboard dengan menyediakan opsi pembayaran melalui OY! Payment Link, mulai dari transfer bank, virtual account, e-wallet, hingga kartu debit/kredit.",
      timestamp: "11/12/22",
    },
    {
      expeditor: "Indosat Ooredoo Hut.",
      messageTitle: "Kami Ingin Dengar Kabarmu VICKY PRATAMA SETIA MAHARDIKA, Alumni IDCamp",
      message: "Dear VICKY PRATAMA SETIA MAHARDIKA, Apa kabar? Lama tak berjumpa setelah program beasiswa IDCamp di tahun-tahun sebelumnya berakhir.",
      timestamp: "11/10/22",
    },
    {
      expeditor: "DQLab",
      messageTitle: "DQLab Wrapped 2022! Terima Kasih untuk Kebersamaan Kita",
      message: "Dear, Sahabat Data Tahun 2022 sebentar lagi berganti Terima kasih sudah belajar sepanjang tahun ini Upgrade skill untuk raih karier dan mimpi",
      timestamp: "11/5/22",
    },
    {
      expeditor: "Jessica Cecilia Bud.",
      messageTitle: "Jessica just messaged you",
      message: "2 new messages await your response",
      timestamp: "11/4/22",
    },
    {
      expeditor: "Kinobi Community",
      messageTitle: "Resume Completed!",
      message: "Hey 016_vicky pratama! One word. WOW! We are loving your resume. ",
      timestamp: "11/1/22",
    },
    {
      expeditor: "Jadi Hacker",
      messageTitle: "[OPEN REGIST] BUNDLING HACK - LEVEL 1 & 2",
      message: "Halo Ethical Hackers! Sebagai bagian dari komitmen kami untuk terus mengedepankan kemajuan literasi cyber security.",
      timestamp: "11/1/22",
    },
    {
      expeditor: "Google Forms",
      messageTitle: "FORM PEMIRA JURUSAN TEKNIK INFORMATIKA 2023",
      message: "Thanks for filling out FORM PEMIRA JURUSAN TEKNIK INFORMATIKA 2023.",
      timestamp: "10/30/22",
    },
    {
      expeditor: "Dicoding Team",
      messageTitle: "Anda telah dinyatakan hadir di Event Dicoding Developer Coaching #79 : DevOps",
      message: "Salam VICKY PRATAMA SETIA MAHARDIKA, Selamat, Anda telah dinyatakan hadir pada Event Dicoding Developer Coaching #79.",
      timestamp: "11:45 AM",
    },
    {
      expeditor: "Harisenin Team",
      messageTitle: "Kamu bisa mulai jadi Web Developer di awal ahun 2023 lho",
      message: "Persaingan kerja makin ketat aja nih! Kamu mau berkarir jadi Web Developer?",
      timestamp: "10:40 AM",
    },
    {
      expeditor: "Meysa Mahfudhoh via.",
      messageTitle: "Vicky Pratama, start a conversation with your new connection, Meysa",
      message: "Meysa Mahfudhoh has accepted your invitation. Let's start a conversation.",
      timestamp: "9:30 AM",
    },
    {
      expeditor: "Amazon Web Services",
      messageTitle: "Registration Complete | AWS Builders Online Series",
      message: "You are already registered for AWS Builders Online Series. Mark your calendar now so you do not miss it.",
      timestamp: "4:15 PM",
    },
    {
      expeditor: "Google Forms",
      messageTitle: "SIB Dicoding Cycle 4 - Form Pendaftaran Ulang",
      message: "Thanks for filling out SIB Dicoding Cycle 4 - Form Pendaftaran Ulang",
      timestamp: "3:30 PM",
    },
    {
      expeditor: "Nila Mirnawati",
      messageTitle: "I want to connect",
      message: "Nila Mirnawati Student at Universitas Negeri Surabaya.",
      timestamp: "Jan 10",
    },
    {
      expeditor: "Citra, Course-Net",
      messageTitle: "Nggak Semua Cyber Security Kerjanya Ngoding!Holiday Special !",
      message: "Kerja di bidang Cyber Security tanpa harus jago ngoding?. Emang iya ya?",
      timestamp: "Jan 7",
    },
  ];

  return (
    <>
      {emails.map((email) => (
        <Email expeditor={email.expeditor} messageTitle={email.messageTitle} message={email.message} timestamp={email.timestamp} />
      ))}
    </>
  );
};

export default Emails;
