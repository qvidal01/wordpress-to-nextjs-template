import { getPageBySlug } from '@/lib/content';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: 'Contact AIQSO | Get Your Free Consultation',
  description: 'Ready to automate what matters? Let\'s talk about your business needs.',
};

export default function ContactPage() {
  const page = getPageBySlug('contact');

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{page.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-a:text-blue-600">
            <ReactMarkdown
              components={{
                p: ({node, ...props}) => <p className="text-gray-800 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-gray-900 text-3xl font-bold mt-8 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-gray-900 text-2xl font-bold mt-6 mb-3" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-800" {...props} />,
              }}
            >
              {page.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </main>
  );
}
