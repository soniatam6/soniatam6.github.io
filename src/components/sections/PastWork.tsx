export const PastWork = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-serif font-medium mb-8 text-foreground">
        Past Work
      </h2>
      
      <div className="prose prose-lg font-serif text-foreground leading-relaxed space-y-6">
        <p>
          Professional experiences and significant projects that have shaped my career:
        </p>
        
        <ul className="space-y-4 list-none">
          <li>• [Company/Role] - [Brief description of what you did and achieved]</li>
          <li>• [Company/Role] - [Brief description of what you did and achieved]</li>
          <li>• [Company/Role] - [Brief description of what you did and achieved]</li>
          <li>• [Company/Role] - [Brief description of what you did and achieved]</li>
        </ul>
        
        <p>
          Each role taught me something different about [relevant skills/industries], 
          and I'm grateful for the mentors and collaborators who made these experiences meaningful.
        </p>
      </div>
    </div>
  );
};