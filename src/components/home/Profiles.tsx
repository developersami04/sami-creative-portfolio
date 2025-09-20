import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { profilesData } from "@/lib/data/profiles";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Profiles() {
  return (
    <section id="profiles" className="py-16 md:py-24 border-t">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Find Me Online
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Connect with me on these platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {profilesData.map((profile) => {
          const Icon = iconMap[profile.icon];
          return (
            <Link href={profile.url} key={profile.id} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="flex h-full flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-accent/20">
                <CardContent className="p-0 text-center">
                    <Icon className="h-16 w-16 text-accent transition-transform duration-300 group-hover:scale-110" />
                    <p className="mt-4 text-xl font-bold">{profile.name}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
