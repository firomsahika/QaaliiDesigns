import Image from "next/image";
import { Button } from "@/components/ui/button";

export function TalentCard({ name, skills, bio, image }: any) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full object-cover mb-4"
      />
      <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{bio}</p>
      <div className="flex flex-wrap justify-center gap-1 mb-3">
        {skills.map((skill: string, idx: number) => (
          <span
            key={idx}
            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      <Button variant="outline" className="rounded-full text-sm px-4">
        View Profile
      </Button>
    </div>
  );
}
