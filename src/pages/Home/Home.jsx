import logo from "../../assets/logo.png";
import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.png";
import img3 from "../../assets/img_3.png";
import video from "../../assets/video.mp4";
import video2 from "../../assets/video2.mp4";
import star from "../../assets/star.png";

import { FaShieldAlt, FaTag, FaGift, FaChild } from "react-icons/fa";
import { GiSyringe } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="mb-[15px]">
      <div className="bg-[var(--main-color)] text-white text-center text-lg p-2">
        سعر العطر 12 دينار و التوصيل مجاني و الدفع عند الاستلام
      </div>
      <div className="container">
        <div className="logo flex items-center justify-center mt-6">
          <img src={logo} alt="logo_img" className="w-[300px]" />
        </div>
        <div className="title colored-div w-fit p-5 lg:px-12 mx-auto mt-8">
          <h4 className="text-white text-2xl lg:text-4xl font-semibold">
            {" "}
            عــــطــــر كــــيــــدز بــــوكــــس
          </h4>
        </div>
        <span className="block mx-auto text-center text-lg font-medium mt-2">
          {" "}
          الرفيق المثالي للأطفال برائحة منعشة وممتعة
        </span>
        <div className="hero_container flex items-center justify-center mt-8">
          <img src={img1} alt="img_1" className="w-[500px]" />
        </div>
        <div className="icons">
          <div className="features flex flex-col lg:flex-row items-center justify-center gap-9 my-6">
            <div className="feature-item">
              <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-white" size={38} />
              </div>
              <span>آمن و صحي </span>
            </div>
            <div className="feature-item">
              <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center">
                <GiSyringe className="text-white" size={38} />
              </div>
              <span>رائحة تدوم طويلاً</span>
            </div>
            <div className="feature-item">
              <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center">
                <FaTag className="text-white" size={38} />
              </div>
              <span>تصميم جذاب</span>
            </div>
            <div className="feature-item">
              <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center">
                <FaChild className="text-white" size={38} />
              </div>
              <span>مناسب لجميع الأعمار</span>
            </div>
            <div className="feature-item">
              <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center">
                <FaGift className="text-white" size={38} />
              </div>
              <span>خيار رائع كهدية</span>
            </div>
          </div>
        </div>
        <div className="info">
          <p className="text-lg font-semibold leading-[50px] text-center mt-[70px]">
            اكتشفوا مجموعة{" "}
            <span className="text-[var(--main-color)]">
              "عـــــطـــــر كـــــيـــــدز بـــــوكـــــس"
            </span>
            ، العطر الفريد الذي تم تصميمه خصيصًا لأطفالكم. يجمع هذا العطر بين
            الروائح العطرة التي يحبها الأطفال والمكونات الآمنة التي تعتمد عليها
            الأمهات، ليكون رفيقًا يوميًا يمنح أطفالكم إحساسًا بالنظافة والانتعاش
            طوال اليوم. تتميز عطوراتنا برائحتها العطرية الرقيقة والهادئة، التي
            تعمل على تهدئة وتنعش، وتلهم مشاعر السلام والسعادة. اجعلوا كل لحظة
            مميزة مع "عطر كيدز بوكس"، الاختيار الأمثل للعناية بجمال وصحة
            أطفالكم.
          </p>
          <img src={img2} alt="img_2" className="m-auto mt-[30px]" />
        </div>
        <div className="video mt-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">شاهد الفيديوهات</h2>
            <span>
              استمتع بمشاهدة الفيديوهات الترويجية لعطر كيدز بوكس وشاهد كيف يمكن
              أن يصبح جزءًا من يوم أطفالكم
            </span>
          </div>
          <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={video}
                  allowFullScreen
                  title="فيديو 1"
                ></iframe>
              </div>
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={video2}
                  allowFullScreen
                  title="فيديو 2"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials mt-[85px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">أراء عملائنا</h2>
            <p className="">
              نحن نعمل بجد لضمان رضاكم وتقديم أفضل المنتجات التي تلبي توقعاتكم
              وتفوقها
            </p>
          </div>
          <div className="testimonials-boxs grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] mt-[35px] md:mt-[50px]">
            <div className="testimonials-box relative h-[220px] bg-[#fff] shadow-lg p-[24px] rounded-[16px] cursor-pointer">
              <p className="text-[var(--third-color)] text-[16px] font-medium leading-[40.45px]">
                <span className="font-semibold">
                  {" "}
                  أطفالي يعشقون هذا العطر! الرائحة رائعة وتدوم طويلاً. أشعر
                  بالراحة وأنا أعلم أن المنتج آمن لبشرتهم.{" "}
                </span>
                - سارة، أم لطفلين.
              </p>

              <figure>
                <img
                  src={star}
                  alt="star_img"
                  className="absolute bottom-[30px]"
                />
              </figure>
            </div>
            <div className="testimonials-box relative h-[220px] bg-[#fff] shadow-lg p-[24px] rounded-[16px] cursor-pointer">
              <p className="text-[var(--third-color)] text-[16px] font-medium leading-[40.45px]">
                <span className="font-semibold">
                  هدية رائعة حصلت عليها لطفلي في عيد ميلاده. الآن لا يخرج من
                  المنزل إلا بعد أن يضع عطر كيدز بوكس!
                </span>
                - مريم، جدة.
              </p>

              <figure>
                <img
                  src={star}
                  alt="star_img"
                  className="absolute bottom-[30px]"
                />
              </figure>
            </div>
            <div className="testimonials-box relative h-[220px] bg-[#fff] shadow-lg p-[24px] rounded-[16px] cursor-pointer">
              <p className="text-[var(--third-color)] text-[16px] font-medium leading-[40.45px]">
                <span className="font-semibold">
                  الرائحة ناعمة ومناسبة لجلد الأطفال، والتصميم لطيف جدًا. أصبح
                  جزءًا من روتين أطفالنا اليومي .
                </span>
                - أحمد ابراهيم
              </p>

              <figure>
                <img
                  src={star}
                  alt="star_img"
                  className="absolute bottom-[30px]"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="use mt-[85px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">طريقة الاستخدام</h2>
            <p>
              للحصول على أفضل تجربة من "عطر كيدز بوكس"، تأكدي من اتباع الخطوات
              التالية:
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 lg:mt-11">
            <img src={img3} alt="img_3" />
            <div className="mt-8">
              <span className="bg-[var(--main-color)] text-white rounded-full p-2 font-semibold">
                الخطوة الأولى
              </span>
              <p className="mt-4 font-semibold leading-8">
                رشي العطر على الملابس من مسافة مناسبة لضمان توزيع العطر بشكل
                متساوٍ وتجنب تركيزه في منطقة واحدة.
              </p>
              <span className="bg-[var(--main-color)] text-white rounded-full p-2 font-semibold block w-fit mt-4">
                الخطوة الثانية
              </span>
              <p className="mt-4 font-semibold leading-8">
                استخدمي العطر يوميًا لتعزيز انتعاش طفلك طوال اليوم، مما يمنحه
                شعورًا بالنظافة والراحة.
              </p>
              <span className="bg-[var(--main-color)] text-white rounded-full p-2 font-semibold block w-fit mt-4">
                الخطوة الثانية
              </span>
              <p className="mt-4 font-semibold leading-8">
                مثالي للاستخدام بعد الاستحمام أو قبل الذهاب إلى المدرسة، حيث
                يضفي على أطفالك لمسة من الانتعاش والثقة طوال اليوم.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[85px] mb-[65px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">اشترِ الآن واستمتع بعرض خاص!</h2>
            <p>
              عطر كيدز بوكس متوفر الآن بسعر 12 دينار فقط ! لا تفوتوا الفرصة
              واجعلوا أطفالكم يشعرون بالتميز مع هذا العطر الفريد.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to={"https://wa.me/96560307755"}
              target="_blank"
              className="bg-[var(--main-color)] text-white rounded-full p-3 text-sm"
            >
              اطلب الآن واتس
            </Link>
          </div>
        </div>
        <footer className="flex items-center justify-between">
          <div className="text-sm text-center">
            تنفيذ وتصميم{" "}
            <Link
              to={"https://wa.me/96551090693"}
              target="_blank"
              className="hover:underline transition"
            >
              MizaMedia
            </Link>
          </div>

          <div className="relative z-10 gap-2 flex items-center">
            <span className="text-sm">تواصل معنا : </span>
            <Link
              target="_blank"
              className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded-full cursor-pointer text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8 hover:bg-[#dcdcdc] transition"
              data-state="closed"
              to="https://www.instagram.com/kidsboxperfume/"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              target="_blank"
              className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded-full cursor-pointer text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8 hover:bg-[#dcdcdc] transition"
              data-state="closed"
              to="https://wa.me/96560307755"
            >
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Home;
