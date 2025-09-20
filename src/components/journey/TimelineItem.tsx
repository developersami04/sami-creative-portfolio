'use client';

import type { TimelineEvent } from '@/lib/types';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Building } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TimelineItem({ item }: { item: TimelineEvent }) {
  const { ref, inView } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'transform transition-all duration-700 ease-in-out',
        inView ? 'animate-slide-in opacity-100' : 'opacity-0'
      )}
    >
      <div className="relative rounded-lg border bg-card p-6 shadow-md transition-shadow hover:shadow-xl">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
          <p className="font-semibold text-accent">{item.date}</p>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Building className="h-4 w-4" />
          <span>{item.company}</span>
        </div>
        <p className="mt-4 text-base text-card-foreground/80">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
