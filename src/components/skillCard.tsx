import { Link } from "lucide-react"


export default function skillCard({authorEmail, category,createdAt,description,installCommand,tags,title}:SkillRecord) {
  return (
    <article className="relative flex flex-col h-full min-h-95 rounded-xl transion-all duration-300 border border-subtle">
      <Link to="/skills" 
        tabIndex={-1}
        aria-label={`open ${title}`}
        className="overlay"
        />
        <div className="chrome">
            <div className="chrome-bar">
                  <div className="lights">
                    <div className="light red"/>
                    <div className="light amber"/>
                    <div className="light green"/>
                  </div>
            </div>
        </div>
        <div className="text-slate-600 hover:text-blue-400 transion-colors">registry.sh</div>
         <div className="body">
            <div className="meta">
              <div
               className="author">
               <img src="/logo512.png" alt="author avatar" className="avatar" />
                <div className="author-copy">
                  <p>Adrian</p>
                  <p>{new Date(createdAt as string).toLocaleDateString()}</p>

                </div>

              </div>
              <p className="category">{category}</p>
            </div>
         </div>
      </article >
  )
}
