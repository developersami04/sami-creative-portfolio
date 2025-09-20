import type { TimelineEvent } from '@/lib/types';
import { Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const iconMap = {
    work: Briefcase,
    education: GraduationCap,
};

export function TimelineItem({ item, isLeft }: { item: TimelineEvent; isLeft: boolean }) {
    const Icon = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Briefcase;
    
    const alignmentClasses = isLeft
    ? 'md:ml-auto md:pl-16'
    : 'md:mr-auto md:pr-16';

  const directionClasses = isLeft
    ? 'md:flex-row-reverse'
    : 'md:flex-row';


  return (
    <div className={cn("flex items-center w-full", directionClasses)}>
        {/* Content */}
        <div className={cn("w-full md:w-1/2", isLeft ? 'md:text-right' : 'md:text-left')}>
            <Card className="border-2 transition-all duration-300 hover:shadow-xl hover:border-accent">
                <CardHeader>
                    <div className={cn("flex items-center gap-4", isLeft ? 'md:flex-row-reverse' : 'md:flex-row')}>
                         <div className="flex-grow">
                             <p className="font-semibold text-accent">{item.date}</p>
                            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                         </div>
                    </div>
                    <CardDescription className={cn("flex items-center gap-2 text-muted-foreground", isLeft ? 'md:justify-end' : '')}>
                        <Icon className="h-4 w-4" />
                        <span>{item.company}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{item.description}</p>
                    {item.tags && item.tags.length > 0 && (
                        <div className={cn("mt-4 flex flex-wrap gap-2", isLeft ? 'md:justify-end' : '')}>
                            {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>

        {/* Timeline Connector and Dot */}
        <div className="absolute left-4 z-10 h-4 w-4 rounded-full bg-accent ring-8 ring-background md:left-1/2 md:-translate-x-1/2"></div>
        <div className="hidden h-0.5 w-full bg-border md:block md:w-1/2"></div>
    </div>
  );
}
