import React from 'react';
import { VaultLayout } from '../../components/VaultLayout';
import { Link } from 'react-router-dom';
export function VaultCourses() {
  const courses = [
  {
    id: 'market-structure',
    title: 'Market Structure (Basics)',
    subtitle: 'The starting point for Market Structure',
    image: "/pasted-image.jpg",

    progress: 100
  },
  {
    id: 'inception-model',
    title: 'The Inception Model',
    subtitle: 'The starting point for the Aspiring Trader',
    image: "/pasted-image-1.jpg",

    progress: 100
  },
  {
    id: 'frameworks-amplified',
    title: 'Frameworks Amplified',
    subtitle: 'Greater details into trading with framework',
    image: "/pasted-image-2.jpg",

    progress: 100
  }];

  return (
    <VaultLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) =>
        <Link
          key={course.id}
          to={`/vault/courses/${course.id}`}
          className="group bg-bg-card border border-border rounded-lg overflow-hidden hover:border-gold transition-all duration-300 flex flex-col h-full">

            {/* Cover Image */}
            <div className="aspect-video w-full overflow-hidden bg-bg-elevated relative">
              <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-serif font-bold text-text-primary mb-2 group-hover:text-gold transition-colors">
                {course.title}
              </h2>
              <p className="text-sm font-mono text-text-secondary mb-6 flex-grow">
                {course.subtitle}
              </p>

              {/* Progress Bar */}
              <div className="mt-auto">
                <div className="w-full bg-bg-elevated h-6 rounded-full overflow-hidden relative border border-border">
                  <div
                  className="bg-[#00A86B] h-full flex items-center justify-center text-[10px] font-bold text-white font-mono"
                  style={{
                    width: `${course.progress}%`
                  }}>

                    {course.progress}%
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </VaultLayout>);

}