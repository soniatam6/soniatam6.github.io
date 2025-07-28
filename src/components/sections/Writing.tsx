export const Writing = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-serif font-medium mb-8 text-foreground">
        Writing
      </h2>
      
      <div className="prose prose-lg font-serif text-foreground leading-relaxed space-y-6">
        <p>
          Thoughts I've written down and shared:
        </p>
        
        <div className="space-y-4">
          <div>
            <a href="#" className="text-primary hover:underline">
              [Article Title]
            </a>
            <p className="text-muted-foreground text-base mt-1">
              [Brief description of what this piece is about]
            </p>
          </div>
          
          <div>
            <a href="#" className="text-primary hover:underline">
              [Article Title]
            </a>
            <p className="text-muted-foreground text-base mt-1">
              [Brief description of what this piece is about]
            </p>
          </div>
          
          <div>
            <a href="#" className="text-primary hover:underline">
              [Article Title]
            </a>
            <p className="text-muted-foreground text-base mt-1">
              [Brief description of what this piece is about]
            </p>
          </div>
        </div>
        
        <p>
          I write about [topics you write about] when something strikes me as worth 
          exploring more deeply. Sometimes it's professional, sometimes personal, 
          often somewhere in between.
        </p>
      </div>
    </div>
  );
};