import { timelineData } from "@/lib/data/journey/timeline";
import { Building } from "lucide-react";
import { cn } from "@/lib/utils";

export function JourneyTimeline() {
  return (
    <div className="py-16 md:py-24">
      <div className="relative timeline-container">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative timeline-item mb-12 pl-8 lg:pl-0",
              "lg:w-1/2",
              index % 2 === 0 ? "lg:ml-auto lg:pl-10" : "lg:pr-10"
            )}
          >
            <div
              className={cn(
                "lg:ml-0 lg:pl-0",
                index % 2 === 0 ? "lg:text-left" : "lg:text-right"
              )}
            >
              <p className="font-semibold text-accent text-lg">{item.date}</p>
            </div>
            <div
              className={cn(
                "relative lg:ml-0 mt-2 rounded-lg border bg-card p-6 shadow-sm timeline-content"
              )}
            >
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
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full"
                    >
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
  );
}
