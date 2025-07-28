export const PersonalProjects = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-serif font-medium mb-8 text-foreground">
        Personal Projects
      </h2>
      
      <div className="prose prose-lg font-serif text-foreground leading-relaxed space-y-6">
        <p>
          Things I've built, created, or started outside of work:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">[Project Name]</h3>
            <p>
              [Description of what this project is, why you created it, and what you learned]
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">[Project Name]</h3>
            <p>
              [Description of what this project is, why you created it, and what you learned]
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">[Project Name]</h3>
            <p>
              [Description of what this project is, why you created it, and what you learned]
            </p>
          </div>
        </div>
        
        <p>
          Most of these started as curiosities or problems I wanted to solve for myself. 
          The best ones tend to be the ones that help other people too.
        </p>
      </div>
    </div>
  );
};