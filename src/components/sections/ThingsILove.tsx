export const ThingsILove = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-serif font-medium mb-8 text-foreground">
        Things I Love
      </h2>
      
      <div className="prose prose-lg font-serif text-foreground leading-relaxed space-y-6">
        <p>
          A non-exhaustive list of things that bring me joy:
        </p>
        
        <ul className="space-y-2 list-none">
          <li>• [Something you love and why]</li>
          <li>• [Something you love and why]</li>
          <li>• [Something you love and why]</li>
          <li>• [Something you love and why]</li>
          <li>• [Something you love and why]</li>
          <li>• [Something you love and why]</li>
          <li>• [Something you love and why]</li>
          <li>• [Something you love and why]</li>
        </ul>
        
        <p>
          These are the things that make ordinary days feel special. Some are small 
          daily rituals, others are grand experiences, but all of them remind me 
          what makes life worth living.
        </p>
      </div>
    </div>
  );
};