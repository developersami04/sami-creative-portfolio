import { timelineData } from "@/lib/data";
import { Building, CalendarDays } from "lucide-react";

export function JourneyTimeline() {
  return (
    <div className="py-16 md:py-24">
      <div className="relative">
        <div className="hidden md:block timeline-line"></div>
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row md:items-start gap-8">
              <div className="hidden md:block timeline-point"></div>
              <div className="md:w-1/4 flex-shrink-0 text-left md:text-right md:pr-12">
                 <p className="font-semibold text-accent">{item.date}</p>
              </div>
              <div className="flex-grow rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{item.company}</span>
                </div>
                <p className="mt-4 text-base text-card-foreground/80">
                  {item.description}
                </p>
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
