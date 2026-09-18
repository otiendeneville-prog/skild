interface SkillRecord{
    id:string;
    description:string;
    slug:string;
    title:string;
    tags:string[];
    category:string;
   installCommand:string;
   createdAt:string|null;
   authorClerkId:string |null;
   authorEmail:string |null;
}