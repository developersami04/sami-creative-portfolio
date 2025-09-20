'use client';

import { timelineData } from '@/lib/data/journey/timeline';
import { TimelineItem } from '@/components/journey/TimelineItem';
import { TimelineCurve } from '@/components/journey/TimelineCurve';

export function JourneyTimeline() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-3">
        {/* Timeline Items */}
        <div className="md:col-span-2">
          <div className="space-y-12">
            {timelineData.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* SVG Curve - Hidden on mobile */}
        <div className="sticky top-24 hidden md:block">
          <TimelineCurve />
        </div>
      </div>
    </div>
  );
}
