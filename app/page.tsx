import Link from 'next/link';
import { ShieldCheck, Zap, Sun, Shield } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { getFeaturedCatalogProducts } from '@/lib/catalogData';

export default async function Home() {
	const featuredProducts = await getFeaturedCatalogProducts(6);

	return (
		<>
			<section className='relative h-screen min-h-150 border-b border-slate-800 bg-slate-900 text-white flex items-center'>
				<div className='absolute inset-0 bg-emerald-900/20'></div>
				<div className='relative max-w-7xl mx-auto px-4 w-full'>
					<div className='max-w-2xl'>
						<h1 className='text-5xl md:text-7xl font-bold mb-6'>
							Next-Gen <span className='text-emerald-500'>Solar Security</span>
						</h1>
						<p className='text-xl text-slate-300 mb-8'>
							Protect your perimeter with industry-leading solar powered fencing
							solutions.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='/products'
								className='bg-emerald-600 px-6 py-3 rounded-md font-medium'
							>
								View Products
							</Link>
							<Link
								href='/contact'
								className='bg-white/10 px-6 py-3 rounded-md font-medium backdrop-blur-sm'
							>
								Get a Quote
							</Link>
						</div>
					</div>
				</div>
			</section>

			<SectionWrapper className='bg-slate-50'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{[
						{
							icon: Zap,
							title: 'High Output Power',
							desc: 'Maximum deterrent with zero environmental impact',
						},
						{
							icon: Sun,
							title: '100% Solar Powered',
							desc: 'Completely off-grid capable',
						},
						{
							icon: ShieldCheck,
							title: 'Durable Materials',
							desc: 'Weather-resistant components',
						},
					].map((feature, i) => (
						<div
							key={i}
							className='bg-white p-8 rounded-xl shadow-sm border border-slate-100'
						>
							<div className='w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-lg mb-6'>
								<feature.icon className='w-6 h-6' />
							</div>
							<h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
							<p className='text-slate-600'>{feature.desc}</p>
						</div>
					))}
				</div>
			</SectionWrapper>

			<SectionWrapper>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{featuredProducts.map((product) => (
						<Link
							href={'/products/' + product.slug}
							key={product.id || product.slug}
							className='group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all h-full'
						>
							<div className='h-48 bg-slate-100 w-full flex items-center justify-center'>
								<Shield className='w-12 h-12 text-slate-300' />
							</div>
							<div className='p-6 grow flex flex-col'>
								<h3 className='text-lg font-bold mb-2'>{product.name}</h3>
								<p className='text-slate-600 text-sm mb-4 line-clamp-2'>
									{product.shortDescription}
								</p>
								<div className='mt-auto flex justify-between font-bold'></div>
							</div>
						</Link>
					))}
				</div>
			</SectionWrapper>
		</>
	);
}
