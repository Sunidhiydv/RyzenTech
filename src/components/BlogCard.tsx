import { CalendarIcon, UserIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type BlogCardProps = {
  badgeText: string;
  badgeColor?: string; // Optional: Allows dynamic badge colors
  date: string;
  author: string;
  title: string;
  description: string;
  readMoreLink: string; // Link to navigate when clicking "Read More"
};

export const BlogCard = ({
  badgeText,
  badgeColor = "bg-blue-700 text-white",
  date,
  author,
  title,
  description,
  readMoreLink,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 bg-card bg-slate-900 p-6 rounded-lg shadow-md w-full max-w-5xl h-80 mx-auto my-auto mb-14">
      {/* Badge */}
      <div className="flex-shrink-0">
        <Badge variant="secondary" className={badgeColor}>
          {badgeText}
        </Badge>
      </div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Metadata */}
        <div className="flex items-center text-md text-muted-foreground gap-4 mb-2">
          <div className="flex items-center gap-1">
            <CalendarIcon size={22} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <UserIcon size={22} />
            <span>{author}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-primary">{title}</h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mt-2">{description}</p>

        {/* Read More */}
        <a
          href={readMoreLink}
          className="inline-flex items-center text-primary mt-4 text-sm font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};
