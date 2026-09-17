import { title } from "process";

export default function skillCard({authorEmail, category,createdAt,description,installCommand,tags,tittle}:SkillRecord) {
  return (
    <article className="relative flex flex-col h-full min-h-95 rounded-xl transion-all duration-300 border border-subtle">
      <Link to="/skills">
        tabIndex={-1}
        aria-label={`open ${title}`}
     
      </article >
  )
}
