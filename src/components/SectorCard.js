import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SectorCard({ sector }) {
  const { id, title, target, points, image, href } = sector;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group hover-lift h-full">
      
      {/* Card Image Area */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-w-7xl) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-1">
            {target}
          </span>
          <h3 className="text-xl font-display font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        
        {/* Solutions List */}
        <ul className="space-y-3 mb-8">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start text-sm text-text-slate">
              <CheckCircle2 className="w-4 h-4 text-secondary mr-2.5 mt-0.5 flex-shrink-0 stroke-[2.5]" />
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>

        {/* Detailed CTA */}
        <Link
          href={href}
          className="inline-flex items-center text-sm font-bold text-secondary hover:text-teal-800 transition-colors mt-auto group"
        >
          <span>Sektörel Çözümleri İncele</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
    </div>
  );
}
