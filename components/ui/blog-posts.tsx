"use client";

import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  views?: number;
  readTime?: number;
  rating?: number;
  className?: string;
}

interface GridSectionProps {
  title: string;
  description: string;
  backgroundLabel?: string;
  backgroundPosition?: "left" | "right";
  posts?: BlogPost[];
  className?: string;
  onPostClick?: (post: BlogPost) => void;
}

export const Component = ({
  title,
  description,
  backgroundLabel,
  backgroundPosition = "left",
  posts = [],
  className,
  onPostClick,
}: GridSectionProps) => {
  return (
    <section
      className={cn(
        "container relative mx-auto px-4 py-2 md:my-10 md:py-10",
        className,
      )}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="mb-3 text-center text-3xl font-extrabold capitalize text-[#2C2C2A] md:mb-6 md:text-5xl"
      >
        {title}
      </motion.h1>

      {backgroundLabel && (
        <span
          className={cn(
            "pointer-events-none absolute -top-10 -z-50 select-none text-[180px] font-extrabold leading-[1] text-black/[0.02] md:text-[250px] lg:text-[400px]",
            backgroundPosition === "left" ? "-left-[18%]" : "-right-[28%]",
          )}
        >
          {backgroundLabel}
        </span>
      )}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.1 }}
        className="mx-auto mb-6 max-w-[800px] text-center text-[15px] leading-relaxed text-[#5F5E5A] md:mb-10 md:text-xl"
      >
        {description}
      </motion.p>
      
      {/* Show More Header */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="flex justify-end mb-6"
      >
        <Link 
          href="/products" 
          className="group flex items-center gap-2 text-lg font-bold text-[#639922] transition-colors hover:text-[#4d7a1a]"
        >
          Show More
          <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {posts.map((post, index) => {
          const {
            id,
            title: postTitle,
            imageUrl,
            href = "/products",
            className: postClassName,
          } = post;

          return (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              key={id || index}
              className="h-full w-full"
            >
              <Link
                href={href}
                className={cn(
                  "group relative flex h-[280px] md:h-[400px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-4 md:p-6 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#639922]/20",
                  postClassName,
                )}
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 -z-0 h-full w-full bg-gradient-to-t from-[#2C2C2A]/90 via-[#2C2C2A]/20 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-90" />
                <div className="absolute inset-0 -z-0 h-full w-full bg-[#639922]/0 transition-colors duration-500 group-hover:bg-[#639922]/20 mix-blend-overlay" />

                <article className="relative z-10 flex w-full flex-row items-end justify-between gap-4">
                  <h1 className="text-lg font-bold text-white sm:text-lg md:text-xl lg:text-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500 [text-shadow:0_2px_10px_rgba(44,44,42,0.8)]">
                    {postTitle}
                  </h1>
                  <div className="hidden sm:flex shrink-0 translate-y-2 opacity-0 -translate-x-4 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 items-center justify-center rounded-full bg-[#639922] p-2 md:p-3 shadow-[0_0_15px_rgba(99,153,34,0.5)]">
                    <MoveRight
                      className="text-white"
                      width={24}
                      height={24}
                      strokeWidth={2.5}
                    />
                  </div>
                </article>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
