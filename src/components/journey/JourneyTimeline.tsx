'use client';
import { timelineData } from '@/lib/data/journey/timeline';
import { TimelineItem } from '@/components/journey/TimelineItem';
import { Container } from '@/components/shared/Container';

export function JourneyTimeline() {
  return (
    <Container className="py-16 md:py-24">
        <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>

            <div className="space-y-12">
                {timelineData.map((item, index) => (
                    <TimelineItem 
                        key={item.id} 
                        item={item} 
                        isLeft={index % 2 !== 0} 
                    />
                ))}
            </div>
        </div>
    </Container>
  );
}
