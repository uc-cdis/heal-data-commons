import React from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';
import CardGrid, { CardGridItem } from './CardGrid';
import MultiPartText, { MultiPartTextPart } from './MultiPartText';

export interface CardedPageConfig {
  readonly title: string;
  readonly introduction: ReadonlyArray<MultiPartTextPart>;
  readonly sections: ReadonlyArray<{
    title: string;
    cards: ReadonlyArray<CardGridItem>;
  }>;
}
[];

const CardedPageContent = ({
  title,
  introduction,
  sections,
}: CardedPageConfig) => {
  return (
    <div>
      <div
        data-testid="carded-page-content-backlink"
        className="py-10 text-sm px-10 "
      >
        <Link legacyBehavior href={'/'}>
          Home&nbsp;
        </Link>
        {' > '}
        <span className="text-heal-primary">&nbsp;{title}</span>
      </div>
      <div className="text-md pl-10 pb-4">
        <Text
          data-testid="carded-page-content-title"
          component="h1"
          className="not-prose font-bold text-4xl text-gen3-coal font-montserrat pb-8"
        >
          {title}
        </Text>
        <div className="pl-5">
          <MultiPartText parts={introduction} />
          {(sections || []).map(({ title, cards }, i) => {
            return (
              <div key={i} className="mt-10">
                <Text
                  data-testid="carded-page-content-header"
                  className="not-prose font-bold text-3xl text-gen3-coal font-montserrat pb-8"
                >
                  {title}
                </Text>
                <CardGrid content={cards} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardedPageContent;
