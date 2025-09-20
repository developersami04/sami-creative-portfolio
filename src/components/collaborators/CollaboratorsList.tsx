import Image from "next/image";
import { collaboratorsData, collaboratorsPageData } from "@/lib/data/collaborators/collaborators";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function CollaboratorsList() {
  return (
    <section id="collaborators" className="py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {collaboratorsPageData.team.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
          {collaboratorsPageData.team.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {collaboratorsData.map((collaborator) => (
            <div key={collaborator.id}>
              {collaborator.imageUrl && (
                <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-lg">
                  <Image
                    src={collaborator.imageUrl}
                    alt={collaborator.name}
                    data-ai-hint={collaborator.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-white">{collaborator.name}</h3>
              <p className="text-base leading-6 text-cyan-400">{collaborator.title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">{collaborator.summary}</p>
              <div className="mt-4 flex justify-center gap-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
