import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/about/styles/about.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';

function About() {
  const isMobile = useIsMobile();
  const rootRef = useRef();
  const animatedImageRef = useRef();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      gsap.set(animatedImageRef.current, { top: !isMobile ? '-20vw' : '0' });
      if (!isMobile) {
        gsap.to(animatedImageRef.current, {
          top: '20vw',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            scroller: document?.querySelector('main'),
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation();
    return () => ctx.kill();
  }, [isMobile]);

  const renderImageContainer = () => (
    <div className={styles.imageContainer}>
      <Image
        priority
        src="/rimon/front.webp"
        sizes="100%"
        fill
        alt="Rimon Dutta"
      />
    </div>
  );

  return (
    <section ref={rootRef} className={styles.root}>
      <div className={clsx(styles.nameContainer, 'layout-block-inner')}>
        <AppearTitle>
          <h1 className={clsx('h1', 'medium')}>Hey, My name&apos;s</h1>
          <h1 className={clsx('h1', 'medium')}>Rimon Dutta!</h1>
        </AppearTitle>
      </div>

      <div className={clsx(styles.container, 'layout-grid-inner')}>
        {isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapper)} ref={animatedImageRef}>
          <AppearTitle>
            <div className="p-l">
              “Skilled full-stack developer with expertise in MERN
            </div>
            <div className="p-l">mobile apps, SEO, and digital marketing.</div>
            <div className="p-l">
              I create efficient code and impactful, user-focused web
              solutions.”
            </div>
          </AppearTitle>
        </div>
        {!isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapperBottom)}>
          {!isMobile ? (
            <AppearTitle key="desktop-descWrapperBottom">
              <h6 className="h6">
                I am a dedicated full-stack developer specializing in the MERN
                stack,
              </h6>
              <h6 className="h6">
                mobile app development, SEO, and digital marketing. With a
                strong{' '}
              </h6>
              <h6 className="h6">
                focus on writing clean, efficient code, I strive to build
                user-friendly and
              </h6>
              <h6 className="h6">
                impactful web applications. I enjoy combining technical
                expertise with
              </h6>
              <h6 className="h6">
                creativity to deliver solutions that not only work seamlessly
                but also
              </h6>
              <h6 className="h6">
                technologies is my passion, helping me stay ahead in the
                fast-evolving tech world.
              </h6>
            </AppearTitle>
          ) : (
            <AppearTitle key="mobile-descWrapperBottom">
              <h6 className="h6">I’m a full-stack developer skilled in MERN</h6>
              <h6 className="h6">mobile apps, SEO, and digital marketing. </h6>
              <h6 className="h6">
                I focus on clean code and creating effective, user-friendly
              </h6>
              <h6 className="h6">web solutions.</h6>
            </AppearTitle>
          )}
          <div className={clsx(styles.buttonContainer)}>
            <ButtonLink href="/about" label="ABOUT ME" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
