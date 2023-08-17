'use client';

import { useNav } from '@/context/NavContext';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import Hero from '@/components/Hero';
import Disclaimer from '@/components/Disclaimer';
import Ribbon from '@/components/Ribbon';
import Promo, { Half } from '@/components/Promo';
import { HeroTitle, HeroSubText, PromoTitle, PromoSubText, LinkText, PreText, MoreText } from '@/components/Texts';

export default function Mac() {
  const showNav = useNav();
  const theme = useTheme();

  return (
    <main className={cn(showNav && 'hidden lg:block', 'min-h-screen')}>
      <Hero src='/images/hero/hero_iphone14_yellow.jpeg' title='Some title here'>
        <HeroTitle text='iPhone 14' />
        <HeroSubText text='Wonderfull.' />
        <div>
          <LinkText text='Learn more' icon='out' />
          <LinkText text='Buy' />
        </div>
      </Hero>

      <Disclaimer>
        <p>
          1. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying
          Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to
          availability. While supplies last. View full terms and conditions of offer here.
        </p>
        <p>
          2. $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after
          eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
        </p>
        <p>
          Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission.
          This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is
          obtained.
        </p>
        <p>Apple Vision Pro will be available early next year on apple.com and at Apple retail stores in the U.S.</p>
        <p>
          To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with
          the latest version of iOS or iPadOS. Update to the latest version by going to Settings General Software
          Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
        <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
        <p>A subscription is required for Apple TV+.</p>
        <p>
          Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All
          rights reserved.
        </p>
      </Disclaimer>
    </main>
  );
}