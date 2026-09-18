import { Link } from "@tanstack/react-router"; 
import { Copy, Check, ArrowUpRight, ArrowBigUp, MessageSquare } from "lucide-react"; 
import { useState } from "react";
import { Sparkle,Bookmark } from 'lucide-react'

interface SkillRecord {
  authorEmail: string;
  category: string;
  createdAt: string | Date;
  description: string;
  installCommand: string;
  tags: string[];
  title: string;
}

export default function SkillCard({ authorEmail, category, createdAt, description, installCommand, tags, title }: SkillRecord) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <article className="relative flex flex-col h-full min-h-[23.75rem] rounded-xl transition-all duration-300 border border-subtle overflow-hidden">
      
      <Link 
        to="/skills" 
        tabIndex={-1}
        aria-label={`open ${title}`}
        className="absolute inset-0 z-0"
      />
      
      
      <div className="relative z-10 justify-between flex items-center h-10 px-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="lights flex space-x-2">
          <div className="light red w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="light amber w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="light green w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-slate-600 hover:text-blue-400 transition-colors text-xs font-mono tracking-wider">
          REGISTRY.SH
        </div>
      </div>

      
      <div className="relative z-10 flex flex-col justify-between flex-1 p-4">
        <div className="flex justify-between items-start">
          <div className="author flex items-center gap-3">
            <div className="author-copy text-sm">
              <Sparkle className="h-5 w-5 text-purple-400" />
              <p className="font-medium text-slate-800 dark:text-slate-200">Neuville</p>
              <p className="text-xs text-slate-400">{new Date(createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
            {category}
          </span>
        </div>

       
        <div className="my-4 flex-1">
          <h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">{description}</p>
        </div>

        <div className="flex items-center gap-2 mt-auto">
       
          <div className="flex items-center flex-1 font-mono text-xs bg-slate-900 text-slate-300 px-3 py-2 rounded-lg border border-slate-700 overflow-x-auto whitespace-nowrap">
            <span className="text-emerald-400 mr-2">{">_"}</span>
            <span className="select-all">{installCommand}</span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy install command"
            className="flex items-center justify-center p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {copied ? (
              <Check size={16} className="text-emerald-500" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
       <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3 mt-4">
  <div className="flex items-center gap-3">
   
    <button 
      type="button" 
      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md   text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      disabled
    >
      <ArrowBigUp size={16} fill="currentColor" />
      <span>{tags.length}</span>
    </button>

   
    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 px-1 py-1">
      <MessageSquare size={14} className="text-slate-400" />
      <span>{authorEmail ? 1 : 0}</span>
    </div>
  </div>
  <div className="flex itmes-center gap-1.5 px-2.5 py-1 text-slate-500">
    <Link to="/skills" className="open" title={`Open ${title}`}>
     <ArrowUpRight size={14} />
          <span>
            Open
          </span>
         
    </Link>
    <button type="button" className="save" arial-label='Save state'disabled>
      <Bookmark size={16}/>
    </button>
  </div>
</div>
      </div>
    </article>
  );
}
