import React from 'react';
import Section from '@/components/layout/Section';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

// Main props interface
export type MarkdownContentProps = {
  content: string;
  className?: string;
  background?: 'surface' | 'background' | 'primary' | 'secondary' | 'accent' | 'none';
  paddingY?: 'sm' | 'md' | 'lg' | 'none';
  containerWidth?: 'full' | 'container' | 'narrow' | 'medium';
  withContainer?: boolean;
};

// Default props
export const defaultMarkdownContentProps: MarkdownContentProps = {
  content: '',
  background: 'background',
  paddingY: 'lg',
  containerWidth: 'medium',
  withContainer: true,
};

const MarkdownContent = ({
  content = defaultMarkdownContentProps.content,
  className,
  background = defaultMarkdownContentProps.background,
  paddingY = defaultMarkdownContentProps.paddingY,
  containerWidth = defaultMarkdownContentProps.containerWidth,
  withContainer = defaultMarkdownContentProps.withContainer,
}: Partial<MarkdownContentProps>) => {
  const markdownContent = (
    <div className="prose prose-lg max-w-none text-white">
      <ReactMarkdown
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4 text-primary"
              {...props}
            />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          h3: ({ node, ...props }) => (
            <h3
              className="text-xl font-semibold mb-3 text-primary"
              {...props}
            />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          p: ({ node, ...props }) => (
            <p className="mb-4 text-neutral" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-white" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ul: ({ node, ...props }) => (
            <ul className="space-y-3 my-5" {...props} />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          li: ({ node, ...props }) => (
            <li className="flex items-start">
              <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <span className="text-neutral" {...props} />
            </li>
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-primary pl-4 italic bg-neutral-light p-4 rounded-r my-5"
              {...props}
            />
          ),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          a: ({ node, ...props }) => (
            <a className="text-accent hover:text-accent-2 transition-colors duration-300 font-medium" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );

  return (
    <Section
      background={background}
      paddingY={paddingY}
      containerWidth={containerWidth}
    >
      {withContainer ? (
        <div className={cn('bg-surface p-6 rounded-lg shadow-lg border border-neutral-dark', className)}>
          {markdownContent}
        </div>
      ) : (
        <div className={className}>{markdownContent}</div>
      )}
    </Section>
  );
};

// For backwards compatibility
export type RegionalProps = MarkdownContentProps;
export const defaultRegionalProps = {
  ...defaultMarkdownContentProps,
  content: `## Доставка запчастей Caterpillar в Москве и области

Мы обеспечиваем быструю доставку запчастей Caterpillar и KOMATSU по Москве и Московской области. При наличии запчастей на нашем складе, возможна доставка в день заказа или на следующий день.

**Для компаний из Москвы и области мы предлагаем дополнительные преимущества:**

- Бесплатная курьерская доставка при заказе от 50 000 рублей
- Возможность самовывоза со склада в Москве
- Выезд технического специалиста для консультации и диагностики (по договоренности)
- Возможность оперативной доставки срочных заказов

Наш офис находится в Москве, что позволяет нам оперативно решать все вопросы, связанные с поставками запчастей для клиентов из столичного региона.`,
};

export default MarkdownContent;
