export const Home = () => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-serif font-medium mb-8 text-foreground">
        Your Name
      </h1>
      
      <div className="prose prose-lg font-serif text-foreground leading-relaxed space-y-6">
        <p className="text-xl leading-relaxed">
          I'm a [your role/profession], currently [what you're doing now]. 
          I care about [your interests/values] and spend my time [your activities].
        </p>
        
        <p>
          In the past, I've worked on [previous experiences]. I also enjoy 
          [hobbies/interests] and am always curious about [areas of interest].
        </p>
        
        <p>
          Want to chat? Drop me a note at{' '}
          <a 
            href="mailto:your.email@example.com" 
            className="text-primary hover:underline"
          >
            your.email@example.com
          </a>
        </p>
      </div>
    </div>
  );
};