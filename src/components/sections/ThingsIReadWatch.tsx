export const ThingsIReadWatch = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-serif font-medium mb-8 text-foreground">
        Things I Read/Watch
      </h2>
      
      <div className="prose prose-lg font-serif text-foreground leading-relaxed space-y-6">
        <p>
          Media that has influenced my thinking recently:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Currently Reading</h3>
            <ul className="space-y-1 list-none">
              <li>• [Book title] by [Author]</li>
              <li>• [Book title] by [Author]</li>
              <li>• [Book title] by [Author]</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Recently Loved</h3>
            <ul className="space-y-1 list-none">
              <li>• [Book/Article/Show title] - [Brief note about why it resonated]</li>
              <li>• [Book/Article/Show title] - [Brief note about why it resonated]</li>
              <li>• [Book/Article/Show title] - [Brief note about why it resonated]</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Always Returning To</h3>
            <ul className="space-y-1 list-none">
              <li>• [Timeless book/show/newsletter]</li>
              <li>• [Timeless book/show/newsletter]</li>
              <li>• [Timeless book/show/newsletter]</li>
            </ul>
          </div>
        </div>
        
        <p>
          I'm always looking for recommendations, especially for things that 
          changed how you think about something important.
        </p>
      </div>
    </div>
  );
};