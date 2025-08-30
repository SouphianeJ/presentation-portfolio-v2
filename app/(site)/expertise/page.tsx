import skills from "@/data/skills.json";
import SkillCard from "@/components/ui/SkillCard";

export default function ExpertisePage() {
  return (
    <div className="container-narrow">
      <h1 className="title text-3xl mb-4">Expertise</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {skills.map((s) => (<SkillCard key={s.name} s={s} />))}
      </div>
    </div>
  );
}
