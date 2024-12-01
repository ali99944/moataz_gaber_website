import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-[#004851] text-[#D3D3D3] py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/images/mutaz.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center justify-end flex-row-reverse mb-6">
              <h3 className="text-3xl font-bold">معتز جابر</h3>
              <Image
                src="/assets/images/logo.png"
                alt="Moataz Gabr Kitchens"
                width={50}
                height={50}
                className="rounded-lg ml-4"
              />
            </div>
            <p className="text-[#D3D3D3] leading-relaxed mb-6">
              نحن متخصصون في تصميم وتنفيذ المطابخ والديكورات الداخلية بأعلى مستويات الجودة والإبداع
            </p>
            <div className="flex space-x-4 flex-row-reverse justify-end">
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#FF0000] transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-[#FF0000] transition-colors">خدماتنا</a></li>
              <li><a href="#gallery" className="hover:text-[#FF0000] transition-colors">معرض الأعمال</a></li>
              <li><a href="#projects" className="hover:text-[#FF0000] transition-colors">مشاريعنا</a></li>
              <li><a href="#contact" className="hover:text-[#FF0000] transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#FF0000]" />
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF0000]" />
                <span>info@moatazgaber.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FF0000]" />
                <span>شارع التحرير، القاهرة، مصر</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">ساعات العمل</h4>
            <p className="mb-2">الأحد - الخميس: 9 صباحًا - 6 مساءً</p>
            <p>الجمعة - السبت: 10 صباحًا - 4 مساءً</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#D3D3D3]/20 text-center">
          <p>&copy; {new Date().getFullYear()} معتز جابر للمطابخ. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

