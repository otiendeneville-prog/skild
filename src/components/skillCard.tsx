import { Link } from "@tanstack/react-router"; 

export default function skillCard({authorEmail, category,createdAt,description,installCommand,tags,title}:SkillRecord) {
  return (
    <article className="relative flex flex-col h-full min-h-95 rounded-xl transion-all duration-300 border border-subtle">
      <Link to="/skills" 
        tabIndex={-1}
        aria-label={`open ${title}`}
        className="overlay"
        />
         <div className="chrome-bar justify-between flex items-center h-10 px-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
    
    <div className="lights flex space-x-2">
      <div className="light red w-3 h-3 rounded-full bg-[#ff5f56]" />
      <div className="light amber w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <div className="light green w-3 h-3 rounded-full bg-[#27c93f]" />
    </div>
       
        <div className="text-slate-600 hover:text-blue-400 transion-colors">REGISTRY.SH</div>
         </div>
         <div className="justify-center align-baseline">
            <div className="ml-2 mt-1">
              <div
               className="author">
               <img src="/logo512.png" alt="Author Avatar" className="avatar" />
                <div className="author-copy">
                  <p>Adrian</p>
                  <p>{new Date(createdAt as string).toLocaleDateString()}</p>

                </div>

              </div>
              <p className="mb-10 text-1xl justify-end ml-270">{category}</p>
            </div>
            <div className="ml-2 text-1xl">
              <Link to="skills" className="title-link">
                  <h3 className="text-purple-300">{title}</h3>
              </Link>
               <p>{description}</p>
            </div>
            <div>
              <div>
                <button className="border border-slate-500 rounded-2xl justify-center align-center pl-10 pb-4 mr-2 ml-2 mt-20 mb-2">
                <span>{">_"}</span>
                <p className="mr-6">{installCommand}</p>
                </button>
                
              </div>
            </div>
         </div>
      </article >
  )
}
