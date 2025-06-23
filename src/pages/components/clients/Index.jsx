import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Work Experiance</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2023</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Organic Food</h4>
            <span>SEO Specialist</span>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Improved website visibility through on-page, off-page,</div>
            <div className="p-l">and technical SEO. Led keyword strategy, optimized</div>
            <div className="p-l">site structure, and built high-quality backlinks. Delivered </div>
            <div className="p-l">measurable growth in search rankings and traffic. </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Organic Food</h4>
              <span>SEO Specialist</span>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Improved website visibility through on-page, off-page,</div>
              <div className="p-l">and technical SEO. Led keyword strategy, optimized</div>
              <div className="p-l">site structure, and built high-quality backlinks. Delivered </div>
              <div className="p-l">measurable growth in search rankings and traffic. </div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2023</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Isbx</h4>
            <span>SEO specialist</span>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Planned and executed SEO strategies to boost</div>
            <div className="p-l">organic traffic and rankings. Performed </div>
            <div className="p-l">keyword research, technical audits, and</div>
            <div className="p-l">content optimization. Used tools like Google Analytics</div>
            <div className="p-l">SEMrush, and Ahrefs to track and improve performance.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Isbx</h4>
              <span>SEO specialist</span>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Planned and executed SEO strategies to boost</div>
              <div className="p-l">organic traffic and rankings. Performed </div>
              <div className="p-l">keyword research, technical audits, and</div>
              <div className="p-l">content optimization. Used tools like Google Analytics,</div>
              <div className="p-l">SEMrush, and Ahrefs to track and improve performance.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>Present</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Quirktix</h4>
            <span>Founder, SEO Specialist And Full Stack Engineer</span>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Launched and lead a digital agency specializing</div>
            <div className="p-l">in AI development, SEO, and full-stack web solutions.</div>
            <div className="p-l">Oversaw end-to-end project delivery, from strategy</div>
            <div className="p-l">to deployment. Built intelligent web apps and automation </div>
            <div className="p-l">tools using React, Node.js, Python, and OpenAI and scaled</div>
            <div className="p-l">organic traffic and ROI through advanced SEO tactics </div>
            <div className="p-l">AI-driven content strategies.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">Present</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Quirktix</h4>
              <span>Founder, SEO Specialist And Full Stack Engineer</span>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Launched and lead a digital agency specializing</div>
              <div className="p-l">in AI development, SEO, and full-stack web solutions.</div>
              <div className="p-l">Oversaw end-to-end project delivery, from strategy</div>
              <div className="p-l">to deployment. Built intelligent web apps and automation</div>
              <div className="p-l">tools using React, Node.js, Python, and OpenAI, and scaled</div>
              <div className="p-l">organic traffic and ROI through advanced SEO tactics</div>
              <div className="p-l">AI-driven content strategies.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
