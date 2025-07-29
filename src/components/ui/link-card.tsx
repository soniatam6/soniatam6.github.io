import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  url: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
};

export default function LinkCard({
  url,
  title,
  description,
  image,
  className,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "block flex flex-col gap-4 border border-stone-300 hover:border-primary transition-colors rounded-lg overflow-hidden",
        className
      )}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="w-full bject-cover"
          loading="lazy"
        />
      )}

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        )}
        <span className="text-xs text-primary underline underline-offset-4">
          {new URL(url).hostname}
        </span>
      </div>
    </a>
  );
}
