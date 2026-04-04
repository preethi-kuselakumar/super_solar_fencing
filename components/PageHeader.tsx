import Link from "next/link";

interface PageHeaderProps {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#1C2028] w-full overflow-hidden pt-[0px] lg:pt-[104px] pb-8 md:pb-10 border-b-[4px] border-[#FF7A49]">
      
      {/* Clean, Industrial Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Title */}
        <h1 className="text-[32px] md:text-[40px] lg:text-[46px] font-extrabold text-white leading-[1.1] tracking-tight mb-3 mt-0">
          {title}
        </h1>

        {/* Breadcrumb line */}
        <div className="flex items-center justify-center text-[13px] font-bold tracking-[0.2em] uppercase">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <span key={crumb.label} className="flex items-center">
                {crumb.href ? (
                  <Link href={crumb.href} className="text-gray-300 hover:text-[#FF7A49] transition-colors duration-300">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-[#FF7A49]" : "text-gray-300"}>
                    {crumb.label}
                  </span>
                )}
                
                {!isLast && (
                  <span className="text-[#FF7A49] mx-4 select-none">-</span>
                )}
              </span>
            );
          })}
        </div>

      </div>
    </section>
  );
}
