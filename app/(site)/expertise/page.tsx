import skills from "@/data/skills.json";
import SkillCard from "@/components/ui/SkillCard";

export default function ExpertisePage() {
  return (
    <div className="container-narrow">
      <h1 className="mb-4 text-2xl font-semibold">Expertise</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {skills.map((s) => (<SkillCard key={s.name} s={s} />))}
      </div>
    </div>
  );
}
