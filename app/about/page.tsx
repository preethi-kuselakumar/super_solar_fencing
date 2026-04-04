import Image from "next/image";
import Link from "next/link";
import { AboutProductVideos } from "@/components/AboutProductVideos";

export const revalidate = 30;

export default async function AboutPage() {
  const factsheetBasic = [
    ["Nature of Business", "Manufacturer"],
    ["Additional Business", "Retail Business, Service Provision"],
    ["Company CEO", "K.C. Senthil Kumar"],
    [
      "Registered Address",
      "No. 19, Kanthavel Nagar, GTN College Road, Dindigul - 624001, Tamil Nadu, India",
    ],
    ["Total Number of Employees", "11 to 25 People"],
    ["GST Registration Date", "01-07-2017"],
    ["Legal Status of Firm", "Proprietorship"],
    ["Annual Turnover", "40 L - 1.5 Cr"],
    ["GST Partner Name", "Senthilkumar Kumar Chellapa"],
  ];

  const factsheetStatutory = [
    ["Banker", "ICICI Bank, ICICI BANK, ICICI BANK, HDFC BANK LTD"],
    ["GST No.", "33BABPK2153G1Z8"],
  ];

  const paymentModes = ["Cash", "Credit Card", "Cheque", "DD", "Online"];

  const whyUs = [
    "Advanced processing facility",
    "Experienced professionals",
    "Strict quality standards",
    "Ethical business policies",
    "Transparent dealings",
    "Absolute client satisfaction",
    "Timely delivery",
  ];

  const infraImages = [
    "https://images.unsplash.com/photo-1509391366360-120953a17e1e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
  ];

  const youtubeLinks = [
    {
      title: "Solar Electric Fencing",
      videoId: "tgbNymZ7vqY",
      thumbnail:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Solar Powered Electric Fence",
      videoId: "xrqUsV0uLOM",
      thumbnail:
        "https://images.unsplash.com/photo-1611365892117-00d8f8f2f2be?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Precast Prestressed Wall Fence",
      videoId: "tgbNymZ7vqY",
      thumbnail:
        "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <section className="bg-[#F5F5F5] py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight mb-4">
                  About Us
                </h2>
                <p className="text-[#5F5E5A] text-[15px] leading-relaxed">
                  Incorporated in the year 2002 at Dindigul, Tamil Nadu, we "Safe & Save Equipments" are a Sole Proprietorship (Individual)
                  based company, engaged as the Manufacturer of Agriculture Solar Fencing and many more. All these products are provided to
                  the customer after tested on various quality parameters. Under the mentorship of "K.C. Senthil Kumar" we have gained name
                  and fame in the market. We also render Solar Power Plant Service and many more.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="relative h-[220px] md:h-[260px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop"
                    alt="About Safe and Save Equipments"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <AboutProductVideos videos={youtubeLinks} />

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold sm:text-3xl text-[#2C2C2A] mb-4 tracking-tight">Our Infrastructure</h3>
              <p className="text-[#5F5E5A] text-[15px] mb-6">Our Board Image</p>
              <Link
                href="/contact"
                className="inline-flex px-8 py-3 bg-[#639922] text-white rounded-md font-bold hover:bg-[#5F5E5A] transition"
              >
                Contact Us
              </Link>

            <div className="relative mt-6 h-[280px] md:h-[320px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop"
                alt="Company infrastructure board"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold sm:text-3xl text-[#2C2C2A] text-center mb-8">Factsheet</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold sm:text-2xl text-[#2C2C2A] mb-4">Basic Information</h4>
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                  {factsheetBasic.map(([label, value]) => (
                    <div key={label} className="grid md:grid-cols-3 gap-2 md:gap-6 p-4 bg-white">
                      <p className="text-[#5F5E5A] font-semibold">{label}</p>
                      <p className="md:col-span-2 text-[#2C2C2A] font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold sm:text-2xl text-[#2C2C2A] mb-4">Statutory Profile</h4>
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                  {factsheetStatutory.map(([label, value]) => (
                    <div key={label} className="grid md:grid-cols-3 gap-2 md:gap-6 p-4 bg-white">
                      <p className="text-[#5F5E5A] font-semibold">{label}</p>
                      <p className="md:col-span-2 text-[#2C2C2A] font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold sm:text-2xl text-[#2C2C2A] mb-4">Packaging/Payment and Shipment Details</h4>
                <div className="grid md:grid-cols-3 gap-2 md:gap-6 p-4 border border-slate-200 rounded-xl bg-white">
                  <p className="text-[#5F5E5A] font-semibold">Payment Mode</p>
                  <ul className="md:col-span-2 text-[#2C2C2A] font-medium space-y-1">
                    {paymentModes.map((mode) => (
                      <li key={mode}>{mode}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm h-full">
              <h3 className="text-2xl font-extrabold sm:text-3xl text-[#2C2C2A] mb-4 tracking-tight">Why Us?</h3>
              <p className="text-[#5F5E5A] text-[15px] leading-relaxed mb-6">
                Due to our massive knowledge of this business, we have been able to attain a huge client base in the industry.
              </p>
              <p className="text-[#2C2C2A] font-bold mb-3">
                Factors which differentiate us from others in the market are:
              </p>
              <ul className="list-disc pl-5 text-[#5F5E5A] leading-relaxed space-y-1">
                {whyUs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col">
              <h3 className="text-2xl font-extrabold sm:text-3xl text-[#2C2C2A] mb-4 tracking-tight">Infrastructural Set-Up</h3>
              <p className="text-[#5F5E5A] text-[15px] mb-6">Office Image</p>
              <Link
                href="/contact"
                className="inline-flex px-8 py-3 bg-[#639922] text-white rounded-md font-bold hover:bg-[#5F5E5A] transition w-fit"
              >
                Contact Us
              </Link>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {infraImages.map((image, index) => (
                  <div key={image} className="relative aspect-[4/3] rounded-md overflow-hidden border border-slate-200">
                    <Image
                      src={image}
                      alt={`Infrastructure image ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
