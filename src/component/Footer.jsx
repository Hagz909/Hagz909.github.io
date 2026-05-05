function Footer() {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio<span className="text-blue-500 p-2">@Hagz.el</span></h1>
        <div className="flex gap-7">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/Hagz909">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/hagz.el/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-reddit-fill ri-2x"></i>
            </a>
            <a href="http://www.youtube.com/@ilhammusyafa4580">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer