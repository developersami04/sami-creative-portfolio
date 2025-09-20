"use client";

import { useRef } from "react";
import { journeyData } from "@/lib/data/journey/journey";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Journey } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TimelineItem({
  item,
  isLeft,
}: {
  item: Journey;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const Icon = item.icon;

  return (
    <div ref={ref} className="relative flex justify-center">
      {/* Desktop: Alternating Content */}
      <div
        className={cn(
          "hidden w-[calc(50%-2.5rem)] md:flex",
          isLeft ? "justify-end" : "order-2 justify-start"
        )}
      >
        {!isLeft && (
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-sm"
            >
                <Card className="timeline-gradient-border bg-card/80 shadow-lg backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.company} &bull; {item.date}</p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">{item.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
        )}
      </div>

      {/* Timeline Indicator */}
      <div className="relative z-10 flex w-20 items-center justify-center">
        <div className="absolute h-full w-1 timeline-line"></div>
        <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent timeline-glow-dot"
        >
            <Icon className="h-6 w-6 text-accent-foreground" />
        </motion.div>
      </div>

      {/* Desktop (Left) & Mobile Content */}
      <div className={cn("w-full md:w-[calc(50%-2.5rem)]", isLeft ? "md:order-2" : "")}>
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-sm"
        >
            <Card className="timeline-gradient-border bg-card/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.company} &bull; {item.date}</p>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">{item.description}</p>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </div>
  );
}

export function JourneyTimeline() {
  return (
    <div className="relative space-y-16">
      {journeyData.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
}
