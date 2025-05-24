import { Metadata, ResolvingMetadata } from 'next';
import { courseDetails } from "@/lib/data/courseData";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Generate static paths for all courses
  const slugs = Object.keys(courseDetails);
  
  return slugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const course = courseDetails[slug];

  if (!course) {
    return {
      title: 'Course Not Found | Eduveda Academy',
      description: 'The requested course could not be found.',
    };
  }

  return {
    title: `${course.title} | Eduveda Academy`,
    description: course.description,
    openGraph: {
      title: `${course.title} | Eduveda Academy`,
      description: course.description,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
  };
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}